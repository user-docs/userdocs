defmodule Schemas.Steps.Step do
  @moduledoc """
    An executable step in a process. The fundamental unit of execution in userdocs
    mix phx.gen.json Steps Step steps order:integer name:string text:string width:string height:string margin_all:integer margin_top:integer margin_bottom:integer margin_left:integer margin_right:integer page_id:references:pages process_id:references:processes element_id:references:elements annotation_id:references:annotations step_type_id:references:step_types screenshot_id:references:screenshots
  """
  use Schemas.Schema
  import Ecto.Changeset

  require Logger

  alias Schemas.Elements.Element
  alias Schemas.Pages.Page
  alias Schemas.Steps.StepType
  alias Schemas.Annotations.Annotation
  alias Schemas.Processes.Process
  alias Schemas.Screenshots.Screenshot
  alias Schemas.StepInstances.StepInstance

  @derive {Jason.Encoder, only: [
    :id, :order, :name, :text, :width, :height, :margin_all, :margin_top, :margin_bottom,
    :margin_left, :margin_right, :page_id, :process_id, :element_id, :annotation_id, :step_type_id]}

  schema "steps" do
    field :order, :integer
    field :name, :string
    field :text, :string
    field :width, :integer
    field :height, :integer
    field :margin_all, :integer
    field :margin_top, :integer
    field :margin_bottom, :integer
    field :margin_left, :integer
    field :margin_right, :integer

    belongs_to :page, Page, on_replace: :update
    belongs_to :process, Process
    belongs_to :element, Element, on_replace: :update
    belongs_to :annotation, Annotation, on_replace: :update
    belongs_to :step_type, StepType, type: :string

    has_many :screenshots, Screenshot
    has_one :step_instance, StepInstance

    timestamps()
  end

  @doc false
  def changeset(step, attrs) do
    fields_changeset(step, attrs)
    |> assoc_changeset()
    |> validate_required([:order, :page_id])
  end

  def fields_changeset(step, attrs) do
    step
    |> cast(attrs, [:id, :order, :name, :text, :width, :height])
    |> cast(attrs, [:margin_all, :margin_top, :margin_bottom, :margin_left, :margin_right])
    |> cast(attrs, [:process_id, :page_id, :element_id, :annotation_id, :step_type_id])
    |> foreign_key_constraint(:process_id)
    |> foreign_key_constraint(:page_id)
    |> foreign_key_constraint(:element_id)
    |> foreign_key_constraint(:annotation_id)
    |> foreign_key_constraint(:step_type_id)
  end

  def assoc_changeset(changeset) do
    changeset
    |> cast_assoc(:element)
    |> cast_assoc(:annotation)
    |> cast_assoc(:page)
  end
end
