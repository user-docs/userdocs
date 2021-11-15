defmodule UserdocsDesktop.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  def config_dir(), do: Path.join([Desktop.OS.home(), ".config", "userdocs"])

  def start(_type, _args) do
    Desktop.identify_default_locale(UserdocsDesktopWeb.Gettext)
    File.mkdir_p!(config_dir())
    opts = [strategy: :one_for_one, name: __MODULE__]
    desktop_opts = [app: :userdocs, id: Userdocs, size: {1280, 768}, url: "http://localhost:4001/initialize"]
    Application.put_env(:userdocs, :environment, :desktop)
    children = [
      {Desktop.Window, desktop_opts}
    ]
    Supervisor.start_link(children, opts)
  end
end
