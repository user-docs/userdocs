defmodule UserdocsWeb.ProcessControllerTest do
  use UserdocsWeb.ConnCase

  alias Userdocs.AutomationFixtures
  alias Userdocs.ProjectsFixtures
  alias Userdocs.UsersFixtures
  alias Userdocs.TeamsFixtures
  alias Userdocs.WebFixtures
  alias Schemas.Processes.Process
  @opts %{context: %{repo: Userdocs.Repo}}

  defp req_header(%{conn: conn}), do: %{conn: put_req_header(conn, "accept", "application/json")}
  defp create_password(_), do: %{password: UUID.uuid4()}
  defp create_user(%{password: password}), do: %{user: UsersFixtures.confirmed_user(password)}
  defp create_team(_), do: %{team: TeamsFixtures.team(@opts)}
  defp create_team_user(%{user: user, team: team}), do: %{team_user: TeamsFixtures.team_user(user.id, team.id, @opts)}
  defp create_strategy(_), do: %{strategy: WebFixtures.strategy(@opts)}
  defp create_project(%{team: team, strategy: strategy}), do: %{project: ProjectsFixtures.project(team.id, strategy.id, @opts)}
  defp create_process(%{project: project}), do: %{process: AutomationFixtures.process(project.id, @opts)}

  setup [
    :req_header,
    :create_password,
    :create_user,
    :create_team,
    :create_team_user,
    :create_strategy,
    :create_project
  ]

  describe "index" do
    test "lists all processes", %{conn: conn} do
      conn = get(conn, Routes.api_process_path(conn, :index))
      assert json_response(conn, 200)["data"] == []
    end
  end

  describe "create process" do
    test "renders process when data is valid", %{conn: conn, project: project} do
      attrs = AutomationFixtures.process_attrs(:valid, project.id)
      conn = post(conn, Routes.api_process_path(conn, :create), process: attrs)
      assert %{"id" => id} = json_response(conn, 201)["data"]

      conn = get(conn, Routes.api_process_path(conn, :show, id))

      result = json_response(conn, 200)["data"]
      assert result["id"] == id
      assert result["name"] == attrs.name
    end

    test "renders errors when data is invalid", %{conn: conn, project: project} do
      attrs = AutomationFixtures.process_attrs(:invalid, project.id)
      conn = post(conn, Routes.api_process_path(conn, :create), process: attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "update process" do
    setup [
      :req_header,
      :create_password,
      :create_user,
      :create_team,
      :create_team_user,
      :create_strategy,
      :create_project,
      :create_process
    ]

    test "renders process when data is valid", %{conn: conn, process: %Process{id: id} = process, project: project} do
      attrs = AutomationFixtures.process_attrs(:valid, project.id)
      conn = put(conn, Routes.api_process_path(conn, :update, process), process: attrs)
      assert %{"id" => ^id} = json_response(conn, 200)["data"]

      conn = get(conn, Routes.api_process_path(conn, :show, id))

      result = json_response(conn, 200)["data"]
      assert result["id"] == id
      assert result["name"] == attrs.name
    end

    test "renders errors when data is invalid", %{conn: conn, process: process, project: project} do
      attrs = AutomationFixtures.process_attrs(:invalid, project.id)
      conn = put(conn, Routes.api_process_path(conn, :update, process), process: attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "delete process" do
    setup [
      :req_header,
      :create_password,
      :create_user,
      :create_team,
      :create_team_user,
      :create_strategy,
      :create_project,
      :create_process
    ]

    test "deletes chosen process", %{conn: conn, process: process} do
      conn = delete(conn, Routes.api_process_path(conn, :delete, process))
      assert response(conn, 204)

      assert_error_sent 404, fn ->
        get(conn, Routes.api_process_path(conn, :show, process))
      end
    end
  end
end
