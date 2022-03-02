defmodule UserdocsWeb.API.ProcessController do
  use UserdocsWeb, :controller

  alias Userdocs.Processes
  alias Schemas.Processes.Process
  alias UserdocsWeb.API.Helpers
  action_fallback UserdocsWeb.FallbackController
  @opts %{broadcast: true, context: %{repo: Userdocs.Repo}}

  def index(conn, params) do
    opts = Helpers.parse_params(params, @opts)
    processes = Processes.list_processes(opts)
    render(conn, "index.json", processes: processes)
  end

  def create(conn, %{"process" => process_params}) do
    with {:ok, %Process{} = process} <- Processes.create_process(process_params, @opts) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", Routes.api_process_path(conn, :show, process))
      |> render("show.json", process: process)
    end
  end

  def show(conn, %{"id" => id}) do
    process = Processes.get_process!(id, @opts)
    render(conn, "show.json", process: process)
  end

  def update(conn, %{"id" => id, "process" => process_params}) do
    process = Processes.get_process!(id, @opts)

    with {:ok, %Process{} = process} <- Processes.update_process(process, process_params, @opts) do
      render(conn, "show.json", process: process)
    end
  end

  def delete(conn, %{"id" => id}) do
    process = Processes.get_process!(id, @opts)

    with {:ok, %Process{}} <- Processes.delete_process(process, @opts) do
      send_resp(conn, :no_content, "")
    end
  end
end
