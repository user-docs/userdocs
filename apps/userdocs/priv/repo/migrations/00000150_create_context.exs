defmodule Userdocs.Repo.Migrations.CreateContext do
  use Ecto.Migration

  def change do
    create table(:contexts, primary_key: false) do
      add :id, :uuid, primary_key: true, null: false
      add :user_id, :uuid
      add :team_id, references(:teams, on_delete: :nilify_all, type: :uuid)
      add :project_id, references(:projects, on_delete: :nilify_all, type: :uuid)

      timestamps()
    end
    create index(:contexts, [:team_id])
    create index(:contexts, [:project_id])
  end
end
