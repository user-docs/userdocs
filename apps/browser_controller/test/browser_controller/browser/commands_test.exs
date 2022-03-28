defmodule BrowserController.Browser.CommandsTest do
  use ExUnit.Case

  alias Userdocs.AnnotationFixtures
  alias BrowserController.Utilities
  alias BrowserController.Browser
  alias BrowserController.AnnotationHandler

  @test_page_path Path.join([:code.priv_dir(:browser_controller), "static", "html", "test_page.html"])

  setup_all do
    BrowserController.ensure_browser_open()
  end

  setup %{headed_browser_pid: pid, server: server} do
    if !(Utilities.get_url(server) =~ "test_page.html") do
      Browser.execute(pid, {:navigate, %{url: @test_page_path}})
    end
    :ok
  end

  describe "Navigation" do
    test "navigates to normal URL properly", %{server: server, headed_browser_pid: browser_pid} do
      {:ok, _} = Browser.execute(browser_pid, {:navigate, %{url: "about:blank"}})
      {:ok, _} = Browser.execute(browser_pid, {:navigate, %{url: @test_page_path}})
      assert Utilities.get_url(server) =~ "test_page.html"
    end

    test "fails navigation for a bogus url", %{headed_browser_pid: browser_pid} do
      assert {:error, "net::ERR_NAME_NOT_RESOLVED"} =
        Browser.execute(browser_pid, {:navigate, %{url: "https://asdf3e33fushdg%29%2A%21/#&%)*&"}})
    end

    test "navigates to a complicated site", %{server: server, headed_browser_pid: browser_pid} do
      Browser.execute(browser_pid, {:navigate, %{url: "https://www.microsoft.com"}})
      assert Utilities.get_url(server) =~ "www.microsoft.com"
    end
  end

  describe "Highlight" do
    test "Highlight highlights an element", %{headed_browser_pid: browser_pid} do
      Browser.execute(browser_pid, {:highlight, %{selector: "#p", strategy: "css"}})
    end
  end

  describe "Set size" do
    test "sets size properly", %{headed_browser_pid: browser_pid} do
      {:ok, result} = Browser.execute(browser_pid, {:set_size, %{width: 1000, height: 1000}})
      assert result == %{width: 1000, height: 1000}
      Browser.execute(browser_pid, {:set_size, %{width: 800, height: 600}})
    end
  end

  describe "Screenshots" do
    test "full_screen_screenshot", %{headed_browser_pid: browser_pid} do
      {:ok, result} = Browser.execute(browser_pid, {:full_screen_screenshot, %{}})
      assert String.starts_with?(result, "iVBORw0KGgoAAAANSUhEU")
    end

    test "full document screenshot", %{headed_browser_pid: browser_pid} do
      {:ok, result} = Browser.execute(browser_pid, {:full_document_screenshot, %{width: 800}})
      assert String.starts_with?(result, "iVBORw0KGgoAAAANSUhEU")
    end

    test "element screenshot", %{headed_browser_pid: browser_pid} do
      {:ok, result} = Browser.execute(browser_pid, {:element_screenshot, %{strategy: "css", selector: ~w(#testForm)}})
      assert String.starts_with?(result, "iVBORw0KGgoAAAANSUhEU")
    end
  end

  describe "Fill Field" do
    test "fills a field selected with an xpath selctor", %{headed_browser_pid: browser_pid, page_pid: page_pid} do
      Browser.execute(browser_pid, {:fill_field, %{selector: ~w(//*[@id="name"]), strategy: "xpath", text: "testxpathtext"}})
      {:ok, document} = Utilities.get_document(page_pid)
      assert document =~ "testxpathtext"
    end

    test "fills a field selected with an css selctor", %{headed_browser_pid: browser_pid, page_pid: page_pid} do
      Browser.execute(browser_pid, {:fill_field, %{selector: ~w(#name), strategy: "css", text: "testcsstext"}})
      {:ok, document} = Utilities.get_document(page_pid)
      assert document =~ "testcsstext"
    end
  end

  describe "Click" do
    test "click", %{headed_browser_pid: browser_pid, page_pid: page_pid} do
      Browser.execute(browser_pid, {:click, %{selector: ~w(#testButton), strategy: "css"}})
      {:ok, document} = Utilities.get_document(page_pid)
      assert document =~ "After"
    end
  end

  describe "Evaluate Script" do
    test "evaluates a simple script", %{headed_browser_pid: browser_pid, page_pid: page_pid} do
      script = """
      var div = document.createElement("div");
      div.classList.add("userdocs-annotation");
      document.body.prepend(div);
      """
      Browser.execute(browser_pid, {:evaluate_script, %{script: script}})
      assert {:ok, _} = Utilities.get_remote_object("css", ".userdocs-annotation", page_pid)
    end
  end

  describe "Clear Annotations" do
    test "clears elements from the page", %{headed_browser_pid: browser_pid, page_pid: page_pid} do
      script = """
      var div = document.createElement("div");
      div.classList.add("userdocs-annotation");
      document.body.prepend(div);
      """
      Browser.execute(browser_pid, {:evaluate_script, %{script: script}})
      assert {:ok, _} = Utilities.get_remote_object("css", ".userdocs-annotation", page_pid)
      Browser.execute(browser_pid, {:clear_annotations, %{}})
      assert {:warn, _} = Utilities.get_remote_object("css", ".userdocs-annotation", page_pid)
    end
  end

  describe "Create Annotations" do
    setup %{headed_browser_pid: pid, page_pid: page_pid} = context do
      annotations_script =
        Path.join(File.cwd!(), "../userdocs_desktop_web/priv/static/assets/annotations.js")
        |> File.read!()

      Browser.execute(pid, {:evaluate_script, %{script: annotations_script}})
      {:ok, document} = Utilities.get_document(page_pid)
      context
    end

    test "badge creates the elements", %{headed_browser_pid: browser_pid, page_pid: page_pid} do
      annotation = AnnotationFixtures.badge_annotation_struct()
      script = AnnotationHandler.cast(annotation)
      Browser.execute(browser_pid, {:evaluate_script, %{script: script}})
      locator_id = "userdocs-annotation-#{annotation.id}-locator"
      badge_id = "userdocs-annotation-#{annotation.id}-badge"

      {:ok, locator_node_id} = Utilities.get_node_id("css", "#" <> locator_id, page_pid)
      {:ok, locator_attributes} = Utilities.get_attributes(page_pid, locator_node_id)
      {:ok, badge_node_id} = Utilities.get_node_id("css", "#" <> badge_id, page_pid)
      {:ok, badge_attributes} = Utilities.get_attributes(page_pid, badge_node_id)

      assert locator_attributes.id == locator_id
      assert String.contains?(locator_attributes.class, "userdocs-locator")
      assert badge_attributes.id == badge_id
      assert String.contains?(badge_attributes.class, "userdocs-badge")
      Browser.execute(browser_pid, {:remove_annotation, %{annotation: annotation}})
    end

    test "remove_annotation removes the annotation", %{headed_browser_pid: browser_pid, page_pid: page_pid} do
      annotation = AnnotationFixtures.badge_annotation_struct()
      {:ok, _} = Browser.execute(browser_pid, {:create_annotation, %{annotation: annotation}})
      {:ok, _locator_node_id} = Utilities.get_node_id("css", "#userdocs-annotation-1-locator", page_pid)
      Browser.execute(browser_pid, {:remove_annotation, %{annotation: annotation}})
      assert Utilities.get_node_id("css", "#userdocs-annotation-1-locator", page_pid) == {:ok, 0}
      Browser.execute(browser_pid, {:remove_annotation, %{annotation: annotation}})
    end

    test "update_annotation updates the annotation", %{headed_browser_pid: browser_pid, page_pid: page_pid} do
      annotation = AnnotationFixtures.badge_annotation_struct()
      {:ok, _} = Browser.execute(browser_pid, {:create_annotation, %{annotation: annotation}})
      annotation = annotation |> Map.put(:x_orientation, "R")
      :timer.sleep(5000)
      {:ok, _} = Browser.execute(browser_pid, {:update_annotation, %{annotation: annotation}})
      {_status, node_id} = Utilities.get_node_id("css", "#userdocs-badge-#{annotation.id}-locator", page_pid)
      {:ok, attributes} = Utilities.get_attributes(page_pid, node_id)
      assert String.contains?(attributes.class, "ud-x-right")
      Browser.execute(browser_pid, {:remove_annotation, %{annotation: annotation}})
    end
  end

  alias BrowserController.Browser.Commands

  describe "ancillary bits" do
    setup do
      {data, context} = Userdocs.ClientFixtures.data()
      Userdocs.LocalOptions.create_local_options(
        %{
          image_path: Local.Paths.default_images_path(),
          image_repo_path: Local.Paths.image_repo_path(),
          max_retries: 5,
          browser_timeout: 10_000,
          user_data_dir_path: Local.Paths.default_user_data_dir_path(),
          chrome_path: Local.Paths.chromium_path(),
          magick_path: Local.Paths.imagemagick_executable_path()
        })

      start_supervised({Client, [mode: :test]})
      user = Userdocs.UsersFixtures.user_struct(%{})
      Client.put_in_state(:data, data)
      Client.put_in_state(:current_user, user)
      on_exit(fn -> Client.destroy_state() end)

      Map.put(context, :user, user)
    end

    test "prepare fetches a screenshot on full screen screenshot", %{screenshot: screenshot} do
      assert Commands.prepare({:full_screen_screenshot, %{screenshot_id: screenshot.id}}) == %{screenshot: screenshot}
    end

    test "prepare fetches a screenshot on element screenshot", %{screenshot: screenshot} do
      assert Commands.prepare({:element_screenshot, %{screenshot_id: screenshot.id}}) == %{screenshot: screenshot}
    end

    test "prepare fetches a screenshot on a full document screenshot", %{screenshot: screenshot} do
      assert Commands.prepare({:full_document_screenshot, %{screenshot_id: screenshot.id}}) == %{screenshot: screenshot}
    end
  end
end
