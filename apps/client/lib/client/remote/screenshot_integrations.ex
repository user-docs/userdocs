defmodule Client.Remote.ScreenshotIntegrations do
  require Logger
  alias Client.Remote.Channel
  alias Schemas.Integrations.ScreenshotIntegration

  def list_screenshot_integrations(%{channel: channel} = opts) do
    filters =  Map.take(opts, [:filters])
    payload = %{filters: filters}
    mf = "Userdocs.ScreenshotIntegrations.list_screenshot_integrations"
    with {:ok, attrs} <- Channel.push(channel, mf, payload) do
      Userdocs.ScreenshotIntegrations.create_screenshot_integration_structs(attrs)
    end
  end

  def create_screenshot_integration(attrs, %{channel: channel}) do
    payload = %{attrs: attrs}
    mf = "Userdocs.ScreenshotIntegrations.create_screenshot_integration"
    with {:ok, attrs} <- Channel.push(channel, mf, payload) do
      Userdocs.ScreenshotIntegrations.create_screenshot_integration_struct(attrs)
    end
  end

  def update_screenshot_integration(%ScreenshotIntegration{} = screenshot_integration, attrs, %{channel: channel}) do
    payload = %{id: screenshot_integration.id, attrs: attrs}
    mf = "Userdocs.ScreenshotIntegrations.update_screenshot_integration"
    with {:ok, attrs} <- Channel.push(channel, mf, payload) do
      Userdocs.ScreenshotIntegrations.create_screenshot_integration_struct(attrs)
    end

  end

  def delete_screenshot_integration(screenshot_integration, %{channel: channel}) do
    payload = %{struct: screenshot_integration}
    mf = "Userdocs.ScreenshotIntegrations.delete_screenshot_integration"
    with {:ok, attrs} <- Channel.push(channel, mf, payload) do
      Userdocs.ScreenshotIntegrations.create_screenshot_integration_struct(attrs)
    end
  end
end
