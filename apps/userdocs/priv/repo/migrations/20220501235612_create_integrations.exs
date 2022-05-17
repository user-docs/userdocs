defmodule Userdocs.Repo.Migrations.CreateIntegrations do
  use Ecto.Migration

  def change do
    create table(:integrations, primary_key: false) do
      add :id, :uuid, primary_key: true, null: false
      add :name, :string
      add :type, :string
      add :project_id, references(:projects, on_delete: :nothing, type: :uuid)

      timestamps([type: :naive_datetime_usec])
    end

    create index(:integrations, [:project_id])
  end
end
