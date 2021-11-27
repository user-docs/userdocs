defmodule UserdocsDesktopWeb.ElementLiveTest do
  use UserdocsDesktopWeb.ConnCase
  import Phoenix.LiveViewTest
  alias Userdocs.Elements
  alias Userdocs.AutomationFixtures
  alias Userdocs.ProjectsFixtures
  alias Userdocs.UsersFixtures
  alias Userdocs.TeamsFixtures
  alias Userdocs.WebFixtures

  @opts %{context: %{repo: Userdocs.Repo}}

  defp create_password(_), do: %{password: UUID.uuid4()}
  defp create_user(%{password: password}), do: %{user: UsersFixtures.confirmed_user(password)}
  defp create_team(_), do: %{team: TeamsFixtures.team(@opts)}
  defp create_team_user(%{user: user, team: team}), do: %{team_user: TeamsFixtures.team_user(user.id, team.id, @opts)}
  defp create_strategy(_), do: %{strategy: WebFixtures.strategy(@opts)}
  defp create_project(%{team: team, strategy: strategy}), do: %{project: ProjectsFixtures.project(team.id, strategy.id, @opts)}
  defp create_page(%{project: project}), do: %{page: WebFixtures.page(project.id)}
  defp create_element(%{page: page, strategy: strategy}), do: %{element: WebFixtures.element(page.id, strategy.id, @opts)}
  defp create_session(%{user: user, password: password}) do
    {:ok, _} = Session.authenticate(%{"user" => %{"email" => user.email, "password" => password}})
    %{}
  end
  defp make_selections(%{user: user, team: team, project: project}) do
    {:ok, user} = Userdocs.Users.update_user_selections(user, %{
      selected_team_id: team.id,
      selected_project_id: project.id
    }, @opts)
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
      :create_element,
      :make_selections,
      :create_session,
    ]

    test "lists all elements", %{conn: conn, page: page, element: element} do
      {:ok, _index_live, html} = live(conn, Routes.element_index_path(conn, :index, page.id))

      assert html =~ "Listing Elements"
    end

    test "saves new element", %{conn: conn, page: page, strategy: strategy} do
      {:ok, index_live, _html} = live(conn, Routes.element_index_path(conn, :index, page.id))

      assert index_live |> element("a", "New Element") |> render_click() =~
               "New Element"

      assert_patch(index_live, Routes.element_index_path(conn, :new, page.id))

      assert index_live
             |> form("#element-form", element: WebFixtures.element_attrs(:invalid, page.id, strategy.id))
             |> render_change() =~ "can&#39;t be blank"

      html =
        index_live
        |> form("#element-form", element: WebFixtures.element_attrs(:valid, page.id, strategy.id))
        |> render_submit()


      assert_patched(index_live, Routes.element_index_path(conn, :index, page.id))
      assert render(index_live) =~ "Element created successfully"
    end

    test "updates element in listing", %{conn: conn, page: page, strategy: strategy, element: element} do
      {:ok, index_live, _html} = live(conn, Routes.element_index_path(conn, :index, page.id))

      assert index_live |> element("#edit-element-" <> to_string(element.id)) |> render_click() =~
               "Edit Element"

      assert_patch(index_live, Routes.element_index_path(conn, :edit, page.id, element.id))

      assert index_live
             |> form("#element-form", element: WebFixtures.element_attrs(:invalid, page.id, strategy.id))
             |> render_change() =~ "can&#39;t be blank"

      html =
        index_live
        |> form("#element-form", element: WebFixtures.element_attrs(:valid, page.id, strategy.id))
        |> render_submit()

      assert_patched(index_live, Routes.element_index_path(conn, :index, page.id))
      assert render(index_live) =~ "Element updated successfully"
    end

    test "deletes element in listing", %{conn: conn, page: page, element: element} do
      {:ok, index_live, _html} = live(conn, Routes.element_index_path(conn, :index, page.id))

      assert index_live |> element("#delete-element-" <> to_string(element.id)) |> render_click()
      #refute has_element?(index_live, "#delete-element-" <> to_string(element.id))
    end
  end
end
