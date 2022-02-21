defmodule Schemas.Users.User do
  @moduledoc """
  The User Module
  mix phx.gen.json Users User users email:string password:string current_password:string selected_team_id:references:teams selected_project_id:references:projects
  """
  use Schemas.Schema
  import Ecto.Changeset
  use Pow.Ecto.Schema
  use Pow.Extension.Ecto.Schema,
    extensions: [PowResetPassword, PowEmailConfirmation, PowInvitation]

  alias Schemas.Teams.Team
  alias Schemas.Teams.TeamUser
  alias Schemas.Projects.Project
  alias Schemas.Users.Override

  defimpl Jason.Encoder, for: [__MODULE__] do
    def encode(value, opts), do: Schemas.Users.UserEncoder.encode(value, opts)
  end

  schema "users" do
    pow_user_fields()

    embeds_many :overrides, Override, on_replace: :delete

    has_many :team_users, TeamUser

    belongs_to :selected_team, Team
    belongs_to :selected_project, Project

    many_to_many :teams,
      Team,
      join_through: TeamUser,
      on_replace: :delete

    timestamps()
  end

  @doc false
  def changeset(user, attrs) do
    user
    |> pow_changeset(attrs)
    |> pow_extension_changeset(attrs)
    |> cast(attrs, [:selected_team_id, :selected_project_id])
  end

  def login_changeset(user, attrs) do
    user
    |> pow_user_id_field_changeset(attrs)
    |> pow_password_changeset(attrs)
  end

  def prepare_changeset(user, attrs) do
    user
    |> cast(attrs, [:id, :email, :selected_team_id, :selected_project_id])
    |> cast_assoc(:team_users, with: &TeamUser.api_changeset/2)
    |> cast_assoc(:selected_team, with: &Team.api_changeset/2)
    |> cast_assoc(:selected_project, with: &Project.api_changeset/2)
    |> cast_embed(:overrides)
  end

  def email_changeset(user, attrs) do
    user
    |> cast(attrs, [:email, :invited_by_id])
  end

  def invite_changeset(user_or_changeset, invited_by, attrs) do
    user_or_changeset
    |> cast(attrs, [:email, :invited_by_id])
    |> pow_invite_changeset(invited_by, attrs)
  end

  def signin_changeset(user, attrs) do
    user
    |> cast(attrs, [:email, :password])
    |> validate_required([:email, :password])
  end

  def signup_changeset(user, attrs) do
    user
    |> pow_user_id_field_changeset(attrs)
    |> pow_password_changeset(attrs)
    |> pow_extension_changeset(attrs)
  end

  def test_fixture_changeset(user, attrs) do
    user
    |> pow_changeset(attrs)
    |> pow_extension_changeset(attrs)
    |> cast(attrs, [:selected_team_id, :selected_project_id, :email_confirmed_at])
  end

  def change_options(user, attrs) do
    user
    |> cast(attrs, [:selected_team_id, :selected_project_id])
    |> cast_assoc(:team_users)
    |> cast_embed(:overrides)
  end
end
