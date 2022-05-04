defmodule Schemas.Integrations.ScreenshotIntegration do
  use Schemas.Schema
  import Ecto.Changeset

  alias Schemas.Screenshots.Screenshot
  alias Schemas.Integrations.Integration

  schema "screenshot_integrations" do
    belongs_to :screenshot, Screenshot
    belongs_to :integration, Integration

    timestamps()
  end

  @doc false
  def changeset(screenshot_integration, attrs) do
    screenshot_integration
    |> cast(attrs, [:screenshot_id, :integration_id])
    |> validate_required([:screenshot_id, :integration_id])
  end
end
