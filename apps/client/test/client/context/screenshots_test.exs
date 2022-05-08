defmodule Client.Context.ScreenshotsTest do
  use ExUnit.Case
  use Client.RemoteCase
  use Client.LocalCase
  use Client.Case

  alias Userdocs.ScreenshotFixtures
	alias Client.Context.Screenshots

  describe "Screenshots" do
    setup do
      {data, context} = Userdocs.ClientFixtures.local_data()
      Client.init_state()
      Client.put_in_state(:current_user, context.user)
      Client.put_in_state(:context, context.context)
      Client.put_in_state(:data, data)
      context
    end

    test "creates screenshot works" do
      attrs = ScreenshotFixtures.screenshot_attrs(:valid_string_keys, %{})
      assert {:ok, result} = Screenshots.create_screenshot(attrs, Client.state())
      %{local: %{location: export_location}} = result
      assert export_location =~ attrs["name"]
    end
  end
end
