defmodule Userdocs.Repo.Migrations.CreateElementAnnotations do
  use Ecto.Migration

  def change do
    create table(:element_annotations) do
      add :element_id, references(:elements, on_delete: :delete_all), null: false
      add :annotation_id, references(:annotations, on_delete: :delete_all), null: false

      timestamps()
    end

    create index(:element_annotations, [:element_id])
    create index(:element_annotations, [:annotation_id])
    create unique_index(:element_annotations, [:element_id, :annotation_id])
  end
end
