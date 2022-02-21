defmodule Userdocs.Repo.Migrations.AddDefaultTeam do
  use Ecto.Migration

  def change do
    alter table(:users) do
      add :selected_team_id, references(:teams, on_delete: :delete_all, type: :uuid)
      add :selected_project_id, references(:projects, on_delete: :delete_all, type: :uuid)
    end
    create index(:users, [:selected_team_id])
    create index(:users, [:selected_project_id])
  end
end
