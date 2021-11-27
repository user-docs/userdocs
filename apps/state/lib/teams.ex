defmodule State.Teams do
  @moduledoc "Context functiosn for operating on User structs in memory state"

  require Logger

  alias Schemas.Teams.Team

  def load_teams(state, opts) do
    StateHandlers.load(state, list_teams(opts[:params], opts[:filters]), Team, opts)
  end

  def list_teams(state, opts) do
    StateHandlers.list(state, Team, opts)
    |> maybe_preload(opts[:preloads], state, opts)
  end

  def get_team!(id, state, opts) when is_binary(id),
    do: get_team!(String.to_integer(id), state, opts)
  def get_team!(id, state, opts) when is_integer(id) do
    StateHandlers.get(state, id, Team, opts)
    |> maybe_preload(opts[:preloads], state, opts)
  end

  defp maybe_preload(object, nil, _, _), do: object
  defp maybe_preload(object, _preloads, state, opts) do
    opts = Keyword.delete(opts, :filter)
    StateHandlers.preload(state, object, opts)
  end
end
