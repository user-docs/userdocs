defmodule Userdocs.IntegrationFixtures do
  @moduledoc false
  alias Userdocs.Integrations
  alias Userdocs.ScreenshotIntegrations

  def integration(params, opts) do
    {:ok, integration} = integration_attrs(params) |> Integrations.create_integration(opts)
    integration
  end

  def integration_attrs(params) do
    %{
      name: UUID.uuid4(),
      type: :team_aws
    }
    |> Map.merge(params)
  end

  def screenshot_integration(params, opts) do
    {:ok, screenshot_integration} =
      screenshot_integration_attrs(params)
      |> ScreenshotIntegrations.create_screenshot_integration(opts)

      screenshot_integration
  end

  defp screenshot_integration_attrs(params) do
    %{
      integration_id: UUID.uuid4(),
      screenshot_id: UUID.uuid4()
    }
    |> Map.merge(params)
  end
end
