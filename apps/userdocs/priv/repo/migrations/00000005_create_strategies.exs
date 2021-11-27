defmodule Userdocs.Repo.Migrations.CreateStrategies do
  use Ecto.Migration

  def change do
    create table(:strategies, primary_key: false) do
      add :id, :string, primary_key: true
      add :name, :string
    end

    create unique_index(:strategies, [:name])
  end
end
