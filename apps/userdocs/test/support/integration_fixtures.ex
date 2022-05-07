defmodule Userdocs.IntegrationFixtures do
  @moduledoc false
  alias Userdocs.Integrations

  def integration(params, opts) do
    {:ok, integration} = integration_attrs(params) |> Integrations.create_integration(opts)
    integration
  end

  def integration_struct(attrs) do
    {:ok, integration} = integration_attrs(attrs) |> Integrations.create_integration_struct()
    integration
  end

  def integration_attrs(params) do
    %{
      name: UUID.uuid4(),
      type: :team_s3
    }
    |> Map.merge(params)
  end
end
