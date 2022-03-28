defmodule UserdocsWeb.API.StepView do
  use UserdocsWeb, :view
  alias UserdocsWeb.API.StepView

  def render("index.json", %{steps: steps}) do
    %{data: render_many(steps, StepView, "step.json")}
  end

  def render("show.json", %{step: step}) do
    %{data: render_one(step, StepView, "step.json")}
  end

  def render("step.json", %{step: step}) do
    %{
      id: step.id,
      order: step.order,
      name: step.name,
      text: step.text,
      width: step.width,
      height: step.height,
      margin_all: step.margin_all,
      margin_top: step.margin_top,
      margin_bottom: step.margin_bottom,
      margin_left: step.margin_left,
      margin_right: step.margin_right,
      process_id: step.process_id,
      page_id: step.page_id,
      element_id: step.element_id,
      annotation_id: step.annotation_id,
      step_type_id: step.step_type_id
    }
  end
end
