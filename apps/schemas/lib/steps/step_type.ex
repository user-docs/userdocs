defmodule Schemas.Steps.StepType do
  use Ecto.Schema
  import Ecto.Changeset

  @primary_key {:id, :string, autogenerate: false}
  @derive {Jason.Encoder, only: [:id, :args, :name]}
  schema "step_types" do
    field :args, {:array, :string}
    field :name, :string

    timestamps()
  end

  @doc false
  def changeset(step_type, attrs) do
    step_type
    |> cast(attrs, [:id, :name, :args])
    |> validate_required([:name, :args])
  end
end
