defmodule Schemas.Screenshots.Screenshot do
  @moduledoc """
  mix phx.gen.json Screenshots Screenshot screenshots name:string project_id:references:projects
  mix phx.gen.live Screenshots Screenshot screenshots name:string file_name:string project_id:references:projects page_id:references:pages
  """
  use Schemas.Schema
  import Ecto.Changeset

  alias Schemas.Pages.Page
  alias Schemas.Steps.Step
  alias Schemas.Screenshots.PresignedURLs

  @derive {Jason.Encoder, only: [
    :id, :name, :base64, :file_name, :status,
    :presigned_urls, :score, :page_id, :step_id
  ]}
  schema "screenshots" do
    field :name, :string
    field :file_name, :string
    field :base64, :string, virtual: true
    field :status, Ecto.Enum, values: [:ok, :difference, :size_difference]
    field :score, :float

    belongs_to :page, Page
    belongs_to :step, Step

    embeds_one :presigned_urls, PresignedURLs

    timestamps()
  end

  @doc false
  def changeset(screenshot, attrs) do
    screenshot
    |> cast(attrs, [:name, :file_name, :status, :base64,
      :score, :page_id, :step_id])
    |> validate_required([:page_id])
  end

  def api_changeset(screenshot, attrs) do
    screenshot
    |> cast(attrs, [:id, :name, :file_name, :status, :base64,
      :score, :page_id, :step_id])
    |> cast_embed(:presigned_urls, with: &PresignedURLs.changeset/2)
  end
end

defmodule Schemas.Screenshots.PresignedURLs do
  use Schemas.Schema
  import Ecto.Changeset
  alias Schemas.Screenshots.PresignedURL
  @primary_key false
  @derive Jason.Encoder
  embedded_schema do
    embeds_one :image, PresignedURL
    embeds_one :provisional, PresignedURL
    embeds_one :diff, PresignedURL
    embeds_one :export, PresignedURL
    embeds_one :dir, PresignedURL
  end

  def changeset(presigned_urls, attrs) do
    presigned_urls
    |> cast(attrs, [])
    |> cast_embed(:image, with: &PresignedURL.changeset/2)
    |> cast_embed(:provisional, with: &PresignedURL.changeset/2)
    |> cast_embed(:diff, with: &PresignedURL.changeset/2)
    |> cast_embed(:export, with: &PresignedURL.changeset/2)
  end
end

defmodule Schemas.Screenshots.PresignedURL do
  use Schemas.Schema
  import Ecto.Changeset
  @primary_key false
  @derive Jason.Encoder
  embedded_schema do
    field :get, :string, virtual: true
    field :put, :string, virtual: true
    field :post, :string, virtual: true
  end

  def changeset(presigned_url, attrs) do
    presigned_url
    |> cast(attrs, [:get, :put, :post])
  end
end
