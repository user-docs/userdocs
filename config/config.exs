# This file is responsible for configuring your umbrella
# and **all applications** and their dependencies with the
# help of Mix.Config.
#
# Note that all applications in your umbrella share the
# same configuration and dependencies, which is why they
# all use the same configuration file. If you want different
# configurations or dependencies per app, it is best to
# move said applications out of the umbrella.
use Mix.Config

# Configure Mix tasks and generators
config :userdocs,
  ecto_repos: [Userdocs.Repo, Userdocs.LocalRepo]

config :userdocs, Userdocs.LocalRepo,
  priv: "priv/repo"

config :userdocs_desktop,
  ecto_repos: [Userdocs.LocalRepo]

config :userdocs, UserDocs.LocalRepo, database: "./"

config :userdocs_web,
  ecto_repos: [Userdocs.Repo],
  generators: [context_app: :userdocs]


config :userdocs_desktop_web,
  ecto_repos: [Userdocs.LocalRepo],
  generators: [context_app: :userdocs]

# Configures the endpoint
config :userdocs_web, UserdocsWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "bwOL+0dF9bsDOcuaTUA1uq5LZEahSkuNHBavlM/J4vMOLjWE/hija4FHOWhuwkbe",
  render_errors: [view: UserdocsWeb.ErrorView, accepts: ~w(html json), layout: false],
  pubsub_server: Userdocs.PubSub,
  live_view: [signing_salt: "drWOAEzXvcu87CsbUUOWnXCyX6cQpEdm"]

config :userdocs_web, :pow,
  web_module: UserdocsWeb,
  web_mailer_module: UserdocsWeb,
  user: Schemas.Users.User,
  repo: Userdocs.Repo,
  cache_store_backend: Pow.Store.Backend.MnesiaCache,
  backend: Pow.Store.Backend.MnesiaCache,
  routes_backend: UserdocsWeb.Pow.Routes,
  extensions: [PowResetPassword, PowEmailConfirmation, PowInvitation],
  controller_callbacks: Pow.Extension.Phoenix.ControllerCallbacks,
  mailer_backend: UserdocsWeb.Pow.Mailer

config :userdocs_desktop, UserdocsDesktopWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "F/xqDA4Pr4dG148EafYzXGOiVL4CmUdj7k6+MN5Zx+OkahJbqGpcbopuD0guEVP9",
  render_errors: [view: UserdocsDesktopWeb.ErrorView, accepts: ~w(html json), layout: false],
  pubsub_server: UserdocsDesktop.PubSub,
  live_view: [signing_salt: "Gs36ZG/k"]

config :userdocs_desktop_web, UserdocsDesktopWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "F/xqDA4Pr4dG148EafYzXGOiVL4CmUdj7k6+MN5Zx+OkahJbqGpcbopuD0guEVP9",
  render_errors: [view: UserdocsDesktopWeb.ErrorView, accepts: ~w(html json), layout: false],
  pubsub_server: UserdocsDesktop.PubSub,
  live_view: [signing_salt: "Gs36ZG/k"]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

config :phoenix, :template_engines,
  slim: PhoenixSlime.Engine,
  slime: PhoenixSlime.Engine,
  slimleex: PhoenixSlime.LiveViewEngine


config :esbuild,
  version: "0.13.10",
  default: [
    args:
      ~w(js/app.js --bundle --target=es2016 --outdir=../priv/static/assets --external:/fonts/* --external:/images/*),
    cd: Path.expand("../assets", __DIR__),
    env: %{"NODE_PATH" => Path.expand("../deps", __DIR__)}
  ],
  userdocs_web: [
    args:
      ~w(js/app.js --bundle --target=es2016 --outdir=../priv/static/assets --external:/fonts/* --external:/images/*),
    cd: Path.expand("../apps/userdocs_web/assets", __DIR__),
    env: %{"NODE_PATH" => Path.expand("../deps", __DIR__)}
  ],
  userdocs_desktop_web: [
    args:
      ~w(js/app.js --bundle --target=es2016 --outdir=../priv/static/assets --external:/fonts/* --external:/images/*),
    cd: Path.expand("../apps/userdocs_desktop_web/assets", __DIR__),
    env: %{"NODE_PATH" => Path.expand("../deps", __DIR__)}
  ]


# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

config :userdocs_desktop,
  host_url: if(Mix.env() in [:dev, :test], do: "http://dev.user-docs.com:4000", else: "https://app.user-docs.com"),
  channels_url: if Mix.env() in [:dev, :test], do: "ws://dev.user-docs.com:4000/socket/websocket", else: "wss://app.user-docs.com/socket/websocket"

if Mix.env() in [:dev, :prod] do
  config :ua_inspector,
    init: {InitUADB, :apply, []}
end

defmodule InitUADB do
  def apply() do
    priv_dir = Application.app_dir(:userdocs_web, "priv")
    Application.put_env(:ua_inspector, :database_path, priv_dir)
    ua_readme_path = priv_dir |> Path.join("ua_inspector.readme.md")
    if not File.exists?(ua_readme_path) do
      UAInspector.Downloader.download()
    end
    Application.put_env(:ua_inspector, :database_path, priv_dir)
  end
end

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
