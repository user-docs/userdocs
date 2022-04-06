defmodule ClientTest.TeamsTest do
  use Client.RemoteCase
  use Client.LocalCase
  use Client.Case
  import Client.Constants
  alias Userdocs.UsersFixtures
  alias Userdocs.TeamsFixtures

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
      assert Map.has_key?(Client.data(), :teams)
    end
  end

  describe "Server Lists" do
    setup do
      %{team: %Schemas.Teams.Team{}}
    end

    test "Lists Teams", %{team: team} do
      Client.put_in_state(:data, %{teams: [team]})
      [result] = Client.list_teams()
      assert result.id == team.id
    end
  end


  describe "Team Server CUD"  do
    setup [
      :ensure_web_started,

      :create_password,
      :create_user,
      :create_remote_team,
      :create_team_user,
      :create_remote_tokens,

      :put_access_token_in_state,
      :this_create_remote_user_context,
      :this_put_remote_context_data,
      :put_user_in_state
    ]

    test "Loads", %{user: user, remote_team: team} do
      Client.load_teams(%{filters: %{user_id: user.id}})
      %{teams: [result]} = Client.data()
      assert result.id == team.id
    end

    test "creates" do
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
      Client.delete_team(team.id)
      assert_raise Ecto.NoResultsError, fn -> Userdocs.Teams.get_team!(team.id, @remote_opts) end
    end
  end

  defp local_setup_context(context) do
    %{
      data: %{
        teams: [context.local_team],
        projects: [],
      },
      context: %Schemas.Users.Context{
        user_id: context.user.id,
        team_id: context.local_team.id,
        project_id: nil
      }
    }
    |> Map.merge(context)
  end

  describe "Local" do
    setup [
      :create_password,
      :create_user,
      :create_local_team,
      :local_setup_context
    ]

    test "create_team/2 creates a team", context do
      Client.put_in_state(context)
      %{name: name} = attrs = TeamsFixtures.team_attrs(:valid, %{})
      assert {:ok, %{id: team_id}} = Client.create_team(attrs)
      assert %{name: ^name} = Userdocs.Teams.get_team!(team_id, @local_opts)
    end

    test "load_teams/0 loads teams", %{local_team: team} = context do
      Client.put_in_state(context)
      Client.load_teams()
      %{teams: [result]} = Client.data()
      assert result.id == team.id
    end
  end
end
