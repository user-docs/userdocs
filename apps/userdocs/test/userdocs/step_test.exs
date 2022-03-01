defmodule Userdocs.AutomationTest do
  use Userdocs.DataCase

  alias Userdocs.AutomationFixtures
  alias Userdocs.UsersFixtures
  alias Userdocs.TeamsFixtures
  alias Userdocs.ProjectsFixtures
  alias Userdocs.WebFixtures
  alias Userdocs.Steps
  alias Schemas.Steps.Step
  alias Userdocs.AutomationFixtures
  @opts %{context: %{repo: Userdocs.Repo}}

  defp create_user(_), do: %{user: UsersFixtures.user()}
  defp create_team(_), do: %{team: TeamsFixtures.team(@opts)}
  defp create_team_user(%{user: user, team: team}), do: %{team_user: TeamsFixtures.team_user(user.id, team.id, @opts)}
  defp create_project(%{team: team, strategy: strategy}), do: %{project: ProjectsFixtures.project(team.id, strategy.id, @opts)}
  defp create_process(%{project: project}), do: %{process: AutomationFixtures.process(project.id, @opts)}
  defp create_page(%{project: project}), do: %{page: WebFixtures.page(project.id, @opts)}
  defp create_strategy(_), do: %{strategy: WebFixtures.strategy(@opts)}
  defp create_element(%{page: page, strategy: strategy}), do: %{element: WebFixtures.element(page.id, strategy.id, @opts)}
  defp create_annotation(%{page: page}), do: %{annotation: WebFixtures.annotation(page.id, @opts)}
  defp create_step_types(_), do: %{step_types: AutomationFixtures.all_valid_step_types()}

  describe "steps" do
    setup [
      :create_user,
      :create_strategy,
      :create_team,
      :create_team_user,
      :create_project,
      :create_process,
      :create_page,
      :create_element,
      :create_annotation,
      :create_step_types
    ]

    def validate_step_fields(step_one, step_two) do
      assert step_one.order == step_two.order
      assert step_one.name == step_two.name
    end

    test "list_steps/0 returns all steps", %{process: process, page: page} do
      step = AutomationFixtures.step(page.id, process.id, @opts)
      assert Steps.list_steps(@opts) == [step]
    end

    test "get_step!/1 returns the step with given id", %{process: process, page: page} do
      step = AutomationFixtures.step(page.id, process.id, @opts)
      fetched_step = Steps.get_step!(step.id, @opts)
      validate_step_fields(step, fetched_step)
    end

    test "create_step/1 with valid data creates a step", %{process: process, page: page} do
      attrs = AutomationFixtures.step_attrs(:valid, page.id, process.id)
      assert {:ok, %Step{} = step} = Steps.create_step(attrs, @opts)
      assert step.order == attrs.order
    end

    test "create_step/1 with invalid data returns error changeset" do
      attrs = AutomationFixtures.step_attrs(:invalid)
      assert {:error, %Ecto.Changeset{}} = Steps.create_step(attrs, @opts)
    end

    test "update_step/2 with valid data updates the step", %{process: process, page: page} do
      step = AutomationFixtures.step(page.id, process.id, @opts)
      attrs = AutomationFixtures.step_attrs(:valid, page.id, process.id)
      assert {:ok, %Step{} = updated_step} = Steps.update_step(step, attrs, @opts)
      assert updated_step.order == attrs.order
    end

    test "update_step/2 with invalid data returns error changeset", %{process: process, page: page} do
      step = AutomationFixtures.step(page.id, process.id, @opts)
      attrs = AutomationFixtures.step_attrs(:invalid)
      assert {:error, %Ecto.Changeset{}} = Steps.update_step(step, attrs, @opts)
      fetched_step = Steps.get_step!(step.id, @opts)
      validate_step_fields(step, fetched_step)
    end

    test "delete_step/1 deletes the step", %{process: process, page: page} do
      step = AutomationFixtures.step(page.id, process.id, @opts)
      assert {:ok, %Step{}} = Steps.delete_step(step, @opts)
      assert_raise Ecto.NoResultsError, fn -> Steps.get_step!(step.id, @opts) end
    end

    test "change_step/1 returns a step changeset", %{process: process, page: page} do
      step = AutomationFixtures.step(page.id, process.id, @opts)
      assert %Ecto.Changeset{} = Steps.change_step(step, @opts)
    end
  end
end
