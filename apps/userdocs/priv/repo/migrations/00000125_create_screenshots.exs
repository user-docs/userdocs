defmodule Userdocs.Repo.Migrations.CreateScreenshots do
  use Ecto.Migration

  def change do
    create table(:screenshots, primary_key: false) do
      add :id, :uuid, primary_key: true, null: false
      add :name, :string
      add :file_name, :string
      add :aws_file, :string
      add :aws_screenshot, :string
      add :aws_provisional_screenshot, :string
      add :aws_diff_screenshot, :string
      add :status, :string
      add :score, :float
      add :presigned_urls, :jsonb
      add :project_id, references(:projects, on_delete: :nilify_all, type: :uuid)
      add :page_id, references(:pages, on_delete: :nilify_all, type: :uuid)
      add :step_id, references(:steps, on_delete: :delete_all, type: :uuid)

      timestamps()
    end

    create index(:screenshots, [:project_id])
    create index(:screenshots, [:page_id])
  end
end
