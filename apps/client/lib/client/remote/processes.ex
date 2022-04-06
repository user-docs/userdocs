defmodule Client.Remote.Processes do
  require Logger
  alias Schemas.Processes.Process
  alias Client.Requests
  alias Userdocs.Processes
  @url Application.compile_env(:userdocs_desktop, :host_url) <> "/api/processes"


  @doc "Returns the list of processes."
  def list_processes(%{access_token: access_token} = opts) do
    params =  Map.take(opts, [:filters])
    request_fun = Requests.build_get(@url)
    {:ok, %{"data" => processes_attrs}} = Requests.send(request_fun, access_token, params)
    Processes.create_process_structs(processes_attrs)
  end

  @doc "Creates a process."
  def create_process(attrs, %{access_token: access_token}) do
    params = %{process: attrs}
    request_fun = Requests.build_create(@url)
    {:ok, %{"data" => process_attrs}} = Requests.send(request_fun, access_token, params)
    Processes.create_process_struct(process_attrs)
  end

  @doc "Updates a process."
  def update_process(%Process{} = process, attrs, %{access_token: access_token}) do
    request_fun = Requests.build_update(@url, process.id)
    {:ok, %{"data" => process_attrs}} = Requests.send(request_fun, access_token, %{process: attrs})
    Processes.create_process_struct(process_attrs)
  end

  @doc "Deletes a process."
  def delete_process(id, %{access_token: access_token}) do
    request = Requests.build_delete(@url, id)
    Requests.send(request, access_token, nil)
  end
end
