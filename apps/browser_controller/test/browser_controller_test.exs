defmodule BrowserController.BrowserControllerTest do
  use ExUnit.Case

  describe "Execution" do
    setup do
      Phoenix.PubSub.subscribe(Userdocs.PubSub, "browser")
      {data, context} = Userdocs.ClientFixtures.data()

      start_supervised({Client, [mode: :test]})
      user = Userdocs.UsersFixtures.user_struct(%{})
      Client.put_in_state(:data, data)
      Client.put_in_state(:current_user, user)
      on_exit(fn -> Client.destroy_state() end)

      Map.put(context, :user, user)
    end

    test "works", %{nothing: nothing} do
      BrowserController.handle_execute(%{queue: {[], []}}, {:execute_step, %{step_id: nothing.id}})
      assert_received(%{event: "queue_updated"})
    end
  end
end
