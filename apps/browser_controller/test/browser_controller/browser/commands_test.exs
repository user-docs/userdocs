defmodule BrowserController.Browser.CommandsTest do
  use ExUnit.Case

  alias Userdocs.AnnotationFixtures
  alias BrowserController.Utilities
  alias BrowserController.Browser
  alias BrowserController.AnnotationHandler

  @test_page_path Path.join([:code.priv_dir(:browser_controller), "static", "html", "test_page.html"])

  setup_all do
    result = BrowserController.ensure_browser_open()
    BrowserController.execute({:navigate, %{url: @test_page_path}})
    result
  end

  describe "Navigation" do
    setup do
      BrowserController.execute({:navigate, %{url: "about:blank"}})
    end

    test "navigates to normal URL properly", %{server: server, headed_browser_pid: browser_pid} do
      {:ok, _} = Browser.execute(browser_pid, {:navigate, %{url: @test_page_path}})
      assert Utilities.get_url(server) =~ "test_page.html"
    end
  end

  describe "Highlight" do
    test "Highlight highlights an element", %{headed_browser_pid: browser_pid} do
      Browser.execute(browser_pid, {:highlight, %{selector: "#p", strategy: "css"}})
    end
  end

  describe "Set size" do
    test "sets size properly", %{headed_browser_pid: browser_pid} do
      {:ok, result} = Browser.execute(browser_pid, {:set_size, %{width: 40, height: 40}})
      assert result == %{width: 23, height: 23}
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
    setup %{headed_browser_pid: pid} = context do
      annotations_script =
        Path.join(File.cwd!(), "../userdocs_desktop_web/priv/static/assets/annotations.js")
        |> File.read!()

      Browser.execute(pid, {:evaluate_script, %{script: annotations_script}})
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
      Browser.execute(browser_pid, {:create_annotation, %{annotation: annotation}})
      {:ok, _locator_node_id} = Utilities.get_node_id("css", "#userdocs-annotation-1-locator", page_pid)
      Browser.execute(browser_pid, {:remove_annotation, %{annotation: annotation}})
      assert Utilities.get_node_id("css", "#userdocs-annotation-1-locator", page_pid) == {:ok, 0}
      Browser.execute(browser_pid, {:remove_annotation, %{annotation: annotation}})
    end

    test "update_annotation updates the annotation", %{headed_browser_pid: browser_pid, page_pid: page_pid} do
      annotation = AnnotationFixtures.badge_annotation_struct()
      Browser.execute(browser_pid, {:create_annotation, %{annotation: annotation}})
      annotation = annotation |> Map.put(:x_orientation, "R")
      Browser.execute(browser_pid, {:update_annotation, %{annotation: annotation}})
      {status, node_id} = Utilities.get_node_id("css", "#userdocs-badge-#{annotation.id}-locator", page_pid)
      {:ok, attributes} = Utilities.get_attributes(page_pid, node_id)
      assert String.contains?(attributes.class, "ud-x-right")
      Browser.execute(browser_pid, {:remove_annotation, %{annotation: annotation}})
    end
  end
end
