defmodule State.StepInstances do
  @moduledoc "Context functiosn for operating on Project structs in memory state"

  require Logger

  alias Schemas.StepInstances.StepInstance

  def list_step_instances(state, opts) when is_list(opts) do
    StateHandlers.list(state, StepInstance, opts)
    |> maybe_preload(opts[:preloads], state, opts)
  end

  def get_step_instance!(id, state, opts) when is_list(opts) do
    StateHandlers.get(state, id, StepInstance, opts)
    |> maybe_preload(opts[:preloads], state, opts)
  end

  defp maybe_preload(step, nil, _, _), do: step
  defp maybe_preload(step, _preloads, state, opts) do
    opts = Keyword.delete(opts, :filter)
    StateHandlers.preload(state, step, opts)
  end
end
