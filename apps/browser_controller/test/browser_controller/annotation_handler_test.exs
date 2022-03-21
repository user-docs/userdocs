defmodule BrowserController.AnnotationsTest do
  use ExUnit.Case
  alias BrowserController.AnnotationHandler
  alias BrowserController.Browser
  alias BrowserController.Utilities
  alias Userdocs.AnnotationFixtures

  describe "Annotations Handler" do
    test "builds badge annotation properly" do
      result = AnnotationHandler.cast(AnnotationFixtures.badge_annotation_struct())
      assert result =~ "window.element = window.getElement"
    end

    test "builds outline annotation properly" do
      result = AnnotationHandler.cast(AnnotationFixtures.outline_annotation_struct())
      assert result =~ "window.elements.push({strategy: 'css', selector: '//body'})"
    end

    test "builds badge outline annotation properly" do
      result = AnnotationHandler.cast(AnnotationFixtures.badge_outline_struct())
      assert result =~ "window.elements.push({strategy: 'css', selector: '//html'})"
    end

    test "builds blur annotation properly" do
      result = AnnotationHandler.cast(AnnotationFixtures.blur_annotation_struct())
      assert result =~ "window.addBlurClass"
    end
  end

  describe "Annotations Scripts Run in Browser" do
    setup do
      %{headed_browser_pid: pid} = result = BrowserController.ensure_browser_open()
      BrowserController.execute({:navigate, %{url: @test_page_path}})

      annotations_script =
        Path.join(File.cwd!(), "../userdocs_desktop_web/priv/static/assets/annotations.js")
        |> File.read!()

      Browser.execute(pid, {:evaluate_script, %{script: annotations_script}})
      result
    end

    test "badge creates the elements", %{headed_browser_pid: browser_pid, page_pid: page_pid} do
      annotation = AnnotationFixtures.badge_annotation_struct()
      script = AnnotationHandler.cast(annotation)
      Browser.execute(browser_pid, {:evaluate_script, %{script: script}})
      locator_id = "#userdocs-annotation-#{annotation.id}-locator"
      badge_id = "#userdocs-annotation-#{annotation.id}-badge"

      {:ok, locator_node_id} = Utilities.get_node_id("css", locator_id, page_pid)
      {:ok, locator_attributes} = Utilities.get_attributes(page_pid, locator_node_id)
      {:ok, badge_node_id} = Utilities.get_node_id("css", badge_id, page_pid)
      {:ok, badge_attributes} = Utilities.get_attributes(page_pid, badge_node_id)

      assert locator_attributes.id == locator_id
      assert "userdocs-locator" in locator_attributes.class
      assert badge_attributes.id == badge_id
      assert "userdocs-badge" in badge_attributes
    end
  end
end
