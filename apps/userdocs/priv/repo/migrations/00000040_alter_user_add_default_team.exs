defmodule Userdocs.Repo.Migrations.AddDefaultTeam do
  use Ecto.Migration

  def change do
    alter table(:users) do
      add :selected_team_id, :uuid
      add :selected_project_id, :uuid
    end
  end
end
