defmodule Schemas.Teams.Team do
  @moduledoc "mix phx.gen.json Teams Team teams name:string css:string aws_region:string aws_bucket:string"
  use Schemas.Schema
  import Ecto.Changeset

  alias Schemas.Users
  alias Schemas.Projects.Project
  alias Schemas.Teams.TeamUser

  defimpl Jason.Encoder, for: [__MODULE__] do
    def encode(value, opts), do: Schemas.Teams.TeamEncoder.encode(value, opts)
  end

  schema "teams" do
    field :name, :string

    has_many :projects, Project
    has_many :team_users, TeamUser

    field :type, Ecto.Enum, values: [:personal, :team, :enterprise]
    field :css, :string
    field :aws_host, :string
    field :aws_port, :integer
    field :aws_scheme, :string
    field :aws_region, :string
    field :aws_bucket, :string
    field :aws_access_key_id, Schemas.Encrypted.Binary
    field :aws_access_key_id_hash, Cloak.Ecto.SHA256
    field :aws_secret_access_key, Schemas.Encrypted.Binary
    field :aws_secret_access_key_hash, Cloak.Ecto.SHA256

    many_to_many :users,
      Users.User,
      join_through: TeamUser,
      on_replace: :delete

    timestamps()
  end

  @doc false
  def changeset(team, attrs) do
    team
    |> cast(attrs, [
      :name,
      :css,
      :type,
      :aws_host,
      :aws_port,
      :aws_scheme,
      :aws_bucket,
      :aws_region,
      :aws_access_key_id,
      :aws_secret_access_key,
    ])
    |> cast_assoc(:team_users)
    |> cast_assoc(:projects)
    |> handle_users(attrs)
    |> unique_constraint(:name)
    |> validate_required([:name])
    |> put_hashed_fields()
  end

  def api_changeset(team, attrs) do
    team
    |> cast(attrs, [
      :id,
      :name,
      :css,
      :type,
      :aws_host,
      :aws_port,
      :aws_scheme,
      :aws_bucket,
      :aws_region,
      :aws_access_key_id,
      :aws_secret_access_key,
    ])
    |> cast_assoc(:projects, with: &Project.api_changeset/2)
  end

  defp put_hashed_fields(changeset) do
    changeset
    |> put_change(:aws_access_key_id_hash, get_field(changeset, :aws_access_key_id))
    |> put_change(:aws_secret_access_key_hash, get_field(changeset, :aws_secret_access_key))
  end

  @doc false
  defp handle_users(team, %{"users" => users}) do
    team
    |> put_assoc(:users, users)
  end

  defp handle_users(team, _), do: team
end
