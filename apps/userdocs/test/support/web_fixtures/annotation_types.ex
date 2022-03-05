defmodule Userdocs.WebFixtures.AnnotationTypes do
  @moduledoc false
  def data() do
    [
      _outline = %{
        id: "outline",
        args: ["color", "thickness"],
        name: "Outline",
        max_elements: 999,
      },
      _blur = %{
        id: "blur",
        args: ["color", "thickness"],
        name: "Blur",
        max_elements: 999,
      },
      _badge = %{
        id: "badge",
        args: ["x_orientation", "y_orientation", "size", "label", "color", "x_offset", "y_offset", "font_size"],
        name: "Badge",
        max_elements: 1,
      },
      _badge_outline = %{
        id: "badge_outline",
        args: ["x_orientation", "y_orientation", "size", "label", "color",
          "thickness", "x_offset", "y_offset", "font_size"],
        name: "Badge Outline",
        max_elements: 999,
      },
      _badge_blur = %{
        id: "badge_blur",
        args: ["x_orientation", "y_orientation", "size", "label", "color", "x_offset", "y_offset", "font_size"],
        name: "Badge Blur",
        max_elements: 999,
      },
      _none = %{
        id: "none",
        args: [],
        name: "None",
        max_elements: 0,
      }
    ]
  end
end
