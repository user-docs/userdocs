defmodule UserdocsDesktopWeb.PageLiveTest do
  use UserdocsDesktopWeb.ConnCase
  import Phoenix.LiveViewTest
  alias Userdocs.ProjectsFixtures
  alias Userdocs.UsersFixtures
  alias Userdocs.TeamsFixtures
  alias Userdocs.WebFixtures
  alias Userdocs.ExtensionMessageFixtures
  @opts %{context: %{repo: Userdocs.Repo}}
  @test_page_path Path.join([:code.priv_dir(:userdocs_desktop_web), "static", "html", "test_page.html"])
  @receive_timeout 250

  #|> open_browser(index_live, &(System.cmd("C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe", [&1])))


  setup_all do
    BrowserController.ensure_browser_open()
  end

  describe "Browser Automation" do
    alias Userdocs.Screenshots

    setup do
      {data, context} = Userdocs.ClientFixtures.local_data()
      Client.init_state()
      Client.put_in_state(:current_user, context.user)
      Client.put_in_state(:context, context.context)
      Client.put_in_state(:data, data)
      UserdocsDesktopWeb.Endpoint.subscribe("data")
      context
    end

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
      {:ok, index_live, _html} = live(conn, Routes.page_index_path(conn, :index))
      index_live |> element("#screenshot-page-" <> to_string(page.id)) |> render_click()
      wait_for_empty_queue()
      assert_receive(%{event: "update", topic: "data"}, @receive_timeout)
    end
  end

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

    test "lists all pages", %{conn: conn, page: page} do
      {:ok, _index_live, html} = live(conn, Routes.page_index_path(conn, :index))

      assert html =~ "Listing Pages"
      assert html =~ page.name
    end

    test "saves new page", %{conn: conn, project: project, team: team} do
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
      assert_patch(index_live, Routes.page_index_path(conn, :index))
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

      assert_receive(%{event: "update", topic: "data"})
      assert_patch(index_live, Routes.page_index_path(conn, :index))
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

      assert_receive(%{event: "update", topic: "data"})
      assert_patch(show_live, Routes.page_show_path(conn, :show, page))
      assert render(show_live) =~ "Page updated successfully"
    end
  end
end
