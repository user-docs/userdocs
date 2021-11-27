defmodule UserdocsDesktopWeb.BrowserControlsLive do
  use UserdocsDesktopWeb, :live_view
  require Logger

  alias UserdocsDesktopWeb.Icons
  alias UserdocsDesktop.ChromiumInstaller
  alias UserdocsDesktop.Paths
  alias UserdocsDesktop.BrowserController
  alias UserdocsDesktopWeb.Icons

  @impl true
  def mount(_params, _session, socket) do
    UserdocsDesktopWeb.Endpoint.subscribe("browser")

    {
      :ok,
      socket
      |> assign(:user_opened_browser?, BrowserController.browser_open?())
      |> assign(:browser_open?, BrowserController.browser_open?()),
      layout: {UserdocsDesktopWeb.LayoutView, "widget.html"}
    }
  end

  @impl true
  def handle_event("install-chromium", _params, socket) do
    {:ok, _path} = ChromiumInstaller.download()
    :ok = ChromiumInstaller.install()
    {
      :noreply,
      socket
      |> push_redirect(to: Routes.browser_controls_path(socket, :index))
    }
  end
  def handle_event("remove-chromium", _params, socket) do
    :ok = ChromiumInstaller.remove()
    {
      :noreply,
      socket
      |> push_redirect(to: Routes.browser_controls_path(socket, :index))
    }
  end
  def handle_event("open-browser", _, socket) do
    {:ok, current_user} = Session.current_user()
    BrowserController.open_browser(current_user.selected_team.css)
    {:noreply, socket |> assign(:user_opened_browser?, true)}
  end
  def handle_event("close-browser", _, socket) do
    BrowserController.close_browser()
    {:noreply, socket |> assign(:user_opened_browser?, false)}
  end
  def handle_event("play", _, socket) do
    BrowserController.play()
    {:noreply, socket |> assign(:user_opened_browser?, false)}
  end
  def handle_event("pause", _, socket) do
    BrowserController.pause()
    {:noreply, socket |> assign(:user_opened_browser?, false)}
  end

  @impl true
  def handle_info(%{topic: "browser", event: "browser_opened", payload: %{timestamp: _open_time}}, socket) do
    Logger.debug("Browser opened event")
    {:noreply, socket |> assign(:browser_open?, true)}
  end
  def handle_info(%{topic: "browser", event: "browser_closed", payload: %{timestamp: _close_time}}, socket) do
    Logger.debug("Browser closed event")
    {:noreply, socket |> assign(:browser_open?, false)}
  end

  def chromium_exists? do
    case File.stat(Paths.chromium_executable_path()) do
    {:ok, _stat} -> true
    {:error, :enoent} -> false
    {:error, reason} -> Logger.error("Unhandled path error #{reason}")
    end
  end
end
