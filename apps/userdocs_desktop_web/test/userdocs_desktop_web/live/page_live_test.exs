defmodule UserdocsDesktopWeb.PageLiveTest do
  use UserdocsDesktopWeb.ConnCase
  import Phoenix.LiveViewTest
  alias Userdocs.ProjectsFixtures
  alias Userdocs.UsersFixtures
  alias Userdocs.TeamsFixtures
  alias Userdocs.WebFixtures
  @opts %{context: %{repo: Userdocs.Repo}}

  #|> open_browser(&(System.cmd("C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe", [&1])))

  defp create_password(_), do: %{password: UUID.uuid4()}
  defp create_user(%{password: password}), do: %{user: UsersFixtures.confirmed_user(password)}
  defp create_team(_), do: %{team: TeamsFixtures.team(@opts)}
  defp create_team_user(%{user: user, team: team}), do: %{team_user: TeamsFixtures.team_user(user.id, team.id, @opts)}
  defp create_strategy(_), do: %{strategy: WebFixtures.strategy(@opts)}
  defp create_project(%{team: team, strategy: strategy}), do: %{project: ProjectsFixtures.project(team.id, strategy.id, @opts)}
  defp create_page(%{project: project}), do: %{page: WebFixtures.page(project.id)}
  defp create_session(%{user: user, password: password}) do
    {:ok, _} = Session.authenticate(%{"user" => %{"email" => user.email, "password" => password}})
    %{}
  end

  defp make_selections(%{user: user, team: team, project: project}) do
    {:ok, user} = Userdocs.Users.update_user_selections(user, %{
      selected_team_id: team.id,
      selected_project_id: project.id
    }, %{context: %{repo: Userdocs.Repo}})
    %{user: user}
  end

  describe "Index" do
    setup [
      :create_password,
      :create_user,
      :create_team,
      :create_team_user,
      :create_strategy,
      :create_project,
      :create_page,
      :make_selections,
      :create_session
    ]

    test "lists all pages", %{conn: conn, page: page} do
      {:ok, _index_live, html} = live(conn, Routes.page_index_path(conn, :index))

      assert html =~ "Listing Pages"
      assert html =~ page.name
    end

    test "saves new page", %{conn: conn, project: project} do
      {:ok, index_live, _html} = live(conn, Routes.page_index_path(conn, :index))

      assert index_live |> element("a", "New Page") |> render_click() =~
               "New Page"

      assert_patch(index_live, Routes.page_index_path(conn, :new))

      assert index_live
             |> form("#page-form", page: %{name: "", project_id: nil})
             |> render_change() =~ "can&#39;t be blank"

      valid_attrs = WebFixtures.page_attrs(:valid, project.id)

      html =
        index_live
        |> form("#page-form", page: valid_attrs)
        |> render_submit()

      assert_patched(index_live, Routes.page_index_path(conn, :index))
      assert render(index_live) =~ "Page created successfully"
      #:timer.sleep(500)
      #assert render(index_live) =~ valid_attrs.name # Test broadcast manually for now
    end

    test "updates page in listing", %{conn: conn, page: page, project: project} do
      {:ok, index_live, _html} = live(conn, Routes.page_index_path(conn, :index))

      assert index_live |> element("#edit-page-" <> to_string(page.id)) |> render_click() =~
               "Edit Page"

      assert_patch(index_live, Routes.page_index_path(conn, :edit, page))

      assert index_live
             |> form("#page-form", page: %{url: "", name: "", project_id: nil})
             |> render_change() =~ "can&#39;t be blank"

      valid_attrs = WebFixtures.page_attrs(:valid, project.id)

      html =
        index_live
        |> form("#page-form", page: valid_attrs)
        |> render_submit()

      assert_patched(index_live, Routes.page_index_path(conn, :index))
      assert render(index_live) =~ "Page updated successfully"
      #:timer.sleep(500)
      #assert render(index_live) =~ valid_attrs.name
    end

    test "deletes page in listing", %{conn: conn, page: page} do
      {:ok, index_live, _html} = live(conn, Routes.page_index_path(conn, :index))

      assert index_live |> element("#delete-page-" <> to_string(page.id)) |> render_click()
      #:timer.sleep(500)
      #refute has_element?(index_live, "#delete-page-" <> to_string(page.id))
    end
  end
"""
  describe "Show" do
    setup [
      :create_password,
      :create_user,
      :create_team,
      :create_team_user,
      :create_strategy,
      :create_project,
      :create_page,
      :make_selections,
      :create_session
    ]

    test "displays page", %{conn: conn, page: page} do
      {:ok, _show_live, html} = live(conn, Routes.page_show_path(conn, :show, page.id))

      assert html =~ "Show Page"
    end

    test "updates page within modal", %{conn: conn, page: page, project: project} do
      {:ok, show_live, _html} = live(conn, Routes.page_show_path(conn, :show, page))

      assert show_live |> element("a", "Edit") |> render_click() =~
               "Edit Page"

      assert_patch(show_live, Routes.page_show_path(conn, :edit, page.id))

      assert show_live
             |> form("#page-form", page: %{url: "", name: ""})
             |> render_change() =~ "can&#39;t be blank"

      html =
        show_live
        |> form("#page-form", page: WebFixtures.page_attrs(:valid, project.id))
        |> render_submit()

      assert_patched(show_live, Routes.page_show_path(conn, :show, page))
      assert render(show_live) =~ "Page updated successfully"
    end
  end
  """
end
