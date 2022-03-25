defmodule BrowserController.StepHandlerTest do
  use ExUnit.Case
  use BrowserController.DataCase
  alias BrowserController.StepHandler

  describe "Step Handlers" do
    setup do
      {data, context} = Userdocs.ClientFixtures.data()

      start_supervised({Client, [mode: :test]})
      user = Userdocs.UsersFixtures.user_struct(%{})
      Client.put_in_state(:data, data)
      Client.put_in_state(:current_user, user)
      on_exit(fn -> Client.destroy_state() end)

      %{
        navigate: context.navigate,
        set_size: context.set_size,
        full_screen_screenshot: context.full_screen_screenshot,
        element_screenshot: context.element_screenshot,
        fill_field: context.fill_field,
        click: context.click,
        clear: context.clear,
        badge: context.badge
      }
      |> Map.put(:user, user)
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
