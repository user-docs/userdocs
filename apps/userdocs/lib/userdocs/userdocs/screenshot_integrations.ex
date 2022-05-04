defmodule Userdocs.ScreenshotIntegrations do
  @moduledoc """
  The Integrations context.
  """

  import Ecto.Query, warn: false
  alias Userdocs.RepoHandler
  alias Userdocs.Subscription

  alias Schemas.Integrations.ScreenshotIntegration

  def list_screenshot_integrations(opts) do
    ScreenshotIntegration
    |> RepoHandler.all(opts)
  end

  def get_screenshot_integration!(id, opts), do: RepoHandler.get!(ScreenshotIntegration, id, opts)

  def create_screenshot_integration(attrs, opts) do
    %ScreenshotIntegration{}
    |> ScreenshotIntegration.changeset(attrs)
    |> RepoHandler.insert(opts)
    |> Subscription.broadcast_result(opts)
  end

  def create_screenshot_integration_structs(attrs_list) do
    Enum.map(attrs_list, fn(attrs) ->
      {:ok, screenshot_integration} = create_screenshot_integration_struct(attrs)
      screenshot_integration
    end)
  end

  def create_screenshot_integration_struct(attrs \\ %{}) do
    %ScreenshotIntegration{}
    |> ScreenshotIntegration.api_changeset(attrs)
    |> Ecto.Changeset.apply_action(:insert)
  end

  def update_screenshot_integration(%ScreenshotIntegration{} = screenshot_integration, attrs, opts) do
    screenshot_integration
    |> ScreenshotIntegration.changeset(attrs)
    |> RepoHandler.update(opts)
    |> Subscription.broadcast_result(opts)
  end

  def delete_screenshot_integration(%ScreenshotIntegration{} = screenshot_integration, opts) do
    RepoHandler.delete(screenshot_integration, opts)
    |> Subscription.broadcast_result(opts)
  end

  def change_screenshot_integration(%ScreenshotIntegration{} = screenshot_integration, attrs \\ %{}) do
    ScreenshotIntegration.changeset(screenshot_integration, attrs)
  end
end
