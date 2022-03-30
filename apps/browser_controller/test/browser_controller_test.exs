defmodule BrowserController.BrowserControllerTest do
  use BrowserController.DataCase

  describe "Execution" do
    alias Schemas.StepInstances.StepInstance

    setup do
      Phoenix.PubSub.subscribe(Userdocs.PubSub, "browser")
      Phoenix.PubSub.subscribe(Userdocs.PubSub, "data")
      {data, context} = Userdocs.ClientFixtures.local_data()

      start_supervised({Client, [mode: :test]})
      user = Userdocs.UsersFixtures.user_struct(%{})
      Client.put_in_state(:data, data)
      Client.put_in_state(:current_user, user)
      Client.put_in_state(:mode, :local)
      on_exit(fn -> Client.destroy_state() end)

      Map.put(context, :user, user)
    end

    test "executing a normal command completes the queue, and returns to pause" do
      command = {:do_nothing, %{}}
      BrowserController.execute(command)
      assert_receive(%{event: "queue_updated", payload: %{queue: [command]}})
      assert_receive(%{event: "run_state_updated", payload: %{run_state: :play}})
      assert_receive(%{event: "queue_updated", payload: %{queue: []}})
      assert_receive(%{event: "run_state_updated", payload: %{run_state: :pause}})
      assert BrowserController.run_state() == :pause
    end

    test "executing a failing command clears the queue, and returns to pause" do
      works = {:do_nothing, %{}}
      fails = {:error, %{}}
      BrowserController.execute([works, fails, works])
      assert_receive(%{event: "queue_updated", payload: %{queue: [works, fails, works]}})
      assert_receive(%{event: "run_state_updated", payload: %{run_state: :play}})
      assert_receive(%{event: "queue_updated", payload: %{queue: [fails, works]}})
      assert_receive(%{event: "execution_error", payload: %{message: "This command did nothing."}})
      assert_receive(%{event: "queue_updated", payload: %{queue: []}})
      assert_receive(%{event: "run_state_updated", payload: %{run_state: :pause}})
      assert BrowserController.run_state() == :pause
    end

    test "executes a screenshot command", %{screenshot: screenshot} do
      command = {:single_white_pixel, %{screenshot_id: screenshot.id}}
      Client.get_screenshot!(screenshot.id)
      BrowserController.execute(command)
      :timer.sleep(1000)
    end

    test "executes a step instance", %{nothing: %{id: id}} do
      BrowserController.execute({:execute_step, %{step_id: id}})
      assert_received(%{event: "create", payload: %StepInstance{}})
      assert_received(%{event: "queue_updated"})
      assert_received(%{event: "update", payload: %StepInstance{}})
    end
  end
end
