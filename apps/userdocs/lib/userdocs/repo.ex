defmodule Userdocs.Repo do
  require Logger
  use Ecto.Repo, otp_app: :userdocs, adapter: Ecto.Adapters.Postgres
end
