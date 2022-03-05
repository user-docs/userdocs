defmodule Userdocs.AutomationFixtures.StepTypes do
  @moduledoc false
  def data() do
    [
      _navigate = %{
        id: "navigate",
        args: ["page_form"],
        name: "Navigate"
      },
      _wait = %{
        id: "wait_for_element",
        args: ["element_id", "element_form"],
        name: "Wait for Element"
      },
      _click = %{
        id: "click",
        args: ["element_id", "element_form"],
        name: "Click"
      },
      _fill_field = %{
        id: "fill_field",
        args: ["element_id", "element_form", "text"],
        name: "Fill Field"
      },
      _apply_annotation = %{
        id: "apply_annotation",
        args: ["annotation_id", "annotation_form", "element_id", "element_form"],
        name: "Apply Annotation"
      },
      _set_size_explicit = %{
        id: "set_size_explicit",
        args: ["width", "height"],
        name: "Set Size Explicit"
      },
      _full_screen_screenshot = %{
        id: "full_screen_screenshot",
        args: ["screenshot_form"],
        name: "Full Screen Screenshot"
      },
      _clear_annotations = %{
        id: "clear_annotations",
        args: [],
        name: "Clear Annotations"
      },
      _element_screenshot = %{
        id: "element_screenshot",
        args: ["element_id", "element_form", "screenshot_form", "margin_top", "margin_bottom", "margin_left", "margin_right", "margin_left"],
        name: "Element Screenshot"
      },
      _scroll_to_element = %{
        id: "scroll_to_element",
        args: ["element_id", "element_form"],
        name: "Scroll to Element"
      },
      _send_enter = %{
        id: "send_enter",
        args: ["element_id", "element_form"],
        name: "Send Enter Key"
      },
      _submit_form = %{
        id: "submit_form",
        args: ["element_id", "element_form"],
        name: "Submit Form"
      },
      _hover = %{
        id: "hover",
        args: ["element_id", "element_form"],
        name: "Hover"
      }
    ]
  end
end
