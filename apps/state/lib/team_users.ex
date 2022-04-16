defmodule State.TeamUsers do
  @moduledoc "Context functiosn for operating on User structs in memory state"

  require Logger

  alias Schemas.Teams.TeamUser

  def load_team_users(state, opts) do
    StateHandlers.load(state, Userdocs.TeamUsers.list_team_users(opts), TeamUser, opts)
  end

  def list_team_users(state, opts) do
    StateHandlers.list(state, TeamUser, opts)
    |> maybe_preload(opts[:preloads], state, opts)
  end

  def get_team_user!(id, state, opts) when is_binary(id) do
    StateHandlers.get(state, id, TeamUser, opts)
    |> maybe_preload(opts[:preloads], state, opts)
  end

  defp maybe_preload(process, nil, _, _), do: process
  defp maybe_preload(process, _preloads, state, opts) do
    opts = Keyword.delete(opts, :filter)
    StateHandlers.preload(state, process, opts)
  end
end
