defmodule Schemas.Integrations.ScreenshotIntegration do
  use Schemas.Schema
  import Ecto.Changeset

  alias Schemas.Screenshots.Screenshot
  alias Schemas.Integrations.Integration

  @derive {Jason.Encoder, except: [:__meta__, :screenshot, :integration]}
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

  def api_changeset(screenshot_integration, attrs) do
    screenshot_integration
    |> cast(attrs, [:id, :screenshot_id, :integration_id, :inserted_at, :updated_at])
  end
end
