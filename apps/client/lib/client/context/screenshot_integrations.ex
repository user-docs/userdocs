defmodule Client.Context.ScreenshotIntegrations do
  alias Client.Context.Projects
  alias Client.Constants

  def create_screenshot_integrations(screenshot, state) do
    project = Projects.get_current_project(state)

    opts =
      Constants.state_opts()
      |> Keyword.put(:filter, {:project_id, project.id})

    screenshot_integrations =
      State.Integrations.list_integrations(state, opts)
      |> Enum.map(fn integration ->
        {:ok, screenshot_integration} =
          %{integration_id: integration.id, screenshot_id: screenshot.id}
          |> Client.ScreenshotIntegrations.create_screenshot_integration(state)

        screenshot_integration
      end)

    {:ok, screenshot_integrations}
  end
end
