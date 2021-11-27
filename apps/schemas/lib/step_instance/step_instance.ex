defmodule Schemas.StepInstances.StepInstance do
  @moduledoc false
  #@derive {Inspect, only: [:id, :order, :status, :name ]}

  use Ecto.Schema
  import Ecto.Changeset

  alias Schemas.Steps.Step
  alias Schemas.ProcessInstances.ProcessInstance

  @derive {Jason.Encoder, only: [:id, :uuid, :order, :status, :name, :type]}
  schema "step_instances" do
    field :uuid, :binary_id
    field :order, :integer
    field :status, :string
    field :name, :string
    field :type, :string
    field :attrs, :map
    field :errors, {:array, :map}
    field :warnings, {:array, :map}

    belongs_to :process_instance, ProcessInstance, on_replace: :nilify
    belongs_to :step, Step, on_replace: :nilify
  end

  def changeset(step_instance, attrs) do
    step_instance
    |> cast(attrs, [ :uuid, :order, :status, :name, :type, :attrs, :errors, :warnings, :step_id, :process_instance_id])
    |> foreign_key_constraint(:step_id)
    |> foreign_key_constraint(:process_instance_id)
    |> cast_assoc(:step)
    |> validate_required([ :status, :step_id ])
  end
end
