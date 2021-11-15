defmodule Schemas.Automation.Step do
  use Ecto.Schema
  import Ecto.Changeset

  require Logger

  alias Schemas.Elements.Element
  alias Schemas.Pages.Page
  alias Schemas.Automation.StepType
  alias Schemas.Annotations.Annotation
  alias Schemas.Processes.Process
  alias Schemas.Screenshots.Screenshot
  alias Schemas.StepInstances.StepInstance

  @derive {Jason.Encoder, only: [:id, :order, :name, :url, :text, :width, :height, :page_reference]}

  schema "steps" do
    field :order, :integer
    field :name, :string
    field :url, :string
    field :text, :string
    field :width, :integer
    field :height, :integer
    field :page_reference, :string
    field :margin_all, :integer
    field :margin_top, :integer
    field :margin_bottom, :integer
    field :margin_left, :integer
    field :margin_right, :integer

    belongs_to :page, Page, on_replace: :update
    belongs_to :process, Process
    belongs_to :element, Element, on_replace: :update
    belongs_to :annotation, Annotation, on_replace: :update
    belongs_to :step_type, StepType
    belongs_to :screenshot, Screenshot

    has_one :last_step_instance, StepInstance, on_replace: :nilify

    has_many :step_instances, StepInstance

    timestamps()
  end

  @doc false
  def changeset(step, attrs) do
    fields_changeset(step, attrs)
    |> assoc_changeset()
    |> cast_assoc(:last_step_instance)
    |> validate_required([:order])
  end

  def fields_changeset(step, attrs) do
    step
    |> cast(attrs, [:order, :name, :url, :text, :width, :height, :page_reference])
    |> cast(attrs, [:margin_all, :margin_top, :margin_bottom, :margin_left, :margin_right])
    |> cast(attrs, [:process_id, :page_id, :element_id, :annotation_id, :step_type_id])
    |> foreign_key_constraint(:process)
    |> foreign_key_constraint(:page)
    |> foreign_key_constraint(:element)
    |> foreign_key_constraint(:annotation)
    |> foreign_key_constraint(:step_type)
  end

  def assoc_changeset(changeset) do
    changeset
    |> cast_assoc(:element)
    |> cast_assoc(:annotation)
    |> cast_assoc(:page)
    |> cast_assoc(:screenshot)
  end
end
