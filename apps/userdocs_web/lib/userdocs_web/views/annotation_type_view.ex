defmodule UserdocsWeb.API.AnnotationTypeView do
  use UserdocsWeb, :view
  alias UserdocsWeb.API.AnnotationTypeView

  def render("index.json", %{annotation_types: annotation_types}) do
    %{data: render_many(annotation_types, AnnotationTypeView, "annotation_type.json")}
  end

  def render("show.json", %{annotation_type: annotation_type}) do
    %{data: render_one(annotation_type, AnnotationTypeView, "annotation_type.json")}
  end

  def render("annotation_type.json", %{annotation_type: annotation_type}) do
    %{
      id: annotation_type.id,
      name: annotation_type.name,
      args: annotation_type.args,
      max_elements: annotation_type.max_elements
    }
  end
end
