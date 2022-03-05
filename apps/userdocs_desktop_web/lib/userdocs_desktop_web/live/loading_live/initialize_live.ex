defmodule UserdocsDesktopWeb.InitializeLive do
  @moduledoc "Controls and displays the initialization of the desktop application."
  use UserdocsDesktopWeb, :live_view
  require Logger
  alias Userdocs.Setups

  @impl true
  def mount(_params, _session, socket) do
    local_status = Local.status()
    client_status = Client.status()

    UserdocsDesktopWeb.Endpoint.subscribe("local")
    UserdocsDesktopWeb.Endpoint.subscribe("client")
    {
      :ok,
      socket
      |> maybe_redirect(client_status)
      |> assign(:local_status, local_status)
      |> assign(:client_status, client_status),
      layout: {UserdocsDesktopWeb.LayoutView, "unauthenticated.html"}
    }
  end

  @impl true
  def handle_info(%{topic: "local", event: "setup_status_updated", payload: payload}, socket) do
    Logger.warning("#{__MODULE__} received local status update")
    {:noreply, assign(socket, :local_status, payload)}
  end
  def handle_info(%{topic: "client", event: "setup_status_updated", payload: payload}, socket) do
    Logger.warning("#{__MODULE__} received client status update")
    {
      :noreply,
      socket
      |> assign(:client_status, payload)
      |> maybe_redirect(payload)
    }
  end

  defp maybe_redirect(socket, %{authenticate: %{status: :ok}}) do
    push_redirect(socket, to: Routes.home_path(socket, :index))
  end
  defp maybe_redirect(socket, %{authenticate: %{status: status}}) when status in [:error, :halt] do
    push_redirect(socket, to: Routes.session_index_path(socket, :new))
  end
end
