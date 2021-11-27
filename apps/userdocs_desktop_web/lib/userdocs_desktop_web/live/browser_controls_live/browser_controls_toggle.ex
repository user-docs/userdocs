defmodule UserdocsDesktopWeb.BrowserControlsToggle do
  use UserdocsDesktopWeb, :live_component
  require Logger

  @impl true
  def update(assigns, socket) do
    {
      :ok,
      socket
      |> assign(assigns)
      |> assign(:browser_controls_hidden?, UserdocsDesktop.browser_controls_hidden?())
    }
  end

  @impl true
  def handle_event("show-browser-controls", _params, socket) do
    UserdocsDesktop.show_browser_controls()
    {:noreply, socket |> assign(:browser_controls_hidden?, UserdocsDesktop.browser_controls_hidden?())}
  end
  def handle_event("hide-browser-controls", _params, socket) do
    UserdocsDesktop.hide_browser_controls()
    {:noreply, socket |> assign(:browser_controls_hidden?, UserdocsDesktop.browser_controls_hidden?())}
  end
end
