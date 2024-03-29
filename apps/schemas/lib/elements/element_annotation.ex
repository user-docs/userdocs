defmodule Schemas.Elements.ElementAnnotation do
  @moduledoc "mix phx.gen.json ElementAnnotations ElementAnnotation element_annotations id:integer element_id:references:elements annotation_id:references:annotations"
  use Schemas.Schema
  import Ecto.Changeset
  alias Schemas.Elements.Element
  alias Schemas.Annotations.Annotation

  @primary_key {:id, Ecto.UUID, autogenerate: false}
  @derive {Jason.Encoder, only: [:id, :element_id, :annotation_id]}
  schema "element_annotations" do
    field :delete, :boolean, virtual: true

    belongs_to :element, Element
    belongs_to :annotation, Annotation

    timestamps()
  end

  @doc false
  def changeset(element_annotation, attrs) do
    element_annotation
    |> cast(attrs, [:id, :element_id, :annotation_id, :delete])
    |> foreign_key_constraint(:element_id)
    |> foreign_key_constraint(:annotation_id)
    |> unique_constraint([:element_id, :annotation_id])
    |> maybe_mark_for_deletion()
  end

  def api_changeset(element_annotation, attrs) do
    element_annotation
    |> cast(attrs, [:id, :element_id, :annotation_id, :delete])
  end

  defp maybe_mark_for_deletion(%{data: %{id: nil}} = changeset), do: changeset
  defp maybe_mark_for_deletion(changeset) do
    if get_change(changeset, :delete) do
      %{changeset | action: :delete}
    else
      changeset
    end
  end
end
