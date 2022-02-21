defmodule StateHandlers.Load do
  @moduledoc "Functions for loading data into the state"
  require Logger
  alias StateHandlers.Helpers

  def apply(state, data, opts) do
    schema = data |> Enum.at(0) |> Map.get(:__meta__) |> Map.get(:schema)
    apply(state, data, schema, opts)
  end
  def apply(state, data, schema, opts) do
    log_string = "Loading #{Helpers.type(schema)} data into #{opts[:location]}"
    if opts[:debug], do: Logger.debug(log_string)
    loader = opts[:loader] || &Map.put/3
    state
    |> Helpers.maybe_access_assigns()
    |> Helpers.maybe_access_location(opts[:location])
    |> Helpers.maybe_access_type(opts[:strategy], schema)
    |> load_data(data, opts[:data_type], opts[:strategy])
    |> Helpers.maybe_put_in_type(opts[:strategy])
    |> Helpers.maybe_put_in_location(opts[:location])
    |> Helpers.socket_or_state(loader)
  end

  def load_data([{state, key, state_type} | breadcrumb], data, data_type, strategy) do
    #IO.puts("load_data state parser")
    [{load_data(state, data, data_type, strategy), key, state_type} | breadcrumb]
  end
  def load_data(state, data, :map, :by_key) do
    #IO.puts("Loading Map Data by key")
    Enum.reduce(data, state,
      fn(d, s) ->
        Map.put(s, Helpers.id_key(d), d)
      end)
  end
  def load_data(state, data, :map, :by_type) do
    #IO.puts("Loading List Data by type")
    Enum.reduce(data, state,
      fn({k, v}, s) ->
        Map.put(s, k, v)
      end)
  end
  def load_data(_state, data, :list, :by_type) do
    #IO.puts("Loading List Data by type")
    data
  end
end
