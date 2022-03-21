defmodule BrowserController.Browser.StepHandlerTest do
  use ExUnit.Case
  use BrowserController.DataCase
  alias BrowserController.Browser.StepHandler

  describe "Step Handlers" do
    setup do
      alias Userdocs.StepFixtures
			alias Userdocs.AnnotationFixtures
			alias Userdocs.ElementAnnotationFixtures

      start_supervised({Client, [mode: :test]})
      user = Userdocs.UsersFixtures.user_struct(%{})
      project = Userdocs.ProjectsFixtures.project_struct()
      page = Userdocs.PageFixtures.page_struct(%{project_id: project.id})
      element = Userdocs.WebFixtures.element_struct(page.id, "css")
      screenshot = Userdocs.ScreenshotFixtures.screenshot_struct(%{project_id: project.id})
			badge_annotation = AnnotationFixtures.annotation_struct(%{annotation_type_id: "badge", label: "1"})

      navigate_step = StepFixtures.step_struct(%{step_type_id: "navigate", page_id: page.id})
      click_step = StepFixtures.step_struct(%{step_type_id: "click", element_id: element.id})
      clear_step = StepFixtures.step_struct(%{step_type_id: "clear_annotations"})
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
					badge_annotation_step
        ],
        pages: [page],
        screenshots: [screenshot],
        elements: [element],
				annotation_types: Userdocs.AnnotationTypeFixtures.all_valid_annotation_type_structs(),
        step_types: Userdocs.StepTypeFixtures.all_valid_step_type_structs()
      }

      Client.put_in_state(:data, data)
      Client.put_in_state(:current_user, user)
      on_exit(fn -> Client.destroy_state() end)

      %{
        navigate: navigate_step,
        set_size: set_size_step,
        full_screen_screenshot: full_screen_screenshot_step,
        element_screenshot: element_screenshot_step,
        fill_field: fill_field_step,
        click: click_step,
        clear: clear_step,
				badge: badge_annotation_step,
        user: user
      }
    end

    test "creates step instance properly", %{navigate: navigate} do
      result = StepHandler.prepare({:execute_step, %{step_id: navigate.id}})
      assert %{step_instance: step_instance} = result
			assert step_instance.step_id == navigate.id
    end

    test "prepare navigate steps properly", %{navigate: navigate} do
      result = StepHandler.prepare({:execute_step, %{step_id: navigate.id}})
      assert %{step: step, command: command} = result
      assert step.id == navigate.id
      assert command == {:navigate, %{url: step.page.url}}
    end

    test "prepare set size steps properly", %{set_size: set_size_step} do
      result = StepHandler.prepare({:execute_step, %{step_id: set_size_step.id}})
      assert %{step: step, command: command} = result
      assert step.id == set_size_step.id
      assert command == {:set_size, %{width: 600, height: 800}}
    end

    test "prepares full screenshot steps properly", %{full_screen_screenshot: screenshot_step} do
      result = StepHandler.prepare({:execute_step, %{step_id: screenshot_step.id}})
      assert %{step: step, command: command} = result
      assert step.id == screenshot_step.id
      assert command == {:full_screen_screenshot, %{}}
    end

    test "prepares element screenshot steps properly", %{element_screenshot: es_step} do
      result = StepHandler.prepare({:execute_step, %{step_id: es_step.id}})
      assert %{step: step, command: command} = result
      assert step.id == es_step.id
      assert command == {:element_screenshot, %{strategy: "css", selector: step.element.selector}}
    end

    test "prepares fill_field steps properly", %{fill_field: fill_step} do
			result = StepHandler.prepare({:execute_step, %{step_id: fill_step.id}})
      assert %{step: step, command: command} = result
      assert step.id == fill_step.id
      assert command ==
               {:fill_field,
                %{
                  strategy: step.element.strategy_id,
                  selector: step.element.selector,
                  text: fill_step.text
                }}
    end

    test "prepares click steps properly", %{click: click_step} do
			result = StepHandler.prepare({:execute_step, %{step_id: click_step.id}})
      assert %{step: step, command: command} = result
      assert step.id == click_step.id
      assert command ==
               {:click, %{strategy: step.element.strategy_id, selector: step.element.selector}}
    end

    test "prepares clear_annotation_step properly", %{clear: clear_step} do
			result = StepHandler.prepare({:execute_step, %{step_id: clear_step.id}})
      assert %{step: step, command: command} = result
      assert step.id == clear_step.id
      assert command == {:clear_annotations, %{}}
    end

		test "prepares annotations properly", %{badge: badge} do
			result = StepHandler.prepare({:execute_step, %{step_id: badge.id}})
      assert %{step: step, command: command} = result
      assert step.id == badge.id
      assert {:evaluate_expression, %{expression: expression}} = command
			assert expression =~ "window.element = window.getElement"
		end
  end
end
