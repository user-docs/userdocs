defmodule Client.StepTypes do
  import Client.APISupport
  import Client.Constants
  alias Schemas.Steps.StepType

  @callback list_step_types(map()) :: list(StepType)
  
  
  
  
  
  
  def load_step_types(state, opts) do
    step_types = impl(state, "StepTypes").list_step_types(local_or_remote_opts(state, opts))
    StateHandlers.load(state, step_types, StepType, state_opts())
  end
end
