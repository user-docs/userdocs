defmodule Userdocs.AnnotationTypes do
  @moduledoc """
  The Annotations context.
  """
  require Logger
  import Ecto.Query, warn: false
  alias Userdocs.RepoHandler
  alias Schemas.Annotations.AnnotationType

  def list_annotation_types(opts) do
    from(at in AnnotationType)
    |> RepoHandler.all(opts)
  end

  def get_annotation_type!(id, opts) do
    RepoHandler.get!(AnnotationType, id, opts)
  end

  def create_annotation_type(attrs \\ %{}, opts) do
    %AnnotationType{}
    |> AnnotationType.changeset(attrs)
    |> RepoHandler.insert(opts)
  end

  def create_annotation_type_structs(attrs_list) do
    Enum.map(attrs_list, fn(attrs) ->
      {:ok, annotation_type} = create_annotation_type_struct(attrs)
      annotation_type
    end)
  end

  def create_annotation_type_struct(attrs \\ %{}) do
    %AnnotationType{}
    |> AnnotationType.api_changeset(attrs)
    |> Ecto.Changeset.apply_action(:insert)
  end

  def update_annotation_type(%AnnotationType{} = annotation_type, attrs, opts) do
    annotation_type
    |> AnnotationType.changeset(attrs)
    |> RepoHandler.update(opts)
  end

  def delete_annotation_type(%AnnotationType{} = annotation_type, opts) do
    RepoHandler.delete(annotation_type, opts)
  end

  def change_annotation_type(%AnnotationType{} = annotation_type, attrs \\ %{}) do
    AnnotationType.changeset(annotation_type, attrs)
  end
end
