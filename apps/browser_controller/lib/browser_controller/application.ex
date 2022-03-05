defmodule BrowserController.Application do
  @moduledoc false

  use Application
  require Logger

  @impl true
  def start(_type, args) do
    Logger.info("Starting #{__MODULE__} with args #{inspect args}")
    children = [
      {BrowserController.BrowserState, nil},
      {BrowserController, url: args[:url]}
    ]

    opts = [strategy: :one_for_one, name: BrowserController.Supervisor]
    Supervisor.start_link(children, opts)
  end
end
