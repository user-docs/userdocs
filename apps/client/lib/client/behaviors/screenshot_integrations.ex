defmodule Client.ScreenshotIntegrations do
  import Client.APISupport
  import Client.Constants
  alias Schemas.Integrations.ScreenshotIntegration

  @callback list_screenshot_integrations(map()) :: list(ScreenshotIntegration)
  @callback create_screenshot_integration(map(), map()) :: {:ok, ScreenshotIntegration} | {:error, Ecto.Changeset}
  @callback update_screenshot_integration(ScreenshotIntegration, map(), map()) :: {:ok, ScreenshotIntegration} | {:error, Ecto.Changeset}
  @callback delete_screenshot_integration(binary(), map()) :: {:ok, ScreenshotIntegration} | {:error, Ecto.Changeset}
  def create_screenshot_integration(attrs, state),
    do: impl(state, "ScreenshotIntegrations").create_screenshot_integration(attrs, local_or_remote_opts(state)) # TODO: subsume Module.concat into impl
  
  def update_screenshot_integration(screenshot_integration, attrs, state),
    do: impl(state, "ScreenshotIntegrations").update_screenshot_integration(screenshot_integration, attrs, local_or_remote_opts(state))
  
  def delete_screenshot_integration(%ScreenshotIntegration{} = screenshot_integration, state), do: impl(state, "ScreenshotIntegrations").delete_screenshot_integration(screenshot_integration, local_or_remote_opts(state))
  def delete_screenshot_integration(screenshot_integration_id, state) when is_binary(screenshot_integration_id) do
    screenshot_integration = State.ScreenshotIntegrations.get_screenshot_integration!(screenshot_integration_id, state, state_opts())
    impl(state, "ScreenshotIntegrations").delete_screenshot_integration(screenshot_integration, local_or_remote_opts(state))
  end
  
  def load_screenshot_integrations(state, opts) do
    screenshot_integrations = impl(state, "ScreenshotIntegrations").list_screenshot_integrations(local_or_remote_opts(state, opts))
    StateHandlers.load(state, screenshot_integrations, ScreenshotIntegration, state_opts())
  end
end
