defmodule Schemas.Tokens.Token do

  use Ecto.Schema
  import Ecto.Changeset

  @primary_key {:id, :string, autogenerate: false}
  schema "tokens" do
    field(:token, :string)
    timestamps()
  end

  def changeset(token, attrs) do
    token
    |> cast(attrs, [:id, :token])
    |> validate_required([:id, :token])
  end
end
