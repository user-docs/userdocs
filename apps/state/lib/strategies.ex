defmodule State.Strategies do
  @moduledoc "Context functiosn for operating on User structs in memory state"

  require Logger

  alias Schemas.Strategies.Strategy

  def load_strategies(state, opts) do
    StateHandlers.load(state, Userdocs.Strategies.list_strategies(), Strategy, opts)
  end

  def list_strategies(state, opts) do
    StateHandlers.list(state, Strategy, opts)
  end

  def get_strategy!(id, state, opts) do
    StateHandlers.get(state, id, Strategy, opts)
  end
end
