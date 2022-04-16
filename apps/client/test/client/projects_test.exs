defmodule ClientTest.Projects do
  use Client.RemoteCase
  use Client.LocalCase
  use Client.Case
  alias Userdocs.UsersFixtures
  alias Userdocs.TeamsFixtures
  alias Userdocs.WebFixtures

  describe "Projects Initialize" do
    setup [:reinitialize_state]
    test "in state properly" do
      Client.init_state()
      assert Map.has_key?(Client.data(), :projects)
    end
  end

  describe "Server Lists" do
    setup [:reinitialize_state]
    setup do
      %{project: %Schemas.Projects.Project{}}
    end
    
    test "Gets Project", %{project: project} do
      Client.put_in_state(:data, %{projects: [project]})
      result = Client.get_project!(project.id)
      assert result == project
    end
    
    test "Lists Projects", %{project: project} do
      Client.put_in_state(:data, %{projects: [project]})
      [result] = Client.list_projects()
      assert result.id == project.id
    end
  end

  describe "Project Server CUD"  do
    setup [
      :reinitialize_state,
      :ensure_web_started,
      :create_password,
      :create_user,
      :create_remote_team,
      :create_remote_team_user,
      :create_remote_strategy,
      :create_remote_project,
      :create_remote_tokens,
      :put_access_token_in_state,
      :create_remote_user_context,
      :put_remote_context_data,
      :put_user_in_state
    ]

    test "Loads", %{user: user, remote_project: project} do
      Client.load_projects(%{filters: %{user_id: user.id}})
      %{projects: [result]} = Client.data()
      assert result.id == project.id
    end
    
    test "creates", %{remote_strategy: strategy, remote_team: team} do
      attrs = ProjectsFixtures.project_attrs(:valid, team.id, strategy.id)
      assert {:ok, %{id: project_id}} = Client.create_project(attrs)
      assert %{id: ^project_id} = Userdocs.Projects.get_project!(project_id, @remote_opts)
    end
    
    test "updates", %{remote_strategy: strategy, remote_team: team, remote_project: project} do
      %{name: name} = attrs = ProjectsFixtures.project_attrs(:valid, team.id, strategy.id)
      assert {:ok, project} = Client.update_project(project, attrs)
      assert %{name: ^name} = Userdocs.Projects.get_project!(project.id, @remote_opts)
    end
    
    test "deletes", %{remote_project: project} do
      Client.delete_project(project)
      assert_raise Ecto.NoResultsError, fn -> Userdocs.Projects.get_project!(project.id, @remote_opts) end
    end
  end

  describe "Local" do
    setup [
      :reinitialize_state,
      :create_password,
      :create_user,
      :create_local_team,
      :create_local_strategy,
      :create_local_project,
      :create_local_user_context,
      :put_local_context_data
    ]
    
    test "creates", %{local_strategy: strategy, local_team: team} do
      attrs = ProjectsFixtures.project_attrs(:valid, team.id, strategy.id)
      assert {:ok, %{id: project_id}} = Client.create_project(attrs)
      assert %{id: ^project_id} = Userdocs.Projects.get_project!(project_id, @local_opts)
    end
    
    test "updates", %{local_strategy: strategy, local_team: team, local_project: project} do
      %{name: name} = attrs = ProjectsFixtures.project_attrs(:valid, team.id, strategy.id)
      assert {:ok, project} = Client.update_project(project, attrs)
      assert %{name: ^name} = Userdocs.Projects.get_project!(project.id, @local_opts)
    end
    
    test "deletes", %{local_project: project} do
      Client.delete_project(project)
      assert_raise Ecto.NoResultsError, fn -> Userdocs.Projects.get_project!(project.id, @local_opts) end
    end
    
    test "load_projects/0 loads projects", %{local_project: project} do
      Client.load_projects()
      %{projects: [result]} = Client.data()
      assert result.id == project.id
    end
  end
end
