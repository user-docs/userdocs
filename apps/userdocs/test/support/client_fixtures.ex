defmodule Userdocs.ClientFixtures do
  alias Userdocs.StepFixtures
  alias Userdocs.AnnotationFixtures
  alias Userdocs.ElementAnnotationFixtures

  def data() do
    project = Userdocs.ProjectsFixtures.project_struct()
    page = Userdocs.PageFixtures.page_struct(%{project_id: project.id})
    element = Userdocs.WebFixtures.element_struct(page.id, "css")
    screenshot = Userdocs.ScreenshotFixtures.screenshot_struct(%{project_id: project.id})
    badge_annotation = AnnotationFixtures.annotation_struct(%{annotation_type_id: "badge", label: "1"})

    navigate_step = StepFixtures.step_struct(%{step_type_id: "navigate", page_id: page.id})
    click_step = StepFixtures.step_struct(%{step_type_id: "click", element_id: element.id})
    clear_step = StepFixtures.step_struct(%{step_type_id: "clear_annotations"})
    nothing_step = StepFixtures.step_struct(%{step_type_id: "do_nothing"})

    badge_annotation_step =
      StepFixtures.step_struct(%{step_type_id: "apply_annotation", annotation_id: badge_annotation.id})

    set_size_step =
      StepFixtures.step_struct(%{step_type_id: "set_size_explicit", width: 600, height: 800})

    full_screen_screenshot_step =
      StepFixtures.step_struct(%{step_type_id: "full_screen_screenshot"})

    element_screenshot_step =
      StepFixtures.step_struct(%{step_type_id: "element_screenshot", element_id: element.id})

    fill_field_step =
      StepFixtures.step_struct(%{step_type_id: "fill_field", element_id: element.id})

    data = %{
      projects: [project],
      annotations: [
        badge_annotation
      ],
      element_annotations: [
        ElementAnnotationFixtures.element_annotation_struct(element.id, badge_annotation.id)
      ],
      steps: [
        navigate_step,
        set_size_step,
        full_screen_screenshot_step,
        element_screenshot_step,
        fill_field_step,
        click_step,
        clear_step,
        badge_annotation_step,
        nothing_step
      ],
      pages: [page],
      screenshots: [screenshot],
      elements: [element],
      annotation_types: Userdocs.AnnotationTypeFixtures.all_valid_annotation_type_structs(),
      step_types: Userdocs.StepTypeFixtures.all_valid_step_type_structs()
    }

    context = %{
      navigate: navigate_step,
      set_size: set_size_step,
      full_screen_screenshot: full_screen_screenshot_step,
      element_screenshot: element_screenshot_step,
      fill_field: fill_field_step,
      click: click_step,
      clear: clear_step,
      badge: badge_annotation_step,
      nothing: nothing_step,
      screenshot: screenshot
    }

    {data, context}
  end
end
