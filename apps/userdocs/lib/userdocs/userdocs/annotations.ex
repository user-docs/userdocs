defmodule Userdocs.Annotations do
  @moduledoc "The Annotations context."
  require Logger
  import Ecto.Query, warn: false
  alias Userdocs.RepoHandler
  alias Schemas.Pages.Page
  alias Schemas.Annotations.Annotation
  alias Schemas.Elements.ElementAnnotation
  alias Userdocs.Teams
  alias Userdocs.Requests
  @url Application.compile_env(:userdocs_desktop, :host_url) <> "/api/annotations"

  def list_annotations(opts)  do
    filters = Map.get(opts, :filters, [])
    _preloads = Map.get(opts, :preloads, [])
    base_annotation_query()
    |> maybe_filter_annotation_by_page(filters[:page_id])
    |> maybe_filter_annotation_by_team_id(filters[:team_id])
    |> maybe_filter_annotation_by_project(filters[:project_id])
    |> order_by(:name)
    |> RepoHandler.all(opts)
  end

  def base_annotation_query(), do: from(annotations in Annotation)

  defp maybe_filter_annotation_by_page(query, nil), do: query
  defp maybe_filter_annotation_by_page(query, page_id) do
    from(annotation in query,
      where: annotation.page_id == ^page_id
    )
  end

  defp maybe_filter_annotation_by_team_id(query, nil), do: query
  defp maybe_filter_annotation_by_team_id(query, team_id) do
    from(annotation in query,
      left_join: page in Page, on: page.id == annotation.page_id,
      left_join: project in Userdocs.Projects.Project, on: page.project_id == project.id,
      left_join: team in Userdocs.Users.Team, on: project.team_id == team.id,
      where: team.id == ^team_id)
  end

  defp maybe_filter_annotation_by_project(query, nil), do: query
  defp maybe_filter_annotation_by_project(query, project_id) do
    from(annotation in query,
      left_join: page in Page, on: page.id == annotation.page_id,
      where: page.project_id == ^project_id)
  end

  def get_annotation!(id, opts) do
    preloads = Map.get(opts, :preloads, [])
    from(annotation in Annotation, where: annotation.id == ^id)
    |> maybe_preload_element_annotations(preloads[:element_annotations])
    |> RepoHandler.get!(id, opts)
  end

  defp maybe_preload_element_annotations(query, nil), do: query
  defp maybe_preload_element_annotations(query, _),
    do: from(annotations in query, preload: [:element_annotations])

  def create_annotation(attrs \\ %{}, opts)
  def create_annotation(attrs, opts) do
    changeset = Annotation.changeset(%Annotation{}, attrs)
    case RepoHandler.insert(changeset, opts) do
      {:ok, annotation} ->
        opts_with_preloads = Map.put(opts, :preloads, [element_annotations: true])
        preloaded_annotation = get_annotation!(annotation.id, opts_with_preloads)
        channel = annotation_channel(preloaded_annotation, opts[:broadcast])
        maybe_broadcast_children(preloaded_annotation, changeset, channel, opts[:broadcast])
        maybe_broadcast_annotation({:ok, annotation}, "create", channel, opts[:broadcast])
      {:error, %Ecto.Changeset{}} = result -> result
    end
  end

  def create_annotation_structs(attrs_list) do
    Enum.map(attrs_list, fn(attrs) ->
      {:ok, annotation} = create_annotation_struct(attrs)
      annotation
    end)
  end

  def create_annotation_struct(attrs \\ %{}) do
    %Annotation{}
    |> Annotation.api_changeset(attrs)
    |> Ecto.Changeset.apply_action(:insert)
  end

  def update_annotation(%Annotation{} = annotation, attrs, opts) do
    changeset = Annotation.changeset(annotation, attrs)
    case RepoHandler.update(changeset, opts) do
      {:ok, annotation} ->
        channel = annotation_channel(annotation, opts[:broadcast])
        maybe_broadcast_children(annotation, changeset, channel, opts[:broadcast])
        maybe_broadcast_annotation({:ok, annotation}, "update", channel, opts[:broadcast])
      {:error, %Ecto.Changeset{}} = result -> result
    end
  end

  def delete_annotation(%Annotation{} = annotation, opts) do
    channel = annotation_channel(annotation, opts[:broadcast])
    {:ok, annotation} = RepoHandler.delete(annotation, opts)
    maybe_broadcast_annotation({:ok, annotation}, "delete", channel, opts[:broadcast])
  end

  def change_annotation(%Annotation{} = annotation, attrs \\ %{}) do
    Annotation.changeset(annotation, attrs)
  end

  @doc "Broadcasts a annotation to the team it belongs to"
  def maybe_broadcast_annotation({:error, _} = state, _, _, _), do: state
  def maybe_broadcast_annotation({:ok, %Annotation{} = annotation}, action, channel, true) do
    Logger.debug("#{__MODULE__} broadcasting a Annotation struct")
    payload = %{type: "Schemas.Annotations.Annotation", attrs: annotation}
    UserdocsWeb.Endpoint.broadcast(channel, action, payload)
    {:ok, annotation}
  end
  def maybe_broadcast_annotation(state, _, _, _), do: state

  def maybe_broadcast_children(
    %Annotation{element_annotations: [%ElementAnnotation{} | _] = ea_data},
    %{changes: %{element_annotations: [%Ecto.Changeset{} | _] = ea_changes}},
    channel, true = broadcast?
  ) do
    Enum.each(ea_changes, fn(changeset) ->
      element_annotation = fetch_element_annotation(changeset, ea_data)
      action = case changeset.action do
        :insert -> "create"
        :update -> "update"
        :delete -> "delete"
        :replace -> "delete"
      end
      if broadcast? == true do
        Logger.debug("#{__MODULE__} broadcasting an Element Annotation struct")
        payload = %{type: "Schemas.Elements.ElementAnnotation", attrs: element_annotation}
        UserdocsWeb.Endpoint.broadcast(channel, action, payload)
      end
    end)
  end
  def maybe_broadcast_children(
    %Annotation{element_annotations: []},
    %{changes: %{element_annotations: []}},
    _channel, true
  ), do: ""
  def maybe_broadcast_children(%Annotation{element_annotations: []}, _, _, true), do: ""
  def maybe_broadcast_children(_, %{changes: %{element_annotations: []}}, _, true), do: ""
  def maybe_broadcast_children(_, _, _, nil), do: ""
  def maybe_broadcast_children(_, _, _, false), do: ""

  def fetch_element_annotation(%{action: action} = changeset, data) when action in [:insert, :update] do
    Enum.find(data, fn(ea) -> ea.id == Ecto.Changeset.get_field(changeset, :id) end)
  end
  def fetch_element_annotation(%{action: action} = changeset, _data) when action in [:delete, :replace] do
    changeset.data
  end

  def annotation_channel(%Annotation{} = annotation, true) do
    team = Teams.get_annotation_team(annotation.id)
    "team:#{team.id}"
  end
  def annotation_channel(_, _), do: ""
end
