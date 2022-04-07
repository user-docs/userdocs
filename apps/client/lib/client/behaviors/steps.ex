defmodule Client.Steps do
  import Client.APISupport
  import Client.Constants
  alias Schemas.Steps.Step

  @callback list_steps(map()) :: list(Step)
  @callback create_step(map(), map()) :: {:ok, Step} | {:error, Ecto.Changeset}
  @callback update_step(Step, map(), map()) :: {:ok, Step} | {:error, Ecto.Changeset}
  @callback delete_step(Step, map()) :: {:ok, Step} | {:error, Ecto.Changeset}

  def create_step(attrs, state),
    do: Module.concat(impl(state), "Steps").create_step(attrs, local_or_remote_opts(state)) # TODO: subsume Module.concat into impl

  def update_step(step, attrs, state),
    do: Module.concat(impl(state), "Steps").update_step(step, attrs, local_or_remote_opts(state))

  def  delete_step(step, state), do: Module.concat(impl(state), "Steps").delete_step(step, local_or_remote_opts(state))

  def load_steps(state, opts) do
    steps = Module.concat(impl(state), "Steps").list_steps(local_or_remote_opts(state, opts))
    StateHandlers.load(state, steps, Step, state_opts())
  end
end
