defmodule UserdocsWeb.Application do
  @moduledoc false

  require Logger
  use Application

  def start(_type, _args) do
    Logger.info("Starting #{__MODULE__}")
    children = [
      UserdocsWeb.Telemetry,
      {Phoenix.PubSub, name: Userdocs.PubSub},
      UserdocsWeb.Presence,
      Pow.Store.Backend.MnesiaCache,
      UserdocsWeb.Endpoint
    ]

    opts = [strategy: :one_for_one, name: UserdocsWeb.Supervisor]
    Supervisor.start_link(children, opts)
  end

  def config_change(changed, _new, removed) do
    UserdocsWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
