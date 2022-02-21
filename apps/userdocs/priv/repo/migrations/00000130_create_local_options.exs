defmodule Userdocs.Repo.Migrations.CreateLocalOptions do
  use Ecto.Migration

  def change do
    create table(:local_options, primary_key: true) do
      add :image_path, :string
      add :image_repo_path, :string
      add :max_retries, :integer
      add :browser_timeout, :integer
      add :user_data_dir_path, :string
      add :chrome_path, :string
      add :magick_path, :string
    end
  end
end
