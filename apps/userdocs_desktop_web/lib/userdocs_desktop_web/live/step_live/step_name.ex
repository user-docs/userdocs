defmodule UserdocsDesktopWeb.StepLive.StepName do
  @moduledoc "Comes up with names for steps for display purposes"

  require Logger
  alias Schemas.Pages.Page
  alias Schemas.Steps.Step
  alias Schemas.Annotations.Annotation
  alias Schemas.Annotations.AnnotationType
  alias Schemas.Elements.ElementAnnotation
  alias Schemas.Elements.Element

  def cast(%Step{step_type_id: "navigate", page: %Page{name: name}}) do
    "Navigate to " <> name
  end
  def cast(%Step{step_type_id: "navigate"}), do: "Navigate"

  def cast(%Step{step_type_id: "set_size_explicit", width: width, height: height}) do
    "Set Size to #{width} X #{height}"
  end
  def cast(%Step{step_type_id: "set_size_explicit"}), do: "Set Size"

  def cast(
    %Step{step_type_id: "apply_annotation",
      annotation: %Annotation{
        annotation_type: %AnnotationType{name: annotation_type_name},
        element_annotations: [%ElementAnnotation{element: element}]
      }
    }
  ) do
    "#{annotation_type_name} #{element_name(element)}"
  end
  def cast(
    %Step{step_type_id: "apply_annotation",
      annotation: %Annotation{
        annotation_type: %AnnotationType{name: annotation_type_name},
        element_annotations: [_ | _]
      }
    }
  ) do
    "#{annotation_type_name} Multiple Elements"
  end
  def cast(
    %Step{step_type_id: "apply_annotation",
      annotation: %Annotation{
        annotation_type: %AnnotationType{name: annotation_type_name},
        element_annotations: []
      }
    }
  ) do
    "#{annotation_type_name} No Elements"
  end
  def cast(%Step{step_type_id: "apply_annotation"}), do: "Apply Annotation"

  def cast(%Step{step_type_id: "fill_field", text: text, element: element}) do
    "Fill #{element_name(element)} field with #{text}"
  end

  def cast(%Step{step_type_id: "clear_annotations"}), do: "Clear Annotations"

  def cast(%Step{step_type_id: "full_screen_screenshot"}), do: "Full Screen Screenshot"

  def cast(%Step{step_type_id: "element_screenshot", element: element}),
    do: "Element Screenshot of #{element_name(element)}"

  def cast(%Step{step_type_id: "click", element: element}),
    do: "Click on #{element_name(element)}"

  def cast(%Step{step_type_id: nil}), do: "Unconfigured Step"
  def cast(%Step{step_type_id: "none"}), do: "Unconfigured Step"

  def cast(%Step{step_type_id: step_type_id}), do: "Unhandled name, #{step_type_id}"

  def element_name(%Element{name: name}), do: name
  def element_name(nil), do: "No Element"
  def element_name(problem), do: "#{inspect problem}"
end
