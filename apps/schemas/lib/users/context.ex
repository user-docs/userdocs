defmodule Schemas.Users.Context do
  @moduledoc """
  The User Module
  """
  use Schemas.Schema
  import Ecto.Changeset

  alias Schemas.Users.User
  alias Schemas.Teams.Team
  alias Schemas.Projects.Project

  schema "contexts" do
    belongs_to :user, User
    belongs_to :team, Team
    belongs_to :project, Project

    timestamps()
  end

  @doc false
  def changeset(context, attrs) do
    context
    |> cast(attrs, [:user_id, :team_id, :project_id])
    |> foreign_key_constraint(:team_id)
    |> foreign_key_constraint(:project_id)
  end

  @doc false
  def api_changeset(context, attrs) do
    context
    |> cast(attrs, [:user_id, :team_id, :project_id])
  end
end
