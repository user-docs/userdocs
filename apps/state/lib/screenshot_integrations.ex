defmodule State.ScreenshotIntegrations do
  alias Schemas.Integrations.ScreenshotIntegration

  def list_screenshot_integrations(state, opts) when is_list(opts) do
    StateHandlers.list(state, ScreenshotIntegration, opts)
    |> maybe_preload(opts[:preloads], state, opts)
  end

  def get_screenshot_integration!(id, state, opts) when is_list(opts) do
    StateHandlers.get(state, id, ScreenshotIntegration, opts)
    |> maybe_preload(opts[:preloads], state, opts)
  end

  defp maybe_preload(screenshot_integration, nil, _, _), do: screenshot_integration
  defp maybe_preload(screenshot_integration, _preloads, state, opts) do
    opts = Keyword.delete(opts, :filter)
    StateHandlers.preload(state, screenshot_integration, opts)
  end
end
