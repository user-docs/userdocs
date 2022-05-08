defmodule Client.Context.ScreenshotIntegrationsTest do
  use ExUnit.Case
  use Client.RemoteCase
  use Client.LocalCase
  use Client.Case

  alias Userdocs.ScreenshotIntegrationFixtures
  alias Userdocs.IntegrationFixtures
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

    test "creates an additional screenshot integration",
         context do
      %{integration: integration, screenshot: screenshot, project: project} = context

      integration_two = IntegrationFixtures.integration(%{project_id: project.id}, @local_opts)
      screenshot_integration =
        %{screenshot_id: screenshot.id, integration_id: integration.id}
        |> ScreenshotIntegrationFixtures.screenshot_integration(@local_opts)

      data =
        Client.state().data
        |> Map.put(:integrations, [integration, integration_two])
        |> Map.put(:screenshot_integrations, [screenshot_integration])

      Client.put_in_state(:data, data)

      ScreenshotIntegrations.ensure_screenshot_integrations(screenshot, Client.state())
    end
  end
end
