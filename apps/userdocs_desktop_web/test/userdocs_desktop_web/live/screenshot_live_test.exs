defmodule UserdocsDesktopWeb.ScreenshotLiveTest do
  use UserdocsDesktopWeb.ConnCase
  import Phoenix.LiveViewTest
  alias Userdocs.ProjectsFixtures
  alias Userdocs.ScreenshotFixtures
  alias Userdocs.TeamsFixtures
  alias Userdocs.UsersFixtures
  alias Userdocs.WebFixtures
  @opts %{context: %{repo: Userdocs.Repo}}
  @receive_timeout 250

  #|> open_browser(&(System.cmd("C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe", [&1])))

  defp create_password(_), do: %{password: UUID.uuid4()}
  defp create_user(%{password: password}), do: %{user: UsersFixtures.confirmed_user(password)}
  defp create_team(_), do: %{team: TeamsFixtures.team(@opts)}
  defp create_team_user(%{user: user, team: team}), do: %{team_user: TeamsFixtures.team_user(user.id, team.id, @opts)}
  defp create_strategy(_), do: %{strategy: WebFixtures.strategy(@opts)}
  defp create_project(%{team: team, strategy: strategy}), do: %{project: ProjectsFixtures.project(team.id, strategy.id, @opts)}
  defp create_screenshot(%{project: project}), do: %{screenshot: ScreenshotFixtures.screenshot(%{project_id: project.id}, @opts)}
  defp create_session(%{user: user, password: password}) do
    {:ok, _} = Client.authenticate(%{"user" => %{"email" => user.email, "password" => password}})
    %{}
  end
  defp make_selections(%{user: user, team: team, project: project}) do
    {:ok, user} = Userdocs.Users.update_user_selections(user, %{
      selected_team_id: team.id,
      selected_project_id: project.id
    }, %{context: %{repo: Userdocs.Repo}})
    %{user: user}
  end
  defp local_configs(_) do
    Userdocs.LocalOptions.create_local_options(%{
      magick_path: "C:\\Users\\johns10\\userdocs\\image_magick\\magick.exe",
      image_repo_path: "C:\\Users\\johns10\\userdocs\\internal_data\\images",
      image_path: "C:\\Users\\johns10\\userdocs\\images"
    })
    %{}
  end
  defp load_client(_) do
    Client.connect()
    Client.load()
  end

  defp valid_attrs(project) do
    ScreenshotFixtures.screenshot_attrs(:valid, %{project_id: project.id})
    |> Map.take([:name, :file_name])
  end

  defp invalid_attrs(_) do
    ScreenshotFixtures.screenshot_attrs(:invalid, %{})
    |> Map.take([:name, :file_name])
  end

  describe "Index" do
    setup [
      :create_password,
      :create_user,
      :create_team,
      :create_team_user,
      :create_strategy,
      :create_project,
      :create_screenshot,
      :make_selections,
      :create_session,
      :load_client,
      :local_configs
    ]

    setup do
      on_exit(fn -> Client.disconnect() end)
    end

    test "lists all screenshots", %{conn: conn, screenshot: screenshot} do
      {:ok, _index_live, html} = live(conn, Routes.screenshot_index_path(conn, :index))

      assert html =~ "Listing Screenshots"
      assert html =~ screenshot.name
    end

    test "saves new screenshot", %{conn: conn, project: project} do
      {:ok, index_live, _html} = live(conn, Routes.screenshot_index_path(conn, :index))

      assert index_live |> element("a", "New Screenshot") |> render_click() =~
               "New Screenshot"

      assert_patch(index_live, Routes.screenshot_index_path(conn, :new))

      assert index_live
             |> form("#screenshot-form", screenshot: invalid_attrs(project))
             |> render_change() =~ "can&#39;t be blank"

      valid_attrs = valid_attrs(project)

      {:ok, _, html} =
        index_live
        |> form("#screenshot-form", screenshot: valid_attrs)
        |> render_submit(%{screenshot: %{"project_id" => project.id}})
        |> follow_redirect(conn, Routes.screenshot_index_path(conn, :index))

      :timer.sleep(@receive_timeout)
      assert_receive(%{event: "create", topic: "data"})
      assert html =~ "Screenshot created successfully"
      assert html =~ valid_attrs.name
    end
    """
    test "updates screenshot in listing", %{conn: conn, screenshot: screenshot, project: project} do
      {:ok, index_live, _html} = live(conn, Routes.screenshot_index_path(conn, :index))

      assert index_live |> element("#edit-screenshot-" <> screenshot.id) |> render_click() =~
               "Edit Screenshot"

      assert_patch(index_live, Routes.screenshot_index_path(conn, :edit, screenshot))

      invalid_attrs = invalid_attrs(project)

      assert index_live
             |> form("#screenshot-form", screenshot: invalid_attrs)
             |> render_change(%{screenshot: %{"project_id" => ""}}) =~ "can&#39;t be blank"

      valid_attrs = valid_attrs(project)

      {:ok, _, html} =
        index_live
        |> form("#screenshot-form", screenshot: valid_attrs)
        |> render_submit(%{screenshot: %{"project_id" => project.id}})
        |> follow_redirect(conn, Routes.screenshot_index_path(conn, :index))

      :timer.sleep(@receive_timeout)
      assert_receive(%{event: "update", topic: "data"})
      assert html =~ "Screenshot updated successfully"
      assert html =~ valid_attrs.name
    end

    test "deletes screenshot in listing", %{conn: conn, screenshot: screenshot} do
      {:ok, index_live, _html} = live(conn, Routes.screenshot_index_path(conn, :index))

      assert index_live |> element("#delete-screenshot-" <> screenshot.id) |> render_click()
      :timer.sleep(@receive_timeout)
      assert_receive(%{event: "delete", topic: "data"})
      assert render(index_live) =~ "Screenshot has been deleted successfully"
      refute has_element?(index_live, "#delete-screenshot-" <> to_string(screenshot.id))
    end
    """
  end

  describe "Show" do
    setup [
      :create_password,
      :create_user,
      :create_team,
      :create_team_user,
      :create_strategy,
      :create_project,
      :create_screenshot,
      :make_selections,
      :create_session,
      :load_client,
      :create_session,
      :local_configs
    ]

    setup do
      on_exit(fn -> Client.disconnect() end)
    end
    """
    test "displays screenshot", %{conn: conn, screenshot: screenshot} do
      {:ok, _show_live, html} = live(conn, Routes.screenshot_show_path(conn, :show, screenshot))

      assert html =~ "Show Screenshot"
      assert html =~ screenshot.name
    end

    test "updates screenshot within modal", %{conn: conn, screenshot: screenshot, project: project} do
      {:ok, show_live, _html} = live(conn, Routes.screenshot_show_path(conn, :show, screenshot))

      assert show_live |> element("a", "Edit") |> render_click() =~
               "Edit Screenshot"

      assert_patch(show_live, Routes.screenshot_show_path(conn, :edit, screenshot))

      assert show_live
             |> form("#screenshot-form", screenshot: invalid_attrs(project))
             |> render_change(%{screenshot: %{"project_id" => ""}}) =~ "can&#39;t be blank"

      valid_attrs = valid_attrs(project)
      {:ok, _, html} =
        show_live
        |> form("#screenshot-form", screenshot: valid_attrs)
        |> render_submit(%{screenshot: %{"project_id" => project.id}})
        |> follow_redirect(conn, Routes.screenshot_show_path(conn, :show, screenshot))

      assert html =~ "Screenshot updated successfully"
      assert html =~ valid_attrs.name
    end
    """
  end
end
