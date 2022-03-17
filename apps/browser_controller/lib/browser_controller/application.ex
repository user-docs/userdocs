defmodule BrowserController.Application do
  @moduledoc false

  use Application
  require Logger
  alias BrowserController.Browser

  @impl true
  def start(_type, args) do
    Logger.info("Starting #{__MODULE__} with args #{inspect args}")
    headed_opts = [name: HeadedBrowser, host_url: args[:host_url], port: args[:headed_browser][:port], headless: false]
    children = [
      {BrowserController.BrowserState, nil},
      BrowserController,
      Supervisor.child_spec({Browser, headed_opts}, id: HeadedBrowser)
    ]

    opts = [strategy: :one_for_one, name: BrowserController.Supervisor]
    Supervisor.start_link(children, opts)
  end
end
