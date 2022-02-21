defmodule Schemas.Processes.Process do
  @moduledoc "mix phx.gen.json Processes Process processes name:string project_id:references:projects"
  use Schemas.Schema
  import Ecto.Changeset

  alias Schemas.Steps.Step
  alias Schemas.Projects.Project
  alias Schemas.ProcessInstances.ProcessInstance

  @derive {Jason.Encoder, only: [:id, :name, :project_id]}
  schema "processes" do
    field :name, :string
    belongs_to :project, Project
    has_many :steps, Step
    has_one :process_instance, ProcessInstance

    timestamps()
  end

  @doc false
  def changeset(process, attrs) do
    process
    |> cast(attrs, [:name, :project_id])
    |> foreign_key_constraint(:project_id)
    |> cast_assoc(:steps)
    |> validate_required([:name])
  end

  def api_changeset(page, attrs) do
    page
    |> cast(attrs, [:id, :name, :project_id])
    |> foreign_key_constraint(:project_id)
  end
end
