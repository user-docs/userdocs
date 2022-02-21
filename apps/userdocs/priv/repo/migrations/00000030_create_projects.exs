defmodule Userdocs.Repo.Migrations.CreateProjects do
  use Ecto.Migration

  def change do
    create table(:projects, primary_key: false) do
      add :id, :uuid, primary_key: true, null: false
      add :name, :string
      add :base_url, :string
      add :threshold, :float
      add :default_width, :integer
      add :default_height, :integer
      add :team_id, references(:teams, on_delete: :nilify_all, type: :uuid)
      add :strategy_id, references(:strategies, on_delete: :nothing, type: :string)

      timestamps()
    end

    create index(:projects, [:strategy_id])
  end
end
