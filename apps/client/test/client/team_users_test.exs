defmodule ClientTest.TeamUsers do
  use Client.RemoteCase
  use Client.LocalCase
  use Client.Case
  alias Userdocs.UsersFixtures
  alias Userdocs.TeamsFixtures
  alias Userdocs.WebFixtures

  describe "TeamUsers Initialize" do
    test "in state properly" do
      Client.init_state()
      assert Map.has_key?(Client.data(), :team_users)
    end
  end

  describe "Server Lists" do
    setup do
      %{team_user: %Schemas.Teams.TeamUser{}}
    end

    test "Gets TeamUser", %{team_user: team_user} do
      Client.put_in_state(:data, %{team_users: [team_user]})
      result = Client.get_team_user!(team_user.id)
      assert result == team_user
    end

    test "Lists TeamUsers", %{team_user: team_user} do
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
      :create_remote_user_context,
      :put_remote_context_data,
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

  describe "Local" do
    setup [
      :create_password,
      :create_user,
      :create_local_team,
      :create_local_user_context,
      :put_local_context_data
    ]
    
    test "deletes", %{local_team_user: team_user} do
      Client.delete_team_user(team_user)
      assert_raise Ecto.NoResultsError, fn -> Userdocs.TeamUsers.get_team_user!(team_user.id, @local_opts) end
    end
    
    test "load_team_users/0 loads team_users", %{local_team_user: team_user} do
      Client.load_team_users()
      %{team_users: [result]} = Client.data()
      assert result.id == team_user.id
    end
  end
end
