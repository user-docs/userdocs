defmodule Schemas.Annotations.Annotation do
  @moduledoc "mix phx.gen.json Annotations Annotation annotations page_id:references:pages annotation_type_id:references:annotation_types thickness:integer x_offset:integer y_offset:integer font_size:integer font_color:string name:string label:string x_orientation:string y_orientation:string size:integer color:string"

  use Ecto.Schema
  import Ecto.Changeset

  require Logger

  alias Schemas.Elements.ElementAnnotation
  alias Schemas.Annotations.AnnotationType
  alias Schemas.Pages.Page
  alias Schemas.Elements.ElementAnnotation

  defimpl Jason.Encoder, for: [__MODULE__] do
    def encode(%{element_annotations: %Ecto.Association.NotLoaded{}} = value, opts) do
      Jason.Encode.map(Map.take(value, [:id, :name, :label, :x_orientation, :y_orientation, :size, :color, :thickness, :x_offset, :y_offset, :font_size, :font_color, :page_id, :annotation_type_id]), opts)
    end
    def encode(%{element_annotations: ea} = value, opts) when is_list(ea) do
      Jason.Encode.map(Map.take(value, [:element_annotations, :id, :name, :label, :x_orientation, :y_orientation, :size, :color, :thickness, :x_offset, :y_offset, :font_size, :font_color, :page_id, :annotation_type_id]), opts)
    end
  end

  schema "annotations" do
    field :name, :string
    field :label, :string
    field :x_orientation, :string
    field :y_orientation, :string
    field :size, :integer
    field :color, :string
    field :thickness, :integer
    field :x_offset, :integer
    field :y_offset, :integer
    field :font_size, :integer
    field :font_color, :string

    belongs_to :page, Page
    belongs_to :annotation_type, AnnotationType, type: :string

    has_many :element_annotations, ElementAnnotation

    timestamps()
  end

  @doc false
  def changeset(annotation, attrs) do
    annotation
    |> cast(attrs, [
        :name, :label, :x_orientation, :y_orientation,
        :size, :color, :thickness, :x_offset, :y_offset,
        :font_size, :page_id, :annotation_type_id, :font_color])
    |> cast_assoc(:element_annotations, with: &ElementAnnotation.changeset/2)
    |> foreign_key_constraint(:page_id)
    |> foreign_key_constraint(:annotation_type_id)
    |> validate_required([:page_id])
  end

  def api_changeset(annotation, attrs) do
    annotation
    |> cast(attrs, [:id, :name, :label, :x_orientation, :y_orientation,
      :size, :color, :thickness, :x_offset, :y_offset, :font_size, :font_color,
      :page_id, :annotation_type_id])
    |> cast_assoc(:element_annotations, with: &ElementAnnotation.api_changeset/2)
  end
end
