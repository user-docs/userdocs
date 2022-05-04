defmodule Client.Remote.Integrations do
  @moduledoc """
  The Steps context.
  """
  require Logger
  alias Client.Remote.Channel
  alias Schemas.Integrations.Integration

  def list_integration(%{channel: channel} = opts) do
    filters =  Map.take(opts, [:filters])
    payload = %{filters: filters}
    mf = "Userdocs.Integrations.list_integrations"
    with {:ok, attrs} <- Channel.push(channel, mf, payload) do
      Userdocs.Integrations.create_integration_structs(attrs)
    end
  end

  def create_integration(attrs, %{channel: channel}) do
    payload = %{attrs: attrs}
    mf = "Userdocs.Integrations.create_integration"
    with {:ok, attrs} <- Channel.push(channel, mf, payload) do
      Userdocs.Integrations.create_integration_struct(attrs)
    end
  end

  def update_integration(%Integration{} = integration, attrs, %{channel: channel}) do
    payload = %{id: integration.id, attrs: attrs}
    mf = "Userdocs.Integrations.update_integration"
    with {:ok, attrs} <- Channel.push(channel, mf, payload) do
      Userdocs.Integrations.create_integration_struct(attrs)
    end

  end

  @doc "Deletes a step."
  def delete_integration(integration, %{channel: channel}) do
    payload = %{struct: integration}
    mf = "Userdocs.Integrations.delete_integration"
    with {:ok, attrs} <- Channel.push(channel, mf, payload) do
      Userdocs.Integrations.create_integration_struct(attrs)
    end
  end
end
