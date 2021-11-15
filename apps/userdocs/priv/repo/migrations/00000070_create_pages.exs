defmodule Userdocs.Repo.Migrations.CreatePages do
  use Ecto.Migration

  def change do
    create table(:pages) do
      add :order, :integer
      add :name, :string
      add :url, :string
      add :project_id, references(:projects, on_delete: :nothing)
      timestamps()
    end

    create index(:pages, [:project_id])
  end
end
