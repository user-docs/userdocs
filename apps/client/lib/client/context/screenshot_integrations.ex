defmodule Client.Context.ScreenshotIntegrations do
  alias Client.Context.Projects
  alias Client.Constants

  defstruct fun: nil, source_path: "", local: %{}

  def create_screenshot_integrations(screenshot, state) do
    screenshot_integrations =
      list_screenshot_integrations(state)
      |> Enum.map(fn integration ->
        {:ok, screenshot_integration} =
          %{integration_id: integration.id, screenshot_id: screenshot.id}
          |> Client.ScreenshotIntegrations.create_screenshot_integration(state)

        screenshot_integration
        |> Map.put(:integration, integration)
        |> Map.put(:screenshot, screenshot)
      end)

    {:ok, screenshot_integrations}
  end

  def ensure_screenshot_integrations(screenshot, state) do
    screenshot_integrations =
      list_screenshot_integrations(state)
      |> Enum.map(fn integration ->
        IO.inspect(integration)
      end)
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

  defp list_screenshot_integrations(state) do
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
end
