use Mix.Config

# Configure your database
#
# The MIX_TEST_PARTITION environment variable can be used
# to provide built-in test partitioning in CI environment.
# Run `mix help test` for more information.
config :userdocs, Userdocs.Repo,
  username: "postgres",
  password: "postgres",
  database: "userdocs_test#{System.get_env("MIX_TEST_PARTITION")}",
  hostname: "localhost",
  pool: Ecto.Adapters.SQL.Sandbox

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :userdocs_web, UserdocsWeb.Endpoint,
  http: [port: 4000],
  https: [
    port: 4002,
    cipher_suite: :strong,
    certfile: "priv/cert/user-docs.com.crt",
    keyfile: "priv/cert/user-docs.com.key"
  ],
  debug_errors: true,
  check_origin: false,
  server: true,
  secret_key_base: "sWKBZ7zc4IamA4LR5c0gE06HE6ve9zqWpF6RPj0KDfjXwjVv2OMwRnSO9cQMI6jE"

config :userdocs_desktop_web, UserdocsDesktopWeb.Endpoint,
  pubsub_server: UserdocsDesktop.PubSub,
  http: [port: 5002],
  server: false,
  secret_key_base: "sWKBZ7zc4IamA4LR5c0gE06HE6ve9zqWpF6RPj0KDfjXwjVv2OMwRnSO9cQMI6jE"

# Print only warnings and errors during test
config :logger, level: :warning
