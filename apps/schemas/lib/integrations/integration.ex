defmodule Schemas.Integrations.Integration do
  @moduledoc "mix phx.gen.json Integrations Integration integrations name:string, type:string project_id:references:projects"
  use Schemas.Schema
  import Ecto.Changeset

  alias Schemas.Projects.Project

  @derive {Jason.Encoder, except: [:__meta__, :project]}
  schema "integrations" do
    field :name, :string
    field :type, Ecto.Enum, values: [:team_s3, :local]
    belongs_to :project, Project

    timestamps()
  end

  @doc false
  def changeset(process, attrs) do
    process
    |> cast(attrs, [:name, :type, :project_id])
    |> foreign_key_constraint(:project_id)
    |> validate_required([:name, :type, :project_id])
  end

  def api_changeset(page, attrs) do
    page
    |> cast(attrs, [:id, :name, :type, :project_id])
  end
end
