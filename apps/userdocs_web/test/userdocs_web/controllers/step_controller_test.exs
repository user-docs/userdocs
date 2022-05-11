defmodule UserdocsWeb.StepControllerTest do
  use UserdocsWeb.ConnCase

  alias Userdocs.AutomationFixtures
  alias Userdocs.ProjectsFixtures
  alias Userdocs.UsersFixtures
  alias Userdocs.TeamsFixtures
  alias Userdocs.WebFixtures
  alias Schemas.Steps.Step
  @opts %{context: %{repo: Userdocs.Repo}}

  defp req_header(%{conn: conn}), do: %{conn: put_req_header(conn, "accept", "application/json")}
  defp create_password(_), do: %{password: UUID.uuid4()}
  defp create_user(%{password: password}), do: %{user: UsersFixtures.confirmed_user(password)}
  defp create_team(_), do: %{team: TeamsFixtures.team(@opts)}
  defp create_team_user(%{user: user, team: team}), do: %{team_user: TeamsFixtures.team_user(user.id, team.id, @opts)}
  defp create_strategy(_), do: %{strategy: WebFixtures.strategy(@opts)}
  defp create_project(%{team: team, strategy: strategy}), do: %{project: ProjectsFixtures.project(team.id, strategy.id, @opts)}
  defp create_page(%{project: project}), do: %{page: WebFixtures.page(project.id, @opts)}
  defp create_process(%{project: project}), do: %{process: AutomationFixtures.process(project.id, @opts)}
  defp create_step(%{process: process, page: page}), do: %{step: AutomationFixtures.step(page.id, process.id, @opts)}

  setup [
    :req_header,
    :create_password,
    :create_user,
    :create_team,
    :create_team_user,
    :create_strategy,
    :create_project,
    :create_process,
    :create_page
  ]

  describe "index" do
    test "lists all steps", %{conn: conn} do
      conn = get(conn, Routes.api_step_path(conn, :index))
      assert json_response(conn, 200)["data"] == []
    end
  end

  describe "create step" do
    test "renders step when data is valid", %{page: page, process: process, conn: conn} do
      attrs = AutomationFixtures.step_attrs(:valid, page.id, process.id)
      conn = post(conn, Routes.api_step_path(conn, :create), step: attrs)
      assert %{"id" => id} = json_response(conn, 201)["data"]

      conn = get(conn, Routes.api_step_path(conn, :show, id))

      result = json_response(conn, 200)["data"]
      assert result["id"] == id
      assert result["height"] == attrs.height
      assert result["margin_all"] == attrs.margin_all
      assert result["margin_bottom"] == attrs.margin_bottom
      assert result["margin_left"] == attrs.margin_left
      assert result["margin_right"] == attrs.margin_right
      assert result["margin_top"] == attrs.margin_top
      assert result["name"] == attrs.name
      assert result["order"] == attrs.order
      assert result["text"] == attrs.text
      assert result["width"] == attrs.width
    end

    test "renders errors when data is invalid", %{conn: conn} do
      attrs = AutomationFixtures.step_attrs(:invalid)
      conn = post(conn, Routes.api_step_path(conn, :create), step: attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "update step" do
    setup [
      :req_header,
      :create_password,
      :create_user,
      :create_team,
      :create_team_user,
      :create_strategy,
      :create_project,
      :create_page,
      :create_process,
      :create_step
    ]

    test "renders step when data is valid", %{conn: conn, process: process, step: %Step{id: id} = step, page: page} do
      attrs = AutomationFixtures.step_attrs(:valid, page.id, process.id)
      conn = put(conn, Routes.api_step_path(conn, :update, step), step: attrs)
      assert %{"id" => ^id} = json_response(conn, 200)["data"]

      conn = get(conn, Routes.api_step_path(conn, :show, id))

      result = json_response(conn, 200)["data"]
      assert result["id"] == id
      assert result["height"] == attrs.height
      assert result["margin_all"] == attrs.margin_all
      assert result["margin_bottom"] == attrs.margin_bottom
      assert result["margin_left"] == attrs.margin_left
      assert result["margin_right"] == attrs.margin_right
      assert result["margin_top"] == attrs.margin_top
      assert result["name"] == attrs.name
      assert result["order"] == attrs.order
      assert result["text"] == attrs.text
      assert result["width"] == attrs.width
    end

    test "renders errors when data is invalid", %{conn: conn, step: step} do
      attrs = AutomationFixtures.step_attrs(:invalid)
      conn = put(conn, Routes.api_step_path(conn, :update, step), step: attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "delete step" do
    setup [
      :req_header,
      :create_password,
      :create_user,
      :create_team,
      :create_team_user,
      :create_strategy,
      :create_project,
      :create_page,
      :create_process,
      :create_step
    ]

    test "deletes chosen step", %{conn: conn, step: step} do
      conn = delete(conn, Routes.api_step_path(conn, :delete, step))
      assert response(conn, 204)

      assert_error_sent 404, fn ->
        get(conn, Routes.api_step_path(conn, :show, step))
      end
    end
  end
end
