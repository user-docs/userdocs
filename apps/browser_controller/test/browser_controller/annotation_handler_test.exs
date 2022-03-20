defmodule BrowserController.AnnotationsTest do
  use ExUnit.Case
  alias BrowserController.AnnotationHandler
  alias Schemas.Annotations.Annotation
  alias Schemas.Elements.ElementAnnotation
  alias Schemas.Elements.Element

  describe "Annotations Handler" do
    test "builds badge annotation properly" do
      result =
        %Annotation{
          id: UUID.uuid4(),
          annotation_type_id: "badge",
          label: "1",
          element_annotations: [
            %ElementAnnotation{element: %Element{strategy_id: "css", selector: "//html"}}
          ]
        }
        |> AnnotationHandler.cast()

      assert result =~ "window.element = window.getElement('css', '//html')"
    end

    test "builds outline annotation properly" do
      result =
        %Annotation{
          id: UUID.uuid4(),
          annotation_type_id: "outline",
          thickness: "4",
          color: "green",
          element_annotations: [
            %ElementAnnotation{element: %Element{strategy_id: "css", selector: "//html"}},
            %ElementAnnotation{element: %Element{strategy_id: "css", selector: "//body"}}
          ]
        }
        |> AnnotationHandler.cast()

      assert result =~ "window.elements.push({strategy: 'css', selector: '//body'})"
    end

    test "builds badge outline annotation properly" do
      result =
        %Annotation{
          id: UUID.uuid4(),
          annotation_type_id: "badge_outline",
          thickness: "4",
          label: "4",
          color: "green",
          element_annotations: [
            %ElementAnnotation{element: %Element{strategy_id: "css", selector: "//html"}},
            %ElementAnnotation{element: %Element{strategy_id: "css", selector: "//body"}}
          ]
        }
        |> AnnotationHandler.cast()

      assert result =~ "window.elements.push({strategy: 'css', selector: '//html'})"
    end

    test "builds blur annotation properly" do
      result =
        %Annotation{
          id: UUID.uuid4(),
          annotation_type_id: "blur",
          element_annotations: [
            %ElementAnnotation{element: %Element{strategy_id: "css", selector: "//html"}}
          ]
        }
        |> AnnotationHandler.cast()

      assert result =~ "window.addBlurClass(window.getElement('css', '//html'))"
    end
  end
end
