defmodule Schemas.Pages.Page do
  use Ecto.Schema
  import Ecto.Changeset

  alias Schemas.Projects.Project
  alias Schemas.Elements.Element
  alias Schemas.Annotations.Annotation

  @derive {Jason.Encoder, only: [:id, :order, :name, :url, :project_id]}
  schema "pages" do
    field :order, :integer
    field :name, :string
    field :url, :string

    belongs_to :project, Project

    has_many :elements, Element
    has_many :annotations, Annotation

    timestamps()
  end

  @doc false
  def changeset(page, attrs) do
    page
    |> cast(attrs, [:name, :url, :project_id])
    |> foreign_key_constraint(:project_id)
    |> validate_required([:url])
  end

  def api_changeset(page, attrs) do
    page
    |> cast(attrs, [:id, :name, :url, :project_id])
    |> foreign_key_constraint(:project_id)
    |> validate_required([:url])
  end

  def fields_changeset(page, attrs) do
    page
    |> cast(attrs, [:name, :url, :project_id])
    |> validate_required([:url])
  end
end
