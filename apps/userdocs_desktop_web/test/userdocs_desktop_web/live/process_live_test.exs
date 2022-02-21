defmodule UserdocsDesktopWeb.ProcessLiveTest do
  @moduledoc false
  use UserdocsDesktopWeb.ConnCase
  import Phoenix.LiveViewTest
  alias Userdocs.TeamsFixtures
  alias Userdocs.UsersFixtures
  alias Userdocs.WebFixtures
  alias Userdocs.ProjectsFixtures
  alias Userdocs.AutomationFixtures
  alias Userdocs.JobsFixtures

  @opts %{context: %{repo: Userdocs.Repo}}
  @receive_timeout 250

  defp create_password(_), do: %{password: UUID.uuid4()}
  defp create_user(%{password: password}), do: %{user: UsersFixtures.confirmed_user(password)}
  defp create_team(_), do: %{team: TeamsFixtures.team(@opts)}
  defp create_team_user(%{user: user, team: team}), do: %{team_user: TeamsFixtures.team_user(user.id, team.id, @opts)}
  defp create_strategy(_), do: %{strategy: WebFixtures.strategy(@opts)}
  defp create_project(%{team: team, strategy: strategy}), do: %{project: ProjectsFixtures.project(team.id, strategy.id, @opts)}
  defp create_process(%{project: project}), do: %{process: AutomationFixtures.process(project.id, @opts)}
  defp create_session(%{user: user, password: password}) do
    {:ok, _} = Client.authenticate(%{"user" => %{"email" => user.email, "password" => password}})
    %{}
  end
  defp make_selections(%{user: user, team: team, project: project}) do
    {:ok, user} = Userdocs.Users.update_user_selections(user, %{selected_team_id: team.id, selected_project_id: project.id}, %{context: %{repo: Userdocs.Repo}})
    %{user: user}
  end
  defp wait_for_change(assertion) do
    :timer.sleep(10)
    if !assertion, do: wait_for_change(assertion), else: true
  end
  defp load_client(_) do
    Client.connect()
    Client.load()
  end

  describe "Index" do
    setup [
      :create_password,
      :create_user,
      :create_team,
      :create_strategy,
      :create_team_user,
      :create_project,
      :create_process,
      :make_selections,
      :create_session,
      :load_client,
    ]

    setup do
      on_exit(fn -> Client.disconnect() end)
    end

    test "lists all processes", %{conn: conn, process: process} do
      {:ok, index_live, html} = live(conn, Routes.process_index_path(conn, :index))
      assert html =~ "Listing Processes"
      assert html =~ process.name
    end

    test "saves new process", %{conn: conn, project: project} do
      {:ok, index_live, _html} = live(conn, Routes.process_index_path(conn, :index))

      assert index_live
      |> element("a", "New Process")
      |> render_click() =~ "New Process"

      assert_patch(index_live, Routes.process_index_path(conn, :new))

      assert index_live
      |> form("#process-form", process: AutomationFixtures.process_attrs(:invalid, project.id))
      |> render_change() =~ "can&#39;t be blank"

      valid_attrs = AutomationFixtures.process_attrs(:valid, project.id)

      html =
        index_live
        |> form("#process-form", process: valid_attrs)
        |> render_submit()


      :timer.sleep(@receive_timeout)
      assert_receive(%{event: "create", topic: "data"})
      assert_patched(index_live, Routes.process_index_path(conn, :index))
      assert render(index_live) =~ "Process created successfully"
      assert render(index_live) =~ valid_attrs.name
    end

    test "updates process in listing", %{conn: conn, process: process, project: project} do
      {:ok, index_live, _html} = live(conn, Routes.process_index_path(conn, :index))

      assert index_live
      |> element("#edit-process-" <> to_string(process.id))
      |> render_click() =~ "Edit Process"

      assert_patch(index_live, Routes.process_index_path(conn, :edit, process))

      assert index_live
      |> form("#process-form", process: AutomationFixtures.process_attrs(:invalid, project.id))
      |> render_change() =~ "can&#39;t be blank"

      valid_attrs = AutomationFixtures.process_attrs(:valid, project.id)

      html =
        index_live
        |> form("#process-form", process: valid_attrs)
        |> render_submit()

      :timer.sleep(@receive_timeout)
      assert_receive(%{event: "update", topic: "data"})
      assert_patched(index_live, Routes.process_index_path(conn, :index))
      assert render(index_live) =~ "Process updated successfully"
      assert render(index_live) =~ valid_attrs.name
    end

    test "deletes process in listing", %{conn: conn, process: process} do
      {:ok, index_live, _html} = live(conn, Routes.process_index_path(conn, :index))

      assert index_live |> element("#delete-process-" <> to_string(process.id)) |> render_click()
      refute has_element?(index_live, "#process-" <> to_string(process.id))
    end
"""
    test "index handles standard events", %{authed_conn: conn, project: project} do
      {:ok, live, _html} = live(conn, Routes.user_index_path(conn, :index))
      send(live.pid, {:broadcast, "update", %Schemas.Users.User{}})
      assert live
             |> element("#project-picker-" <> to_string(project.id))
             |> render_click() =~ project.name
    end
    """
  end
end
