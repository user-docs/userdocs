defmodule Userdocs.Repo.Migrations.CreateElementAnnotations do
  use Ecto.Migration

  def change do
    create table(:element_annotations, primary_key: false) do
      add :id, :uuid, primary_key: true, null: false
      add :element_id, references(:elements, on_delete: :delete_all, type: :uuid), null: false
      add :annotation_id, references(:annotations, on_delete: :delete_all, type: :uuid), null: false

      timestamps()
    end

    create index(:element_annotations, [:element_id])
    create index(:element_annotations, [:annotation_id])
    create unique_index(:element_annotations, [:element_id, :annotation_id])
  end
end
