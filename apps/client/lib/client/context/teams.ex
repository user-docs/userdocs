defmodule Client.Context.Teams do
  alias Schemas.Users.Context
  alias Client.Constants

  def get_current_team(%{context: %Context{team_id: team_id}} = state) do
    State.Teams.get_team!(team_id, state, Constants.state_opts())
  end
end
