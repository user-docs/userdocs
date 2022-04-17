defmodule Schemas.Context do
  @moduledoc """
    Holds the context for api calls
  """
  use Schemas.Schema
  import Ecto.Changeset
  alias Schemas.Users.User
  @primary_key false
  embedded_schema do
    embeds_one :user, User
    field :repo, Ecto.Enum, values: [Userdocs.Repo, Userdocs.LocalRepo]
  end

  def changeset(override, attrs) do
    override
    |> cast(attrs, [:user, :repo])
  end
end
