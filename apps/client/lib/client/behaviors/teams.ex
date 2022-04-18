defmodule Client.Teams do
  import Client.APISupport
  import Client.Constants
  alias Schemas.Teams.Team

  @callback list_teams(map()) :: list(Team)
  @callback create_team(map(), map()) :: {:ok, Team} | {:error, Ecto.Changeset}
  @callback update_team(Team, map(), map()) :: {:ok, Team} | {:error, Ecto.Changeset}
  @callback delete_team(binary(), map()) :: {:ok, Team} | {:error, Ecto.Changeset}
  def create_team(attrs, state),
    do: Module.concat(impl(state), "Teams").create_team(attrs, local_or_remote_opts(state)) # TODO: subsume Module.concat into impl
  
   def update_team(team, attrs, state),
    do: Module.concat(impl(state), "Teams").update_team(team, attrs, local_or_remote_opts(state))
  
  def delete_team(%Team{} = team, state), do: Module.concat(impl(state), "Teams").delete_team(team, local_or_remote_opts(state))
  def delete_team(team_id, state) when is_binary(team_id) do
    team = State.Teams.get_team!(team_id, state, state_opts())
    Module.concat(impl(state), "Teams").delete_team(team, local_or_remote_opts(state))
  end
  
  def load_teams(state, opts) do
    teams = Module.concat(impl(state), "Teams").list_teams(local_or_remote_opts(state, opts))
    StateHandlers.load(state, teams, Team, state_opts())
  end
end
