defmodule Client.Remote.ScreenshotIntegrationsTest do
  use Client.RemoteCase
  use Client.LocalCase
  use Client.Case
  alias Client.Remote.ScreenshotIntegrations
  alias Userdocs.ScreenshotIntegrationFixtures
  alias Schemas.Integrations.ScreenshotIntegration

  describe "ScreenshotIntegrations"  do
    setup [
      :reinitialize_state,
      :ensure_web_started,
      :create_password,
      :create_user,
      :create_remote_team,
      :create_remote_team_user,
      :create_remote_strategy,
      :create_remote_project,
      :create_remote_integration,
      :create_remote_page,
      :create_remote_screenshot,
      :create_remote_screenshot_integration,
      :create_remote_tokens,
      :put_access_token_in_state,
      :create_remote_user_context,
      :put_remote_context_data,
      :put_user_in_state,
      :create_channel
    ]

    test "Lists", %{channel: channel, remote_screenshot_integration: %{id: id}} do
      assert [%{id: ^id}] = ScreenshotIntegrations.list_screenshot_integrations(%{channel: channel})
    end

    test "creates", %{channel: channel, remote_screenshot: screenshot, remote_integration: integration} do
      %{integration_id: integration_id} = attrs = ScreenshotIntegrationFixtures.screenshot_integration_attrs(%{screenshot_id: screenshot.id, integration_id: integration.id})
      assert {:ok, %ScreenshotIntegration{integration_id: ^integration_id}} = ScreenshotIntegrations.create_screenshot_integration(attrs, %{channel: channel})
    end

    test "create fails gracefully", %{channel: channel} do
      attrs = ScreenshotIntegrationFixtures.screenshot_integration_attrs(%{screenshot_id: nil, integration_id: nil})
      assert {:error, %{}} = ScreenshotIntegrations.create_screenshot_integration(attrs, %{channel: channel})
    end

    test "updates", %{channel: channel, remote_screenshot: screenshot, remote_integration: integration, remote_screenshot_integration: screenshot_integration} do
      %{integration_id: integration_id} = attrs = ScreenshotIntegrationFixtures.screenshot_integration_attrs(%{screenshot_id: screenshot.id, integration_id: integration.id})
      assert {:ok, %ScreenshotIntegration{integration_id: ^integration_id}} = ScreenshotIntegrations.update_screenshot_integration(screenshot_integration, attrs, %{channel: channel})
    end

    test "update fails gracefully", %{channel: channel, remote_screenshot_integration: screenshot_integration} do
      attrs = ScreenshotIntegrationFixtures.screenshot_integration_attrs(%{screenshot_id: nil, integration_id: nil})
      assert {:error, %{}} = ScreenshotIntegrations.update_screenshot_integration(screenshot_integration, attrs, %{channel: channel})
    end

    test "deletes", %{remote_screenshot_integration: screenshot_integration, channel: channel} do
      ScreenshotIntegrations.delete_screenshot_integration(screenshot_integration, %{channel: channel})
      assert_raise Ecto.NoResultsError, fn -> Userdocs.ScreenshotIntegrations.get_screenshot_integration!(screenshot_integration.id, @remote_opts) end
    end
  end
end
