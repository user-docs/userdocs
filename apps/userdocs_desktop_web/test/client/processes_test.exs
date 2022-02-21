defmodule ClientTest.Processes do
  use UserdocsDesktopWeb.ConnCase
  use UserdocsDesktopWeb.ChannelCase
  alias Userdocs.ProjectsFixtures
  alias Userdocs.UsersFixtures
  alias Userdocs.TeamsFixtures
  alias Userdocs.WebFixtures
  alias Userdocs.AutomationFixtures
  alias Schemas.Processes.Process

  @remote_opts %{context: %{repo: Userdocs.Repo}}

  defp create_password(_), do: %{password: UUID.uuid4()}
  defp create_user(%{password: password}), do: %{user: UsersFixtures.confirmed_user(password)}
  defp create_team(_), do: %{team: TeamsFixtures.team(@remote_opts)}
  defp create_team_user(%{user: user, team: team}), do: %{team_user: TeamsFixtures.team_user(user.id, team.id, @remote_opts)}
  defp create_strategy(_), do: %{strategy: WebFixtures.strategy(@remote_opts)}
  defp create_project(%{team: team, strategy: strategy}), do: %{project: ProjectsFixtures.project(team.id, strategy.id, @remote_opts)}
  defp create_process(%{project: project}), do: %{process: AutomationFixtures.process(project.id, @remote_opts)}

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

  describe "Processes" do
    setup [
      :create_password,
      :create_user,
      :create_team,
      :create_team_user,
      :create_strategy,
      :create_project,
      :create_process,
      :make_selections,
      :create_session,
      :init_state
    ]

    setup do
      on_exit(fn -> Client.destroy_state() end)
    end

    test "Processes Initialize properly" do
      assert Map.has_key?(Client.data(), :processes)
    end

    test "Loads Processes", %{user: user, process: process} do
      Client.load_processes(%{filters: %{user_id: user.id}})
      %{processes: [result]} = Client.data()
      assert %Process{} = result
      assert result.id == process.id
    end

    test "Lists Processes", %{user: user, process: process} do
      Client.load_processes(%{filters: %{user_id: user.id}})
      [result] = Client.list_processes([])
      assert %Process{} = result
      assert result.id == process.id
    end

    test "Process CU", %{user: user, process: process, project: project} do
      Client.connect()
      UserdocsDesktopWeb.Endpoint.subscribe("data")
      Client.load_processes(%{filters: %{user_id: user.id}})

      AutomationFixtures.process_attrs(:valid, project.id)
      |> Client.create_process()
      assert_broadcast("create", %{})

      attrs = AutomationFixtures.process_attrs(:valid, project.id)
      Client.update_process(process, attrs)
      assert_broadcast("update", %{})
      UserdocsDesktopWeb.Endpoint.unsubscribe("data")
      Client.disconnect()
    end
  end
end
