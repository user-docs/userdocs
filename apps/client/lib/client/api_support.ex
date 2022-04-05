defmodule Client.APISupport do
  import Client.Constants
  alias Schemas.Users.Context

  def impl(state) do
    case is_remote?(state) do
      true -> Client.Remote.Projects
      false -> Userdocs.Projects
    end
  end

  def local_or_remote_opts(state, opts \\ %{}) do
    case is_remote?(state) do
      true -> merge_token(%{}, state)
      false -> merge_local_opts(opts)
    end
  end

  def merge_token(opts, %{access_token: token}), do: Map.put(opts, :access_token, token)

  def merge_local_opts(opts), do: Map.merge(opts, local_opts())

  def is_remote?(state), do: get_current_team(state) |> is_remote_team?()

  def is_remote_team?(%{type: type}) when type in [:personal], do: false
  def is_remote_team?(%{type: type}) when type in [:team, :enterprise], do: true


  def get_current_team(%{context: %Context{team_id: nil}}), do: raise("Team ID Not in Context")

  def get_current_team(%{context: %Context{team_id: team_id}} = state) do
    State.Teams.get_team!(team_id, state, state_opts())
  end
end
