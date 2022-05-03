defmodule Userdocs.IntegrationsTest do
  use Userdocs.DataCase

  alias Schemas.Integrations.Integration
  alias Userdocs.Integrations
  alias Userdocs.UsersFixtures
  alias Userdocs.TeamsFixtures
  alias Userdocs.WebFixtures
  alias Userdocs.ProjectsFixtures
  alias Userdocs.IntegrationFixtures
  @opts %{context: %{repo: Userdocs.Repo}}


  defp create_user(_), do: %{user: UsersFixtures.user()}
  defp create_team(_), do: %{team: TeamsFixtures.team(@opts)}
  defp create_team_user(%{user: user, team: team}), do: %{team_user: TeamsFixtures.team_user(user.id, team.id, @opts)}
  defp create_project(%{team: team, strategy: strategy}), do: %{project: ProjectsFixtures.project(team.id, strategy.id, @opts)}
  defp create_integration(%{project: project}), do: %{integration: IntegrationFixtures.integration(%{project_id: project.id}, @opts)}
  defp create_strategy(_), do: %{strategy: WebFixtures.strategy(@opts)}

  describe "integrations" do
    setup [
      :create_user,
      :create_strategy,
      :create_team,
      :create_team_user,
      :create_project,
      :create_integration
    ]

    test "list_integrations/0 returns all integrations", %{integration: integration} do
      assert Integrations.list_integrations(@opts) == [integration]
    end

    test "get_integration!/1 returns the integration with given id", %{integration: integration} do
      assert Integrations.get_integration!(integration.id, @opts) == integration
    end

    test "create_integration/1 with valid data creates a integration", %{project: project} do
      valid_attrs = IntegrationFixtures.integration_attrs(%{project_id: project.id})
      assert {:ok, %Integration{} = integration} = Integrations.create_integration(valid_attrs, @opts)
      assert integration.name == valid_attrs.name
      assert integration.type == valid_attrs.type
    end

    test "create_integration/1 with invalid data returns error changeset" do
      invalid_attrs = IntegrationFixtures.integration_attrs(%{})
      assert {:error, %Ecto.Changeset{}} = Integrations.create_integration(invalid_attrs, @opts)
    end

    test "create_integration_struct/1 returns a struct", %{project: project} do
      valid_attrs = IntegrationFixtures.integration_attrs(%{project_id: project.id})
      assert {:ok, %Integration{} = integration} = Integrations.create_integration_struct(valid_attrs)
      assert integration.name == valid_attrs.name
    end

    test "update_integration/2 with valid data updates the integration", %{integration: integration, project: project} do
      valid_attrs = IntegrationFixtures.integration_attrs(%{project_id: project.id})
      assert {:ok, %Integration{} = integration} = Integrations.update_integration(integration, valid_attrs, @opts)
      assert integration.name == valid_attrs.name
      assert integration.type == valid_attrs.type
    end

    test "update_integration/2 with invalid data returns error changeset", %{integration: integration} do
      invalid_attrs = IntegrationFixtures.integration_attrs(%{project_id: nil})
      assert {:error, %Ecto.Changeset{}} = Integrations.update_integration(integration, invalid_attrs, @opts)
      assert integration == Integrations.get_integration!(integration.id, @opts)
    end

    test "delete_integration/1 deletes the integration", %{integration: integration} do
      assert {:ok, %Integration{}} = Integrations.delete_integration(integration, @opts)
      assert_raise Ecto.NoResultsError, fn -> Integrations.get_integration!(integration.id, @opts) end
    end

    test "change_integration/1 returns a integration changeset", %{integration: integration} do
      assert %Ecto.Changeset{} = Integrations.change_integration(integration)
    end
  end
end
