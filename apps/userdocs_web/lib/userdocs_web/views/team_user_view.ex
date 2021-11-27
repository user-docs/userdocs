defmodule UserdocsWeb.API.TeamUserView do
  use UserdocsWeb, :view
  alias UserdocsWeb.API.TeamUserView

  def render("index.json", %{team_users: team_users}) do
    %{data: render_many(team_users, TeamUserView, "team_user.json")}
  end

  def render("show.json", %{team_user: team_user}) do
    %{data: render_one(team_user, TeamUserView, "team_user.json")}
  end

  def render("team_user.json", %{team_user: team_user}) do
    %{
      id: team_user.id,
      team_id: team_user.team_id,
      user_id: team_user.user_id,
      role: team_user.role
    }
  end
end
