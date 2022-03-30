defmodule BrowserController.Browser.NetworkActivityMonitor do
  require Logger
  use GenServer
  alias ChromeRemoteInterface.PageSession

  @idle_timeout 500
  @network_events [
    "Network.loadingFinished",
    "Network.dataReceived",
    "Network.responseReceived",
    "Network.loadingFailed"
  ]
  @failure_events [
  ]

  def start_link(opts) do
    GenServer.start_link(__MODULE__, opts, opts)
  end

  @impl true
  def init(opts) do
    Logger.info("#{__MODULE__} Initializing with opts #{inspect(opts)}")
    page_pid = Keyword.get(opts, :page_pid)
    parent_pid = Keyword.get(opts, :parent_pid)
    timer = Process.send_after(self(), :idle, @idle_timeout)
    subscribe_all(@network_events ++ @failure_events, page_pid)
    {:ok, %{page_pid: page_pid, parent_pid: parent_pid, timer: timer}}
  end

  def handle_info({:chrome_remote_interface, event_name, _}, state) when event_name in @network_events do
    {timer, state} = Map.pop(state, :timer)
    Process.cancel_timer(timer)
    timer = Process.send_after(self(), :idle, @idle_timeout)
    {:noreply, Map.put(state, :timer, timer)}
  end

  def handle_info({:chrome_remote_interface, event_name, p}, state) when event_name in @failure_events do
    Logger.info("Navigation failed because #{event_name}")
    IO.inspect(p)
    %{parent_pid: parent_pid, timer: timer} = state
    Process.cancel_timer(timer)
    Process.send(parent_pid, {:error, :navigation_failed}, [])
    terminate(:normal, state)
    {:noreply, state}
  end

  @impl true
  def handle_info(:idle, %{parent_pid: parent_pid} = state) do
    Process.send(parent_pid, {:ok, :network_idle}, [])
    terminate(:normal, state)
    {:noreply, state}
  end

  @impl true
  def terminate(:normal, %{page_pid: page_pid, timer: timer}) do
    unsubscribe_all(@network_events ++ @failure_events, page_pid)
    Process.cancel_timer(timer)
  end

  defp subscribe_all(events, page_pid) do
    Enum.each(events,
      fn(event) -> PageSession.subscribe(page_pid, event)
    end)
  end

  defp unsubscribe_all(events, page_pid) do
    Enum.each(events,
      fn(event) -> PageSession.unsubscribe(page_pid, event)
    end)
  end
end
