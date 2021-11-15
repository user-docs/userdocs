defmodule Userdocs.LocalRepo do
  require Logger
  use Ecto.Repo,
    otp_app: :userdocs,
    adapter: Ecto.Adapters.SQLite3


  def init(_, config) do
    db_path =
      case Mix.env() do
        :dev -> Path.join(:code.priv_dir(:userdocs), "dev.db")
        :test -> Path.join(:code.priv_dir(:userdocs), "test.db")
        _ -> Application.get_env(:userdocs_desktop, :db_path)
      end

    Logger.info("Initializing LocalRepo at #{db_path}")

    {:ok, Keyword.put(config, :database, db_path)}
  end
end
