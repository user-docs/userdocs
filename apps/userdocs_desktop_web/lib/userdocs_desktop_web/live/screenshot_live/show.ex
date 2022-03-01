defmodule UserdocsDesktopWeb.ScreenshotLive.Show do
  use UserdocsDesktopWeb, :live_view
  alias Schemas.Screenshots.Screenshot
  alias UserdocsDesktopWeb.Root
  alias UserdocsDesktopWeb.RootSubscriptionHandlers
  alias UserdocsDesktopWeb.RootEventHandlers

  def data_types, do: []

  @impl true
  def mount(_params, session, socket) do
    {
      :ok,
      socket
      |> Root.apply(session, data_types())
    }
  end

  @impl true
  def handle_params(%{"id" => id}, url, socket) do
    screenshot = Client.get_screenshot!(id)
    {
      :noreply,
      socket
      |> assign(url: URI.parse(url))
      |> assign(:page_title, page_title(socket.assigns.live_action))
      |> assign(:screenshot, screenshot)
    }
  end
  def handle_params(_, _, socket), do: {:noreply, socket}

  @impl true
  def handle_event(n, p, s), do: RootEventHandlers.handle_event(n, p, s)

  @impl true
  def handle_info(%{topic: _, event: _, payload: %Screenshot{id: this_id}},
  %{assigns: %{screenshot: %Screenshot{id: incoming_id} = incoming_screenshot}} = socket) do
    case this_id == incoming_id do
      false -> {:noreply, socket}
      true -> {:noreply, socket |> assign(:screenshot, incoming_screenshot)}
    end

  end
  def handle_info(n, s), do: RootSubscriptionHandlers.handle_info(n, s)

  defp page_title(:show), do: "Show Screenshot"
  defp page_title(:edit), do: "Edit Screenshot"
end
