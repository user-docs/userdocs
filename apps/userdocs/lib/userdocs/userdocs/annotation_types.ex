defmodule Userdocs.AnnotationTypes do
  @moduledoc """
  The Annotations context.
  """
  require Logger
  import Ecto.Query, warn: false
  alias Userdocs.Repo
  alias Schemas.Annotations.AnnotationType

  def list_annotation_types(_opts \\ %{}) do
    Repo.all(AnnotationType)
  end

  def get_annotation_type!(id) do
    Repo.get!(AnnotationType, id)
  end

  def create_annotation_type(attrs \\ %{}) do
    %AnnotationType{}
    |> AnnotationType.changeset(attrs)
    |> Repo.insert()
  end

  def create_annotation_type_struct(attrs \\ %{}) do
    %AnnotationType{}
    |> AnnotationType.api_changeset(attrs)
    |> Ecto.Changeset.apply_action(:insert)
  end

  def update_annotation_type(%AnnotationType{} = annotation_type, attrs) do
    annotation_type
    |> AnnotationType.changeset(attrs)
    |> Repo.update()
  end

  def delete_annotation_type(%AnnotationType{} = annotation_type) do
    Repo.delete(annotation_type)
  end

  def change_annotation_type(%AnnotationType{} = annotation_type, attrs \\ %{}) do
    AnnotationType.changeset(annotation_type, attrs)
  end
end
