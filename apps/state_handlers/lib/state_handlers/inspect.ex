defmodule StateHandlers.Inspect do
  @moduledoc "Utilities for inspecting the state"
  require Logger
  alias StateHandlers.Helpers

  def apply(state, opts) do
    state
    |> Helpers.maybe_access_assigns()
    |> Helpers.maybe_access_location(opts[:location])
    |> Helpers.unpack_state()
    |> inspect_state()

    state
  end

  def state_string(state) do
    Enum.reduce(state, "",
      fn({k, v}, log_string) ->
        log_string
        <> Atom.to_string(k)
        <> ": "
        <> Integer.to_string(Enum.count(v))
        <> "\n"
      end
    )
  end

  def inspect_state(state) do
    state_string(state)
    |> IO.puts()
  end
end
