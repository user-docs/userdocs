defmodule UserdocsDesktopWeb.ProjectLiveTest do
  use UserdocsDesktopWeb.ConnCase
  import Phoenix.LiveViewTest
  alias Userdocs.ProjectsFixtures

  describe "Index" do
    setup do
      {data, context} = Userdocs.ClientFixtures.local_data()
      Client.init_state()
      Client.put_in_state(:current_user, context.user)
      Client.put_in_state(:context, context.context)
      Client.put_in_state(:data, data)
      Client.connect()
      UserdocsDesktopWeb.Endpoint.subscribe("data")
      context
    end

    setup do
      on_exit(fn -> Client.disconnect() end)
    end

    test "lists all projects", %{conn: conn, project: project} do
      {:ok, _index_live, html} = live(conn, Routes.project_index_path(conn, :index))

      assert html =~ "Listing Projects"
      assert html =~ project.name
    end

    test "saves new project", %{conn: conn, team: team, strategy: strategy} do
      {:ok, index_live, _html} = live(conn, Routes.project_index_path(conn, :index))

      assert index_live |> element("a", "New Project") |> render_click() =~ "New Project"

      assert_patch(index_live, Routes.project_index_path(conn, :new))

      assert index_live
             |> form("#project-form", project: ProjectsFixtures.project_attrs(:invalid, team.id))
             |> render_change() =~ "can&#39;t be blank"

      valid_attrs = ProjectsFixtures.project_attrs(:valid, team.id, strategy.id)

      index_live
      |> form("#project-form", project: valid_attrs)
      |> render_submit()

      assert_receive(%{event: "create", topic: "data"})
      assert render(index_live) =~ "Project created successfully"
      assert_patched(index_live, Routes.project_index_path(conn, :index, team.id))
    end

    test "updates project in listing", %{conn: conn, project: project, team: team, strategy: strategy} do
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
      assert_patch(index_live, Routes.project_index_path(conn, :index, team.id))
      assert render(index_live) =~ "Project updated successfully"
      assert render(index_live) =~ valid_attrs[:name]
    end

    test "deletes project in listing", %{conn: conn, project: project} do
      {:ok, index_live, _html} = live(conn, Routes.project_index_path(conn, :index))

      assert index_live |> element("#delete-project-" <> to_string(project.id)) |> render_click()
      refute has_element?(index_live, "#project-" <> to_string(project.id))
    end

    test "index handles standard events", %{conn: conn} do
      {:ok, live, _html} = live(conn, Routes.project_index_path(conn, :index))
      send(live.pid, %{event: "load_finished"})
      assert_redirect(live, Routes.project_index_path(conn, :index))
    end
  end
end
