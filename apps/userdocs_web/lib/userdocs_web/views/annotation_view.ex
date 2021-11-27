defmodule UserdocsWeb.API.AnnotationView do
  use UserdocsWeb, :view
  alias UserdocsWeb.API.AnnotationView

  def render("index.json", %{annotations: annotations}) do
    %{data: render_many(annotations, AnnotationView, "annotation.json")}
  end

  def render("show.json", %{annotation: annotation}) do
    %{data: render_one(annotation, AnnotationView, "annotation.json")}
  end

  def render("annotation.json", %{annotation: annotation}) do
    %{
      id: annotation.id,
      thickness: annotation.thickness,
      x_offset: annotation.x_offset,
      y_offset: annotation.y_offset,
      font_size: annotation.font_size,
      font_color: annotation.font_color,
      name: annotation.name,
      label: annotation.label,
      x_orientation: annotation.x_orientation,
      y_orientation: annotation.y_orientation,
      size: annotation.size,
      color: annotation.color,
      page_id: annotation.page_id,
      annotation_type_id: annotation.annotation_type_id
    }
  end
end
