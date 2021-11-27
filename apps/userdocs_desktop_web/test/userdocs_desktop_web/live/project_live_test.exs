defmodule UserdocsDesktopWeb.ProjectLiveTest do
  use UserdocsDesktopWeb.ConnCase
  import Phoenix.LiveViewTest
  alias Schemas.Users.User
  alias Userdocs.Projects
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
    {:ok, _} = Session.authenticate(%{"user" => %{"email" => user.email, "password" => password}})
    %{}
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
      :create_session
    ]

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

      {:ok, _, html} =
        index_live
        |> form("#project-form", project: valid_attrs)
        |> render_submit()
        |> follow_redirect(conn, Routes.project_index_path(conn, :index, team.id))

      assert html =~ "Project created successfully"
      assert html =~ valid_attrs.name
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

      {:ok, _, html} =
        index_live
        |> form("#project-form", project: valid_attrs)
        |> render_submit()
        |> follow_redirect(conn, Routes.project_index_path(conn, :index, team.id))

      assert html =~ "Project updated successfully"
      assert html =~ valid_attrs.name
    end

    test "deletes project in listing", %{conn: conn, project: project} do
      {:ok, index_live, _html} = live(conn, Routes.project_index_path(conn, :index))

      assert index_live |> element("#delete-project-" <> to_string(project.id)) |> render_click()
      refute has_element?(index_live, "#project-" <> to_string(project.id))
    end
"""
    test "index handles standard events", %{conn: conn, project: project} do
      {:ok, live, _html} = live(conn, Routes.project_index_path(conn, :index))
      user_attrs = %{"email" => "test@example.com", "project_id" => project.id, "team_users" => []}
      send(live.pid, %{topic: "data", event: "update_user", payload: user_attrs})
      assert live
             |> element("#project-picker-" <> to_string(project.id))
             |> render_click() =~ project.name
    end
    """
  end
end
