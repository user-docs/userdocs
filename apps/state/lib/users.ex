defmodule State.Users do
  @moduledoc "Context functiosn for operating on User structs in memory state"

  require Logger

  alias Schemas.Users.User

  def load_users(state, opts) do
    StateHandlers.load(state, Userdocs.Users.list_users(opts), User, opts)
  end

  def list_users(state, opts) do
    StateHandlers.list(state, User, opts)
  end

  def get_user!(id, state, opts \\ %{}) do
    StateHandlers.get(state, id, User, opts)
    |> maybe_preload(opts[:preloads], state, opts)
  end

  defp maybe_preload(object, nil, _, _), do: object
  defp maybe_preload(object, preloads, state, opts) do
    StateHandlers.preload(state, object, preloads, opts)
  end
end
