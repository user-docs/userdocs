defmodule UserdocsWeb.PageControllerTest do
  use UserdocsWeb.ConnCase

  alias Userdocs.Pages
  alias Schemas.Pages.Page

  alias Userdocs.Pages
  alias Userdocs.ProjectsFixtures
  alias Userdocs.UsersFixtures
  alias Userdocs.TeamsFixtures
  alias Userdocs.WebFixtures
  @opts %{context: %{repo: Userdocs.Repo}}

  #|> open_browser(&(System.cmd("C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe", [&1])))

  defp req_header(%{conn: conn}), do: %{conn: put_req_header(conn, "accept", "application/json")}
  defp create_password(_), do: %{password: UUID.uuid4()}
  defp create_user(%{password: password}), do: %{user: UsersFixtures.confirmed_user(password)}
  defp create_team(_), do: %{team: TeamsFixtures.team(@opts)}
  defp create_team_user(%{user: user, team: team}), do: %{team_user: TeamsFixtures.team_user(user.id, team.id, @opts)}
  defp create_strategy(_), do: %{strategy: WebFixtures.strategy(@opts)}
  defp create_project(%{team: team, strategy: strategy}), do: %{project: ProjectsFixtures.project(team.id, strategy.id, @opts)}
  defp create_page(%{project: project}), do: %{page: WebFixtures.page(project.id)}

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
    test "lists all pages", %{conn: conn} do
      conn = get(conn, Routes.api_page_path(conn, :index))
      assert json_response(conn, 200)["data"] == []
    end
  end

  describe "create page" do
    test "renders page when data is valid", %{conn: conn, project: project} do
      create_attrs = WebFixtures.page_attrs(:valid, project.id)
      conn = post(conn, Routes.api_page_path(conn, :create), page: create_attrs)
      assert %{"id" => id} = json_response(conn, 201)["data"]

      conn = get(conn, Routes.api_page_path(conn, :show, id))

      result = json_response(conn, 200)["data"]
      assert result["id"] == id
      assert result["name"] == create_attrs.name
      assert result["url"] == create_attrs.url
    end

    test "renders errors when data is invalid", %{conn: conn, project: project} do
      invalid_attrs = WebFixtures.page_attrs(:invalid, project.id)
      conn = post(conn, Routes.api_page_path(conn, :create), page: invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "update page" do
    setup [
      :req_header,
      :create_password,
      :create_user,
      :create_team,
      :create_team_user,
      :create_strategy,
      :create_project,
      :create_page
    ]

    test "renders page when data is valid", %{conn: conn, project: project, page: %Page{id: id} = page} do
      attrs = WebFixtures.page_attrs(:valid, project.id)
      conn = put(conn, Routes.api_page_path(conn, :update, page), page: attrs)
      assert %{"id" => ^id} = json_response(conn, 200)["data"]

      conn = get(conn, Routes.api_page_path(conn, :show, id))

      result = json_response(conn, 200)["data"]
      assert result["id"] == id
      assert result["name"] == attrs.name
      assert result["url"] == attrs.url
    end

    test "renders errors when data is invalid", %{conn: conn, page: page, project: project} do
      invalid_attrs = WebFixtures.page_attrs(:invalid, project.id)
      conn = put(conn, Routes.api_page_path(conn, :update, page), page: invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "delete page" do
    setup [
      :req_header,
      :create_password,
      :create_user,
      :create_team,
      :create_team_user,
      :create_strategy,
      :create_project,
      :create_page
    ]

    test "deletes chosen page", %{conn: conn, page: page} do
      conn = delete(conn, Routes.api_page_path(conn, :delete, page))
      assert response(conn, 204)

      assert_error_sent 404, fn ->
        get(conn, Routes.api_page_path(conn, :show, page))
      end
    end
  end
end
