defmodule BrowserController.Browser.Launcher do
  require Logger

  alias ChromeRemoteInterface.Session
  alias ChromeRemoteInterface.PageSession
  alias ChromeRemoteInterface.Session
  alias ChromeRemoteInterface.RPC.Browser
  alias ChromeRemoteInterface.RPC.Page
  alias ChromeRemoteInterface.RPC.DOM
  alias ChromeRemoteInterface.RPC.Runtime
  alias ChromeRemoteInterface.Server

  alias BrowserController.Constants
  alias Local.Paths

  def init(opts) do
    server = create_session(opts)
    case browser_open?(server) do
      true ->
        {:ok, result} = reinitialize_chrome(server, opts)
        {:ok, result |> Map.put(:opts, opts) |> Map.put(:server, server)}
      false -> {:ok, %{page_pid: nil, server: server, opts: opts}}
    end
  end

  def ensure_open(opts) do
    server = create_session(opts)
    Logger.info("Ensuring open")
    {:ok, result} = initialize_or_reinitialize_chrome(server, opts)
    wait_for_open(server)
    Logger.info("Finished ensuring open")
    {:ok, result |> Map.put(:opts, opts) |> Map.put(:server, server)}
  end

  def initialize_or_reinitialize_chrome(page_pid, server, opts) do
    with true <- is_pid(page_pid),
         {:ok, _} <- Page.getLayoutMetrics(page_pid) do
      {:ok, %{server: server, page_pid: page_pid}}
    else
      false -> initialize_or_reinitialize_chrome(server, opts)
    end
  end

  def initialize_or_reinitialize_chrome(server, opts) do
    case browser_open?(server) do
      true ->  reinitialize_chrome(server, opts)
      false -> initialize_chrome(server, opts)
    end
  end

  def ensure_closed(opts) do
    server = create_session(opts)
    Logger.info("Ensuring closed")
    stop(server, opts)
    Logger.info("Finished ensuring closed")
  end

  def stop(server, page_pid, _opts) when is_pid(page_pid) do
    close_chrome(page_pid)
    wait_for_close(server)
  end
  def stop(server, opts) do
    case browser_open?(server) do
      true ->
        {:ok, %{page_pid: page_pid}} = reinitialize_chrome(server, opts)
        close_chrome(page_pid)
      false -> {:ok, "Browser Closed"}
    end
    wait_for_close(server)
  end

  defp initialize_chrome(server, %{host_url: host_url} = opts) do
    Logger.debug("Initializing chrome on port #{opts.port} with headless #{opts.headless}")
    with {:ok, _} <- open_chrome(opts),
         {:ok, page_pid} <- connect_chrome(server),
         {:ok, page_pid} <- setup_chrome(page_pid, host_url) do
      {:ok, %{server: server, page_pid: page_pid}}
    else
      e -> handle_initializiation_error(e, server, opts)
    end
  end

  def reinitialize_chrome(server, opts) do
    %{host_url: host_url, port: port, headless: headless} = opts
    Logger.debug("Reinitializing chrome on port #{port} with headless #{headless}")
    with {:ok, page_pid} <- connect_chrome(server),
         {:ok, page_pid} <- setup_chrome(page_pid, host_url) do
      {:ok, %{server: server, page_pid: page_pid}}
    else
      e -> handle_initializiation_error(e, server, opts)
    end
  end

  def open_chrome(opts) do
    Logger.debug("Opening Chrome")
    args = Constants.chrome_startup_args(opts)
    chrome_path = Paths.chromium_executable_path()
    Port.open({:spawn_executable, chrome_path}, args: args)
    {:ok, "Chrome Opened"}
  end

  def browser_open?(%Server{} = server) do
    case Session.version(server) do
      {:error, :econnrefused} -> false
      {:ok, _} -> true
    end
  end

  def connect_chrome(server) do
    with {:ok, pages} <- Session.list_pages(server),
         {:ok, page} <- ensure_valid_page(server, pages),
         {:ok, pid} <- PageSession.start_link(page)
    do
      {:ok, pid}
    else
      {:error, message} -> {:error, message}
    end
  end

  def setup_chrome(page_pid, host_url) do
    Logger.info("#{__MODULE__} setting chrome up")
    Page.enable(page_pid)
    DOM.enable(page_pid)
    Runtime.enable(page_pid)
    Page.addScriptToEvaluateOnNewDocument(page_pid, %{source: Constants.script(host_url)})
    PageSession.execute_command(page_pid, "Overlay.enable", %{}, [])
    #Page.reload(page_pid)
    Logger.info("#{__MODULE__} finished setting chrome up")
    {:ok, page_pid}
  end

  def reset_chrome(page_pid) do
    Logger.debug("#{__MODULE__} resetting an already started chrome instance")
    Page.reload(page_pid)
    Logger.debug("#{__MODULE__} finished restarting chrome")
    {:ok, page_pid}
  end

  def disconnect_chrome(page_pid), do: PageSession.stop(page_pid)

  def close_chrome(page_pid) when is_pid(page_pid) do
    case Browser.close(page_pid) do
      {:ok, _} -> {:ok, "Browser Close Message Sent"}
      {:error, %{"error" => %{"message" => message}}} -> {:error, message}
    end
    Process.exit(page_pid, :normal)
  end

  def wait_for_close(server) do
    :timer.sleep(200)
    Task.async(fn ->
      case browser_open?(server) do
        true -> wait_for_close(server)
        false -> {:ok, "Browser Closed"}
      end
    end)
    |> Task.await()
  end

  def wait_for_open(server) do
    :timer.sleep(200)
    Task.async(fn ->
      case browser_open?(server) do
        true -> {:ok, "Browser Opened"}
        false -> wait_for_open(server)
      end
    end)
    |> Task.await()
  end

  def ensure_valid_page(server, pages) do
    case valid_page(pages) do
      {:ok, page} -> {:ok, page}
      {:error, "No valid page."} ->
        Logger.warning("No valid page")
        Session.new_page(server)
    end
  end

  def valid_page(pages) do
    pages
    |> Enum.filter(fn(p) -> p["type"] == "page" end)
    |> Enum.at(-1)
    |> case do
      %{"id" => _page_id, "type" => "page"} = page -> {:ok, page}
      nil -> {:error, "No valid page."}
    end
  end

  defp create_session(opts) when is_map(opts) do
    opts
    |> Map.take([:port, :host])
    |> Enum.into([])
    |> create_session()
  end
  defp create_session(opts) when is_list(opts), do: ChromeRemoteInterface.Session.new(opts)

  defp handle_initializiation_error({:error, :econnrefused}, server, opts) do
    stop(server, opts)
    initialize_chrome(server, opts)
  end
  defp handle_initializiation_error(e, server, opts) do
    Logger.error("Initialize chrome failed becase #{inspect e}")
    {:error, "Chrome Initialization failed"}
  end
end
