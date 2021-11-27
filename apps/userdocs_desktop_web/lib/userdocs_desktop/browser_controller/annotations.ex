defmodule UserdocsDesktop.BrowserController.Annotations do
  require Logger
  alias Schemas.Annotations.Annotation
  alias Schemas.Elements.Element
  alias Schemas.Elements.ElementAnnotation
  alias ChromeRemoteInterface.RPC.Runtime
  alias UserdocsDesktop.BrowserController.Utilities
  alias ChromeRemoteInterface.RPC.DOM

  def create(page_pid, %Annotation{
    id: id, annotation_type_id: "badge" = annotation_type, label: label, element_annotations:
    [%ElementAnnotation{element: %Element{strategy_id: strategy, selector: selector}}]} = annotation
  ) do
    {:ok, element_node_id} = Utilities.get_node_id(strategy, selector, page_pid)
    box = Utilities.get_box(page_pid, element_node_id)
    left = trunc(box.padding.upper_left.x)
    top = trunc(box.padding.upper_left.y)
    width = trunc(box.padding.upper_right.x - box.padding.upper_left.x)
    height = trunc(box.padding.lower_left.y - box.padding.upper_left.y)
    x_orientation = Map.get(annotation, :x_orientation, "")
    y_orientation = Map.get(annotation, :y_orientation, "")
    x_offset = Map.get(annotation, :x_offset, nil) || 0 |> IO.inspect()
    y_offset = Map.get(annotation, :y_offset, nil) || 0 |> IO.inspect()
    font_size = Map.get(annotation, :font_size, 0) || 0 |> IO.inspect()
    expression = """
      window.createAnnotation('#{annotation_type}', #{id}, #{label});
      window.absolutePositionElement('#userdocs-annotation-#{id}-locator', #{top}, #{left});
      window.setSize('#userdocs-annotation-#{id}-mask', #{width}, #{height});
      window.addXClass('#userdocs-badge-#{id}-locator', '#{x_orientation}');
      window.addYClass('#userdocs-badge-#{id}-locator', '#{y_orientation}');
      window.adjustPlacement('#userdocs-badge-#{id}-locator', #{y_offset}, #{x_offset});
      window.setFontSize('#userdocs-annotation-#{id}-badge', #{font_size})
    """ |> IO.inspect()
    Runtime.evaluate(page_pid, %{expression: expression}) |> IO.inspect()
  end
  def create(_page_pid, _annotation), do: Logger.warn("#{__MODULE__} attempted to create an annotation with insufficient arguments")

  def remove(page_pid, %Annotation{id: id}) do
    {:ok, node_id} = Utilities.get_node_id("css", "#userdocs-annotation-#{id}-locator", page_pid)
    DOM.removeNode(page_pid, %{nodeId: node_id})
  end

  ###################### Maybe usefull later ####################
  ~s"""
  def place(page_pid, %Annotation{id: id, element_annotations:
    [%ElementAnnotation{element: %Element{strategy_id: strategy, selector: selector}}]} = annotation
  ) do
    {:ok, element_node_id} = Utilities.get_node_id(strategy, selector, page_pid)
    box = Utilities.get_box(page_pid, element_node_id)
    place_locator_node(page_pid, box, id)
    set_size(page_pid, box, "#userdocs-annotation-#~{id}-mask")
    add_orientation_classes(page_pid, "#userdocs-badge-#~{id}-locator", annotation)
    adjust_badge_placement(page_pid, annotation)
  end

  def place_locator_node(page_pid, box, id) do
    {:ok, locator_node_id} = Utilities.get_node_id("css", "#userdocs-annotation-#~{id}-locator", page_pid)
    style = "left: #~{trunc(box.padding.upper_left.x)}px; top: #~{trunc(box.padding.upper_left.y)}px;"
    DOM.setAttributeValue(page_pid, %{nodeId: locator_node_id, name: "style", value: style})
  end

  def set_size(page_pid, box, id) do
    {:ok, node_id} = Utilities.get_node_id("css", id, page_pid)
    width = box.padding.upper_right.x - box.padding.upper_left.x
    height = box.padding.lower_left.y - box.padding.upper_left.y
    style = "width: #~{trunc(width)}px; height: #~{trunc(height)}px;"
    DOM.setAttributeValue(page_pid, %{nodeId: node_id, name: "style", value: style})
  end

  def add_orientation_classes(page_pid, node_id, annotation) do
    {:ok, badge_locator_node_id} = Utilities.get_node_id("css", node_id, page_pid)
    {:ok, attributes} = Utilities.get_attributes(page_pid, badge_locator_node_id)
    attributes
    |> Map.get(:class, "")
    |> maybe_add_x_class(Map.get(annotation, :x_orientation, nil))
    |> maybe_add_y_class(Map.get(annotation, :y_orientation, nil))
    |> Utilities.maybe_set_class(page_pid, badge_locator_node_id)
  end

  def maybe_add_x_class(current_class, nil), do: current_class
  def maybe_add_x_class(current_class, "M"), do: current_class <> " ud-x-middle"
  def maybe_add_x_class(current_class, "R"), do: current_class <> " ud-x-right"
  def maybe_add_x_class(current_class, "L"), do: current_class <> " ud-x-left"

  def maybe_add_y_class(current_class, nil), do: current_class
  def maybe_add_y_class(current_class, "M"), do: current_class <> " ud-y-middle"
  def maybe_add_y_class(current_class, "T"), do: current_class <> " ud-y-top"
  def maybe_add_y_class(current_class, "B"), do: current_class <> " ud-y-bottom"

  def adjust_badge_placement(page_pid, %Annotation{id: id} = annotation) do
    {:ok, node_id} = Utilities.get_node_id("css", "#userdocs-annotation-#~{id}-badge", page_pid)
    {:ok, attrs} = Utilities.get_attributes(page_pid, node_id)
    Map.get(attrs, :style, "")
    |> maybe_apply_x_offset(Map.get(annotation, :x_offset, nil))
    |> maybe_apply_y_offset(Map.get(annotation, :y_offset, nil))
    |> maybe_apply_font_size(Map.get(annotation, :font_size, nil))
    |> maybe_apply_color(Map.get(annotation, :color, nil))
    |> Utilities.maybe_set_attr("style", page_pid, node_id)
  end

  def maybe_apply_x_offset(acc, nil), do: acc
  def maybe_apply_x_offset(acc, x_offset), do: acc <> " left: #~{x_offset}px;"

  def maybe_apply_y_offset(acc, nil), do: acc
  def maybe_apply_y_offset(acc, y_offset), do: acc <> " top: #~{y_offset}px;"

  def maybe_apply_font_size(acc, nil), do: acc
  def maybe_apply_font_size(acc, font_size), do: acc <> " font-size: #~{font_size}px;"

  def maybe_apply_color(acc, nil), do: acc
  def maybe_apply_color(acc, color), do: acc <> " background-color: #~{color};"

  def maybe_apply_size(acc, nil), do: acc
  def maybe_apply_size(acc, size), do: acc <> " width: #~{size}px; height: #~{size}px;"
  """
end
