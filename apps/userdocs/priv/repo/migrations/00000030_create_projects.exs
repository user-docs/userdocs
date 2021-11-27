defmodule Userdocs.Repo.Migrations.CreateProjects do
  use Ecto.Migration

  def change do
    create table(:projects) do
      add :name, :string
      add :base_url, :string
      add :team_id, references(:teams, on_delete: :nilify_all)
      add :strategy_id, references(:strategies, on_delete: :nothing, type: :string)

      timestamps()
    end
  end
end
