defmodule UserdocsWeb.API.StepTypesView do
  use UserdocsWeb, :view
  alias UserdocsWeb.API.StepTypesView

  def render("index.json", %{step_types: step_types}) do
    %{data: render_many(step_types, StepTypesView, "step_types.json")}
  end

  def render("show.json", %{step_types: step_types}) do
    %{data: render_one(step_types, StepTypesView, "step_types.json")}
  end

  def render("step_types.json", %{step_types: step_types}) do
    %{
      id: step_types.id,
      args: step_types.args,
      name: step_types.name
    }
  end
end
