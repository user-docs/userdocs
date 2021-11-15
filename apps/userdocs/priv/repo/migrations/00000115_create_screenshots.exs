defmodule Userdocs.Repo.Migrations.CreateScreenshots do
  use Ecto.Migration

  def change do
    create table(:screenshots) do
      add :name, :string
      add :aws_file, :string

      timestamps()
    end
  end
end
