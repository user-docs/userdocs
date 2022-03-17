defmodule UserdocsDesktopWeb.BrowserControlsLive do
  @moduledoc "The primary live view for controlling the automated browser"
  use UserdocsDesktopWeb, :live_view
  require Logger

  alias UserdocsDesktopWeb.Icons
  alias Local.Paths

  @impl true
  def mount(_params, _session, socket) do
    UserdocsDesktopWeb.Endpoint.subscribe("browser")

    {
      :ok,
      socket
      |> assign(:user_opened_browser?, BrowserController.browser_open?())
      |> assign(:browser_open?, BrowserController.browser_open?())
      |> assign(:run_state, BrowserController.run_state())
      |> assign(:queue, BrowserController.queue()),
      layout: {UserdocsDesktopWeb.LayoutView, "widget.html"}
    }
  end

  @impl true
  def handle_event("install-chromium", _params, socket) do
    Local.install_chrome()
    {
      :noreply,
      socket
      |> push_redirect(to: Routes.browser_controls_path(socket, :index))
    }
  end
  def handle_event("remove-chromium", _params, socket) do
    Local.remove_chrome
    {
      :noreply,
      socket
      |> push_redirect(to: Routes.browser_controls_path(socket, :index))
    }
  end
  def handle_event("open-browser", _, socket) do
    Task.start(fn -> BrowserController.open_browser() end)
    {:noreply, socket |> assign(:user_opened_browser?, true)}
  end
  def handle_event("close-browser", _, socket) do
    Task.start(fn -> BrowserController.close_browser() end)
    {:noreply, socket |> assign(:user_opened_browser?, false)}
  end
  def handle_event("play", _, socket) do
    BrowserController.play()
    {:noreply, socket}
  end
  def handle_event("pause", _, socket) do
    BrowserController.pause()
    {:noreply, socket}
  end
  def handle_event("stop", _, socket) do
    BrowserController.stop()
    {:noreply, socket}
  end
  def handle_event("clear-queue", _, socket) do
    BrowserController.clear_queue()
    {:noreply, socket}
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
  def handle_info(%{topic: "browser", event: "run_state_updated", payload: %{run_state: run_state}}, socket) do
    Logger.debug("#{__MODULE__} handling run_state_updated event")
    {:noreply, socket |> assign(:run_state, run_state)}
  end
  def handle_info(%{topic: "browser", event: "queue_updated", payload: %{queue: queue}}, socket) do
    Logger.debug("#{__MODULE__} handling queue_updated event")
    {:noreply, socket |> assign(:queue, queue)}
  end
  def handle_info(%{topic: "browser", event: "execution_warning", payload: _}, socket), do: {:noreply, socket}
  def handle_info(%{topic: "browser", event: "execution_error", payload: _}, socket), do: {:noreply, socket}

  def chromium_exists? do
    Paths.chromium_executable_path()
    |> File.stat()
    |> case do
    {:ok, _stat} -> true
    {:error, :enoent} -> false
    {:error, reason} -> Logger.error("Unhandled path error #{reason}")
    end
  end

  def maybe_btn_active(true), do: "btn-active"
  def maybe_btn_active(false), do: ""
end
