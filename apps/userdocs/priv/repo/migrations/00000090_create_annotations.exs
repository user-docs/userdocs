defmodule Userdocs.Repo.Migrations.CreateAnnotations do
  use Ecto.Migration

  def change do
    create table(:annotations, primary_key: false) do
      add :id, :uuid, primary_key: true, null: false
      add :name, :string
      add :label, :string
      add :x_orientation, :string
      add :y_orientation, :string
      add :size, :integer
      add :color, :string
      add :thickness, :integer
      add :x_offset, :integer
      add :y_offset, :integer
      add :font_size, :integer
      add :font_color, :string

      add :annotation_type_id, references(:annotation_types, type: :string, on_delete: :nothing)
      add :page_id, references(:pages, on_delete: :nothing, type: :uuid)

      timestamps([type: :naive_datetime_usec])
    end

    create index(:annotations, [:annotation_type_id])
    create index(:annotations, [:page_id])
  end
end
