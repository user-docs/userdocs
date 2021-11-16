defmodule Userdocs.ElementAnnotations do
  @moduledoc """
  The Elements context.
  """
  require Logger
  import Ecto.Query, warn: false
  alias Userdocs.RepoHandler
  alias Schemas.Elements.ElementAnnotation

  def list_element_annotations(params, opts) do
    filters = Map.get(params, :filters, [])
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

  def create_element_annotation_struct(attrs \\ %{}) do
    %ElementAnnotation{}
    |> ElementAnnotation.api_changeset(attrs)
    |> Ecto.Changeset.apply_action(:insert)
  end

  def change_element_annotation(%ElementAnnotation{} = element_annotation, attrs \\ %{}) do
    ElementAnnotation.changeset(element_annotation, attrs)
  end
end
