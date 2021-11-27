defmodule UserdocsWeb.API.ElementAnnotationView do
  use UserdocsWeb, :view
  alias UserdocsWeb.API.ElementAnnotationView

  def render("index.json", %{element_annotations: element_annotations}) do
    %{data: render_many(element_annotations, ElementAnnotationView, "element_annotation.json")}
  end

  def render("show.json", %{element_annotation: element_annotation}) do
    %{data: render_one(element_annotation, ElementAnnotationView, "element_annotation.json")}
  end

  def render("element_annotation.json", %{element_annotation: element_annotation}) do
    %{
      id: element_annotation.id,
      element_id: element_annotation.element_id,
      annotation_id: element_annotation.annotation_id
    }
  end
end
