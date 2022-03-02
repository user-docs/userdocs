defmodule ClientTest.TeamsTest do
  use ExUnit.Case
  use Client.Case
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

  describe "Teams" do
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

    test "Teams Initialize properly" do
      assert Map.has_key?(Client.data(), :teams)
    end

    test "Loads Teams", %{user: user, team: team} do
      Client.load_teams(%{user_id: user.id})
      %{teams: [result]} = Client.data()
      assert result.id == team.id
    end

    test "Lists Teams", %{user: user, team: team} do
      Client.load_teams(%{user_id: user.id})
      [result] = Client.list_teams([])
      assert result.id == team.id
    end

    test "Get team", %{user: user, team: team} do
      Client.load_teams(%{user_id: user.id})
      result = Client.get_team!(team.id, %{})
      assert result.name == team.name
    end

    test "Delete team", %{user: user, team: team} do
      Client.load_teams(%{user_id: user.id})
      Client.delete_team(team.id, %{})
      assert Userdocs.Teams.list_teams(@remote_opts) == []
    end
  end
end
