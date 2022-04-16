defmodule Client.Strategies do
  import Client.APISupport
  import Client.Constants
  alias Schemas.Strategies.Strategy

  @callback list_strategies(map()) :: list(Strategy)
  
  
  
  
  
  
  def load_strategies(state, opts) do
    strategies = Module.concat(impl(state), "Strategies").list_strategies(local_or_remote_opts(state, opts))
    StateHandlers.load(state, strategies, Strategy, state_opts())
  end
end
