defmodule Userdocs.Repo.Migrations.CreateSteps do
  use Ecto.Migration

  def change do
    create table(:steps, primary_key: false) do
      add :id, :uuid, primary_key: true, null: false
      add :order, :integer
      add :name, :string
      add :url, :string
      add :text, :string
      add :width, :integer
      add :height, :integer
      add :page_reference, :string
      add :margin_all, :integer, default: 0
      add :margin_top, :integer, default: 0
      add :margin_bottom, :integer, default: 0
      add :margin_left, :integer, default: 0
      add :margin_right, :integer, default: 0

      add :page_id, references(      :pages,       on_delete: :nilify_all, type: :uuid)
      add :element_id, references(   :elements,    on_delete: :nilify_all, type: :uuid)
      add :annotation_id, references(:annotations, on_delete: :nilify_all, type: :uuid)
      add :step_type_id, references( :step_types,  on_delete: :nothing,    type: :string)
      add :process_id, references(   :processes,   on_delete: :delete_all, type: :uuid)

      timestamps([type: :naive_datetime_usec])
    end

    create index(:steps, [:page_id])
    create index(:steps, [:element_id])
    create index(:steps, [:annotation_id])
    create index(:steps, [:step_type_id])
    create index(:steps, [:process_id])
  end
end
