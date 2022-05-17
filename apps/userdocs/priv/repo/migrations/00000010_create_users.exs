defmodule Userdocs.Repo.Migrations.CreateUsers do
  use Ecto.Migration

  def change do
    create table(:users, primary_key: false) do
      add :id, :uuid, primary_key: true, null: false
      add :email, :string, null: false
      add :password_hash, :string
      add :email_confirmation_token, :string
      add :email_confirmed_at, :utc_datetime
      add :unconfirmed_email, :string
      add :overrides, :jsonb, default: "[]"
      add :invited_by_id, references(:users, on_delete: :nilify_all, type: :uuid)
      add :invitation_token, :string
      add :invitation_accepted_at, :utc_datetime

      timestamps([type: :naive_datetime_usec])
    end
    create unique_index(:users, [:email])
    create unique_index(:users, [:email_confirmation_token])
    create index(:users, [:invited_by_id])
  end
end
