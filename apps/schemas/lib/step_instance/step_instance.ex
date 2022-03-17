defmodule Schemas.StepInstances.StepInstance do
  @moduledoc false
  #@derive {Inspect, only: [:id, :order, :status, :name ]}

  use Schemas.Schema
  import Ecto.Changeset

  alias Schemas.Steps.Step
  alias Schemas.ProcessInstances.ProcessInstance

  @primary_key {:id, Ecto.UUID, autogenerate: false}
  @derive {Jason.Encoder, only: [:id, :status, :error, :warning, :step_id, :process_instance_id]}
  schema "step_instances" do
    field :status, Ecto.Enum, values: [:not_started, :started, :succeeded, :failed, :warning]
    field :error, :map
    field :warning, :map

    belongs_to :step, Step, on_replace: :nilify
    belongs_to :process_instance, ProcessInstance, on_replace: :nilify, type: :string
  end

  def changeset(step_instance, attrs) do
    step_instance
    |> cast(attrs, [:id, :status, :error, :warning, :step_id, :process_instance_id])
    |> foreign_key_constraint(:step_id)
    |> foreign_key_constraint(:process_instance_id)
    |> validate_required([:status, :step_id])
  end
end
