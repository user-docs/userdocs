defmodule UserdocsDesktopWeb.ElementLiveTest do
  use UserdocsDesktopWeb.ConnCase
  import Phoenix.LiveViewTest
  alias Userdocs.ProjectsFixtures
  alias Userdocs.UsersFixtures
  alias Userdocs.TeamsFixtures
  alias Userdocs.WebFixtures
  alias Userdocs.ExtensionMessageFixtures

  @opts %{context: %{repo: Userdocs.Repo}}
  @receive_timeout 250

  #open_browser(index_live, &(System.cmd("C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe", [&1])))

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

      valid_attrs = WebFixtures.element_attrs(:valid, page.id, strategy.id)

      html =
        index_live
        |> form("#element-form", element: valid_attrs)
        |> render_submit()

      assert_receive(%{event: "create", topic: "data"})
      assert_patch(index_live, Routes.element_index_path(conn, :index, page.id))
      assert render(index_live) =~ "Element created successfully"
      assert render(index_live) =~ valid_attrs.name
    end

    test "updates element in listing", %{conn: conn, page: page, strategy: strategy, element: element} do
      {:ok, index_live, _html} = live(conn, Routes.element_index_path(conn, :index, page.id))

      assert index_live |> element("#edit-element-" <> to_string(element.id)) |> render_click() =~
               "Edit Element"

      assert_patch(index_live, Routes.element_index_path(conn, :edit, page.id, element.id))

      assert index_live
             |> form("#element-form", element: WebFixtures.element_attrs(:invalid, page.id, strategy.id))
             |> render_change() =~ "can&#39;t be blank"

      valid_attrs = WebFixtures.element_attrs(:valid, page.id, strategy.id)

      html =
        index_live
        |> form("#element-form", element: valid_attrs)
        |> render_submit()

      assert_receive(%{event: "update", topic: "data"})
      assert_patch(index_live, Routes.element_index_path(conn, :index, page.id))
      assert render(index_live) =~ "Element updated successfully"
    end

    test "deletes element in listing", %{conn: conn, page: page, element: element} do
      {:ok, index_live, _html} = live(conn, Routes.element_index_path(conn, :index, page.id))

      assert index_live |> element("#delete-element-" <> to_string(element.id)) |> render_click()
      assert_receive(%{event: "delete", topic: "data"})
      refute has_element?(index_live, "#delete-element-" <> to_string(element.id))
    end

    test "click browser events", %{conn: conn, page: page, element: element} do
      {:ok, index_live, _html} = live(conn, Routes.element_index_path(conn, :index, page.id))

      message = ExtensionMessageFixtures.extension_message(:valid, %{action: "click", href: page.url})
      send(index_live.pid, %{topic: "extension", event: "browser_interaction", payload: message})
      assert element(index_live, ".alert-info")
             |> render() =~ "Would you like to create the element you are interacting with?"

      message = ExtensionMessageFixtures.extension_message(:valid, %{action: "click", generated_selector: element.selector, href: page.url})
      send(index_live.pid, %{topic: "extension", event: "browser_interaction", payload: message})
      assert element(index_live, ".alert-info")
             |> render() =~ "Would you like to update the element you are interacting with?"

      message = ExtensionMessageFixtures.extension_message(:valid, %{action: "click", generated_selector: element.selector, href: "https://www.user-docs.com/somepage"})
      send(index_live.pid, %{topic: "extension", event: "browser_interaction", payload: message})
      assert element(index_live, ".alert-info")
             |> render() =~ "The page you are on does not exist. Would you like to create it?"
    end
  end
end
