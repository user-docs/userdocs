defmodule ClientTest.Steps do
  use ExUnit.Case
  use UserdocsClient.Case
  alias Userdocs.ProjectsFixtures
  alias Userdocs.UsersFixtures
  alias Userdocs.TeamsFixtures
  alias Userdocs.WebFixtures
  alias Userdocs.AutomationFixtures
  alias Schemas.Steps.Step

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

  describe "Steps" do
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
      :make_selections,
      :create_session,
      :init_state
    ]

    setup do
      on_exit(fn -> Client.destroy_state() end)
    end

    test "Steps Initialize properly" do
      assert Map.has_key?(Client.data(), :steps)
    end

    test "Loads Steps", %{project: project, step: step} do
      Client.load_steps(%{filters: %{project_id: project.id}})
      %{steps: [result]} = Client.data()
      assert %Step{} = result
      assert result.id == step.id
    end

    test "Lists Steps", %{project: project, step: step} do
      Client.load_steps(%{filters: %{project_id: project.id}})
      [result] = Client.list_steps([])
      assert %Step{} = result
      assert result.id == step.id
    end

    test "Step CU", %{project: project, step: step, page: page, process: process} do
      Client.connect()
      Phoenix.PubSub.subscribe(Userdocs.PubSub, "data")
      Client.load_steps(%{filters: %{project_id: project.id}})

      AutomationFixtures.step_attrs(:valid, page.id, process.id)
      |> Client.create_step()
      assert_receive({"create", %{}}, 1000)

      attrs = AutomationFixtures.step_attrs(:valid, page.id, process.id)
      Client.update_step(step, attrs)
      assert_receive({"update", %{}}, 1000)
      Phoenix.PubSub.unsubscribe(Userdocs.PubSub, "data")
      Client.disconnect()
    end
  end
end
