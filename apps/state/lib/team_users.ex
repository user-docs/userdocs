defmodule State.TeamUsers do
  @moduledoc "Context functiosn for operating on User structs in memory state"

  require Logger

  alias Schemas.Teams.TeamUser

  def load_team_users(state, opts) do
    StateHandlers.load(state, Userdocs.TeamUsers.list_team_users(opts), TeamUser, opts)
  end
end
