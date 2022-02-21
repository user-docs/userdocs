defmodule Schemas.Users.LocalOption do
  @moduledoc false
  use Schemas.Schema
  import Ecto.Changeset

  @primary_key {:id, :id, autogenerate: true}
  @derive {Jason.Encoder, only: [:image_path, :image_repo_path, :max_retries, :user_data_dir_path, :chrome_path, :browser_timeout, :magick_path]}
  schema "local_options" do
    field :image_path, :string
    field :image_repo_path, :string
    field :max_retries, :integer
    field :browser_timeout, :integer
    field :user_data_dir_path, :string
    field :chrome_path, :string
    field :magick_path, :string
  end

  @doc false
  def changeset(local_options, attrs) do
    local_options
    |> cast(attrs, [:image_path, :image_repo_path, :max_retries, :user_data_dir_path, :chrome_path, :browser_timeout, :magick_path])
  end
end
