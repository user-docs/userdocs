defmodule ClientTest.Integrations do
  use Client.RemoteCase
  use Client.LocalCase
  use Client.Case
  alias Userdocs.IntegrationFixtures

  describe "Integrations Initialize" do
    setup [:reinitialize_state]
    test "in state properly" do
      Client.init_state()
      assert Map.has_key?(Client.data(), :integrations)
    end
  end

  describe "Server Lists" do
    setup [:reinitialize_state]
    setup do
      %{integration: %Schemas.Integrations.Integration{}}
    end
    
    test "Gets Integration", %{integration: integration} do
      Client.put_in_state(:data, %{integrations: [integration]})
      result = Client.get_integration!(integration.id)
      assert result == integration
    end
    
    test "Lists Integrations", %{integration: integration} do
      Client.put_in_state(:data, %{integrations: [integration]})
      [result] = Client.list_integrations()
      assert result.id == integration.id
    end
  end

  describe "Integration Server CUD"  do
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
      :create_remote_tokens,
      :put_access_token_in_state,
      :create_remote_user_context,
      :put_remote_context_data,
      :put_user_in_state,
      :connect_channel
    ]

    test "Loads", %{user: user, remote_integration: integration} do
      Client.load_integrations(%{filters: %{user_id: user.id}})
      %{integrations: [result]} = Client.data()
      assert result.id == integration.id
    end
    
    test "creates", %{remote_project: project} do
      attrs = IntegrationFixtures.integration_attrs(%{project_id: project.id})
      assert {:ok, %{id: integration_id}} = Client.create_integration(attrs)
      assert %{id: ^integration_id} = Userdocs.Integrations.get_integration!(integration_id, @remote_opts)
    end
    
    test "updates", %{remote_project: project, remote_integration: integration} do
      %{name: name} = attrs = IntegrationFixtures.integration_attrs(%{project_id: project.id})
      assert {:ok, integration} = Client.update_integration(integration, attrs)
      assert %{name: ^name} = Userdocs.Integrations.get_integration!(integration.id, @remote_opts)
    end
    
    test "deletes", %{remote_integration: integration} do
      Client.delete_integration(integration)
      assert_raise Ecto.NoResultsError, fn -> Userdocs.Integrations.get_integration!(integration.id, @remote_opts) end
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
      :create_local_user_context,
      :put_local_context_data
    ]
    
    test "creates", %{local_project: project} do
      attrs = IntegrationFixtures.integration_attrs(%{project_id: project.id})
      assert {:ok, %{id: integration_id}} = Client.create_integration(attrs)
      assert %{id: ^integration_id} = Userdocs.Integrations.get_integration!(integration_id, @local_opts)
    end
    
    test "updates", %{local_project: project, local_integration: integration} do
      %{name: name} = attrs = IntegrationFixtures.integration_attrs(%{project_id: project.id})
      assert {:ok, integration} = Client.update_integration(integration, attrs)
      assert %{name: ^name} = Userdocs.Integrations.get_integration!(integration.id, @local_opts)
    end
    
    test "deletes", %{local_integration: integration} do
      Client.delete_integration(integration)
      assert_raise Ecto.NoResultsError, fn -> Userdocs.Integrations.get_integration!(integration.id, @local_opts) end
    end
    
    test "load_integrations/0 loads integrations", %{local_integration: integration} do
      Client.load_integrations()
      %{integrations: [result]} = Client.data()
      assert result.id == integration.id
    end
  end
end
