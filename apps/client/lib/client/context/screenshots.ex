defmodule Client.Context.Screenshots do
  import Client.APISupport
  alias Client.Context.ScreenshotIntegrations, as: SI

  def create_screenshot(attrs, state) do
    opts = local_or_remote_opts(state)

    with {:ok, screenshot} <- Client.Screenshots.create_screenshot(sendable(attrs), state),
         screenshot = Map.put(screenshot, :base64, base64(attrs)),
         {:ok, _files} <- file_repo_impl(state).create_screenshot(screenshot, opts),
         {:ok, si} <- SI.create_screenshot_integrations(screenshot, state),
         {:ok, paths} <- file_repo_impl(state).prepare_screenshot(screenshot, opts),
         {:ok, _result} <- SI.execute_screenshot_integrations(paths, si, :create_screenshot) do
      {:ok, screenshot}
    end
  end

  def update_screenshot(screenshot, attrs, state) do
    opts = local_or_remote_opts(state)

    with {status, results} when status in [:ok, :warn] <-
         file_repo_impl(state).update_screenshot(screenshot, attrs, opts),
         attrs = cast_attrs(attrs) |> Map.merge(results),
         {:ok, screenshot} <- Client.Screenshots.update_screenshot(screenshot, sendable(attrs), state) do
      {:ok, screenshot}
    end
  end

  def delete_screenshot(screenshot, state) do
    opts = local_or_remote_opts(state)
    with {:ok, screenshot} <- Client.Screenshots.delete_screenshot(screenshot, state),
         {:ok, _files} <- file_repo_impl(state).create_screenshot(screenshot, opts) do
      {:ok, screenshot}
    end
  end

  def approve_screenshot(screenshot, state) do
    opts = local_or_remote_opts(state)

    with {:ok, screenshot} <- Client.Screenshots.update_screenshot(screenshot, approval_attrs(), state),
         {:ok, _files} <- file_repo_impl(state).approve_screenshot(screenshot, opts),
         {:ok, si} <- SI.ensure_screenshot_integrations(screenshot, state),
         {:ok, paths} <- file_repo_impl(state).prepare_screenshot(screenshot, opts),
         {:ok, integration_runs} <- SI.execute_screenshot_integrations(paths, si, :approve_screenshot) do
      {:ok, integration_runs}
    end
  end

  def reject_screenshot(screenshot, state) do
    opts = local_or_remote_opts(state)

    with {:ok, screenshot} <- Client.Screenshots.update_screenshot(screenshot, rejection_attrs(), state),
         {:ok, _files} <- file_repo_impl(state).reject_screenshot(screenshot, opts) do
      {:ok, screenshot}
    end
  end

  defp cast_attrs(attrs) do
    %{}
    |> Map.put(:name, Map.get(attrs, "name", ""))
    |> Map.put(:file_name, Map.get(attrs, "file_name", ""))
    |> Map.put(:base64, Map.get(attrs, "base64", ""))
    |> Map.put(:status, Map.get(attrs, "status", :ok))
    |> Map.put(:score, Map.get(attrs, "score", 0.0))
    |> Map.put(:page_id, Map.get(attrs, "page_id", ""))
    |> Map.put(:step_id, Map.get(attrs, "step_id", ""))
  end

  defp sendable(attrs) do
    Map.delete(attrs, :base64)
  end

  defp base64(attrs) do
    Map.get(attrs, :base64)
  end

  defp approval_attrs, do: %{score: 0.0, status: :ok}
  defp rejection_attrs, do: %{score: 0.0, status: :ok}
end
