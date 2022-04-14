defmodule ClientTest.Processes do
  use Client.RemoteCase
  use Client.LocalCase
  use Client.Case
  alias Userdocs.UsersFixtures
  alias Userdocs.TeamsFixtures
  alias Userdocs.WebFixtures

  describe "Processes Initialize" do
    setup [:reinitialize_state]
    test "in state properly" do
      Client.init_state()
      assert Map.has_key?(Client.data(), :processes)
    end
  end

  describe "Server Lists" do
    setup do
      %{process: %Schemas.Processes.Process{}}
    end
    
    test "Gets Process", %{process: process} do
      Client.put_in_state(:data, %{processes: [process]})
      result = Client.get_process!(process.id)
      assert result == process
    end
    
    test "Lists Processes", %{process: process} do
      Client.put_in_state(:data, %{processes: [process]})
      [result] = Client.list_processes()
      assert result.id == process.id
    end
  end

  describe "Process Server CUD"  do
    setup [
      :reinitialize_state,
      :ensure_web_started,
      :create_password,
      :create_user,
      :create_remote_team,
      :create_remote_team_user,
      :create_remote_strategy,
      :create_remote_project,
      :create_remote_process,
      :create_remote_tokens,
      :put_access_token_in_state,
      :create_remote_user_context,
      :put_remote_context_data,
      :put_user_in_state
    ]

    test "Loads", %{user: user, remote_process: process} do
      Client.load_processes(%{filters: %{user_id: user.id}})
      %{processes: [result]} = Client.data()
      assert result.id == process.id
    end
    
    test "creates", %{remote_project: project} do
      attrs = AutomationFixtures.process_attrs(:valid, project.id)
      assert {:ok, %{id: process_id}} = Client.create_process(attrs)
      assert %{id: ^process_id} = Userdocs.Processes.get_process!(process_id, @remote_opts)
    end
    
    test "updates", %{remote_project: project, remote_process: process} do
      %{name: name} = attrs = AutomationFixtures.process_attrs(:valid, project.id)
      assert {:ok, process} = Client.update_process(process, attrs)
      assert %{name: ^name} = Userdocs.Processes.get_process!(process.id, @remote_opts)
    end
    
    test "deletes", %{remote_process: process} do
      Client.delete_process(process)
      assert_raise Ecto.NoResultsError, fn -> Userdocs.Processes.get_process!(process.id, @remote_opts) end
    end
  end

  describe "Local" do
    setup [
      :create_password,
      :create_user,
      :create_local_team,
      :create_local_strategy,
      :create_local_project,
      :create_local_process,
      :create_local_user_context,
      :put_local_context_data
    ]
    
    test "creates", %{local_project: project} do
      attrs = AutomationFixtures.process_attrs(:valid, project.id)
      assert {:ok, %{id: process_id}} = Client.create_process(attrs)
      assert %{id: ^process_id} = Userdocs.Processes.get_process!(process_id, @local_opts)
    end
    
    test "updates", %{local_project: project, local_process: process} do
      %{name: name} = attrs = AutomationFixtures.process_attrs(:valid, project.id)
      assert {:ok, process} = Client.update_process(process, attrs)
      assert %{name: ^name} = Userdocs.Processes.get_process!(process.id, @local_opts)
    end
    
    test "deletes", %{local_process: process} do
      Client.delete_process(process)
      assert_raise Ecto.NoResultsError, fn -> Userdocs.Processes.get_process!(process.id, @local_opts) end
    end
    
    test "load_processes/0 loads processes", %{local_process: process} do
      Client.load_processes()
      %{processes: [result]} = Client.data()
      assert result.id == process.id
    end
  end
end
