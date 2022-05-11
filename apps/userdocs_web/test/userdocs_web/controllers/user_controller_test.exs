defmodule UserdocsWeb.UserControllerTest do
  use UserdocsWeb.ConnCase

  alias Userdocs.UsersFixtures
  alias Userdocs.TeamsFixtures
  alias Userdocs.WebFixtures
  alias Userdocs.ProjectsFixtures
  @opts %{context: %{repo: Userdocs.Repo}}

  defp req_header(%{conn: conn}), do: %{conn: put_req_header(conn, "accept", "application/json")}
  defp create_password(_), do: %{password: UUID.uuid4()}
  defp create_user(%{password: password}), do: %{user: UsersFixtures.confirmed_user(password)}
  defp create_team(_), do: %{team: TeamsFixtures.team(@opts)}
  defp create_team_user(%{user: user, team: team}), do: %{team_user: TeamsFixtures.team_user(user.id, team.id, @opts)}
  defp create_strategy(_), do: %{strategy: WebFixtures.strategy(@opts)}
  defp create_project(%{team: team, strategy: strategy}), do: %{project: ProjectsFixtures.project(team.id, strategy.id, @opts)}

  describe "index" do
    test "lists all users", %{conn: conn} do
      conn = get(conn, Routes.api_user_path(conn, :index))
      assert json_response(conn, 200)["data"] == []
    end
  end

  describe "update user" do
    setup [
      :req_header,
      :create_password,
      :create_user,
      :create_team,
      :create_team_user,
      :create_strategy,
      :create_project
    ]
    """
    test "renders errors when data is invalid", %{conn: conn, user: user} do
      attrs = %{selected_team_id: nil, selected_project_id: nil}
      conn = put(conn, Routes.api_user_path(conn, :update, user), user: attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
    """
  end
end
