defmodule Userdocs.Repo do
  @moduledoc "The normal postgres repo for the server"
  require Logger
  use Ecto.Repo, otp_app: :userdocs, adapter: Ecto.Adapters.Postgres
end
