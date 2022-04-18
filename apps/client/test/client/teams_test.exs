defmodule ClientTest.Teams do
  use Client.RemoteCase
  use Client.LocalCase
  use Client.Case
  alias Userdocs.TeamsFixtures

  describe "Teams Initialize" do
    setup [:reinitialize_state]
    test "in state properly" do
      Client.init_state()
      assert Map.has_key?(Client.data(), :teams)
    end
  end

  describe "Server Lists" do
    setup [:reinitialize_state]
    setup do
      %{team: %Schemas.Teams.Team{}}
    end
    
    test "Gets Team", %{team: team} do
      Client.put_in_state(:data, %{teams: [team]})
      result = Client.get_team!(team.id)
      assert result == team
    end
    
    test "Lists Teams", %{team: team} do
      Client.put_in_state(:data, %{teams: [team]})
      [result] = Client.list_teams()
      assert result.id == team.id
    end
  end

  describe "Team Server CUD"  do
    setup [
      :reinitialize_state,
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

    test "Loads", %{user: user, remote_team: team} do
      Client.load_teams(%{filters: %{user_id: user.id}})
      %{teams: [result]} = Client.data()
      assert result.id == team.id
    end
    
    test "creates", %{} do
      attrs = TeamsFixtures.team_attrs(:valid, %{})
      assert {:ok, %{id: team_id}} = Client.create_team(attrs)
      assert %{id: ^team_id} = Userdocs.Teams.get_team!(team_id, @remote_opts)
    end
    
    test "updates", %{remote_team: team} do
      %{name: name} = attrs = TeamsFixtures.team_attrs(:valid, %{})
      assert {:ok, team} = Client.update_team(team, attrs)
      assert %{name: ^name} = Userdocs.Teams.get_team!(team.id, @remote_opts)
    end
    
    test "deletes", %{remote_team: team} do
      Client.delete_team(team)
      assert_raise Ecto.NoResultsError, fn -> Userdocs.Teams.get_team!(team.id, @remote_opts) end
    end
  end

  describe "Local" do
    setup [
      :reinitialize_state,
      :create_password,
      :create_user,
      :create_local_team,
      :create_local_user_context,
      :put_local_context_data
    ]
    
    test "creates", %{} do
      attrs = TeamsFixtures.team_attrs(:valid, %{})
      assert {:ok, %{id: team_id}} = Client.create_team(attrs)
      assert %{id: ^team_id} = Userdocs.Teams.get_team!(team_id, @local_opts)
    end
    
    test "updates", %{local_team: team} do
      %{name: name} = attrs = TeamsFixtures.team_attrs(:valid, %{})
      assert {:ok, team} = Client.update_team(team, attrs)
      assert %{name: ^name} = Userdocs.Teams.get_team!(team.id, @local_opts)
    end
    
    test "deletes", %{local_team: team} do
      Client.delete_team(team)
      assert_raise Ecto.NoResultsError, fn -> Userdocs.Teams.get_team!(team.id, @local_opts) end
    end
    
    test "load_teams/0 loads teams", %{local_team: team} do
      Client.load_teams()
      %{teams: [result]} = Client.data()
      assert result.id == team.id
    end
  end
end
