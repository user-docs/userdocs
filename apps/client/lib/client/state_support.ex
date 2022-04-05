defmodule Client.StateSupport do
  import Client.Constants

  def initialize(state) do
    StateHandlers.initialize(state, state_opts())
  end
end
