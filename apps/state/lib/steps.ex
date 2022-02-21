defmodule State.Steps do
  @moduledoc "Context functiosn for operating on Project structs in memory state"

  require Logger

  alias Schemas.Steps.Step

  def load_steps(state, opts) do
    StateHandlers.load(state, list_steps(%{}, opts[:filters]), Step, opts)
  end

  def list_steps(state, opts) when is_list(opts) do
    StateHandlers.list(state, Step, opts)
    |> maybe_preload(opts[:preloads], state, opts)
  end

  def get_step!(id, state, opts) when is_list(opts) do
    StateHandlers.get(state, id, Step, opts)
    |> maybe_preload(opts[:preloads], state, opts)
  end

  defp maybe_preload(step, nil, _, _), do: step
  defp maybe_preload(step, _preloads, state, opts) do
    opts = Keyword.delete(opts, :filter)
    StateHandlers.preload(state, step, opts)
  end
end
