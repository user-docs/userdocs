defmodule Schemas.Users.Context do
  @moduledoc """
  The User Module
  """
  use Schemas.Schema
  import Ecto.Changeset

  @primary_key {:user_id, Ecto.UUID, autogenerate: false}
  schema "contexts" do
    field :team_id, :binary_id
    field :project_id, :binary_id

    timestamps()
  end

  @doc false
  def changeset(context, attrs) do
    context
    |> cast(attrs, [:user_id, :team_id, :project_id])
  end

  @doc false
  def api_changeset(context, attrs) do
    context
    |> cast(attrs, [:user_id, :team_id, :project_id])
  end
end
