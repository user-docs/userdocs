defmodule State.Processes do
  @moduledoc "Context functiosn for operating on Project structs in memory state"

  require Logger

  alias Schemas.Processes.Process

  def load_processes(state, opts) do
    StateHandlers.load(state, list_processes(%{}, opts[:filters]), Process, opts)
  end

  def list_processes(state, opts) when is_list(opts) do
    StateHandlers.list(state, Process, opts)
    |> maybe_preload(opts[:preloads], state, opts)
  end

  def get_process!(id, state, opts) when is_list(opts) do
    StateHandlers.get(state, id, Process, opts)
    |> maybe_preload(opts[:preloads], state, opts)
  end

  defp maybe_preload(process, nil, _, _), do: process
  defp maybe_preload(process, _preloads, state, opts) do
    opts = Keyword.delete(opts, :filter)
    StateHandlers.preload(state, process, opts)
  end

end
