defmodule Userdocs.Repo.Migrations.CreateElements do
  use Ecto.Migration

  def change do
    create table(:elements, primary_key: false) do
      add :id, :uuid, primary_key: true, null: false
      add :name, :string
      add :selector, :text
      add :generated_selector, :text
      add :direct_selector, :text
      add :outer_html, :text
      add :page_id, references(:pages, on_delete: :nothing, type: :uuid)
      add :strategy_id, references(:strategies, type: :string, on_delete: :nothing)

      timestamps([type: :naive_datetime_usec])
    end

    create index(:elements, [:page_id])
    create index(:elements, [:strategy_id])
  end
end
