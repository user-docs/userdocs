defmodule UserdocsWeb.API.UserView do
  use UserdocsWeb, :view
  alias UserdocsWeb.API.UserView

  def render("index.json", %{users: users}) do
    %{data: render_many(users, UserView, "user.json")}
  end

  def render("show.json", %{user: user}) do
    %{data: render_one(user, UserView, "user.json")}
  end

  def render("user.json", %{user: user}) do
    %{
      id: user.id,
      email: user.email,
      selected_team_id: user.selected_team_id,
      selected_project_id: user.selected_project_id
    }
  end
end
