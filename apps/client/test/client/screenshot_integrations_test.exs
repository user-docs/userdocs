defmodule ClientTest.ScreenshotIntegrations do
  use Client.RemoteCase
  use Client.LocalCase
  use Client.Case
  alias Userdocs.ScreenshotIntegrationFixtures

  describe "ScreenshotIntegrations Initialize" do
    setup [:reinitialize_state]
    test "in state properly" do
      Client.init_state()
      assert Map.has_key?(Client.data(), :screenshot_integrations)
    end
  end

  describe "Server Lists" do
    setup [:reinitialize_state]
    setup do
      %{screenshot_integration: %Schemas.Integrations.ScreenshotIntegration{}}
    end
    
    test "Gets ScreenshotIntegration", %{screenshot_integration: screenshot_integration} do
      Client.put_in_state(:data, %{screenshot_integrations: [screenshot_integration]})
      result = Client.get_screenshot_integration!(screenshot_integration.id)
      assert result == screenshot_integration
    end
    
    test "Lists ScreenshotIntegrations", %{screenshot_integration: screenshot_integration} do
      Client.put_in_state(:data, %{screenshot_integrations: [screenshot_integration]})
      [result] = Client.list_screenshot_integrations()
      assert result.id == screenshot_integration.id
    end
  end

  describe "ScreenshotIntegration Server CUD"  do
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
      :connect_channel
    ]

    test "Loads", %{user: user, remote_screenshot_integration: screenshot_integration} do
      Client.load_screenshot_integrations(%{filters: %{user_id: user.id}})
      %{screenshot_integrations: [result]} = Client.data()
      assert result.id == screenshot_integration.id
    end
    
    test "creates", %{remote_screenshot: screenshot, remote_integration: integration} do
      attrs = ScreenshotIntegrationFixtures.screenshot_integration_attrs(%{screenshot_id: screenshot.id, integration_id: integration.id})
      assert {:ok, %{id: screenshot_integration_id}} = Client.create_screenshot_integration(attrs)
      assert %{id: ^screenshot_integration_id} = Userdocs.ScreenshotIntegrations.get_screenshot_integration!(screenshot_integration_id, @remote_opts)
    end
    
    test "updates", %{remote_screenshot: screenshot, remote_integration: integration, remote_screenshot_integration: screenshot_integration} do
      %{integration_id: integration_id} = attrs = ScreenshotIntegrationFixtures.screenshot_integration_attrs(%{screenshot_id: screenshot.id, integration_id: integration.id})
      assert {:ok, screenshot_integration} = Client.update_screenshot_integration(screenshot_integration, attrs)
      assert %{integration_id: ^integration_id} = Userdocs.ScreenshotIntegrations.get_screenshot_integration!(screenshot_integration.id, @remote_opts)
    end
    
    test "deletes", %{remote_screenshot_integration: screenshot_integration} do
      Client.delete_screenshot_integration(screenshot_integration)
      assert_raise Ecto.NoResultsError, fn -> Userdocs.ScreenshotIntegrations.get_screenshot_integration!(screenshot_integration.id, @remote_opts) end
    end
  end

  describe "Local" do
    setup [
      :reinitialize_state,
      :create_password,
      :create_user,
      :create_local_team,
      :create_local_strategy,
      :create_local_project,
      :create_local_integration,
      :create_local_page,
      :create_local_screenshot,
      :create_local_screenshot_integration,
      :create_local_user_context,
      :put_local_context_data
    ]
    
    test "creates", %{local_screenshot: screenshot, local_integration: integration} do
      attrs = ScreenshotIntegrationFixtures.screenshot_integration_attrs(%{screenshot_id: screenshot.id, integration_id: integration.id})
      assert {:ok, %{id: screenshot_integration_id}} = Client.create_screenshot_integration(attrs)
      assert %{id: ^screenshot_integration_id} = Userdocs.ScreenshotIntegrations.get_screenshot_integration!(screenshot_integration_id, @local_opts)
    end
    
    test "updates", %{local_screenshot: screenshot, local_integration: integration, local_screenshot_integration: screenshot_integration} do
      %{integration_id: integration_id} = attrs = ScreenshotIntegrationFixtures.screenshot_integration_attrs(%{screenshot_id: screenshot.id, integration_id: integration.id})
      assert {:ok, screenshot_integration} = Client.update_screenshot_integration(screenshot_integration, attrs)
      assert %{integration_id: ^integration_id} = Userdocs.ScreenshotIntegrations.get_screenshot_integration!(screenshot_integration.id, @local_opts)
    end
    
    test "deletes", %{local_screenshot_integration: screenshot_integration} do
      Client.delete_screenshot_integration(screenshot_integration)
      assert_raise Ecto.NoResultsError, fn -> Userdocs.ScreenshotIntegrations.get_screenshot_integration!(screenshot_integration.id, @local_opts) end
    end
    
    test "load_screenshot_integrations/0 loads screenshot_integrations", %{local_screenshot_integration: screenshot_integration} do
      Client.load_screenshot_integrations()
      %{screenshot_integrations: [result]} = Client.data()
      assert result.id == screenshot_integration.id
    end
  end
end
