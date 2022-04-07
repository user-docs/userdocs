defmodule Client.Processes do
  import Client.APISupport
  import Client.Constants
  alias Schemas.Processes.Process

  @callback list_processes(map()) :: list(Process)
  @callback create_process(map(), map()) :: {:ok, Process} | {:error, Ecto.Changeset}
  @callback update_process(Process, map(), map()) :: {:ok, Process} | {:error, Ecto.Changeset}
  @callback delete_process(Process, map()) :: {:ok, Process} | {:error, Ecto.Changeset}

  def create_process(attrs, state),
    do: Module.concat(impl(state), "Processes").create_process(attrs, local_or_remote_opts(state))

  def update_process(process, attrs, state),
    do: Module.concat(impl(state), "Processes").update_process(process, attrs, local_or_remote_opts(state))

  def delete_process(process, state), do: Module.concat(impl(state), "Processes").delete_process(process, local_or_remote_opts(state))

  def load_processes(state, opts) do
    processes = Module.concat(impl(state), "Processes").list_processes(local_or_remote_opts(state, opts))
    StateHandlers.load(state, processes, Process, state_opts())
  end
end
