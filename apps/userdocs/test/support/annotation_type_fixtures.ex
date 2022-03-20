defmodule Userdocs.AnnotationTypeFixtures do
  @moduledoc false
  alias Userdocs.AnnotationTypes

  def annotation_type(attrs, opts) do
    {:ok, annotation} = annotation_type_attrs(attrs) |> AnnotationTypes.create_annotation_type(opts)
    annotation
  end

  def annotation_type_struct(attrs) do
    {:ok, annotation } = annotation_type_attrs(attrs) |> AnnotationTypes.create_annotation_type_struct()
    annotation
  end

  def all_valid_annotation_types(opts) do
    Userdocs.WebFixtures.AnnotationTypes.data()
    |> Enum.map(
      fn(st) ->
        {:ok, annotation_type } = AnnotationTypes.create_annotation_type(st, opts)
        annotation_type
      end
    )
  end

  def all_valid_annotation_type_structs() do
    Userdocs.WebFixtures.AnnotationTypes.data()
    |> Enum.map(
      fn(st) ->
        {:ok, annotation_type } = AnnotationTypes.create_annotation_type_struct(st)
        annotation_type
      end
    )
  end

  def annotation_type_attrs(attrs) do
    %{
      id: "outline",
      args: ["color", "thickness"],
      name: "Outline"
    }
    |> Map.merge(attrs)
  end
end
