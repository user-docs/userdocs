defmodule Userdocs.ScreenshotIntegrationFixtures do
  @moduledoc false
  alias Userdocs.ScreenshotIntegrations
  def screenshot_integration(params, opts) do
    {:ok, screenshot_integration} =
      screenshot_integration_attrs(params)
      |> ScreenshotIntegrations.create_screenshot_integration(opts)

      screenshot_integration
  end

  def screenshot_integration_attrs(params) do
    %{
      integration_id: UUID.uuid4(),
      screenshot_id: UUID.uuid4()
    }
    |> Map.merge(params)
  end
end
