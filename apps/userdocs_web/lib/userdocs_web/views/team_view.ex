defmodule UserdocsWeb.API.TeamView do
  use UserdocsWeb, :view
  alias UserdocsWeb.API.TeamView

  def render("index.json", %{teams: teams}) do
    %{data: render_many(teams, TeamView, "team.json")}
  end

  def render("show.json", %{team: team}) do
    %{data: render_one(team, TeamView, "team.json")}
  end

  def render("team.json", %{team: team}) do
    %{
      id: team.id,
      name: team.name,
      css: team.css,
      aws_region: team.aws_region,
      aws_bucket: team.aws_bucket
    }
  end
end
