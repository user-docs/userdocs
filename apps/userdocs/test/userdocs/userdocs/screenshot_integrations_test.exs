defmodule Userdocs.ScreenshotIntegrationsTest do
  use Userdocs.DataCase

  alias Schemas.Integrations.ScreenshotIntegration
  alias Userdocs.ScreenshotIntegrations
  alias Userdocs.UsersFixtures
  alias Userdocs.TeamsFixtures
  alias Userdocs.WebFixtures
  alias Userdocs.ProjectsFixtures
  alias Userdocs.ScreenshotFixtures
  alias Userdocs.IntegrationFixtures
  alias Userdocs.ScreenshotIntegrationFixtures
  @opts %{context: %{repo: Userdocs.Repo}}

  defp create_user(_), do: %{user: UsersFixtures.user()}
  defp create_strategy(_), do: %{strategy: WebFixtures.strategy(@opts)}
  defp create_team(_), do: %{team: TeamsFixtures.team(@opts)}

  defp create_team_user(%{user: user, team: team}),
    do: %{team_user: TeamsFixtures.team_user(user.id, team.id, @opts)}

  defp create_project(%{team: team, strategy: strategy}),
    do: %{project: ProjectsFixtures.project(team.id, strategy.id, @opts)}

  defp create_integration(%{project: project}),
    do: %{integration: IntegrationFixtures.integration(%{project_id: project.id}, @opts)}

  defp create_page(%{project: project}), do: %{page: WebFixtures.page(project.id, @opts)}

  defp create_screenshot(%{page: page}),
    do: %{screenshot: ScreenshotFixtures.screenshot(%{page_id: page.id}, @opts)}

  defp create_screenshot_integration(%{integration: i, screenshot: s}) do
    attrs = %{screenshot_id: s.id, integration_id: i.id}
    %{screenshot_integration: ScreenshotIntegrationFixtures.screenshot_integration(attrs, @opts)}
  end

  describe "screenshot_integrations" do
    setup [
      :create_user,
      :create_strategy,
      :create_team,
      :create_team_user,
      :create_project,
      :create_page,
      :create_integration,
      :create_screenshot,
      :create_screenshot_integration
    ]

    test "list_screenshot_integrations/0 returns all screenshot_integrations", context do
      %{screenshot_integration: si} = context
      assert ScreenshotIntegrations.list_screenshot_integrations(@opts) == [si]
    end

    test "get_screenshot_integration!/1 returns the screenshot_integration with given id",
         context do
      %{screenshot_integration: si} = context
      assert ScreenshotIntegrations.get_screenshot_integration!(si.id, @opts) == si
    end

    test "create_screenshot_integration/1 with valid data creates a screenshot_integration",
         context do
      %{integration: integration, screenshot: screenshot} = context

      valid_attrs =
        ScreenshotIntegrationFixtures.screenshot_integration_attrs(%{
          screenshot_id: screenshot.id,
          integration_id: integration.id
        })

      assert {:ok, %ScreenshotIntegration{}} =
               ScreenshotIntegrations.create_screenshot_integration(valid_attrs, @opts)
    end

    test "create_screenshot_integration/1 with invalid data returns error changeset" do
      invalid_attrs = %{screenshot_id: nil, project_id: nil}

      assert {:error, %Ecto.Changeset{}} =
               ScreenshotIntegrations.create_screenshot_integration(invalid_attrs, @opts)
    end

    test "update_screenshot_integration/2 with valid data updates the screenshot_integration",
         context do
      %{integration: integration, screenshot: screenshot, screenshot_integration: si} = context
      attrs = %{integration_id: integration.id, screenshot_id: screenshot.id}

      assert {:ok, %ScreenshotIntegration{}} =
               ScreenshotIntegrations.update_screenshot_integration(si, attrs, @opts)
    end

    test "update_screenshot_integration/2 with invalid data returns error changeset", context do
      %{screenshot_integration: si} = context
      invalid_attrs = %{screenshot_id: nil, project_id: nil}

      assert {:error, %Ecto.Changeset{}} =
               ScreenshotIntegrations.update_screenshot_integration(si, invalid_attrs, @opts)

      assert si == ScreenshotIntegrations.get_screenshot_integration!(si.id, @opts)
    end

    test "delete_screenshot_integration/1 deletes the screenshot_integration", context do
      %{screenshot_integration: si} = context

      assert {:ok, %ScreenshotIntegration{}} =
               ScreenshotIntegrations.delete_screenshot_integration(si, @opts)

      assert_raise Ecto.NoResultsError, fn ->
        ScreenshotIntegrations.get_screenshot_integration!(si.id, @opts)
      end
    end

    test "change_screenshot_integration/1 returns a screenshot_integration changeset", context do
      %{screenshot_integration: si} = context
      assert %Ecto.Changeset{} = ScreenshotIntegrations.change_screenshot_integration(si)
    end
  end
end
