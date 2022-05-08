defmodule Client.Context.Screenshots do
  import Client.APISupport
  alias Client.Context.ScreenshotIntegrations, as: SI

  def create_screenshot(attrs, state) do
    opts = local_or_remote_opts(state)

    with {:ok, screenshot} <- Client.Screenshots.create_screenshot(attrs, state),
         screenshot = Map.put(screenshot, :base64, attrs["base64"]),
         {:ok, files} <- file_repo_impl(state).create_screenshot(screenshot, opts),
         {:ok, si} <- SI.create_screenshot_integrations(screenshot, state),
         {:ok, paths} <- file_repo_impl(state).prepare_screenshot(screenshot, opts),
         {:ok, result} <- SI.execute_screenshot_integrations(paths, si, :create_screenshot) do
      {:ok, result}
    end
  end

  # def update_screenshot(screenshot, attrs, state) do
  #   opts = local_or_remote_opts(state)

  #   with {:ok, screenshot} <- Client.Screenshots.update_screenshot(screenshot, attrs, state),
  #        screenshot = Map.put(screenshot, :base64, attrs["base64"]),
  #        {:ok, files} <- file_repo_impl(state).create_screenshot(screenshot, opts),
  #        {:ok, si} <- SI.ensure


  # end
end
