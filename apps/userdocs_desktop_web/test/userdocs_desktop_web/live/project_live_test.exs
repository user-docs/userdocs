defmodule UserdocsDesktopWeb.ProjectLiveTest do
  use UserdocsDesktopWeb.ConnCase
  import Userdocs.RemoteFixtures
  import Userdocs.LocalFixtures
  import Client.RemoteFixtures
  import Client.LocalFixtures
  import Client.BaseFixtures
  import Phoenix.LiveViewTest
  alias Userdocs.WebFixtures
  alias Userdocs.ProjectsFixtures
  @opts %{context: %{repo: Userdocs.Repo}}
  @receive_timeout 250

  describe "Index" do
    setup [
      :reinitialize_state,
      :ensure_web_started,
      :create_password,
      :create_user,
      :create_remote_team,
      :create_remote_team_user,
      :create_remote_strategy,
      :create_remote_project,
      :create_remote_tokens,
      :put_access_token_in_state,
      :create_remote_user_context,
      :put_remote_context_data,
      :put_user_in_state,
      :connect_client,
      :load_client
    ]

    setup do
      on_exit(fn -> Client.disconnect() end)
    end

    test "lists all projects", %{conn: conn, remote_project: project} do
      {:ok, _index_live, html} = live(conn, Routes.project_index_path(conn, :index))

      assert html =~ "Listing Projects"
      assert html =~ project.name
    end

    test "saves new project", %{conn: conn, remote_team: team, remote_strategy: strategy} do
      {:ok, index_live, _html} = live(conn, Routes.project_index_path(conn, :index))

      assert index_live |> element("a", "New Project") |> render_click() =~ "New Project"

      assert_patch(index_live, Routes.project_index_path(conn, :new))

      assert index_live
             |> form("#project-form", project: ProjectsFixtures.project_attrs(:invalid, team.id))
             |> render_change() =~ "can&#39;t be blank"

      valid_attrs = ProjectsFixtures.project_attrs(:valid, team.id, strategy.id)

      html =
        index_live
        |> form("#project-form", project: valid_attrs)
        |> render_submit()

      assert_receive(%{event: "create", topic: "data"})
      assert render(index_live) =~ "Project created successfully"
      assert_patched(index_live, Routes.project_index_path(conn, :index, team.id))
    end

    test "updates project in listing", %{conn: conn, remote_project: project, remote_team: team, remote_strategy: strategy} do
      {:ok, index_live, _html} = live(conn, Routes.project_index_path(conn, :index))

      assert index_live |> element("#edit-project-" <> to_string(project.id)) |> render_click() =~
               "Edit Project"

      assert_patch(index_live, Routes.project_index_path(conn, :edit, project))

      assert index_live
             |> form("#project-form", project: ProjectsFixtures.project_attrs(:invalid, team.id))
             |> render_change() =~ "can&#39;t be blank"

      valid_attrs = ProjectsFixtures.project_attrs(:valid, team.id, strategy.id)

      index_live
      |> form("#project-form", project: valid_attrs)
      |> render_submit()

      assert_receive(%{event: "update", topic: "data"})
      assert_patched(index_live, Routes.project_index_path(conn, :index, team.id))
      assert render(index_live) =~ "Project updated successfully"
      assert render(index_live) =~ valid_attrs[:name]
    end

    test "deletes project in listing", %{conn: conn, remote_project: project} do
      {:ok, index_live, _html} = live(conn, Routes.project_index_path(conn, :index))

      assert index_live |> element("#delete-project-" <> to_string(project.id)) |> render_click()
      refute has_element?(index_live, "#project-" <> to_string(project.id))
    end

    test "index handles standard events", %{conn: conn, remote_project: project} do
      {:ok, live, _html} = live(conn, Routes.project_index_path(conn, :index))
      send(live.pid, %{event: "load_finished"})
      assert_redirect(live, Routes.project_index_path(conn, :index))
    end
  end
end
