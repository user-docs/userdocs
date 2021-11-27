defmodule UserdocsDesktopWeb.TeamLiveTest do
  use UserdocsDesktopWeb.ConnCase
  import Phoenix.LiveViewTest
  alias Userdocs.ProjectsFixtures
  alias Userdocs.UsersFixtures
  alias Userdocs.TeamsFixtures
  alias Userdocs.WebFixtures
  alias Schemas.Users.User
  @opts %{context: %{repo: Userdocs.Repo}}

  defp create_password(_), do: %{password: UUID.uuid4()}
  defp create_user(%{password: password}), do: %{user: UsersFixtures.confirmed_user(password)}
  defp create_team(_), do: %{team: TeamsFixtures.team(@opts)}
  defp create_team_user(%{user: user, team: team}), do: %{team_user: TeamsFixtures.team_user(user.id, team.id, @opts)}
  defp create_strategy(_), do: %{strategy: WebFixtures.strategy(@opts)}
  defp create_project(%{team: team, strategy: strategy}) do
    attrs = ProjectsFixtures.project_attrs(:default, team.id, strategy.id)
    {:ok, project} = Userdocs.Projects.create_project(attrs, @opts)
    %{project: project}
  end
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

    test "lists all teams", %{conn: conn, team: team} do
      {:ok, _index_live, html} = live(conn, Routes.team_index_path(conn, :index))

      assert html =~ "Listing Teams"
      assert html =~ team.name
    end

    test "saves new team", %{conn: conn} do
      {:ok, index_live, _html} = live(conn, Routes.team_index_path(conn, :index))

      assert index_live |> element("a", "New Team") |> render_click() =~ "New Team"

      assert_patch(index_live, Routes.team_index_path(conn, :new))

      assert index_live
      |> form("#team-form", team: TeamsFixtures.team_attrs(:invalid))
      |> render_change() =~ "can&#39;t be blank"

      valid_attrs = TeamsFixtures.team_attrs(:valid)

      {:ok, _, html} =
        index_live
        |> form("#team-form", team: valid_attrs)
        |> render_submit()
        |> follow_redirect(conn, Routes.team_index_path(conn, :index))

      assert html =~ "Team created successfully"
      assert html =~ valid_attrs.name
    end

    test "adds a user to a team", %{conn: conn, team: team, user: user} do
      invited_email = UUID.uuid4() <> "@user-docs.com"
      {:ok, index_live, _html} = live(conn, Routes.team_index_path(conn, :invite, team))

      assert index_live
             |> form("#invitation-form", user: %{email: "bogusemailformat", invited_by_id: user.id})
             |> render_change() =~ "invalid format"

      assert index_live
             |> form("#invitation-form", user: %{email: "test@user-docs.com", invited_by_id: user.id})
             |> render_submit(%{"email" => "test@user-docs.com", "invited_by_id" => user.id})

      assert index_live


    end

    test "updates team in listing", %{conn: conn, team: team, user: user} do
      {:ok, index_live, _html} = live(conn, Routes.team_index_path(conn, :index))

      assert index_live |> element("#edit-team-" <> to_string(team.id)) |> render_click() =~
               "Edit Team"

      assert_patch(index_live, Routes.team_index_path(conn, :edit, team))

      assert index_live
             |> form("#team-form", team: TeamsFixtures.team_attrs(:invalid))
             |> render_change() =~ "can&#39;t be blank"

      assert index_live
      |> element("#team-form")
      |> render_change(%{team: valid_attrs = TeamsFixtures.team_attrs(:valid)})

      {:ok, _, html} =
        index_live
        |> form("#team-form", team: valid_attrs)
        |> render_submit(%{"team_id" => team.id, "type" => "invited"})
        |> follow_redirect(conn, Routes.team_index_path(conn, :index))

      assert html =~ "Team updated successfully"
      assert html =~ valid_attrs.name
    end

    test "deletes team in listing", %{conn: conn, team: team} do
      {:ok, index_live, _html} = live(conn, Routes.team_index_path(conn, :index))

      assert index_live |> element("#delete-team-" <>  to_string(team.id)) |> render_click()
      refute has_element?(index_live, "#team-" <> to_string(team.id))
    end

    test "index handles standard events", %{conn: conn, project: project} do
      {:ok, live, _html} = live(conn, Routes.team_index_path(conn, :index))
      assert live
             |> element("#project-picker-" <> to_string(project.id))
             |> render_click() =~ project.name

      :timer.sleep(100)
    end
  end
end
