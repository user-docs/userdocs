defmodule UserdocsDesktopWeb.ExtensionChannel do
  @moduledoc false
  require Logger
  use UserdocsDesktopWeb, :channel
  alias UserdocsDesktopWeb.LiveHelpers
  alias Schemas.ExtensionMessage

  @impl true
  def join("extension", payload, socket) do
    if authorized?(payload) do
      {:ok, socket}
    else
      {:error, %{reason: "unauthorized"}}
    end
  end

  @impl true
  def handle_in("ping", payload, socket) do
    {:reply, {:ok, payload}, socket}
  end
  def handle_in("event:context_menu_interaction", payload, socket) do
    Logger.debug("Received context_menu_interaction")
    broadcast!(socket, "context_menu_interaction", payload)
    {:noreply, socket}
  end
  def handle_in("browser_interaction", payload, socket) do
    attrs = LiveHelpers.underscored_map_keys(payload)
    message =
      ExtensionMessage.changeset(%ExtensionMessage{}, attrs)
      |> Ecto.Changeset.apply_action!(:insert)

    UserdocsDesktopWeb.Endpoint.broadcast!("extension", "browser_interaction", message)
    {:noreply, socket}
  end

  # Add authorization logic here as required.
  defp authorized?(_payload) do
    true
  end
end
