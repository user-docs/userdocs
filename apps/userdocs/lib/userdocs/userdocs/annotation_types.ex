defmodule Userdocs.AnnotationTypes do
  @moduledoc """
  The Annotations context.
  """
  require Logger
  import Ecto.Query, warn: false
  alias Userdocs.RepoHandler
  alias Schemas.Annotations.AnnotationType
  @url "http://localhost:4000/api/annotation_types"

  def list_annotation_types(%{access_token: access_token, context: %{repo: Client}}) do
    {:ok, %{body: body}} = HTTPoison.get(@url, [{"authorization", access_token}])
    {:ok, %{"data" => annotation_types_attrs}} = Jason.decode(body)
    Enum.map(annotation_types_attrs, fn(attrs) ->
      {:ok, annotation_type} = create_annotation_type_struct(attrs)
      annotation_type
    end)
  end
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
