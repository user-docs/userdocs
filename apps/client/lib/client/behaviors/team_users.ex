defmodule Client.TeamUsers do
  import Client.APISupport
  import Client.Constants
  alias Schemas.Teams.TeamUser

  @callback list_team_users(map()) :: list(TeamUser)
  
  
  @callback delete_team_user(binary(), map()) :: {:ok, TeamUser} | {:error, Ecto.Changeset}
  
  
  def  delete_team_user(%TeamUser{} = team_user, state), do: Module.concat(impl(state), "TeamUsers").delete_team_user(team_user, local_or_remote_opts(state))
  
  def load_team_users(state, opts) do
    team_users = Module.concat(impl(state), "TeamUsers").list_team_users(local_or_remote_opts(state, opts))
    StateHandlers.load(state, team_users, TeamUser, state_opts())
  end
end
