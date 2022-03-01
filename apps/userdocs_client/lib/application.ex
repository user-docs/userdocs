defmodule UserdocsClient.Application do
  @moduledoc false
  require Logger
  use Application

  def start(_type, _args) do
    opts = [strategy: :one_for_one, name: Client.Supervisor]
    Logger.info("Starting #{__MODULE__}")
    children = [
      Client
    ]
    Supervisor.start_link(children, opts)
  end
end
