defmodule BrowserController.BrowserControllerTest do
  use ExUnit.Case

  describe "Execution" do
    alias Schemas.StepInstances.StepInstance
    alias Schemas.Steps.Step

    setup do
      Phoenix.PubSub.subscribe(Userdocs.PubSub, "browser")
      Phoenix.PubSub.subscribe(Userdocs.PubSub, "data")
      {data, context} = Userdocs.ClientFixtures.data()

      start_supervised({Client, [mode: :test]})
      user = Userdocs.UsersFixtures.user_struct(%{})
      Client.put_in_state(:data, data)
      Client.put_in_state(:current_user, user)
      on_exit(fn -> Client.destroy_state() end)

      Map.put(context, :user, user)
    end

    test "works", %{nothing: %{id: id}} do
      result = BrowserController.handle_execute(%{queue: {[], []}}, {:execute_step, %{step_id: id}}) |> IO.inspect()

      assert %{queue: {[], []}} = result
      assert_received(%{event: "create", payload: %StepInstance{}})
      assert_received(%{event: "queue_updated"})
      assert_received(%{event: "update", payload: %StepInstance{}})
    end
  end
end
