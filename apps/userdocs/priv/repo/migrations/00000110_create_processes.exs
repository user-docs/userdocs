defmodule Userdocs.Repo.Migrations.CreateProcesses do
  use Ecto.Migration

  def change do
    create table(:processes, primary_key: false) do
      add :id, :uuid, primary_key: true, null: false
      add :order, :integer
      add :name, :string
      add :process_id, references(:processes, on_delete: :nilify_all, type: :uuid)
      add :project_id, references(:projects, on_delete: :nothing, type: :uuid)
      timestamps()
    end
  end
end
