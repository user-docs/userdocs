defmodule ClientTest.Projects do
  use Client.RemoteCase
  use Client.LocalCase
  use Client.Case
  alias Userdocs.ProjectsFixtures
  alias Userdocs.UsersFixtures
  alias Userdocs.TeamsFixtures
  alias Userdocs.WebFixtures

  describe "Projects Initialize" do
    test "in state properly" do
      Client.init_state()
      assert Map.has_key?(Client.data(), :projects)
    end
  end

  describe "Server Lists" do
    setup do
      %{project: %Schemas.Projects.Project{}}
    end

    test "Lists Projects", %{project: project} do
      Client.put_in_state(:data, %{projects: [project]})
      [result] = Client.list_projects()
      assert result.id == project.id
    end
  end

  describe "Project Server CUD"  do
    setup [
      :ensure_web_started,

      :create_password,
      :create_user,
      :create_remote_team,
      :create_team_user,
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

    test "creates", %{remote_team: team, remote_strategy: strategy} do
      attrs = ProjectsFixtures.project_attrs(:valid, team.id, strategy.id)
      assert {:ok, %{id: project_id}} = Client.create_project(attrs)
      assert %{id: ^project_id} = Userdocs.Projects.get_project!(project_id, @remote_opts)
    end

    test "updates", %{remote_project: project, remote_team: team, remote_strategy: strategy} do
      %{base_url: base_url} = attrs = ProjectsFixtures.project_attrs(:valid, team.id, strategy.id)
      assert {:ok, project} = Client.update_project(project, attrs)
      assert %{base_url: ^base_url} = Userdocs.Projects.get_project!(project.id, @remote_opts)
    end

    test "deletes", %{remote_project: project} do
      Client.delete_project(project.id)
      assert_raise Ecto.NoResultsError, fn -> Userdocs.Projects.get_project!(project.id, @remote_opts) end
    end
  end

  defp local_setup_context(context) do
    %{
      data: %{
        teams: [context.local_team],
        projects: [context.local_project],
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

  describe "Local" do
    setup [
      :create_password,
      :create_user,
      :create_local_team,
      :create_local_strategy,
      :create_local_project,
      :local_setup_context
    ]

    test "create_project/2 creates a project", context do
      %{local_team: team, local_strategy: strategy} = context
      Client.put_in_state(context)
      %{base_url: url} = attrs = ProjectsFixtures.project_attrs(:valid, team.id, strategy.id)
      assert {:ok, %{id: project_id}} = Client.create_project(attrs)
      assert %{base_url: ^url} = Userdocs.Projects.get_project!(project_id, @local_opts)
    end

    test "load_projects/0 loads projects", %{local_project: project} = context do
      Client.put_in_state(context)
      Client.load_projects()
      %{projects: [result]} = Client.data()
      assert result.id == project.id
    end
  end
end
