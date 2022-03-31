defmodule ClientTest.StepInstances do
  use ExUnit.Case
  use Client.Case
  alias Userdocs.ProjectsFixtures
  alias Userdocs.UsersFixtures
  alias Userdocs.TeamsFixtures
  alias Userdocs.WebFixtures
  alias Userdocs.AutomationFixtures
  alias Userdocs.StepInstanceFixtures
  alias Schemas.StepInstances.StepInstance

  @remote_opts %{context: %{repo: Userdocs.Repo}}

  defp create_password(_), do: %{password: UUID.uuid4()}
  defp create_user(%{password: password}), do: %{user: UsersFixtures.confirmed_user(password)}
  defp create_team(_), do: %{team: TeamsFixtures.team(@remote_opts)}
  defp create_team_user(%{user: user, team: team}), do: %{team_user: TeamsFixtures.team_user(user.id, team.id, @remote_opts)}
  defp create_strategy(_), do: %{strategy: WebFixtures.strategy(@remote_opts)}
  defp create_project(%{team: team, strategy: strategy}), do: %{project: ProjectsFixtures.project(team.id, strategy.id, @remote_opts)}
  defp create_page(%{project: project}), do: %{page: WebFixtures.page(project.id, @remote_opts)}
  defp create_process(%{project: project}), do: %{process: AutomationFixtures.process(project.id, @remote_opts)}
  defp create_step(%{process: process, page: page}), do: %{step: AutomationFixtures.step(page.id, process.id, @remote_opts)}
  defp create_step_instance(%{step: step}), do: %{step_instance: StepInstanceFixtures.step_instance(%{"step_id" => step.id})}
  defp make_selections(%{user: user, team: team, project: project}) do
    {:ok, user} = Userdocs.Users.update_user_selections(user, %{selected_team_id: team.id, selected_project_id: project.id}, %{context: %{repo: Userdocs.Repo}})
    %{user: user}
  end
  defp create_session(%{user: user, password: password}) do
    {:ok, _user} = Client.authenticate(%{"user" => %{"email" => user.email, "password" => password}})
    %{}
  end
  defp init_state(_) do
    Client.init_state()
    %{}
  end

  setup [
    :create_password,
    :create_user,
    :create_team,
    :create_team_user,
    :create_strategy,
    :create_project,
    :create_page,
    :create_process,
    :create_step,
    :create_step_instance,
    :make_selections,
    :create_session,
    :init_state
  ]

  setup do
    on_exit(fn -> Client.destroy_state() end)
  end

  describe "Step Instances State" do
    test "Initialize properly" do
      assert Map.has_key?(Client.data(), :step_instances)
    end

    test "Load", %{step: step, step_instance: step_instance} do
      Client.load_step_instances(%{filters: [step_ids: [step.id]]})
      %{step_instances: [result]} = Client.data()
      assert %StepInstance{} = result
      assert result.id == step_instance.id
    end

    test "Lists", %{step: step, step_instance: step_instance} do
      Client.load_step_instances(%{filters: %{step_ids: [step.id]}})
      [result] = Client.list_step_instances()
      assert %StepInstance{} = result
      assert result.id == step_instance.id
    end
  end

  describe "Step Instances CRUD" do
    setup do
      Phoenix.PubSub.subscribe(Userdocs.PubSub, "data")
      on_exit(fn -> Phoenix.PubSub.unsubscribe(Userdocs.PubSub, "data") end)
    end

    test "Creates", %{step: step} do
      Client.load_step_instances(%{filters: %{step_ids: [step.id]}})

      StepInstanceFixtures.step_instance_attrs(:valid, %{"step_id" => step.id})
      |> Client.create_step_instance()
      assert_receive(%{event: "create"}, 1000)
    end

    test "Updates", %{step: step, step_instance: step_instance} do
      Client.load_step_instances(%{filters: %{step_ids: [step.id]}})
      step_instance = step_instance |> Map.put(:inserted_at, Date.add(DateTime.utc_now(), -1))

      attrs = StepInstanceFixtures.step_instance_attrs(:valid, %{"step_id" => step.id})
      Client.update_step_instance(step_instance, attrs)
      assert_receive(%{event: "update"}, 1000)
    end

    test "Deletes", %{step: step, step_instance: step_instance} do
      Client.load_step_instances(%{filters: %{step_ids: [step.id]}})
      Client.delete_step_instance(step_instance.id)
      assert_receive(%{event: "delete"}, 1000)
    end
  end
end
