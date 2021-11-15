defmodule Schemas.Strategies.Strategy do
  use Ecto.Schema
  import Ecto.Changeset

  @derive {Jason.Encoder, only: [:id, :name]}
  schema "strategies" do
    field :name, :string
  end

  @doc false
  def changeset(element, attrs) do
    element
    |> cast(attrs, [:name])
    |> validate_required([:name])
  end

  def api_changeset(element, attrs) do
    element
    |> cast(attrs, [:id, :name])
  end
end
