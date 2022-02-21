defmodule UserdocsDesktopWeb.AnnotationLiveTest do
  use UserdocsDesktopWeb.ConnCase
  import Phoenix.LiveViewTest
  alias Userdocs.ProjectsFixtures
  alias Userdocs.UsersFixtures
  alias Userdocs.TeamsFixtures
  alias Userdocs.WebFixtures
  alias UserdocsDesktop.BrowserController

  @opts %{context: %{repo: Userdocs.Repo}}
  @receive_timeout 250

  defp create_annotation_type(_), do: %{annotation_type: WebFixtures.annotation_type(:badge, @opts)}
  defp create_password(_), do: %{password: UUID.uuid4()}
  defp create_user(%{password: password}), do: %{user: UsersFixtures.confirmed_user(password)}
  defp create_team(_), do: %{team: TeamsFixtures.team(@opts)}
  defp create_team_user(%{user: user, team: team}), do: %{team_user: TeamsFixtures.team_user(user.id, team.id, @opts)}
  defp create_strategy(_), do: %{strategy: WebFixtures.strategy(@opts)}
  defp create_project(%{team: team, strategy: strategy}), do: %{project: ProjectsFixtures.project(team.id, strategy.id, @opts)}
  defp create_page(%{project: project}), do: %{page: WebFixtures.page(project.id, @opts)}
  defp create_annotation(%{page: page}), do: %{annotation: WebFixtures.annotation(page.id, @opts)}
  defp create_element(%{page: page, strategy: strategy}), do: %{element: WebFixtures.element(page.id, strategy.id, @opts)}
  defp create_session(%{user: user, password: password}) do
    {:ok, _} = Client.authenticate(%{"user" => %{"email" => user.email, "password" => password}})
    %{}
  end
  defp make_selections(%{user: user, team: team, project: project}) do
    {:ok, user} = Userdocs.Users.update_user_selections(user, %{
      selected_team_id: team.id,
      selected_project_id: project.id
    }, @opts)
    %{user: user}
  end
  defp load_client(_) do
    Client.connect()
    Client.load()
  end

  setup_all do
    BrowserController.open_browser("{key: value}")
    on_exit(fn -> BrowserController.close_browser() end)
    :ok
  end

  describe "Index" do
    setup [
      :create_annotation_type,
      :create_password,
      :create_user,
      :create_team,
      :create_team_user,
      :create_strategy,
      :create_project,
      :create_page,
      :create_annotation,
      :create_element,
      :make_selections,
      :create_session,
      :load_client
    ]

    setup do
      on_exit(fn -> Client.disconnect() end)
    end

    test "lists all annotation", %{conn: conn, page: page} do
      {:ok, _index_live, html} = live(conn, Routes.annotation_index_path(conn, :index, page.id))

      assert html =~ "Listing Annotation"
    end

    test "saves new annotation", %{conn: conn, page: page, annotation_type: annotation_type} do
      {:ok, index_live, _html} = live(conn, Routes.annotation_index_path(conn, :index, page.id))

      assert index_live |> element("a", "New Annotation") |> render_click() =~
               "New Annotation"

      assert_patch(index_live, Routes.annotation_index_path(conn, :new, page.id))

      assert index_live
             |> form("#annotation-form", annotation: %{annotation_type_id: annotation_type.id})
             |> render_change() =~ "Badge"

      assert index_live
             |> form("#annotation-form", annotation: WebFixtures.annotation_attrs(:invalid_badge, page.id))
             |> render_change() =~ "is invalid"

      valid_attrs = WebFixtures.annotation_attrs(:valid_badge, page.id)

      index_live
      |> form("#annotation-form", annotation: valid_attrs)
      |> render_submit()

      :timer.sleep(@receive_timeout)
      assert_receive(%{event: "create", topic: "data"})
      assert_patched(index_live, Routes.annotation_index_path(conn, :index, page.id))
      assert render(index_live) =~ "Annotation created successfully"
      assert render(index_live) =~ valid_attrs.name
    end

    test "updates annotation in listing", %{conn: conn, annotation: annotation, page: page, annotation_type: annotation_type} do
      {:ok, index_live, _html} = live(conn, Routes.annotation_index_path(conn, :index, page.id))

      assert index_live |> element("#edit-annotation-" <> to_string(annotation.id)) |> render_click() =~
               "Edit Annotation"

      assert_patch(index_live, Routes.annotation_index_path(conn, :edit, page.id, annotation))

      index_live
      |> form("#annotation-form", annotation: %{annotation_type_id: annotation_type.id})
      |> render_change()

      assert index_live
             |> form("#annotation-form", annotation: %{font_size: "invalid"})
             |> render_change() =~ "is invalid"

      valid_attrs = WebFixtures.annotation_attrs(:valid_badge, page.id)

      index_live
      |> form("#annotation-form", annotation: valid_attrs)
      |> render_submit()

      :timer.sleep(@receive_timeout)
      assert_receive(%{event: "update", topic: "data"})
      assert_patched(index_live, Routes.annotation_index_path(conn, :index, page.id))
      assert render(index_live) =~ "Annotation updated successfully"
      assert render(index_live) =~ valid_attrs.name
    end

    test "deletes annotation in listing", %{conn: conn, annotation: annotation, page: page} do
      {:ok, index_live, _html} = live(conn, Routes.annotation_index_path(conn, :index, page.id))

      assert index_live |> element("#delete-annotation-" <> to_string(annotation.id)) |> render_click()
      :timer.sleep(@receive_timeout)
      assert_receive(%{event: "delete", topic: "data"})
      refute has_element?(index_live, "#delete-annotation-" <> to_string(annotation.id))
    end
  end
end
