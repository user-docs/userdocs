defmodule Userdocs.AnnotationFixtures do
  @moduledoc false
  alias Userdocs.Annotations

  def annotation(attrs, opts) do
    {:ok, annotation} = annotation_attrs(attrs) |> Annotations.create_annotation(opts)
    annotation
  end

  def annotation_struct(attrs) do
    {:ok, annotation } = annotation_attrs(attrs) |> Annotations.create_annotation_struct()
    annotation
  end

  def badge_annotation_attrs(attrs) do
    %{
      page_id: Ecto.UUID.generate(),
      label: "1",
      color: "green",
      font_size: 16,
      x_offset:  0,
      x_orientation: "R",
      y_offset: 0,
      y_orientation: "M"
    }
    |> Map.merge(attrs)
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
end
