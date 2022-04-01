defmodule ClientTest.Projects do
  use ExUnit.Case
  use Client.Case
  alias Userdocs.ProjectsFixtures
  alias Userdocs.UsersFixtures
  alias Userdocs.TeamsFixtures
  alias Userdocs.WebFixtures
  alias Userdocs.ClientFixtures

  @remote_opts %{context: %{repo: Userdocs.Repo}}
  @local_opts %{context: %{repo: Userdocs.LocalRepo}}

  defp create_password(_), do: %{password: UUID.uuid4()}
  defp create_user(%{password: password}), do: %{user: UsersFixtures.confirmed_user(password)}
  defp create_team(_), do: %{team: TeamsFixtures.team(@remote_opts)}
  defp create_team_user(%{user: user, team: team}), do: %{team_user: TeamsFixtures.team_user(user.id, team.id, @remote_opts)}
  defp create_strategy(_), do: %{strategy: WebFixtures.strategy(@remote_opts)}
  defp create_project(%{team: team, strategy: strategy}), do: %{project: ProjectsFixtures.project(team.id, strategy.id, @remote_opts)}
  defp make_selections(%{user: user, team: team, project: project}) do
    {:ok, user} = Userdocs.Users.update_user_selections(user, %{selected_team_id: team.id, selected_project_id: project.id}, %{context: %{repo: Userdocs.Repo}})
    %{user: user}
  end
  defp create_context(%{user: user, team: team, project: project}) do
    Userdocs.Contexts.create_context(%{user_id: user.id, team_id: team.id, project_id: project.id}, @local_opts)
    :ok
  end
  defp ensure_session(%{user: user, password: password}) do
    case Client.current_user() do
      nil ->
        Client.authenticate(%{"user" => %{"email" => user.email, "password" => password}})
      %Schemas.Users.User{} ->
        nil
    end
    %{}
  end
  defp ensure_state(_) do
    case Map.has_key?(Client.data(), :projects) do
      true -> nil
      _ -> Client.init_state()
    end
    %{}
  end
  defp subscribe(_) do
    Phoenix.PubSub.subscribe(Userdocs.PubSub, "data")
    :ok
  end
  defp load_project(%{user: user}) do
    Client.load_projects(%{filters: %{user_id: user.id}})
    :ok
  end
  defp reconnect_channel(%{team: team, user: user, password: password}) do
    Client.disconnect()
    Client.authenticate(%{"user" => %{"email" => user.email, "password" => password}})
    Client.put_in_state(:current_user, user)
    Client.put_in_state(:current_team, team)
    Client.connect()
    :ok
  end
  defp base_client(context) do
    ClientFixtures.base_client(context)
  end
  defp load_client(context) do
    Client.load()
    :ok
  end
  defp allow_client(context) do
    Ecto.Adapters.SQL.Sandbox.allow(Userdocs.LocalRepo, context.local_pid, Process.whereis(Client))
    :ok
  end

  describe "Projects Initialize" do
    test "in state properly" do
      Client.init_state()
      assert Map.has_key?(Client.data(), :projects)
    end
  end

  describe "Project Server Reads" do
    setup [
      :create_password,
      :create_user,
      :create_team,
      :create_team_user,
      :create_strategy,
      :create_project,
      :make_selections,
      :ensure_session,
      :ensure_state
    ]

    test "Loads Projects", %{user: user, project: project} do
      Client.load_projects(%{filters: %{user_id: user.id}})
      %{projects: [result]} = Client.data()
      assert result.id == project.id
    end

    test "Lists Projects", %{project: project} do
      Client.put_in_state(:data, %{projects: [project]})
      [result] = Client.list_projects([])
      assert result.id == project.id
    end
  end

  describe "Project Server CUD"  do
    setup [
      :create_password,
      :create_user,
      :create_team,
      :create_team_user,
      :create_strategy,
      :create_project,
      :create_context,
      :ensure_session,
      :ensure_state,
      :subscribe,
      :load_project,
      :reconnect_channel
    ]

    setup do
      on_exit(fn -> Phoenix.PubSub.unsubscribe(Userdocs.PubSub, "data") end)
    end

    test "creates", %{team: team, strategy: strategy} do
      attrs = ProjectsFixtures.project_attrs(:valid, team.id, strategy.id)
      assert {:ok, %{id: project_id}} = Client.create_project(attrs)
      assert_receive(%{event: "create"}, 1000)
      assert %{id: ^project_id} = Userdocs.Projects.get_project!(project_id, @remote_opts)
    end

    test "updates", %{project: project, team: team, strategy: strategy} do
      %{base_url: base_url} = attrs = ProjectsFixtures.project_attrs(:valid, team.id, strategy.id)
      assert {:ok, project} = Client.update_project(project, attrs)
      assert_receive(%{event: "update"}, 1000)
      assert %{base_url: ^base_url} = Userdocs.Projects.get_project!(project.id, @remote_opts)
    end

    test "deletes", %{project: project} do
      Client.delete_project(project.id)
      assert_receive(%{event: "delete"}, 1000)
    end
  end

  describe "Local Reads" do
    setup [
      :create_password,
      :create_user,
      :allow_client,
      :base_client,
      :create_context,
      :ensure_session,
      :ensure_state,
      :load_client,
    ]

    test "loads from local db", %{user: user} do
      IO.puts "Test"
      #Client.load_projects(%{filters: %{user_id: user.id}})
    end
  end
end
