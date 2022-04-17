defmodule Schemas.Secrets.Secret do
  @moduledoc "Represents an access or renewal token to be used in the userdocs application. Stored locally on the client."
  use Schemas.Schema
  import Ecto.Changeset

  @primary_key {:id, :string, autogenerate: false}
  schema "tokens" do
    field :value, Schemas.Encrypted.Binary
    field :value_hash, Cloak.Ecto.SHA256
    timestamps()
  end

  def changeset(token, attrs) do
    token
    |> cast(attrs, [:id, :value])
    |> validate_required([:id, :value])
  end
end
