defmodule Userdocs.Repo.Migrations.CreateProcesses do
  use Ecto.Migration

  def change do
    create table(:processes) do
      add :order, :integer
      add :name, :string
      add :process_id, references(:processes, on_delete: :nilify_all)
      add :project_id, references(:projects, on_delete: :nothing)
      timestamps()
    end
  end
end
