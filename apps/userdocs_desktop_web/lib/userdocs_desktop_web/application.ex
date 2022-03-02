defmodule UserdocsDesktopWeb.Application do
  @moduledoc false

  require Logger
  use Application

  def config_dir(), do: Path.join([Desktop.OS.home(), "userdocs"])

  @impl true
  def start(_type, _args) do
    Logger.info("Starting #{__MODULE__}")
    Desktop.identify_default_locale(UserdocsDesktopWeb.Gettext)
    File.mkdir_p!(config_dir())
    desktop_opts = [app: :userdocs, id: Userdocs, size: {1280, 768}, url: "http://localhost:4001/initialize"]
    Application.put_env(:userdocs, :environment, :desktop)
    Application.put_env(:userdocs_desktop, :db_path, Path.join([Desktop.OS.home(), "userdocs", "userdocs.db"]))
    children = [
      UserdocsDesktopWeb.Telemetry,
      {Phoenix.PubSub, name: UserdocsDesktop.PubSub},
      UserdocsDesktopWeb.Endpoint,
      {Desktop.Window, desktop_opts},
      UserdocsDesktop
    ]
    opts = [strategy: :one_for_one]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  @impl true
  def config_change(changed, _new, removed) do
    UserdocsDesktopWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
