defmodule Local.Application do
  use Application
  require Logger

  @impl true
  def start(_type, _args) do
    Logger.debug("#{__MODULE__} starting")
    children = [
      Local
    ]

    opts = [strategy: :one_for_one, name: Local.Supervisor]
    Supervisor.start_link(children, opts)
  end
end
