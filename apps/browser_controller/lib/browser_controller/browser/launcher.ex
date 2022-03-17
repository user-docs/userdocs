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

  def initialize_or_reinitialize_chrome(page_pid, server, opts) do
    case browser_open?(page_pid) do
      true ->  reinitialize_chrome(server, opts)
      false -> initialize_chrome(server, opts)
    end
  end

  def stop(_, page_pid, _opts) when is_pid(page_pid), do: close_chrome(page_pid)
  def stop(server, page_pid, opts) do
    case browser_open?(page_pid) do
      true ->
        {:ok, %{page_pid: page_pid}} = reinitialize_chrome(server, opts)
        close_chrome(page_pid)
      false -> {:ok, "Browser Closed"}
    end
  end

  def initialize_chrome(server, %{host_url: host_url} = opts) do
    Logger.debug("Initializing chrome on port #{opts.port} with headless #{opts.headless}")
    with {:ok, _} <- open_chrome(opts),
         {:ok, page_pid} <- connect_chrome(server),
         {:ok, page_pid} <- setup_chrome(page_pid, host_url)
    do
      {:ok, %{server: server, page_pid: page_pid}}
    else
      e ->
        Logger.error("Renitialize chrome failed becase #{inspect e}")
        {:error, "Chrome Initialization failed"}
    end
  end

  def reinitialize_chrome(server, opts) do
    %{host_url: host_url, port: port, headless: headless} = opts
    Logger.debug("Reinitializing chrome on port #{port} with headless #{headless}")
    with {:ok, page_pid} <- connect_chrome(server),
         {:ok, page_pid} <- setup_chrome(page_pid, host_url)
    do
      {:ok, %{server: server, page_pid: page_pid}}
    else
      {:error, :econnrefused} ->
        close_chrome(nil)
        initialize_chrome(server, opts)
      e ->
        Logger.error("Initialize chrome failed becase #{inspect e}")
        {:error, "Chrome Initialization failed"}
    end
  end

  def open_chrome(opts) do
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
  def browser_open?(nil), do: false
  def browser_open?(pid) when is_pid(pid), do: true

  def connect_chrome(server) do
    with {:ok, pages} <- Session.list_pages(server),
         {:ok, page} <- valid_page(pages),
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
    Page.reload(page_pid)
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
    Process.unlink(page_pid)
    case Browser.close(page_pid) do
      {:ok, _} -> {:ok, "Browser Close Message Sent"}
      {:error, %{"error" => %{"message" => message}}} -> {:error, message}
    end
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

  def valid_page(pages) do
    pages
    |> Enum.filter(fn(p) -> p["type"] == "page" end)
    |> Enum.at(-1)
    |> case do
      %{"id" => _page_id, "type" => "page"} = page -> {:ok, page}
      nil -> {:error, "No valid page exists, we should create a page"}
    end
  end

  defp create_session(opts) when is_map(opts) do
    opts
    |> Map.take([:port, :host])
    |> Enum.into([])
    |> create_session()
  end
  defp create_session(opts) when is_list(opts), do: ChromeRemoteInterface.Session.new(opts)
end
