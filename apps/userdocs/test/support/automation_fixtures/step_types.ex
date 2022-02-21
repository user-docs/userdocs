defmodule Userdocs.AutomationFixtures.StepTypes do
  @moduledoc false
  def data() do
    [
      navigate = %{
        id: "navigate",
        args: ["page_form"],
        name: "Navigate"
      },
      wait = %{
        id: "wait_for_element",
        args: ["element_id", "element_form"],
        name: "Wait for Element"
      },
      click = %{
        id: "click",
        args: ["element_id", "element_form"],
        name: "Click"
      },
      fill_field = %{
        id: "fill_field",
        args: ["element_id", "element_form", "text"],
        name: "Fill Field"
      },
      apply_annotation = %{
        id: "apply_annotation",
        args: ["annotation_id", "annotation_form", "element_id", "element_form"],
        name: "Apply Annotation"
      },
      set_size_explicit = %{
        id: "set_size_explicit",
        args: ["width", "height"],
        name: "Set Size Explicit"
      },
      full_screen_screenshot = %{
        id: "full_screen_screenshot",
        args: ["screenshot_form"],
        name: "Full Screen Screenshot"
      },
      clear_annotations = %{
        id: "clear_annotations",
        args: [],
        name: "Clear Annotations"
      },
      element_screenshot = %{
        id: "element_screenshot",
        args: ["element_id", "element_form", "screenshot_form", "margin_top", "margin_bottom", "margin_left", "margin_right", "margin_left"],
        name: "Element Screenshot"
      },
      scroll_to_element = %{
        id: "scroll_to_element",
        args: ["element_id", "element_form"],
        name: "Scroll to Element"
      },
      send_enter = %{
        id: "send_enter",
        args: ["element_id", "element_form"],
        name: "Send Enter Key"
      },
      submit_form = %{
        id: "submit_form",
        args: ["element_id", "element_form"],
        name: "Submit Form"
      },
      hover = %{
        id: "hover",
        args: ["element_id", "element_form"],
        name: "Hover"
      }
    ]
  end
end
