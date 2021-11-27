defmodule Schemas.Projects.Project do
  @moduledoc "mix phx.gen.json Projects Project projects base_url:string name: string team_id:references:teams strategy_id:references:strategies"
  use Ecto.Schema
  import Ecto.Changeset

  alias Schemas.Strategies.Strategy
  alias Schemas.Pages.Page
  alias Schemas.Processes.Process

  alias Schemas.Teams.Team

  @derive {Jason.Encoder, only: [:id, :base_url, :name, :team_id, :strategy_id]}
  schema "projects" do
    field :base_url, :string
    field :name, :string

    belongs_to :team, Team
    belongs_to :strategy, Strategy, type: :string

    has_many :pages, Page
    has_many :processes, Process

    timestamps()
  end

  @doc false
  def changeset(project, attrs) do
    project
    |> cast(attrs, [:name, :base_url, :team_id, :strategy_id])
    |> foreign_key_constraint(:team_id)
    |> validate_required([:name, :base_url, :strategy_id])
  end

  def api_changeset(project, attrs) do
    project
    |> cast(attrs, [:id, :name, :base_url, :team_id, :strategy_id])
  end
end
