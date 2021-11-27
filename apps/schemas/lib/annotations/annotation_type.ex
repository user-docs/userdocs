defmodule Schemas.Annotations.AnnotationType do
  @moduledoc """
  mix phx.gen.json Annotations AnnotationType annotation_types name:string args:array:string
  """
  use Ecto.Schema
  import Ecto.Changeset

  @primary_key {:id, :string, autogenerate: false}
  @derive {Jason.Encoder, only: [:id, :args, :name]}
  schema "annotation_types" do
    field :args, {:array, :string}
    field :name, :string

    timestamps()
  end

  @doc false
  def changeset(annotation_type, attrs) do
    annotation_type
    |> cast(attrs, [:id, :name, :args])
    |> validate_required([:name])
  end

  def api_changeset(annotation_type, attrs) do
    annotation_type
    |> cast(attrs, [:id, :name, :args])
    |> validate_required([:name])
  end
end
