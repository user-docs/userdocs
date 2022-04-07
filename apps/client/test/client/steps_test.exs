defmodule ClientTest.Steps do
  use Client.RemoteCase
  use Client.LocalCase
  use Client.Case
  alias Userdocs.UsersFixtures
  alias Userdocs.TeamsFixtures
  alias Userdocs.WebFixtures

  describe "Steps Initialize" do
    test "in state properly" do
      Client.init_state()
      assert Map.has_key?(Client.data(), :steps)
    end
  end

  describe "Server Lists" do
    setup do
      %{step: %Schemas.Steps.Step{}}
    end

    test "Gets Step", %{step: step} do
      Client.put_in_state(:data, %{steps: [step]})
      result = Client.get_step!(step.id)
      assert result == step
    end

    test "Lists Steps", %{step: step} do
      Client.put_in_state(:data, %{steps: [step]})
      [result] = Client.list_steps()
      assert result.id == step.id
    end
  end

  describe "Step Server CUD"  do
    setup [
      :ensure_web_started,

      :create_password,
      :create_user,
      :create_remote_team,
      :create_team_user,
      :create_remote_strategy,
      :create_remote_project,
      :create_remote_process,
      :create_remote_page,
      :create_remote_step,
      :create_remote_tokens,

      :put_access_token_in_state,
      :create_remote_user_context,
      :put_remote_context_data,
      :put_user_in_state
    ]

    test "Loads", %{user: user, remote_step: step} do
      Client.load_steps(%{filters: %{user_id: user.id}})
      %{steps: [result]} = Client.data()
      assert result.id == step.id
    end

    test "creates", %{remote_page: page, remote_process: process} do
      attrs = AutomationFixtures.step_attrs(:valid, page.id, process.id)
      assert {:ok, %{id: step_id}} = Client.create_step(attrs)
      assert %{id: ^step_id} = Userdocs.Steps.get_step!(step_id, @remote_opts)
    end

    test "updates", %{remote_page: page, remote_process: process, remote_step: step} do
      %{name: name} = attrs = AutomationFixtures.step_attrs(:valid, page.id, process.id)
      assert {:ok, step} = Client.update_step(step, attrs)
      assert %{name: ^name} = Userdocs.Steps.get_step!(step.id, @remote_opts)
    end

    test "deletes", %{remote_step: step} do
      Client.delete_step(step)
      assert_raise Ecto.NoResultsError, fn -> Userdocs.Steps.get_step!(step.id, @remote_opts) end
    end
  end

  defp local_setup_context(context) do
    %{
      data: %{
        teams: [context.local_team],
        projects: [context.local_project],
        steps: [context.local_step],
        strategies: [context.local_strategy],
      },
      context: %Schemas.Users.Context{
        user_id: context.user.id,
        team_id: context.local_team.id,
        project_id: context.local_project.id
      }
    }
    |> Map.merge(context)
  end

  defp put_context_in_client(context) do
    Client.put_in_state(context)
    :ok
  end

  describe "Local" do
    setup [
      :create_password,
      :create_user,
      :create_local_team,
      :create_local_strategy,
      :create_local_project,
      :create_local_page,
      :create_local_process,
      :create_local_step,
      :local_setup_context,
      :put_context_in_client
    ]

    test "creates", %{local_page: page, local_process: process} do
      attrs = AutomationFixtures.step_attrs(:valid, page.id, process.id)
      assert {:ok, %{id: step_id}} = Client.create_step(attrs)
      assert %{id: ^step_id} = Userdocs.Steps.get_step!(step_id, @local_opts)
    end

    test "updates", %{local_page: page, local_process: process, local_step: step} do
      %{name: name} = attrs = AutomationFixtures.step_attrs(:valid, page.id, process.id)
      assert {:ok, step} = Client.update_step(step, attrs)
      assert %{name: ^name} = Userdocs.Steps.get_step!(step.id, @local_opts)
    end

    test "deletes", %{local_step: step} do
      Client.delete_step(step)
      assert_raise Ecto.NoResultsError, fn -> Userdocs.Steps.get_step!(step.id, @local_opts) end
    end

    test "load_steps/0 loads steps", %{local_step: step} = context do
      Client.put_in_state(context)
      Client.load_steps()
      %{steps: [result]} = Client.data()
      assert result.id == step.id
    end
  end
end
