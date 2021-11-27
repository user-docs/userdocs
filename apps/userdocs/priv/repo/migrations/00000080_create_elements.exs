defmodule Userdocs.Repo.Migrations.CreateElements do
  use Ecto.Migration

  def change do
    create table(:elements) do
      add :name, :string
      add :selector, :text
      add :generated_selector, :text
      add :direct_selector, :text
      add :outer_html, :text
      add :page_id, references(:pages, on_delete: :nothing)
      add :strategy_id, references(:strategies, on_delete: :nothing, type: :string)

      timestamps()
    end

    create index(:elements, [:page_id])
    create index(:elements, [:strategy_id])
  end
end
