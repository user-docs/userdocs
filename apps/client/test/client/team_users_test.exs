defmodule ClientTest.TeamUsers do
  use Client.RemoteCase
  use Client.LocalCase
  use Client.Case
  import Client.Constants
  alias Userdocs.UsersFixtures
  alias Userdocs.TeamsFixtures
  alias Userdocs.WebFixtures

  def this_create_remote_user_context(%{user: user, remote_team: team}),
    do: %{remote_context: ContextsFixtures.context(%{user_id: user.id, team_id: team.id, project_id: nil}, local_opts())}

  defp this_put_remote_context_data(%{remote_team: team, remote_context: context}) do
    data = Client.state() |> Map.get(:data) |> Map.put(:teams, [team])
    Client.put_in_state(:data, data)
    Client.put_in_state(:context, context)
  end

  describe "Teams Initialize" do
    test "in state properly" do
      Client.init_state()
      assert Map.has_key?(Client.data(), :team_users)
    end
  end

  describe "Server Lists" do
    setup do
      %{team_user: %Schemas.Teams.TeamUser{}}
    end

    test "Lists Teams", %{team_user: team_user} do
      Client.put_in_state(:data, %{team_users: [team_user]})
      [result] = Client.list_team_users()
      assert result.id == team_user.id
    end
  end

  describe "TeamUser Server CUD"  do
    setup [
      :ensure_web_started,

      :create_password,
      :create_user,
      :create_remote_team,
:create_remote_team_user,

      :create_remote_tokens,

      :put_access_token_in_state,
      :this_create_remote_user_context,
      :this_put_remote_context_data,
      :put_user_in_state
    ]

    test "Loads", %{user: user, remote_team_user: team_user} do
      Client.load_team_users(%{filters: %{user_id: user.id}})
      %{team_users: [result]} = Client.data()
      assert result.id == team_user.id
    end

    test "deletes", %{remote_team_user: team_user} do
      Client.delete_team_user(team_user)
      assert_raise Ecto.NoResultsError, fn -> Userdocs.TeamUsers.get_team_user!(team_user.id, @remote_opts) end
    end
  end
end