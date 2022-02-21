defmodule Schemas.ProcessInstances.ProcessInstance do
  @moduledoc false

  use Schemas.Schema
  import Ecto.Changeset

  alias Schemas.Processes.Process
  alias Schemas.StepInstances.StepInstance

  @primary_key {:id, Ecto.UUID, autogenerate: false}
  @derive {Jason.Encoder, only: [:status]}
  schema "process_instances" do
    field :status, Ecto.Enum, values: [:not_started, :started, :succeeded, :failed, :warning]
    field :errors, {:array, :map}
    field :warnings, {:array, :map}

    belongs_to :process, Process
    has_many :step_instances, StepInstance, on_replace: :nilify
  end

  def changeset(process_instance, attrs) do
    process_instance
    |> cast(attrs, [:id, :status, :errors, :warnings, :process_id])
    |> cast_assoc(:step_instances)
    |> validate_required([:status, :process_id])
  end

  def fields_changeset(process_instance, attrs) do
    process_instance
    |> cast(attrs, [:id, :status, :errors, :warnings, :process_id])
    |> validate_required([:status, :process_id])
  end
end
