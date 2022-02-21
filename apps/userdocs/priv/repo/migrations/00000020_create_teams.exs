defmodule Userdocs.Repo.Migrations.CreateTeams do
  use Ecto.Migration

  def change do
    create table(:teams, primary_key: false) do
      add :id, :uuid, primary_key: true, null: false
      add :name, :string
      add :type, :string
      add :aws_bucket, :string
      add :aws_region, :string
      add :aws_access_key_id, :binary
      add :aws_access_key_id_hash, :binary
      add :aws_secret_access_key, :binary
      add :aws_secret_access_key_hash, :binary
      add :css, :text

      timestamps()
    end

    create unique_index(:teams, [:name])
  end
end
