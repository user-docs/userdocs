defmodule Client.Context.ScreenshotIntegrationsTest do
  use ExUnit.Case
  use Client.RemoteCase
  use Client.LocalCase
  use Client.Case

  alias Client.Context.ScreenshotIntegrations

  describe "Screenshot Integrations" do
    setup do
      {data, context} = Userdocs.ClientFixtures.local_data()
      Client.init_state()
      Client.put_in_state(:current_user, context.user)
      Client.put_in_state(:context, context.context)
      Client.put_in_state(:data, data)
      context
    end

    test "creates screenshot integrations for a screenshot", context do
      %{integration: integration, screenshot: screenshot} = context
      screenshot_id = screenshot.id
      integration_id = integration.id

      assert {:ok, [%{integration_id: ^integration_id, screenshot_id: ^screenshot_id}]} =
               ScreenshotIntegrations.create_screenshot_integrations(screenshot, Client.state())
    end
  end
end
