defmodule Client.Context.ScreenshotIntegrations do
  alias Client.Context.Projects
  alias Client.Constants

  defstruct fun: nil, source_path: "", local: %{}

  def create_screenshot_integrations(screenshot, state) do
    screenshot_integrations =
      state
      |> list_integrations()
      |> Enum.map(fn integration ->
        create_screenshot_integration(state, screenshot, integration)
      end)

    {:ok, screenshot_integrations}
  end

  def ensure_screenshot_integrations(screenshot, state) do
    screenshot_integrations =
      state
      |> list_integrations()
      |> Enum.map(fn integration ->
        filters = [&(&1.integration_id == integration.id), &(&1.screenshot_id == screenshot.id)]
        opts = Keyword.put(Constants.state_opts(), :filter_functions, filters)

        state
        |> State.ScreenshotIntegrations.list_screenshot_integrations(opts)
        |> Enum.filter(&(&1.screenshot_id == screenshot.id))
        |> case do
          [] ->
            create_screenshot_integration(state, screenshot, integration)

          [screenshot_integration] ->
            put_preloads(screenshot_integration, screenshot, integration)
        end
      end)

    {:ok, screenshot_integrations}
  end

  def execute_screenshot_integrations(paths, screenshot_integrations, operation) do
    state =
      %__MODULE__{}
      |> cast_source_path(paths)
      |> Map.put(:fun, operation)

    {:ok, Enum.reduce(screenshot_integrations, state, &execute_screenshot_integration/2)}
  end

  def execute_screenshot_integration(screenshot_integration, %{fun: :create_screenshot} = state) do
    %{screenshot: screenshot, integration: %{type: type}} = screenshot_integration

    with {:ok, result} <- impl(type).create_screenshot(screenshot, state) do
      merge_result(state, type, result)
    end
  end

  def execute_screenshot_integration(screenshot_integration, %{fun: :approve_screenshot} = state) do
    %{screenshot: screenshot, integration: %{type: type}} = screenshot_integration

    with {:ok, result} <- impl(type).approve_screenshot(screenshot, state) do
      merge_result(state, type, result)
    end
  end

  defp list_integrations(state) do
    project = Projects.get_current_project(state)
    opts = Keyword.put(Constants.state_opts(), :filter, {:project_id, project.id})
    State.Integrations.list_integrations(state, opts)
  end

  defp impl(:local), do: Client.Screenshots.Integrations.LocalFile

  defp cast_source_path(%__MODULE__{} = screenshot_integrations, %{file_path: path}),
    do: Map.put(screenshot_integrations, :source_path, path)

  defp merge_result(%__MODULE__{} = state, key, result) do
    current = Map.get(state, key, %{})
    new = Map.merge(current, result)
    Map.put(state, key, new)
  end

  defp create_screenshot_integration(state, screenshot, integration) do
    {:ok, screenshot_integration} =
      %{integration_id: integration.id, screenshot_id: screenshot.id}
      |> Client.ScreenshotIntegrations.create_screenshot_integration(state)

    put_preloads(screenshot_integration, screenshot, integration)
  end

  defp put_preloads(screenshot_integration, screenshot, integration) do
    screenshot_integration
    |> Map.put(:integration, integration)
    |> Map.put(:screenshot, screenshot)
  end
end
