defmodule Schemas.Screenshots.Screenshot do
  use Ecto.Schema
  import Ecto.Changeset
  use Waffle.Ecto.Schema

  alias Schemas.Automation.Step
  alias Userdocs.Screenshots

  schema "screenshots" do
    field :name, :string

    has_one :step, Step

    field :base64, :string, virtual: true

    field :aws_file, Schemas.ScreenshotUploader.Type

    field :aws_screenshot, :string
    field :aws_provisional_screenshot, :string
    field :aws_diff_screenshot, :string

    timestamps()
  end

  @doc false
  def changeset(screenshot, attrs) do
    screenshot
    |> cast(attrs, [:name, :step_id, :base64, :aws_screenshot, :aws_provisional_screenshot, :aws_diff_screenshot])
    |> foreign_key_constraint(:step_id)
    |> unique_constraint(:step_id)
    |> maybe_update_screenshots()
    |> validate_required([])
  end

  def fields_changeset(screenshot, attrs) do
    screenshot
    |> cast(attrs, [:name, :step_id, :base64, :aws_screenshot, :aws_provisional_screenshot, :aws_diff_screenshot])
    |> validate_required([])
  end

  def maybe_update_screenshots(changeset) do
    case Ecto.Changeset.get_change(changeset, :base64) do
      nil -> changeset
      _base64 -> create_aws_screenshot_or_diff_screenshot(changeset)
    end
  end

  def create_aws_screenshot_or_diff_screenshot(%{ data: %{ id: _ , aws_screenshot: nil }} = changeset) do
    Screenshots.create_aws_screenshot(changeset)
  end
  def create_aws_screenshot_or_diff_screenshot(%{ data: %{ aws_screenshot: _aws_screenshot }} = changeset) do
    Screenshots.update_aws_screenshot(changeset)
  end
end
