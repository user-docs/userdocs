defmodule Client.Integrations do
  import Client.APISupport
  import Client.Constants
  alias Schemas.Integrations.Integration

  @callback list_integrations(map()) :: list(Integration)
  @callback create_integration(map(), map()) :: {:ok, Integration} | {:error, Ecto.Changeset}
  @callback update_integration(Integration, map(), map()) :: {:ok, Integration} | {:error, Ecto.Changeset}
  @callback delete_integration(binary(), map()) :: {:ok, Integration} | {:error, Ecto.Changeset}
  def create_integration(attrs, state),
    do: impl(state, "Integrations").create_integration(attrs, local_or_remote_opts(state)) # TODO: subsume Module.concat into impl
  
  def update_integration(integration, attrs, state),
    do: impl(state, "Integrations").update_integration(integration, attrs, local_or_remote_opts(state))
  
  def delete_integration(%Integration{} = integration, state), do: impl(state, "Integrations").delete_integration(integration, local_or_remote_opts(state))
  def delete_integration(integration_id, state) when is_binary(integration_id) do
    integration = State.Integrations.get_integration!(integration_id, state, state_opts())
    impl(state, "Integrations").delete_integration(integration, local_or_remote_opts(state))
  end
  
  def load_integrations(state, opts) do
    integrations = impl(state, "Integrations").list_integrations(local_or_remote_opts(state, opts))
    StateHandlers.load(state, integrations, Integration, state_opts())
  end
end
