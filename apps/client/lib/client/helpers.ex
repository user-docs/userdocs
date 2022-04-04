defmodule Client.Helpers do
  import Client.Constants
  alias Schemas.Users.Context

  def merge_token(opts, %{access_token: token}), do: Map.put(opts, :access_token, token)

  def merge_local_opts(opts), do: Map.merge(opts, local_opts())

  def is_remote?(state) do
    case get_current_team(state) do
      %{type: type} when type in [:personal] -> false
      %{type: type} when type in [:team, :enterprise] -> true
    end
  end

  def get_current_team(%{context: %Context{team_id: nil}}), do: raise("Team ID Not in Context")

  def get_current_team(%{context: %Context{team_id: team_id}} = state) do
    State.Teams.get_team!(team_id, state, state_opts())
  end
end
