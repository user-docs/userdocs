defmodule UserdocsWeb.ScreenshotControllerTest do
  use UserdocsWeb.ConnCase

  alias Schemas.Screenshots.Screenshot
  alias Userdocs.UsersFixtures
  alias Userdocs.TeamsFixtures
  alias Userdocs.ScreenshotFixtures
  alias Userdocs.WebFixtures
  alias Userdocs.ProjectsFixtures
  @opts %{context: %{repo: Userdocs.Repo}}


  defp req_header(%{conn: conn}), do: %{conn: put_req_header(conn, "accept", "application/json")}
  defp create_password(_), do: %{password: UUID.uuid4()}
  defp create_user(%{password: password}), do: %{user: UsersFixtures.confirmed_user(password)}
  defp create_team(_), do: %{team: TeamsFixtures.team(@opts)}
  defp create_team_user(%{user: user, team: team}), do: %{team_user: TeamsFixtures.team_user(user.id, team.id, @opts)}
  defp create_strategy(_), do: %{strategy: WebFixtures.strategy(@opts)}
  defp create_screenshot(%{page: page}), do: %{screenshot: ScreenshotFixtures.screenshot(%{page_id: page.id}, @opts)}
  defp create_project(%{team: team, strategy: strategy}), do: %{project: ProjectsFixtures.project(team.id, strategy.id, @opts)}
  defp create_page(%{project: project}), do: %{page: WebFixtures.page(project.id, @opts)}

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
    test "lists all screenshots", %{conn: conn} do
      conn = get(conn, Routes.api_screenshot_path(conn, :index))
      assert json_response(conn, 200)["data"] == []
    end
  end

  describe "create screenshot" do
    test "renders screenshot when data is valid", %{conn: conn, page: page} do
      attrs = ScreenshotFixtures.screenshot_attrs(:valid, %{page_id: page.id})
      conn = post(conn, Routes.api_screenshot_path(conn, :create), screenshot: attrs)
      assert %{"id" => id} = json_response(conn, 201)["data"]

      conn = get(conn, Routes.api_screenshot_path(conn, :show, id))

      result = json_response(conn, 200)["data"]
      assert result["id"] == id
      assert result["name"] == attrs.name
    end

    test "renders errors when data is invalid", %{conn: conn} do
      attrs = ScreenshotFixtures.screenshot_attrs(:invalid, %{})
      conn = post(conn, Routes.api_screenshot_path(conn, :create), screenshot: attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "update screenshot" do
    setup [
      :req_header,
      :create_password,
      :create_user,
      :create_team,
      :create_team_user,
      :create_project,
      :create_page,
      :create_screenshot
    ]

    test "renders screenshot when data is valid", %{conn: conn, screenshot: %Screenshot{id: id} = screenshot, page: page} do
      attrs = ScreenshotFixtures.screenshot_attrs(:valid, %{page_id: page.id}) |> Map.delete(:id)
      conn = put(conn, Routes.api_screenshot_path(conn, :update, screenshot), screenshot: attrs)
      assert %{"id" => ^id} = json_response(conn, 200)["data"]

      conn = get(conn, Routes.api_screenshot_path(conn, :show, id))

      result = json_response(conn, 200)["data"]
      assert result["id"] == id
      assert result["name"] == attrs.name
    end
    test "renders errors when data is invalid", %{conn: conn, screenshot: screenshot} do
      attrs = ScreenshotFixtures.screenshot_attrs(:invalid, %{page_id: nil})
      conn = put(conn, Routes.api_screenshot_path(conn, :update, screenshot), screenshot: attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end


  describe "delete screenshot" do
    setup [
      :req_header,
      :create_password,
      :create_user,
      :create_team,
      :create_team_user,
      :create_screenshot
    ]

    test "deletes chosen screenshot", %{conn: conn, screenshot: screenshot} do
      conn = delete(conn, Routes.api_screenshot_path(conn, :delete, screenshot))
      assert response(conn, 204)

      assert_error_sent 404, fn ->
        get(conn, Routes.api_screenshot_path(conn, :show, screenshot))
      end
    end
  end
end
