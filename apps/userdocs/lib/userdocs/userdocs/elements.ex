defmodule Userdocs.Elements do
  @moduledoc """
  The Elements context.
  """
  require Logger
  import Ecto.Query, warn: false
  alias Userdocs.RepoHandler
  alias Userdocs.Teams
  alias Schemas.Elements.Element

  def list_elements(opts) do
    filters = Map.get(opts, :filters, nil)
    base_elements_query()
    |> maybe_filter_element_by_page(filters[:page_id])
    |> maybe_filter_element_by_project(filters[:project_id])
    |> RepoHandler.all(opts)
  end

  defp base_elements_query(), do: from(elements in Element)

  defp maybe_filter_element_by_page(query, nil), do: query
  defp maybe_filter_element_by_page(query, page_id) do
    from(element in query,
      where: element.page_id == ^page_id
    )
  end

  defp maybe_filter_element_by_project(query, nil), do: query
  defp maybe_filter_element_by_project(query, project_id) do
    from(element in query,
      left_join: page in assoc(element, :page),
      where: page.project_id == ^project_id
    )
  end

  def get_element!(id, opts) do
    RepoHandler.get!(Element, id, opts)
  end

  def create_element(attrs \\ %{}, opts)
  def create_element(attrs, opts) do
    %Element{}
    |> Element.changeset(attrs)
    |> RepoHandler.insert(opts)
    |> case do
      {:ok, element} = result -> maybe_broadcast_element(result, "create", element_channel(element, opts), opts[:broadcast])
      result -> result
    end
  end

  def create_element_structs(attrs_list) do
    Enum.map(attrs_list, fn(attrs) ->
      {:ok, element} = create_element_struct(attrs)
      element
    end)
  end

  def create_element_struct(attrs \\ %{}) do
    %Element{}
    |> Element.api_changeset(attrs)
    |> Ecto.Changeset.apply_action(:insert)
  end

  @doc "Updates an Element"
  def update_element(%Element{} = element, attrs, opts) do
    element
    |> Element.changeset(attrs)
    |> RepoHandler.update(opts)
    |> maybe_broadcast_element("update", element_channel(element, opts), opts[:broadcast])
  end

  @doc "Deletes an element"
  def delete_element(%Element{} = element, opts) do
    channel = element_channel(element, opts)
    RepoHandler.delete(element, opts)
    |> maybe_broadcast_element("delete", channel, opts[:broadcast])
  end

  def change_element(%Element{} = element, attrs \\ %{}) do
    Element.changeset(element, attrs)
  end

  @doc "Broadcasts a element to the team it belongs to"
  def maybe_broadcast_element({:error, _} = state, _, _, _), do: state
  def maybe_broadcast_element({:ok, %Element{} = element}, action, channel, true) do
    Logger.debug("#{__MODULE__} broadcasting a Element struct")
    payload = %{type: "Schemas.Elements.Element", attrs: element}
    UserdocsWeb.Endpoint.broadcast(channel, action, payload)
    {:ok, element}
  end
  def maybe_broadcast_element(state, _, _, _), do: state

  alias Userdocs.Teams
  def element_channel(%Element{} = element, opts) do
    team = Teams.get_element_team!(element.id, opts)
    "team:#{team.id}"
  end
end
