defmodule Schemas.Strategies.Strategy do
  use Ecto.Schema
  import Ecto.Changeset

  @primary_key {:id, :string, autogenerate: false}
  @derive {Jason.Encoder, only: [:id, :name]}
  schema "strategies" do
    field :name, :string
  end

  @doc false
  def changeset(element, attrs) do
    element
    |> cast(attrs, [:id, :name])
    |> validate_required([:id, :name])
  end

  def api_changeset(element, attrs) do
    element
    |> cast(attrs, [:id, :name])
  end
end
