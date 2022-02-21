defmodule ClientTest.UsersTest do
  use UserdocsDesktopWeb.ConnCase
  use UserdocsDesktopWeb.ChannelCase
  alias Userdocs.UsersFixtures
  alias Userdocs.TeamsFixtures

  @remote_opts %{context: %{repo: Userdocs.Repo}}

  defp create_password(_), do: %{password: UUID.uuid4()}
  defp create_user(%{password: password}), do: %{user: UsersFixtures.confirmed_user(password)}
  defp create_team(_), do: %{team: TeamsFixtures.team(@remote_opts)}
  defp create_team_user(%{user: user, team: team}), do: %{team_user: TeamsFixtures.team_user(user.id, team.id, @remote_opts)}
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

  describe "Users" do
    setup [
      :create_password,
      :create_user,
      :create_team,
      :create_team_user,
      :create_session,
      :init_state
    ]

    setup do
      on_exit(fn -> Client.destroy_state() end)
    end

    test "Users Initialize properly" do
      assert Map.has_key?(Client.data(), :users)
    end

    test "Loads users", %{user: user} do
      Client.load_users(%{user_id: user.id})
      %{users: [result]} = Client.data()
      assert result.id == user.id
    end

    test "Lists users", %{user: user} do
      Client.load_users(%{user_id: user.id})
      [result] = Client.list_users([])
      assert result.id == user.id
    end

    test "Updates user", %{user: user, team: team} do
      UserdocsDesktopWeb.Endpoint.subscribe("data")
      Client.connect()
      Client.load_users(%{user_id: user.id})
      attrs = %{selected_team_id: team.id}
      Client.update_user(user, attrs)
      assert_broadcast("update_user", %{})
      UserdocsDesktopWeb.Endpoint.unsubscribe("data")
      Client.disconnect()
    end
  end
end
