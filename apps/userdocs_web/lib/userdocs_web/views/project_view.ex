defmodule UserdocsWeb.API.ProjectView do
  use UserdocsWeb, :view
  alias UserdocsWeb.API.ProjectView

  def render("index.json", %{projects: projects}) do
    %{data: render_many(projects, ProjectView, "project.json")}
  end

  def render("show.json", %{project: project}) do
    %{data: render_one(project, ProjectView, "project.json")}
  end

  def render("project.json", %{project: project}) do
    %{
      id: project.id,
      base_url: project.base_url,
      name: project.name,
      team_id: project.team_id,
      strategy_id: project.strategy_id
    }
  end
end
