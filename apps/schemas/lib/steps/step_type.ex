defmodule Schemas.Steps.StepType do
  @moduledoc "A type of step"
  use Schemas.Schema
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

  @doc false
  def api_changeset(step_type, attrs) do
    step_type
    |> cast(attrs, [:id, :name, :args])
    |> validate_required([:name, :args])
  end
end
