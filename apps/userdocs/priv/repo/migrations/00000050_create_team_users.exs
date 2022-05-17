defmodule Userdocs.Repo.Migrations.CreateTeamUsers do
  use Ecto.Migration

  def change do
    create table(:team_users, primary_key: false) do
      add :id, :uuid, primary_key: true, null: false
      add :role, :string
      add :team_id, references(:teams, on_delete: :delete_all, type: :uuid), null: false
      add :user_id, references(:users, on_delete: :delete_all, type: :uuid), null: false

      timestamps([type: :naive_datetime_usec])
    end

    create index(:team_users, [:team_id])
    create index(:team_users, [:user_id])
    create unique_index(:team_users, [:team_id, :user_id ])
  end
end
