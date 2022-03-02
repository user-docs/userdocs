defmodule UserdocsWeb.ElementControllerTest do
  use UserdocsWeb.ConnCase

  alias Schemas.Elements.Element
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
  defp create_page(%{project: project}), do: %{page: WebFixtures.page(project.id, @opts)}
  defp create_element(%{page: page, strategy: strategy}), do: %{element: WebFixtures.element(page.id, strategy.id, @opts)}

  setup [
    :req_header,
    :create_password,
    :create_user,
    :create_team,
    :create_team_user,
    :create_strategy,
    :create_project,
    :create_page,
  ]

  describe "index" do
    test "lists all elements", %{conn: conn} do
      conn = get(conn, Routes.api_element_path(conn, :index))
      assert json_response(conn, 200)["data"] == []
    end
  end

  describe "create element" do
    test "renders element when data is valid", %{conn: conn, page: page, strategy: strategy} do
      attrs = WebFixtures.element_attrs(:valid, page.id, strategy.id)
      conn = post(conn, Routes.api_element_path(conn, :create), element: attrs)
      assert %{"id" => id} = json_response(conn, 201)["data"]

      conn = get(conn, Routes.api_element_path(conn, :show, id))

      result = json_response(conn, 200)["data"]
      assert result["id"] == id
      assert result["name"] == attrs.name
      assert result["selector"] == attrs.selector
      assert result["strategy_id"] == attrs.strategy_id
      assert result["page_id"] == attrs.page_id
    end

    test "renders errors when data is invalid", %{conn: conn, page: page, strategy: strategy} do
      attrs = WebFixtures.element_attrs(:invalid, page.id, strategy.id)
      conn = post(conn, Routes.api_element_path(conn, :create), element: attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "update element" do
    setup [
      :req_header,
      :create_password,
      :create_user,
      :create_team,
      :create_team_user,
      :create_strategy,
      :create_project,
      :create_page,
      :create_element
  ]

    test "renders element when data is valid", %{conn: conn, element: %Element{id: id} = element, page: page, strategy: strategy} do
      attrs = WebFixtures.element_attrs(:valid, page.id, strategy.id)
      conn = put(conn, Routes.api_element_path(conn, :update, element), element: attrs)
      assert %{"id" => ^id} = json_response(conn, 200)["data"]

      conn = get(conn, Routes.api_element_path(conn, :show, id))

      result = json_response(conn, 200)["data"]
      assert result["id"] == id
      assert result["name"] == attrs.name
      assert result["selector"] == attrs.selector
      assert result["strategy_id"] == attrs.strategy_id
      assert result["page_id"] == attrs.page_id
    end

    test "renders errors when data is invalid", %{conn: conn, element: element, page: page, strategy: strategy} do
      attrs = WebFixtures.element_attrs(:invalid, page.id, strategy.id)
      conn = put(conn, Routes.api_element_path(conn, :update, element), element: attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "delete element" do
    setup [
      :req_header,
      :create_password,
      :create_user,
      :create_team,
      :create_team_user,
      :create_strategy,
      :create_project,
      :create_page,
      :create_element
    ]

    test "deletes chosen element", %{conn: conn, element: element} do
      conn = delete(conn, Routes.api_element_path(conn, :delete, element))
      assert response(conn, 204)

      assert_error_sent 404, fn ->
        get(conn, Routes.api_element_path(conn, :show, element))
      end
    end
  end
end
