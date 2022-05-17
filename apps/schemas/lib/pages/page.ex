defmodule Schemas.Pages.Page do
  @moduledoc "A web page in the application"
  use Schemas.Schema
  import Ecto.Changeset

  alias Schemas.Projects.Project
  alias Schemas.Elements.Element
  alias Schemas.Annotations.Annotation
  alias Schemas.Screenshots.Screenshot

  @derive {Jason.Encoder, only: [:id, :order, :name, :url, :default_width, :default_height, :project_id]}
  schema "pages" do
    field :order, :integer
    field :name, :string
    field :url, :string
    field :default_width, :integer
    field :default_height, :integer

    belongs_to :project, Project
    has_many :screenshots, Screenshot

    has_many :elements, Element
    has_many :annotations, Annotation

    timestamps()
  end

  @doc false
  def changeset(page, attrs) do
    page
    |> cast(attrs, [:name, :url, :project_id])
    |> foreign_key_constraint(:project_id)
    |> foreign_key_constraint(:screenshot_id)
    |> validate_required([:url, :project_id])
  end

  def api_changeset(page, attrs) do
    page
    |> cast(attrs, [:id, :name, :url, :default_width, :default_height, :project_id])
    |> foreign_key_constraint(:project_id)
    |> foreign_key_constraint(:screenshot_id)
    |> validate_required([:url])
  end

  def fields_changeset(page, attrs) do
    page
    |> cast(attrs, [:name, :url, :default_width, :default_height, :project_id])
    |> validate_required([:url])
  end
end
