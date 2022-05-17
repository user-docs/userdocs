defmodule BrowserController.AnnotationHandler do
  @moduledoc "Functions for applying annotations to the automated browser."
  require Logger
  alias Schemas.Annotations.Annotation
  alias Schemas.Elements.Element
  alias Schemas.Elements.ElementAnnotation

  def cast(
        %Annotation{
          id: id,
          annotation_type_id: "badge" = annotation_type,
          label: label,
          element_annotations: [
            %ElementAnnotation{element: %Element{strategy_id: strategy, selector: selector}}
          ]
        } = annotation
      ) do
    script =
      EEx.eval_string(
        """
        window.element = window.getElement('<%= strategy %>', '<%= selector %>');
        window.box = element.getBoundingClientRect();
        window.createAnnotation('<%= annotation_type %>', '<%= id %>', '<%= label %>');
        window.addRootAnnotationClass(window.getElement('css', '#userdocs-annotation-<%= id %>-locator'));
        window.absolutePositionElement('#userdocs-annotation-<%= id %>-locator', box.top, box.left);
        window.setSize('#userdocs-annotation-<%= id %>-mask', box.width, box.height);
        window.addXClass('#userdocs-badge-<%= id %>-locator', '<%= x_orientation %>');
        window.addYClass('#userdocs-badge-<%= id %>-locator', '<%= y_orientation %>');
        window.adjustPlacement('#userdocs-badge-<%= id %>-locator', <%= y_offset %>, <%= x_offset %>);
        window.setFontSize('#userdocs-annotation-<%= id %>-badge', <%= font_size %>);
        """,
        x_orientation: Map.get(annotation, :x_orientation, ""),
        y_orientation: Map.get(annotation, :y_orientation, ""),
        x_offset: Map.get(annotation, :x_offset, nil) || 0,
        y_offset: Map.get(annotation, :y_offset, nil) || 0,
        font_size: Map.get(annotation, :font_size, 0) || 0,
        annotation_type: annotation_type,
        strategy: strategy,
        selector: selector,
        id: id,
        label: label
      )

    {:ok, script}
  end

  def cast(%Annotation{
        id: id,
        color: color,
        thickness: thickness,
        annotation_type_id: "outline",
        element_annotations: element_annotations
      }) do
    Logger.debug("Creating outline annotation #{thickness}")

    script =
      EEx.eval_string(
        """
        window.elements = [];
        <%= for %{element: e} <- element_annotations do %>
        window.elements.push({strategy: '<%= e.strategy_id %>', selector: '<%= e.selector %>'});
        <% end %>
        window.box = window.getElementsBoundingBox(window.elements);
        window.createOutlineAnnotation('<%= id %>');
        window.addRootAnnotationClass(window.getElement('css', '#userdocs-annotation-<%= id %>-locator'));
        window.absolutePositionElement('#userdocs-annotation-<%= id %>-locator', window.box.top, window.box.left);
        window.setSize('#userdocs-annotation-<%= id %>-outline', window.box.width, window.box.height);
        <%= if color do %>window.setOutlineColor('#userdocs-annotation-<%= id %>-outline', '<%= color %>');<% end %>
        <%= if thickness do %>window.setOutlineWidth('#userdocs-annotation-<%= id %>-outline', '<%= thickness %>');<% end %>
        """,
        element_annotations: element_annotations,
        id: id,
        color: color,
        thickness: thickness
      )
  end

  def cast(
        %Annotation{
          id: id,
          color: color,
          thickness: thickness,
          label: label,
          annotation_type_id: "badge_outline",
          element_annotations: element_annotations
        } = annotation
      ) do
    Logger.debug("Creating badge outline annotation")

    script =
      EEx.eval_string(
        """
          window.elements = [];
          <%= for %{element: e} <- element_annotations do %>
          window.elements.push({strategy: '<%= e.strategy_id %>', selector: '<%= e.selector %>'});
          <% end %>
          window.box = window.getElementsBoundingBox(window.elements);
          window.createBadgeOutlineAnnotation('<%= id %>', '<%= label %>');
          window.addRootAnnotationClass(window.getElement('css', '#userdocs-annotation-<%= id %>-locator'));
          window.absolutePositionElement('#userdocs-annotation-<%= id %>-locator', box.top, box.left);
          window.setSize('#userdocs-annotation-<%= id %>-outline', box.width, box.height);
          window.setSize('#userdocs-annotation-<%= id %>-mask', box.width, box.height);
          window.addXClass('#userdocs-badge-<%= id %>-locator', '<%= x_orientation %>');
          window.addYClass('#userdocs-badge-<%= id %>-locator', '<%= y_orientation %>');
          window.adjustPlacement('#userdocs-badge-<%= id %>-locator', <%= y_offset %>, <%= x_offset %>);
          window.setFontSize('#userdocs-annotation-<%= id %>-badge', <%= font_size %>)
          <%= if color do %>window.setOutlineColor('#userdocs-annotation-<%= id %>-outline', '<%= color %>');<% end %>
          <%= if thickness do %>window.setOutlineWidth('#userdocs-annotation-<%= id %>-outline', '<%= thickness %>');<% end %>
        """,
        x_orientation: Map.get(annotation, :x_orientation, ""),
        y_orientation: Map.get(annotation, :y_orientation, ""),
        x_offset: Map.get(annotation, :x_offset, nil) || 0,
        y_offset: Map.get(annotation, :y_offset, nil) || 0,
        font_size: Map.get(annotation, :font_size, 0) || 0,
        element_annotations: element_annotations,
        color: color,
        label: label,
        thickness: thickness,
        id: id
      )

    {:ok, script}
  end

  def cast(%Annotation{annotation_type_id: "blur", element_annotations: element_annotations}) do
    Logger.debug("Adding blur annotation")

    script =
      EEx.eval_string(
        """
          <%= for %{element: e} <- element_annotations do %>
          window.addBlurClass(window.getElement('<%= e.strategy_id %>', '<%= e.selector %>'))
          <% end %>
        """,
        element_annotations: element_annotations
      )

    {:ok, script}
  end

  def cast(annotation) do
    Logger.warn(
      "#{__MODULE__} attempted to create an annotation with insufficient arguments: #{inspect(annotation)}"
    )

    {:warn, "Invalid annotation passed to Browser Controller"}
  end

  def remove(%Annotation{id: id}) do
    script = EEx.eval_string(
      "document.getElementById('userdocs-annotation-<%= id %>-locator').remove();",
      id: id
    )
    {:ok, script}
  end
end
