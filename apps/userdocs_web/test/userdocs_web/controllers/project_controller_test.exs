defmodule UserdocsWeb.ProjectControllerTest do
  use UserdocsWeb.ConnCase
  alias Schemas.Projects.Project
  alias Userdocs.ProjectsFixtures
  alias Userdocs.UsersFixtures
  alias Userdocs.TeamsFixtures
  alias Userdocs.WebFixtures
  @opts %{context: %{repo: Userdocs.Repo}}

  defp req_header(%{conn: conn}), do: %{conn: put_req_header(conn, "accept", "application/json")}
  defp create_password(_), do: %{password: UUID.uuid4()}
  defp create_user(%{password: password}), do: %{user: UsersFixtures.confirmed_user(password)}
  defp create_team(_), do: %{team: TeamsFixtures.team(@opts)}
  defp create_team_user(%{user: user, team: team}), do: %{team_user: TeamsFixtures.team_user(user.id, team.id, @opts)}
  defp create_strategy(_), do: %{strategy: WebFixtures.strategy(@opts)}
  defp create_project(%{team: team, strategy: strategy}), do: %{project: ProjectsFixtures.project(team.id, strategy.id, @opts)}

  setup [
    :req_header,
    :create_password,
    :create_user,
    :create_team,
    :create_team_user,
    :create_strategy
  ]

  describe "index" do
    test "lists all projects", %{conn: conn} do
      conn = get(conn, Routes.api_project_path(conn, :index))
      assert json_response(conn, 200)["data"] == []
    end
  end

  describe "create project" do
    test "renders project when data is valid", %{conn: conn, team: team, strategy: strategy} do
      attrs = ProjectsFixtures.project_attrs(:valid, team.id, strategy.id)
      conn = post(conn, Routes.api_project_path(conn, :create), project: attrs)
      assert %{"id" => id} = json_response(conn, 201)["data"]

      conn = get(conn, Routes.api_project_path(conn, :show, id))

      result = json_response(conn, 200)["data"]
      assert result["id"] == id
      assert result["name"] == attrs.name
      assert result["team_id"] == attrs.team_id
      assert result["strategy_id"] == attrs.strategy_id
    end

    test "renders errors when data is invalid", %{conn: conn, team: team} do
      attrs = ProjectsFixtures.project_attrs(:valid, team.id)
      conn = post(conn, Routes.api_project_path(conn, :create), project: attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "update project" do
    setup [
      :req_header,
      :create_password,
      :create_user,
      :create_team,
      :create_team_user,
      :create_strategy,
      :create_project
    ]

    test "renders project when data is valid", %{conn: conn, team: team, strategy: strategy, project: %Project{id: id} = project} do
      attrs = ProjectsFixtures.project_attrs(:valid, team.id, strategy.id)
      conn = put(conn, Routes.api_project_path(conn, :update, project), project: attrs)
      assert %{"id" => ^id} = json_response(conn, 200)["data"]

      conn = get(conn, Routes.api_project_path(conn, :show, id))

      result = json_response(conn, 200)["data"]
      assert result["id"] == id
      assert result["name"] == attrs.name
      assert result["team_id"] == attrs.team_id
      assert result["strategy_id"] == attrs.strategy_id
    end

    test "renders errors when data is invalid", %{conn: conn, team: team, strategy: strategy, project: project} do
      attrs = ProjectsFixtures.project_attrs(:invalid, team.id, strategy.id)
      conn = put(conn, Routes.api_project_path(conn, :update, project), project: attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "delete project" do
    setup [:create_project]

    test "deletes chosen project", %{conn: conn, project: project} do
      conn = delete(conn, Routes.api_project_path(conn, :delete, project))
      assert response(conn, 204)

      assert_error_sent 404, fn ->
        get(conn, Routes.api_project_path(conn, :show, project))
      end
    end
  end
end
