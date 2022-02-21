defmodule ClientTest.TeamUsersTest do
  use UserdocsDesktopWeb.ConnCase
  use UserdocsDesktopWeb.ChannelCase
  alias Userdocs.UsersFixtures
  alias Userdocs.TeamsFixtures

  @remote_opts %{context: %{repo: Userdocs.Repo}}

  defp create_password(_), do: %{password: UUID.uuid4()}
  defp create_user(%{password: password}), do: %{user: UsersFixtures.confirmed_user(password)}
  defp create_team(_), do: %{team: TeamsFixtures.team(@remote_opts)}
  defp create_team_user(%{user: user, team: team}), do: %{team_user: TeamsFixtures.team_user(user.id, team.id, @remote_opts)}
  defp create_session(%{user: user, password: password}) do
    {:ok, _user} = Client.authenticate(%{"user" => %{"email" => user.email, "password" => password}})
    %{}
  end
  defp init_state(_) do
    Client.init_state()
    %{}
  end

  describe "TeamUsers" do
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

    test "TeamUsers Initialize properly" do
      assert Map.has_key?(Client.data(), :team_users)
    end

    test "Loads TeamUsers", %{user: user, team_user: team_user} do
      Client.load_team_users(%{user_id: user.id})
      %{team_users: [result]} = Client.data()
      assert result.id == team_user.id
    end

    test "Lists TeamUsers", %{user: user, team_user: team_user} do
      Client.load_team_users(%{user_id: user.id})
      [result] = Client.list_team_users([])
      assert result.id == team_user.id
    end
  end
end
