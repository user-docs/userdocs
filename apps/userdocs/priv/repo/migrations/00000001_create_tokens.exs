defmodule Userdocs.Repo.Migrations.CreateTokens do
  use Ecto.Migration

  def change do
    create table(:tokens, primary_key: false) do
      add :id, :string
      add :token, :binary
      add :token_hash, :binary
      timestamps()
    end

    create unique_index(:tokens, [:id])
  end
end
