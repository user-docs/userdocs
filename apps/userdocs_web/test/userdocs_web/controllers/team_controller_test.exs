defmodule UserdocsWeb.TeamControllerTest do
  use UserdocsWeb.ConnCase

  alias Userdocs.Teams
  alias Schemas.Teams.Team
  alias Userdocs.UsersFixtures
  alias Userdocs.TeamsFixtures
  @opts %{context: %{repo: Userdocs.Repo}}

  defp req_header(%{conn: conn}), do: %{conn: put_req_header(conn, "accept", "application/json")}
  defp create_password(_), do: %{password: UUID.uuid4()}
  defp create_user(%{password: password}), do: %{user: UsersFixtures.confirmed_user(password)}
  defp create_team(_), do: %{team: TeamsFixtures.team(@opts)}

  describe "index" do
    test "lists all teams", %{conn: conn} do
      team = TeamsFixtures.team(@opts)
      conn = get(conn, Routes.api_team_path(conn, :index))
      [team_attrs] = json_response(conn, 200)["data"]
      assert team_attrs["name"] == team.name
    end
  end

  describe "create team" do
    test "renders team when data is valid", %{conn: conn} do
      attrs = TeamsFixtures.team_attrs(:valid)
      conn = post(conn, Routes.api_team_path(conn, :create), team: attrs)
      assert %{"id" => id} = json_response(conn, 201)["data"]

      conn = get(conn, Routes.api_team_path(conn, :show, id))

      result = json_response(conn, 200)["data"]
      assert result["id"] == id
      assert result["name"] == attrs.name
      assert result["css"] == attrs.css
      assert result["aws_region"] == attrs.aws_region
      assert result["aws_bucket"] == attrs.aws_bucket
    end

    test "renders errors when data is invalid", %{conn: conn} do
      attrs = TeamsFixtures.team_attrs(:invalid)
      conn = post(conn, Routes.api_team_path(conn, :create), team: attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "update team" do
    setup [
      :req_header,
      :create_password,
      :create_user,
      :create_team
    ]

    test "renders team when data is valid", %{conn: conn, team: %Team{id: id} = team} do
      attrs = TeamsFixtures.team_attrs(:valid)
      conn = put(conn, Routes.api_team_path(conn, :update, team), team: attrs)
      assert %{"id" => ^id} = json_response(conn, 200)["data"]

      conn = get(conn, Routes.api_team_path(conn, :show, id))

      result = json_response(conn, 200)["data"]
      assert result["id"] == id
      assert result["name"] == attrs.name
      assert result["css"] == attrs.css
      assert result["aws_region"] == attrs.aws_region
      assert result["aws_bucket"] == attrs.aws_bucket
    end

    test "renders errors when data is invalid", %{conn: conn, team: team} do
      attrs = TeamsFixtures.team_attrs(:invalid)
      conn = put(conn, Routes.api_team_path(conn, :update, team), team: attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "delete team" do
    setup [
      :req_header,
      :create_password,
      :create_user,
      :create_team
    ]

    test "deletes chosen team", %{conn: conn, team: team} do
      conn = delete(conn, Routes.api_team_path(conn, :delete, team))
      assert response(conn, 204)

      assert_error_sent 404, fn ->
        get(conn, Routes.api_team_path(conn, :show, team))
      end
    end
  end
end
