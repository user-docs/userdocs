defmodule Userdocs.ElementAnnotations do
  @moduledoc """
  The Elements context.
  """
  require Logger
  import Ecto.Query, warn: false
  alias Userdocs.RepoHandler
  alias Userdocs.Requests
  alias Schemas.Elements.ElementAnnotation
  @url Application.get_env(:userdocs_desktop, :host_url) <> "/api/element_annotations"


  def list_element_annotations(%{access_token: access_token, context: %{repo: Client}} = opts) do
    params = opts |> Map.take([:filters])
    request_fun = Requests.build_get(@url)
    {:ok, %{"data" => element_annotation_attrs}} = Requests.send(request_fun, access_token, params)
    create_element_annotation_structs(element_annotation_attrs)
  end
  def list_element_annotations(opts) do
    filters = Map.get(opts, :filters, [])
    base_element_annotations_query()
    |> maybe_filter_element_annotation_by_project_id(filters[:project_id])
    |> RepoHandler.all(opts)
  end

  defp maybe_filter_element_annotation_by_project_id(query, nil), do: query
  defp maybe_filter_element_annotation_by_project_id(query, project_id) do
    from(element_annotation in query,
      left_join: element in assoc(element_annotation, :element),
      left_join: page in assoc(element, :page),
      left_join: project in assoc(page, :project),
      where: project.id == ^project_id
    )
  end

  defp base_element_annotations_query(), do: from(element_annotations in ElementAnnotation)

  def create_element_annotation_structs(attrs_list) do
    Enum.map(attrs_list, fn(attrs) ->
      {:ok, element_annotation} = create_element_annotation_struct(attrs)
      element_annotation
    end)
  end

  def create_element_annotation_struct(attrs \\ %{}) do
    %ElementAnnotation{}
    |> ElementAnnotation.api_changeset(attrs)
    |> Ecto.Changeset.apply_action(:insert)
  end

  def change_element_annotation(%ElementAnnotation{} = element_annotation, attrs \\ %{}) do
    ElementAnnotation.changeset(element_annotation, attrs)
  end
end
