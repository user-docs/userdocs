defmodule Userdocs.Repo.Migrations.CreateContext do
  use Ecto.Migration

  def change do
    create table(:contexts, primary_key: false) do
      add :id, :uuid, primary_key: true, null: false
      add :user_id, :uuid
      add :team_id, :uuid
      add :project_id, :uuid

      timestamps()
    end
  end
end