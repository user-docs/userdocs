defmodule UserdocsDesktopWeb.PageLiveTest do
  use UserdocsDesktopWeb.ConnCase
  import Phoenix.LiveViewTest
  alias Userdocs.ProjectsFixtures
  alias Userdocs.UsersFixtures
  alias Userdocs.TeamsFixtures
  alias Userdocs.WebFixtures
  alias Userdocs.ExtensionMessageFixtures
  alias UserdocsDesktop.BrowserController
  @opts %{context: %{repo: Userdocs.Repo}}
  @test_page_path Path.join([:code.priv_dir(:userdocs_desktop_web), "static", "html", "test_page.html"])
  @receive_timeout 250

  #|> open_browser(&(System.cmd("C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe", [&1])))

  defp create_password(_), do: %{password: UUID.uuid4()}
  defp create_user(%{password: password}), do: %{user: UsersFixtures.confirmed_user(password)}
  defp create_team(_), do: %{team: TeamsFixtures.team(@opts)}
  defp create_team_user(%{user: user, team: team}), do: %{team_user: TeamsFixtures.team_user(user.id, team.id, @opts)}
  defp create_strategy(_), do: %{strategy: WebFixtures.strategy(@opts)}
  defp create_project(%{team: team, strategy: strategy}), do: %{project: ProjectsFixtures.project(team.id, strategy.id, @opts)}
  defp create_page(%{project: project}) do
    {:ok, page } =
      WebFixtures.page_attrs(:relative, project.id)
      |> Map.put(:url, @test_page_path)
      |> Userdocs.Pages.create_page(@opts)

    %{page: page}
  end
  defp create_session(%{user: user, password: password}) do
    {:ok, _} = Client.authenticate(%{"user" => %{"email" => user.email, "password" => password}})
    %{}
  end
  defp make_selections(%{user: user, team: team, project: project}) do
    {:ok, user} = Userdocs.Users.update_user_selections(user, %{selected_team_id: team.id, selected_project_id: project.id}, %{context: %{repo: Userdocs.Repo}})
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

  setup_all do
    BrowserController.open_browser("{key: value}")
    on_exit(fn -> BrowserController.close_browser() end)
    :ok
  end

  describe "Browser Automation" do
    alias Userdocs.Screenshots

    setup [
      :create_password,
      :create_user,
      :create_team,
      :create_team_user,
      :create_strategy,
      :create_project,
      :create_page,
      :make_selections,
      :create_session,
      :load_client,
      :local_configs
    ]

    setup do
      on_exit(fn -> Client.disconnect() end)
    end

    defp wait_for_empty_queue() do
      case BrowserController.is_empty?() do
        true -> true
        false ->
          :timer.sleep(100)
          wait_for_empty_queue()
      end
    end

    test "full screen screenshot without a screenshot", %{conn: conn, page: page} do
      {:ok, index_live, _html} = live(conn, Routes.page_index_path(conn, :index))
      index_live |> element("#screenshot-page-" <> to_string(page.id)) |> render_click()
      wait_for_empty_queue()
      screenshot = Userdocs.Screenshots.list_screenshots(@opts) |> Enum.filter(fn(s) -> s.page_id == page.id end) |> Enum.at(0)
      assert screenshot.page_id == page.id
    end

    test "full screen screenshot with an existing screenshot", %{conn: conn, project: project,  page: page} do
      id = Ecto.UUID.generate()
      attrs = %{status: :ok, id: id, page_id: page.id, project_id: project.id} |> Map.merge(Screenshots.aws_files_attrs(id))
      Screenshots.create_aws_files(id, nil)
      {:ok, screenshot} = Screenshots.create_screenshot(attrs, @opts)
      Client.load()
      {:ok, index_live, _html} = live(conn, Routes.page_index_path(conn, :index))
      index_live |> element("#screenshot-page-" <> to_string(page.id)) |> render_click()
      wait_for_empty_queue()
      #assert UserdocsDesktop.Paths.image_repo_path() |> Path.join(to_string(screenshot.id) <> ".png") |> File.exists?()
    end
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
      :create_session,
      :load_client
    ]

    setup do
      on_exit(fn -> Client.disconnect() end)
    end

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

      index_live
      |> form("#page-form", page: valid_attrs)
      |> render_submit()

      assert_receive(%{event: "create", topic: "data"}, @receive_timeout)
      assert_patched(index_live, Routes.page_index_path(conn, :index))
      assert render(index_live) =~ "Page created successfully"
      assert render(index_live) =~ valid_attrs.name
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

      index_live
      |> form("#page-form", page: valid_attrs)
      |> render_submit()

      :timer.sleep(@receive_timeout)
      assert_receive(%{event: "update", topic: "data"})
      assert_patched(index_live, Routes.page_index_path(conn, :index))
      assert render(index_live) =~ "Page updated successfully"
      assert render(index_live) =~ valid_attrs.name
    end

    test "deletes page in listing", %{conn: conn, page: page} do
      {:ok, index_live, _html} = live(conn, Routes.page_index_path(conn, :index))
      assert index_live |> element("#delete-page-" <> to_string(page.id)) |> render_click()

      assert_receive(%{event: "delete", topic: "data"})
      refute has_element?(index_live, "#delete-page-" <> to_string(page.id))
    end

    test "navigate browser events", %{conn: conn, project: project, page: page} do
      {:ok, index_live, _html} = live(conn, Routes.page_index_path(conn, :index))

      message = ExtensionMessageFixtures.extension_message(:valid, %{action: "navigate", href: "https://www.user-docs.com/asdfasdf", page_title: "new page"})
      send(index_live.pid, %{topic: "extension", event: "browser_interaction", payload: message})
      assert element(index_live, ".alert-info")
             |> render() =~ "The page you are on does not exist. Would you like to create it?"

      message = ExtensionMessageFixtures.extension_message(:valid, %{action: "navigate", href: page.url, page_title: page.name})
      send(index_live.pid, %{topic: "extension", event: "browser_interaction", payload: message})
      assert element(index_live, ".alert-info")
             |> render() =~ "Would you like to update the page you are interacting with?"

      url = to_string(project.base_url) <>"/testurl"
      message = ExtensionMessageFixtures.extension_message(:valid, %{action: "navigate", href: url, page_title: page.name})
      send(index_live.pid, %{topic: "extension", event: "browser_interaction", payload: message})
      assert element(index_live, ".alert-info")
             |> render() =~ "The page you are on does not exist. Would you like to create it?"
    end
  end

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
      :create_session,
      :load_client
    ]

    setup do
      on_exit(fn -> Client.disconnect() end)
    end

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

      show_live
      |> form("#page-form", page: WebFixtures.page_attrs(:valid, project.id))
      |> render_submit()

      :timer.sleep(@receive_timeout)
      assert_receive(%{event: "update", topic: "data"})
      assert_patched(show_live, Routes.page_show_path(conn, :show, page))
      assert render(show_live) =~ "Page updated successfully"
    end
  end
end
