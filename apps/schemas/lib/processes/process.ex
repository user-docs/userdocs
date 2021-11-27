defmodule Schemas.Processes.Process do
  @moduledoc false
  use Ecto.Schema
  import Ecto.Changeset

  alias Schemas.Steps.Step
  alias Schemas.Projects.Project
  alias Schemas.ProcessInstances.ProcessInstance

  @derive {Jason.Encoder, only: [:id, :order, :name]}
  schema "processes" do
    field :order, :integer
    field :name, :string

    belongs_to :project, Project

    has_many :steps, Step

    has_one :last_process_instance, ProcessInstance, on_replace: :nilify

    has_many :process_instances, ProcessInstance

    timestamps()
  end

  @doc false
  def changeset(process, attrs) do
    process
    |> cast(attrs, [:name, :project_id])
    |> foreign_key_constraint(:project_id)
    |> cast_assoc(:last_process_instance)
    |> cast_assoc(:steps)
    |> validate_required([:name])
  end
end
