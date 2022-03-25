defmodule BrowserController.Browser do
  # {:ok, pid} = GenServer.start_link(BrowserController.Browser, %{url: "http://localhost:5002"})
  require Logger
  use GenServer

  alias BrowserController.Browser.Launcher
  alias BrowserController.Browser.Commands

  def open_browser(pid), do: GenServer.call(pid, :open_browser)
  def ensure_open(pid), do: GenServer.call(pid, :ensure_open)
  def close_browser(pid), do: GenServer.call(pid, :close_browser)
  def browser_open?(pid), do: GenServer.call(pid, :browser_open?)
  def execute(pid, command), do: GenServer.call(pid, {:execute, command})
  def stop_extension_subscription(pid), do: GenServer.call(pid, :start_subscription)
  def start_extension_subscription(pid), do: GenServer.call(pid, :start_subscription)

  def start_link(opts) do
    GenServer.start_link(__MODULE__, opts, opts)
  end

  @impl true
  def init(opts) do
    Process.flag(:trap_exit, true)
    Logger.info("#{__MODULE__} Initializing with opts #{inspect(opts)}")

    opts
    |> parse_opts()
    |> Launcher.init()
  end

  @impl true
  def handle_call(:open_browser, _from, state) do
    %{page_pid: page_pid, server: server, opts: opts} = state

    with {:ok, result} <- Launcher.initialize_or_reinitialize_chrome(page_pid, server, opts) do
      {:reply, {:ok, "Browser opened successfully"}, Map.merge(state, result)}
    else
      {:error, message} -> {:reply, {:error, message}, state}
      e -> {:reply, {:error, inspect(e)}, state}
    end
  end

  def handle_call(:ensure_open, _from, state) do
    %{page_pid: page_pid, server: server, opts: opts} = state
    {:ok, result} = Launcher.initialize_or_reinitialize_chrome(page_pid, server, opts)
    {:reply, {:ok, result}, Map.merge(state, result)}
  end

  def handle_call(:browser_open?, _from, state) do
    %{server: server} = state
    {:reply, Launcher.browser_open?(server), state}
  end

  def handle_call(:close_browser, _from, state) do
    %{server: server, page_pid: page_pid, opts: opts} = state
    {:reply, Launcher.stop(server, page_pid, opts), state}
  end

  def handle_call({:execute, command}, _from, state) do
    %{page_pid: page_pid} = state
    {:reply, Commands.apply(page_pid, command), state}
  end

  def handle_call(:start_subscription, _from, %{page_pid: page_pid} = state),
    do: {:reply, start_subscription(page_pid), state}

  def handle_call(:stop_subscription, _from, %{page_pid: page_pid} = state),
    do: {:reply, stop_subscription(page_pid), state}

  @impl true
  def handle_info({:chrome_remote_interface, "Page.frameStoppedLoading", _payload}, socket) do
    Logger.debug("#{__MODULE__} received a Page.frameStoppedLoading message")
    {:noreply, socket}
  end

  def handle_info({:chrome_remote_interface, "Page.frameStartedLoading", _payload}, socket) do
    Logger.debug("#{__MODULE__} received a Page.frameStartedLoading message")
    {:noreply, socket}
  end

  def handle_info({:event, :chrome_closed}, state) do
    Logger.info("#{__MODULE__} handling chrome closed event")
    broadcast("browser", "browser_closed", %{timestamp: NaiveDateTime.utc_now()})
    {:noreply, Map.put(state, :page_pid, nil)}
  end

  def handle_info({:EXIT, from, :normal}, state) do
    Logger.info("#{__MODULE__} handlinga normal exit subscription callback from #{inspect(from)}")
    {:noreply, state}
  end

  def pid_status(page_pid), do: Process.info(page_pid)

  def parse_opts(opts) do
    %{
      host_url: Keyword.get(opts, :host_url, "https://locahost:5002"),
      port: Keyword.get(opts, :port, 9222),
      headless: Keyword.get(opts, :headless, false)
    }
  end

  defp start_subscription(page_pid) do
    script = "window.postMessage({action: 'subscribe'}, '*')"
    Commands.apply(page_pid, {:evaluate_script, %{script: script}})
  end

  defp stop_subscription(page_pid) do
    script = "window.postMessage({action: 'unsubscribe'}, '*')"
    Commands.apply(page_pid, {:evaluate_script, %{script: script}})
  end

  def broadcast(channel, action, payload) do
    Phoenix.PubSub.broadcast(Userdocs.PubSub, channel, %{
      topic: channel,
      event: action,
      payload: payload
    })
  end
end
