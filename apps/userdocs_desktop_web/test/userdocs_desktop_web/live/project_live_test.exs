defmodule UserdocsDesktopWeb.ProjectLiveTest do
  use UserdocsDesktopWeb.ConnCase
  import Phoenix.LiveViewTest
  alias Userdocs.TeamsFixtures
  alias Userdocs.UsersFixtures
  alias Userdocs.WebFixtures
  alias Userdocs.ProjectsFixtures
  @opts %{context: %{repo: Userdocs.Repo}}

  defp create_password(_), do: %{password: UUID.uuid4()}
  defp create_user(%{password: password}), do: %{user: UsersFixtures.confirmed_user(password)}
  defp create_team(_), do: %{team: TeamsFixtures.team(@opts)}
  defp create_team_user(%{user: user, team: team}), do: %{team_user: TeamsFixtures.team_user(user.id, team.id, @opts)}
  defp create_strategy(_), do: %{strategy: WebFixtures.strategy(@opts)}
  defp create_project(%{team: team, strategy: strategy}), do: %{project: ProjectsFixtures.project(team.id, strategy.id, @opts)}
  defp make_selections(%{user: user, team: team, project: project}) do
    {:ok, user} = Userdocs.Users.update_user_selections(user, %{
      selected_team_id: team.id,
      selected_project_id: project.id
    }, @opts)
    %{user: user}
  end
  defp create_session(%{user: user, password: password}) do
    {:ok, _} = Client.authenticate(%{"user" => %{"email" => user.email, "password" => password}})
    %{}
  end
  defp load_client(_) do
    Client.init_state()
    Client.load()
    Client.connect()
  end

  describe "Index" do
    setup [
      :create_password,
      :create_user,
      :create_team,
      :create_strategy,
      :create_team_user,
      :create_project,
      :make_selections,
      :create_session,
      :load_client
    ]

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

      html =
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
      assert_patched(index_live, Routes.project_index_path(conn, :index, team.id))
      assert render(index_live) =~ "Project updated successfully"
      assert render(index_live) =~ valid_attrs[:name]
    end

    test "deletes project in listing", %{conn: conn, project: project} do
      {:ok, index_live, _html} = live(conn, Routes.project_index_path(conn, :index))

      assert index_live |> element("#delete-project-" <> to_string(project.id)) |> render_click()
      refute has_element?(index_live, "#project-" <> to_string(project.id))
    end

    test "index handles standard events", %{conn: conn, project: project} do
      {:ok, live, _html} = live(conn, Routes.project_index_path(conn, :index))
      {:ok, _, html} =
        live
        |> element("#project-picker-" <> to_string(project.id))
        |> render_click()
        |> follow_redirect(conn, Routes.project_index_path(conn, :index))

      assert html =~ project.name
    end
  end
end
