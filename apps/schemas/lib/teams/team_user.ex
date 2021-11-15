defmodule Schemas.Teams.TeamUser do
  use Ecto.Schema
  import Ecto.Changeset

  alias Schemas.Users.User
  alias Schemas.Teams.Team

  defimpl Jason.Encoder, for: [__MODULE__] do
    def encode(value, opts), do: Schemas.Teams.TeamUserEncoder.encode(value, opts)
  end

  schema "team_users" do
    field :temp_id, :string, virtual: true
    field :delete, :boolean, virtual: true

    field :role, :string
    belongs_to :team, Team
    belongs_to :user, User

    timestamps()
  end

  @doc false
  def changeset(team_user, attrs) do
    team_user
    |> Map.put(:temp_id, (team_user.temp_id || attrs["temp_id"]))
    |> cast(attrs, [:team_id, :user_id, :delete, :role])
    |> cast_assoc(:user, with: &User.email_changeset/2)
    |> foreign_key_constraint(:team_id)
    |> foreign_key_constraint(:user_id)
    |> unique_constraint(:user_id, name: :team_id_user_id_index)
    |> maybe_mark_for_deletion()
  end

  def api_changeset(team_user, attrs) do
    team_user
    |> cast(attrs, [:id, :role, :team_id, :user_id])
    |> cast_assoc(:team, with: &Team.api_changeset/2)
  end

  defp maybe_mark_for_deletion(%{data: %{id: nil}} = changeset), do: changeset
  defp maybe_mark_for_deletion(changeset) do
    if get_change(changeset, :delete) do
      %{changeset | action: :delete}
    else
      changeset
    end
  end
end
