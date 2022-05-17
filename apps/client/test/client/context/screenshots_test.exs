defmodule Client.Context.ScreenshotsTest do
  use ExUnit.Case
  use Client.RemoteCase
  use Client.LocalCase
  use Client.Case

  alias Userdocs.ScreenshotFixtures
	alias Client.Context.Screenshots
  alias Schemas.Screenshots.Screenshot

  describe "Screenshots" do
    setup do
      {data, context} = Userdocs.ClientFixtures.local_data()
      Client.init_state()
      Client.put_in_state(:current_user, context.user)
      Client.put_in_state(:context, context.context)
      Client.put_in_state(:data, data)
      context
    end

    test "creates screenshot works", %{page: page} do
      attrs = ScreenshotFixtures.screenshot_attrs(:valid_string_keys, %{"page_id" => page.id})
      assert {:ok, %Screenshot{} = screenshot} = Screenshots.create_screenshot(attrs, Client.state())
      screenshot.name == attrs["name"]
    end

    test "update screenshot works with an existing screenshot", %{page: page} do
      attrs = ScreenshotFixtures.screenshot_attrs(:valid_string_keys, %{"page_id" => page.id})
      {:ok, screenshot} = Screenshots.create_screenshot(attrs, Client.state())
      update_attrs = attrs |> Map.put("base64", ScreenshotFixtures.single_white_pixel())
      assert {:ok, %Screenshot{} = screenshot} = Screenshots.update_screenshot(screenshot, update_attrs, Client.state())
      assert screenshot.score == 1.0
    end

    test "update screenshot works with missing file screenshot", %{screenshot: screenshot, page: page} do
      attrs = ScreenshotFixtures.screenshot_attrs(:valid_string_keys, %{"page_id" => page.id})
      {:ok, %Screenshot{} = screenshot} = Screenshots.update_screenshot(screenshot, attrs, Client.state())
    end

    test "approve screenshot works", %{page: page} do
      attrs = ScreenshotFixtures.screenshot_attrs(:valid_string_keys, %{"page_id" => page.id})
      {:ok, screenshot} = Screenshots.create_screenshot(attrs, Client.state())
      update_attrs = attrs |> Map.put("base64", ScreenshotFixtures.single_white_pixel())
      {:ok, %Screenshot{} = screenshot} = Screenshots.update_screenshot(screenshot, update_attrs, Client.state())
      Screenshots.approve_screenshot(screenshot, Client.state())
    end
  end
end
