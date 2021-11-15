defmodule State.StepTypes do
  @moduledoc "Context functiosn for operating on Page structs in memory state"

  require Logger

  alias Schemas.Steps.StepType
  alias Userdocs.StepTypes

  def load_step_types(state, opts \\ %{}) do
    StateHandlers.load(state, StepTypes.list_step_types(opts), StepType, opts)
  end

  def list_step_types(state, opts \\ %{}) do
    StateHandlers.list(state, StepType, opts)
  end

  def get_step_type!(id, state, opts) when is_list(opts) do
    StateHandlers.get(state, id, StepType, opts)
  end

  def get_step_type!(id, state, opts) do
    StateHandlers.get(state, id, StepType, opts)
  end
end
