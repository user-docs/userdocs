defmodule Userdocs.Repo.Migrations.CreateAnnotationTypes do
  use Ecto.Migration

  def change do
    create table(:annotation_types, primary_key: false) do
      add :id, :string, primary_key: true
      add :name, :string
      add :args, {:array, :string}
      add :max_elements, :integer

      timestamps([type: :naive_datetime_usec])
    end

  end
end
