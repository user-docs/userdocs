defmodule Userdocs.Repo.Migrations.CreateStepTypes do
  use Ecto.Migration

  def change do
    create table(:step_types, primary_key: false) do
      add :id, :string, primary_key: true
      add :name, :string
      add :args, {:array, :string}

      timestamps()
    end

  end
end
