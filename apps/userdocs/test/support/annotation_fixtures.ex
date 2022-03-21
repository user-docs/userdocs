defmodule Userdocs.AnnotationFixtures do
  @moduledoc false
  alias Userdocs.Annotations
  alias Schemas.Annotations.Annotation
  alias Schemas.Elements.ElementAnnotation
  alias Schemas.Elements.Element

  def annotation(attrs, opts) do
    {:ok, annotation} = annotation_attrs(attrs) |> Annotations.create_annotation(opts)
    annotation
  end

  def annotation_struct(attrs) do
    {:ok, annotation } = annotation_attrs(attrs) |> Annotations.create_annotation_struct()
    annotation
  end

  def annotation_attrs(attrs) do
    %{
      page_id: Ecto.UUID.generate(),
      label: UUID.uuid4(),
      name: UUID.uuid4(),
      color: "some color",
      font_color: "some font_color",
      font_size: 42,
      size: 42,
      thickness:  42,
      x_offset:  42,
      x_orientation: "some x_orientation",
      y_offset: 42,
      y_orientation: "some y_orientation"
    }
    |> Map.merge(attrs)
  end

  def badge_annotation_struct(attrs \\ %{}) do
    %Annotation{
      id: UUID.uuid4(),
      annotation_type_id: "badge",
      label: "1",
      element_annotations: [
        %ElementAnnotation{element: %Element{strategy_id: "css", selector: "h1"}}
      ]
    }
    |> Map.merge(attrs)
  end

  def outline_annotation_struct(attrs \\ %{}) do
    %Annotation{
      id: UUID.uuid4(),
      annotation_type_id: "outline",
      thickness: "4",
      color: "green",
      element_annotations: [
        %ElementAnnotation{element: %Element{strategy_id: "css", selector: "//html"}},
        %ElementAnnotation{element: %Element{strategy_id: "css", selector: "//body"}}
      ]
    }
    |> Map.merge(attrs)
  end

  def badge_outline_struct(attrs \\ %{}) do
    %Annotation{
      id: UUID.uuid4(),
      annotation_type_id: "badge_outline",
      thickness: "4",
      label: "4",
      color: "green",
      element_annotations: [
        %ElementAnnotation{element: %Element{strategy_id: "css", selector: "//html"}},
        %ElementAnnotation{element: %Element{strategy_id: "css", selector: "//body"}}
      ]
    }
    |> Map.merge(attrs)
  end

  def blur_annotation_struct(attrs \\ %{}) do
    %Annotation{
      id: UUID.uuid4(),
      annotation_type_id: "blur",
      element_annotations: [
        %ElementAnnotation{element: %Element{strategy_id: "css", selector: "//html"}}
      ]
    }
    |> Map.merge(attrs)
  end
end
