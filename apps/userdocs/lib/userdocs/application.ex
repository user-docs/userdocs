defmodule Userdocs.Application do
  @moduledoc false
  require Logger
  use Application

  def start(_type, _args) do
    opts = [strategy: :one_for_one, name: Userdocs.Supervisor]
    server_environment = Application.get_env(:userdocs_web, :environment)
    environment = Application.get_env(:userdocs_desktop, :environment, server_environment)
    Logger.info("Starting #{__MODULE__} in environment #{environment}")
    children = [
      {Phoenix.PubSub, name: Userdocs.PubSub},
      Userdocs.LocalRepo,
      Userdocs.Repo,
      Userdocs.Vault
    ] # when in dev, we need to start both
    """
      case environment do
        :desktop -> [Userdocs.LocalRepo, Userdocs.Vault]
        _ -> [Userdocs.Repo, Userdocs.Vault]
      end
    """
    Supervisor.start_link(children, opts)
  end
end
