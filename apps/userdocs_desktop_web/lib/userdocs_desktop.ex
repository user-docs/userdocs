defmodule UserdocsDesktop do
  alias Desktop.Window
  require Logger
  use GenServer

  def start_link(default) do
    GenServer.start_link(__MODULE__, default, name: __MODULE__)
  end

  def show_browser_controls() do
    GenServer.call(__MODULE__, :show_browser_controls)
  end

  def hide_browser_controls() do
    GenServer.call(__MODULE__, :hide_browser_controls)
  end

  def browser_controls_hidden?() do
    GenServer.call(__MODULE__, :browser_controls_hidden?)
  end

  @impl true
  def init(_) do
    Logger.info("Initializing Client")
    {:ok, browser_controls_pid} = Desktop.Window.start_link(UserdocsDesktop.Windows.browser_controls_opts())
    initial_state = %{
      browser_controls_pid: browser_controls_pid
    }
    {:ok, initial_state}
  end

  @impl true
  def handle_call(:show_browser_controls, _from, %{browser_controls_pid: pid} = state) do
    Window.show(pid)
    UserdocsDesktopWeb.Endpoint.broadcast!("windows", "event:browser_controls_updated", %{})
    {:reply, :ok, state}
  end

  def handle_call(:hide_browser_controls, _from, %{browser_controls_pid: pid} = state) do
    Window.hide(pid)
    {:reply, :ok, state}
  end

  def handle_call(:browser_controls_hidden?, _from, %{browser_controls_pid: pid} = state) do
    {:reply, Window.is_hidden?(pid), state}
  end
end
