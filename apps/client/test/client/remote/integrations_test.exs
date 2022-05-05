defmodule Client.Remote.IntegrationsTest do
  use Client.RemoteCase
  use Client.LocalCase
  use Client.Case
  alias Client.Remote.Integrations
  alias Userdocs.IntegrationFixtures
  alias Schemas.Integrations.Integration

  describe "Integrations"  do
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
      :create_channel
    ]

    test "Lists", %{channel: channel, remote_integration: %{id: id}} do
      assert [%{id: ^id}] = Integrations.list_integrations(%{channel: channel})
    end

    test "creates", %{channel: channel, remote_project: project} do
      %{name: name} = attrs = IntegrationFixtures.integration_attrs(%{project_id: project.id})
      assert {:ok, %Integration{name: ^name}} = Integrations.create_integration(attrs, %{channel: channel})
    end

    test "updates", %{channel: channel, remote_project: project, remote_integration: integration} do
      %{name: name} = attrs = IntegrationFixtures.integration_attrs(%{project_id: project.id})
      assert {:ok, %Integration{name: ^name}} = Integrations.update_integration(integration, attrs, %{channel: channel})
    end

    test "deletes", %{remote_integration: integration, channel: channel} do
      Integrations.delete_integration(integration, %{channel: channel})
      assert_raise Ecto.NoResultsError, fn -> Userdocs.Integrations.get_integration!(integration.id, @remote_opts) end
    end
  end
end
