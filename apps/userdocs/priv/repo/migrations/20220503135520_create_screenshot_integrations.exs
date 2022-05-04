defmodule Userdocs.Repo.Migrations.CreateScreenshotIntegrations do
  use Ecto.Migration

  def change do
    create table(:screenshot_integrations, primary_key: false) do
      add :id, :uuid, primary_key: true, null: false
      add :screenshot_id, references(:screenshots, on_delete: :nothing, type: :uuid)
      add :integration_id, references(:integrations, on_delete: :nothing, type: :uuid)

      timestamps()
    end

    create index(:screenshot_integrations, [:screenshot_id])
    create index(:screenshot_integrations, [:integration_id])
  end
end
