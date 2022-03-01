defmodule UserdocsDesktopWeb.ScreenshotLive.Index do
  use UserdocsDesktopWeb, :live_view
  alias Schemas.Screenshots.Screenshot
  alias UserdocsDesktopWeb.Root
  alias UserdocsDesktopWeb.RootSubscriptionHandlers
  alias UserdocsDesktopWeb.RootEventHandlers
  alias UserdocsDesktopWeb.Icons

  @impl true
  def mount(_params, session, socket) do
    {
      :ok,
      socket
      |> Root.apply(session, [])
    }
  end

  @impl true
  def handle_params(params, url, socket) do
    {
      :noreply,
      socket
      |> assign(url: URI.parse(url))
      |> apply_action(socket.assigns.live_action, params)

    }
  end

  defp apply_action(socket, :edit, %{"id" => id}) do
    socket
    |> assign(:page_title, "Edit Screenshot")
    |> assign(:screenshot, Client.get_screenshot!(id))
    |> prepare_screenshots()
  end

  defp apply_action(socket, :new, _params) do
    socket
    |> assign(:page_title, "New Screenshot")
    |> assign(:screenshot, %Screenshot{})
    |> prepare_screenshots()
  end

  defp apply_action(socket, :index, _params) do
    socket
    |> assign(:page_title, "Listing Screenshots")
    |> assign(:screenshot, nil)
    |> prepare_screenshots()
  end

  @impl true
  def handle_event("delete", %{"id" => id}, socket) do
    Client.delete_screenshot(id)
    {:noreply, socket |> put_flash(:info, "Screenshot has been deleted successfully.")}
  end
  def handle_event(n, p, s), do: RootEventHandlers.handle_event(n, p, s)

  @impl true
  def handle_info(%{topic: _, event: _, payload: %Screenshot{}} = sub_data, socket) do
    {:noreply, prepare_screenshots(socket)}
  end
  def handle_info(n, s), do: RootSubscriptionHandlers.handle_info(n, s)

  defp prepare_screenshots(socket) do
    screenshots = Client.list_screenshots()
    assign(socket, :screenshots, screenshots)
  end
end
