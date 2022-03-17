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

  def start_link(opts) do
    GenServer.start_link(__MODULE__, opts, opts)
  end

  @impl true
  def init(opts) do
    Process.flag(:trap_exit, true)
    Logger.info("#{__MODULE__} Initializing with opts #{inspect opts}")
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
    result = Launcher.initialize_or_reinitialize_chrome(page_pid, server, opts)
    {:reply, result, state}
  end
  def handle_call(:browser_open?, _from, state) do
    %{page_pid: page_pid} = state
    {:reply, Launcher.browser_open?(page_pid), state}
  end
  def handle_call(:close_browser, _from, state) do
    %{server: server, page_pid: page_pid, opts: opts} = state
    {:reply, Launcher.stop(server, page_pid, opts), state}
  end
  def handle_call({:execute, command}, _from, state) do
    %{page_pid: page_pid} = state
    {:reply, Commands.apply(page_pid, command), state}
  end

  @impl true
  def handle_info({:chrome_remote_interface, "Page.frameStoppedLoading", _payload}, socket) do
    Logger.debug("#{__MODULE__} received a Page.frameStoppedLoading message")
    {:noreply, socket}
  end
  def handle_info({:chrome_remote_interface, "Page.frameStartedLoading", _payload}, socket) do
    Logger.debug("#{__MODULE__} received a Page.frameStartedLoading message")
    {:noreply, socket}
  end
  def handle_info({:EXIT, from, :remote_closed}, state) do
    Logger.debug("#{__MODULE__} handling exit subscription callback from #{inspect from} because remote closed")
    {:noreply, Map.put(state, :page_pid, nil)}
  end
  def handle_info({:EXIT, from, :normal}, state) do
    Logger.debug("#{__MODULE__} handlinga normal exit subscription callback from #{inspect from}")
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

  """
  def deprecated_open_chrome(server, page_pid, url) do
    if !browser_open?(server) do
      Logger.info("Browser was closed, opening")
      args = Constants.chrome_startup_args(url)
      chrome_path = Paths.chromium_executable_path()
      _port = Port.open({:spawn_executable, chrome_path}, args: args)
      {:ok, page_pid} = active_page_pid(server, page_pid)
      Browser.setup_chrome(page_pid, url)
    else
      Logger.info("Browser is already open, reconnecting")
      {:ok, page_pid} = active_page_pid(server, page_pid)
      Browser.setup_chrome(page_pid, url)
    end
  end
  def deprecated_close_chrome(server, page_pid) do
    case Session.version(server) do
      {:error, :econnrefused} ->
        Logger.info("Chrome finished closing")
        IO.inspect("Chrome finished closing")
        :ok
      {:ok, _version_info} ->
        Logger.info("{__MODULE__} closing chrome normally")
        IO.inspect("{__MODULE__} closing chrome normally")
        try do
          IO.puts("Before Close")
          IO.inspect(page_pid)
          Process.info(page_pid)
          Process.info(page_pid)
          Browser.close(page_pid)
          IO.puts("After Close")
        rescue
          e ->
            Logger.error(e)
            IO.inspect(e)
        end
        if Process.info(page_pid), do: GenServer.stop(page_pid)
        :timer.sleep(200)
        IO.puts("After sleep")
        close_chrome(page_pid)
    end
  end
  def deprecated_reinitialize_chrome(server, page_pid) do
    case browser_open?(state.server) do
      true ->
        {:ok, page_pid} = active_page_pid(state.server, state.page_pid)
        {:ok, page_pid} =
          case Process.info(page_pid)[:status] do
            nil -> active_page_pid(state.server, nil)
            :waiting -> active_page_pid(state.server, state.page_pid)
          end
        {:ok, page_pid} = Browser.reset_chrome(page_pid)
        :timer.sleep(500)
        Browser.setup_chrome(page_pid, url)
        Map.put(state, :page_pid, page_pid)
      false -> state
    end
  end
  """
end
