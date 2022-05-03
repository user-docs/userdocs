defmodule UserdocsWeb.IntegrationControllerTest do
  use UserdocsWeb.ConnCase

  alias Userdocs.Integrations
  alias Schemas.Integrations.Integration
  alias Userdocs.ProjectsFixtures
  alias Userdocs.UsersFixtures
  alias Userdocs.TeamsFixtures
  alias Userdocs.WebFixtures
  alias Userdocs.IntegrationFixtures
  @opts %{context: %{repo: Userdocs.Repo}}

  defp req_header(%{conn: conn}), do: %{conn: put_req_header(conn, "accept", "application/json")}
  defp create_password(_), do: %{password: UUID.uuid4()}
  defp create_user(%{password: password}), do: %{user: UsersFixtures.confirmed_user(password)}
  defp create_team(_), do: %{team: TeamsFixtures.team(@opts)}
  defp create_team_user(%{user: user, team: team}), do: %{team_user: TeamsFixtures.team_user(user.id, team.id, @opts)}
  defp create_project(%{team: team, strategy: strategy}), do: %{project: ProjectsFixtures.project(team.id, strategy.id, @opts)}
  defp create_integration(%{project: project}), do: %{integration: IntegrationFixtures.integration(%{project_id: project.id}, @opts)}
  defp create_strategy(_), do: %{strategy: WebFixtures.strategy(@opts)}

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
    test "lists all integrations", %{conn: conn} do
      conn = get(conn, Routes.api_integration_path(conn, :index))
      assert json_response(conn, 200)["data"] == []
    end
  end

  describe "create integration" do
    test "renders integration when data is valid", %{conn: conn, project: project} do
      create_attrs = IntegrationFixtures.integration_attrs(%{project_id: project.id})
      conn = post(conn, Routes.api_integration_path(conn, :create), integration: create_attrs)
      assert %{"id" => id} = json_response(conn, 201)["data"]

      conn = get(conn, Routes.api_integration_path(conn, :show, id))

      response = json_response(conn, 200)["data"]
      assert response["id"] == id
      assert response["name"] == create_attrs.name
      assert response["type"] == to_string(create_attrs.type)
    end

    test "renders errors when data is invalid", %{conn: conn, project: project} do
      invalid_attrs = IntegrationFixtures.integration_attrs(%{project_id: nil})
      conn = post(conn, Routes.api_integration_path(conn, :create), integration: invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "update integration" do
    setup [:create_integration]

    test "renders integration when data is valid", %{conn: conn, integration: %Integration{id: id} = integration, project: project} do
      update_attrs = IntegrationFixtures.integration_attrs(%{project_id: project.id})
      conn = put(conn, Routes.api_integration_path(conn, :update, integration), integration: update_attrs)
      assert %{"id" => ^id} = json_response(conn, 200)["data"]

      conn = get(conn, Routes.api_integration_path(conn, :show, id))

      response = json_response(conn, 200)["data"]
      assert response["id"] == id
      assert response["name"] == update_attrs.name
      assert response["type"] == to_string(update_attrs.type)
    end

    test "renders errors when data is invalid", %{conn: conn, integration: integration} do
      invalid_attrs = IntegrationFixtures.integration_attrs(%{project_id: nil})
      conn = put(conn, Routes.api_integration_path(conn, :update, integration), integration: invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "delete integration" do
    setup [:create_integration]

    test "deletes chosen integration", %{conn: conn, integration: integration} do
      conn = delete(conn, Routes.api_integration_path(conn, :delete, integration))
      assert response(conn, 204)

      assert_error_sent 404, fn ->
        get(conn, Routes.api_integration_path(conn, :show, integration))
      end
    end
  end
end
