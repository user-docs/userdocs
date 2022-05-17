defmodule Userdocs.Repo.Migrations.CreatePages do
  use Ecto.Migration

  def change do
    create table(:pages, primary_key: false) do
      add :id, :uuid, primary_key: true, null: false
      add :order, :integer
      add :name, :string
      add :url, :string
      add :default_width, :integer
      add :default_height, :integer
      add :project_id, references(:projects, on_delete: :nothing, type: :uuid)
      timestamps([type: :naive_datetime_usec])
    end

    create index(:pages, [:project_id])
  end
end
