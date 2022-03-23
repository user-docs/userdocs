defmodule BrowserController.AnnotationsTest do
  use ExUnit.Case
  alias BrowserController.AnnotationHandler
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
end
