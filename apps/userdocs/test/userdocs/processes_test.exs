defmodule Userdocs.ProcessesTest do
  use Userdocs.DataCase

  alias Userdocs.AutomationFixtures
  alias Userdocs.UsersFixtures
  alias Userdocs.TeamsFixtures
  alias Userdocs.ProjectsFixtures
  alias Userdocs.WebFixtures
  alias Userdocs.Processes
  alias Schemas.Processes.Process

  defp fixture(:user), do: UsersFixtures.user()
  defp fixture(:team), do: TeamsFixtures.team()
  defp fixture(:strategy), do: WebFixtures.strategy()
  defp fixture(:team_user, user_id, team_id), do: TeamsFixtures.team_user(user_id, team_id)
  defp fixture(:project, team_id, strategy_id), do: ProjectsFixtures.project(team_id, strategy_id)

  defp create_user(_), do: %{user: fixture(:user)}
  defp create_team(_), do: %{team: fixture(:team)}
  defp create_team_user(%{user: user, team: team}), do: %{team_user: fixture(:team_user, user.id, team.id)}
  defp create_project(%{team: team, strategy: strategy}), do: %{project: fixture(:project, team.id, strategy.id)}
  defp create_strategy(_), do: %{strategy: fixture(:strategy)}

  describe "processes" do

    setup [
      :create_user,
      :create_strategy,
      :create_team,
      :create_team_user,
      :create_project
    ]

    test "list_processes/0 returns all processes", %{project: project} do
      process = AutomationFixtures.process(project.id)
      assert Processes.list_processes() == [process]
    end

    test "get_process!/1 returns the process with given id", %{project: project} do
      process = AutomationFixtures.process(project.id)
      assert Processes.get_process!(process.id) == process
    end

    test "create_process/1 with valid data creates a process", %{project: project} do
      attrs = AutomationFixtures.process_attrs(:valid, project.id)
      assert {:ok, %Process{} = process} = Processes.create_process(attrs)
      assert process.name == attrs.name
    end

    test "create_process/1 with invalid data returns error changeset", %{project: project} do
      attrs = AutomationFixtures.process_attrs(:invalid, project.id)
      assert {:error, %Ecto.Changeset{}} = Processes.create_process(attrs)
    end

    test "update_process/2 with valid data updates the process", %{project: project} do
      process = AutomationFixtures.process(project.id)
      attrs = AutomationFixtures.process_attrs(:valid, project.id)
      assert {:ok, %Process{} = process} = Processes.update_process(process, attrs)
      assert process.name == attrs.name
    end

    test "update_process/2 with invalid data returns error changeset", %{project: project} do
      process = AutomationFixtures.process(project.id)
      attrs = AutomationFixtures.process_attrs(:invalid, project.id)
      assert {:error, %Ecto.Changeset{}} = Processes.update_process(process, attrs)
      assert process == Processes.get_process!(process.id)
    end

    test "delete_process/1 deletes the process", %{project: project} do
      process = AutomationFixtures.process(project.id)
      assert {:ok, %Process{}} = Processes.delete_process(process)
      assert_raise Ecto.NoResultsError, fn -> Processes.get_process!(process.id) end
    end

    test "change_process/1 returns a process changeset", %{project: project} do
      process = AutomationFixtures.process(project.id)
      assert %Ecto.Changeset{} = Processes.change_process(process)
    end
  end
end
