use Mix.Config

# Configure your database
config :userdocs, Userdocs.Repo,
  adapter: Ecto.Adapters.Postgres,
  username: "postgres",
  password: "postgres",
  database: "userdocs_dev",
  hostname: "localhost",
  show_sensitive_data_on_connection_error: true,
  pool_size: 10

config :userdocs_web, UserdocsWeb.Endpoint,
  http: [port: 4000],
  https: [
    port: 4002,
    cipher_suite: :strong,
    certfile: "priv/cert/user-docs.com.crt",
    keyfile: "priv/cert/user-docs.com.key"
  ],
  debug_errors: true,
  code_reloader: true,
  check_origin: false,
  server: true,
  secret_key_base: "sWKBZ7zc4IamA4LR5c0gE06HE6ve9zqWpF6RPj0KDfjXwjVv2OMwRnSO9cQMI6jE",
  watchers: [
    # Start the esbuild watcher by calling Esbuild.install_and_run(:default, args)
    esbuild: {Esbuild, :install_and_run, [:userdocs_web, ~w(--sourcemap=inline --watch)]},
    node: [
      "node_modules/tailwindcss/lib/cli.js",
      "--input=css/app.css",
      "--output=../priv/static/assets/app.css",
      "--postcss",
      "--watch",
      cd: Path.expand("../apps/userdocs_web/assets", __DIR__)
    ]
  ]

config :userdocs_desktop, UserdocsDesktopWeb.Endpoint,
  http: [port: 4001],
  debug_errors: true,
  code_reloader: true,
  check_origin: false,
  server: true,
  secret_key_base: "sWKBZ7zc4IamA4LR5c0gE06HE6ve9zqWpF6RPj0KDfjXwjVv2OMwRnSO9cQMI6jE",
  watchers: [
    # Start the esbuild watcher by calling Esbuild.install_and_run(:default, args)
    esbuild: {Esbuild, :install_and_run, [:userdocs_desktop_web, ~w(--sourcemap=inline --watch)]},
    node: [
      "node_modules/tailwindcss/lib/cli.js",
      "--input=css/app.css",
      "--output=../priv/static/assets/app.css",
      "--postcss",
      "--watch",
      cd: Path.expand("../apps/userdocs_desktop_web/assets", __DIR__)
    ]
  ]

config :userdocs_web, UserdocsWeb.Endpoint,
  live_reload: [
    patterns: [
      ~r"priv/static/.*(js|css|png|jpeg|jpg|gif|svg)$",
      ~r"priv/gettext/.*(po)$",
      ~r"lib/userdocs_web/(live|views)/.*(ex)$",
      ~r"lib/userdocs_web/templates/.*(eex)$"
    ]
  ]

# Do not include metadata nor timestamps in development logs
config :logger, :console, format: "[$level] $message\n"

# Initialize plugs at runtime for faster development compilation
config :phoenix, :plug_init_mode, :runtime

# Set a higher stacktrace during development. Avoid configuring such
# in production as building large stacktraces may be expensive.
config :phoenix, :stacktrace_depth, 20
