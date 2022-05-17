defmodule Userdocs.Repo.Migrations.CreateStepInstances do
  use Ecto.Migration

  def change do
    create table(:step_instances, primary_key: false) do
      add :id, :uuid, primary_key: true, null: false
      add :status, :string
      add :error, :jsonb
      add :warning, :jsonb
      add :step_id, :uuid
      add :process_instance_id, :uuid

      timestamps([type: :naive_datetime_usec])
    end
  end
end
