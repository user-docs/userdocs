defmodule UserdocsDesktop.BrowserController do
  require Logger
  use GenServer
  alias UserdocsDesktop.Paths
  alias UserdocsDesktop.BrowserController.Constants
  alias UserdocsDesktop.BrowserController.Annotations
  alias UserdocsDesktop.BrowserController.Utilities
  alias ChromeRemoteInterface.Session

  def start_link(default), do: GenServer.start_link(__MODULE__, default, name: __MODULE__)

  def browser_open?(), do: GenServer.call(__MODULE__, {:browser_open?})
  def get_document(), do: GenServer.call(__MODULE__, {:get_document})
  def get_url(), do: GenServer.call(__MODULE__, {:get_url})

  def open_browser(css), do: GenServer.cast(__MODULE__, {:open_browser, css})
  def close_browser(), do: GenServer.cast(__MODULE__, {:close_browser})

  def play(), do: GenServer.cast(__MODULE__, {:play})
  def pause(), do: GenServer.cast(__MODULE__, {:pause})
  def execute(command), do: GenServer.cast(__MODULE__, {:execute, command})

  @impl true
  def init(_) do
    server = Session.new()
    case Session.version(server) do
      {:error, :econnrefused} ->
        Logger.info("#{__MODULE__}.init determined Chrome isn't open")
        {:ok, %{server: server, os_pid: nil, page_pid: nil, run_state: :play, queue: []}}
      {:ok, _} ->
        Logger.info("#{__MODULE__}.init determined Chrome is already open")
        {:ok, %{server: server, os_pid: :already_started, page_pid: nil, run_state: :play, queue: []}}
    end
  end


  @impl true
  def handle_call({:browser_open?}, _from, %{server: server} = state) do
    case Session.version(server) do
      {:error, :econnrefused} -> {:reply, false, state}
      {:ok, _} -> {:reply, true, state}
    end
  end
  def handle_call({:get_document}, _from, %{page_pid: page_pid} = state) do
    {:reply, Utilities.get_document(page_pid), state}
  end
  def handle_call({:get_url}, _from, %{server: server} = state) do
    {:reply, Utilities.get_url(server), state}
  end

  @impl true
  def handle_cast({:open_browser, css}, %{server: server, os_pid: os_pid, page_pid: page_pid} = state) do
    {:ok, os_pid} = open_or_reconnect_chrome(server, os_pid)
    {:ok, page_pid} = active_page_pid(server, page_pid)
    {:ok, page_pid} = setup_chrome(page_pid, css)
    UserdocsDesktopWeb.Endpoint.broadcast!("browser", "browser_opened", %{timestamp: NaiveDateTime.utc_now()})
    {:noreply, state |> Map.put(:page_pid, page_pid) |> Map.put(:os_pid, os_pid)}
  end
  def handle_cast({:close_browser}, %{server: server, os_pid: os_pid, page_pid: page_pid} = state) do
    close_chrome(server, page_pid)
    if Port.info(os_pid), do: Port.close(os_pid)
    UserdocsDesktopWeb.Endpoint.broadcast!("browser", "browser_closed", %{timestamp: NaiveDateTime.utc_now()})
    {:noreply, state |> Map.put(:os_pid, nil) |> Map.put(:page_pid, nil)}
  end
  def handle_cast({:play}, state) do
    {:noreply, state |> Map.put(:run_state, :play)}
  end
  def handle_cast({:pause}, state) do
    {:noreply, state |> Map.put(:run_state, :pause)}
  end
  def handle_cast({:execute, command}, %{page_pid: page_pid, queue: [], run_state: :play} = state) do
    command
    |> cast_command()
    |> execute_command(page_pid)

    {:noreply, state}
  end

  @impl true
  def terminate(_reason, _state) do
    Logger.warning("#{__MODULE__} Terminating")
  end

  ################# INTERNALS ##############################

  alias ChromeRemoteInterface.RPC.Page
  alias ChromeRemoteInterface.RPC.DOM
  alias ChromeRemoteInterface.RPC.Browser
  alias ChromeRemoteInterface.RPC.Target
  alias ChromeRemoteInterface.PageSession
  alias ChromeRemoteInterface.Session
  alias ChromeRemoteInterface.RPC.Runtime

  alias Userdocs.Screenshots

  def open_or_reconnect_chrome(server, :already_started), do: reconnect_chrome(server)
  def open_or_reconnect_chrome(_, nil), do: open_chrome()
  def open_or_reconnect_chrome(_, _), do: open_chrome()

  def open_chrome() do
    Logger.info("#{__MODULE__} opening chrome")
    args = Constants.chrome_startup_args()
    chrome_path = Paths.chromium_executable_path()
    {:ok, Port.open({:spawn_executable, chrome_path}, args: args)}
  end

  def reconnect_chrome(server) do
    Logger.info("#{__MODULE__} reconnecting to an already started chrome instance")
    {:ok, page_pid} = active_page_pid(server, nil)
    {:ok, pages} = ChromeRemoteInterface.Session.list_pages(server)
    Target.createTarget(page_pid, %{url: Utilities.get_url(server)})
    Enum.each(pages, fn(page) ->
      Target.closeTarget(page_pid, %{targetId: page["id"]})
    end)
    if Process.info(page_pid), do: GenServer.stop(page_pid)
    Logger.info("#{__MODULE__} finished reconnecting")
    :timer.sleep(500)
    {:ok, :already_started}
  end

  def active_page_pid(server, nil) do
    Logger.debug("No existing page_pid, connecting to chrome")
    {:ok, pages} = ChromeRemoteInterface.Session.list_pages(server)

    pages
    |> Enum.filter(fn(p) -> p["type"] == "page" end)
    |> Enum.at(-1)
    |> ChromeRemoteInterface.PageSession.start_link()
  end
  def active_page_pid(_server, page_pid) do
    Logger.debug("Using an existing page_pid: #{inspect page_pid}, with status #{inspect(Process.info(page_pid))}")

    {:ok, page_pid}
  end

  def setup_chrome(page_pid, css) do
    Logger.info("#{__MODULE__} setting chrome up")
    Page.enable(page_pid)
    DOM.enable(page_pid)
    Runtime.enable(page_pid)
    Page.addScriptToEvaluateOnNewDocument(page_pid, %{source: Utilities.script(css)})
    PageSession.execute_command(page_pid, "Overlay.enable", %{}, [])
    Logger.info("#{__MODULE__} finished setting chrome up")
    {:ok, page_pid}
  end

  def close_chrome(server, nil) do
    Logger.debug("Attempting to close chrome without a pid")
    case :gen_tcp.connect({127, 0, 0, 1}, 9222, [:binary, active: false]) do
      {:error, :econnrefused} ->
        Logger.debug("Connection was refused, chrome's dead")
        :ok
      {:ok, socket} ->
        Logger.warning("Connection was allowed, chrome's still alive")
        :gen_tcp.close(socket)
        {:ok, page_pid} = active_page_pid(server, nil)
        close_chrome(server, page_pid)
        if Process.info(page_pid), do: GenServer.stop(page_pid)
        :ok
    end
  end

  def close_chrome(server, page_pid) do
    case ChromeRemoteInterface.Session.list_pages(server) do
      {:error, :econnrefused} ->
        Logger.info("Chrome finished closing")
        :ok
      {:ok, pages} when pages == [] ->
        Logger.warning("Chrome had no pages. It's probably closing. Waiting for close.")
        :timer.sleep(100)
        close_chrome(server, nil)
      {:ok, _pages} ->
        Logger.info("#{__MODULE__} closing chrome normally")
        Browser.close(page_pid)
        if Process.info(page_pid), do: GenServer.stop(page_pid)
        :timer.sleep(100)
        close_chrome(server, page_pid)
    end
  end

  def cast_command({:navigate, opts}), do: {:navigate, opts}
  def cast_command({:highlight, opts}), do: {:highlight, opts}
  def cast_command({:hide_highlight, opts}), do: {:hide_highlight, opts}
  def cast_command({:create_annotation, opts}), do: {:create_annotation, opts}
  def cast_command({:remove_annotation, opts}), do: {:remove_annotation, opts}
  def cast_command({:update_annotation, opts}), do: {:update_annotation, opts}
  def cast_command({:full_screen_screenshot, opts}), do: {:full_screen_screenshot, opts}

  def execute_command({:navigate, %{url: url}}, page_pid) do
    Logger.info("#{__MODULE__} executing navigate command")
    PageSession.subscribe(page_pid, "Page.frameStoppedLoading")
    Page.navigate(page_pid, %{url: url})

    receive do
      {:chrome_remote_interface, "Page.frameStoppedLoading", _payload} -> {:ok, %{}}
    end
  end

  def execute_command({:highlight, %{strategy: strategy, selector: selector}}, page_pid) do
    Logger.info("#{__MODULE__} executing highlight command")
    opts = %{showInfo: true, contentColor: %{r: 155, g: 11, b: 239, a: 0.7}}
    case Utilities.get_node_id(strategy, selector, page_pid) do
      {:ok, 0} ->
        Logger.debug("Node not found")
        {:warn, "Node not found in browser"}
      {:ok, node_id} ->
        DOM.highlightNode(page_pid, %{nodeId: node_id, highlightConfig: opts})
        {:ok, %{}}
    end
  end

  def execute_command({:hide_highlight, opts}, page_pid) do
    Logger.info("#{__MODULE__} executing hide_highlight command")
    selector = Map.fetch!(opts, :selector)
    {:ok, root_node_id} = Utilities.get_root_node_id(page_pid)
    {:ok, %{"result" => %{"nodeId" => node_id}}} = DOM.querySelector(page_pid, %{nodeId: root_node_id, selector: selector})
    DOM.hideHighlight(page_pid, %{nodeId: node_id})
  end

  def execute_command({:create_annotation, %{annotation: annotation}}, page_pid) do
    Logger.info("#{__MODULE__} executing create_annotation command")
    Annotations.create(page_pid, annotation)
  end

  def execute_command({:remove_annotation, %{annotation: annotation}}, page_pid) do
    Logger.info("#{__MODULE__} executing remove_annotation command")
    Annotations.remove(page_pid, annotation)
  end

  def execute_command({:update_annotation, %{annotation: annotation}}, page_pid) do
    Logger.info("#{__MODULE__} executing update_annotation command")
    Annotations.remove(page_pid, annotation)
    Annotations.create(page_pid, annotation)
  end

  alias Schemas.Screenshots.Screenshot
  def execute_command({:full_screen_screenshot, %{screenshot: %Screenshot{} = screenshot, opts: opts}}, page_pid) do
    Logger.info("#{__MODULE__} executing full screen screenshot command")
    case Page.captureScreenshot(page_pid, %{}) do
      {:ok, %{"result" => %{"data" => base64}}} -> Screenshots.update_screenshot(screenshot, %{base64: base64}, opts)
    end
  end
end
