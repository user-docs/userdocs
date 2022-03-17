defmodule BrowserController do
  require Logger
  use GenServer

  alias Userdocs.ProcessInstances
  alias Schemas.ProcessInstances.ProcessInstance

  alias BrowserController.BrowserState
  alias BrowserController.Constants
  alias BrowserController.Annotations
  alias BrowserController.Utilities
  alias BrowserController.Browser
  alias Local.Paths
  alias ChromeRemoteInterface.Session
  alias Schemas.Steps.Step

  def start_link(default), do: GenServer.start_link(__MODULE__, default, name: __MODULE__)

  def browser_open?(), do: GenServer.call(__MODULE__, {:browser_open?})
  def is_empty?(), do: GenServer.call(__MODULE__, {:is_empty?})
  def page_pid(), do: GenServer.call(__MODULE__, {:page_pid})
  def run_state(), do: GenServer.call(__MODULE__, {:run_state})
  def get_document(), do: GenServer.call(__MODULE__, {:get_document})
  def execute(command), do: GenServer.call(__MODULE__, {:execute, command})
  def open_browser(), do: GenServer.call(__MODULE__, :open_browser)
  def ensure_browser_open(), do: GenServer.call(__MODULE__, :ensure_browser_open)
  def close_browser(), do: GenServer.call(__MODULE__, :close_browser)
  def queue(), do: GenServer.call(__MODULE__, {:queue})

  def play(), do: GenServer.cast(__MODULE__, {:play})
  def pause(), do: GenServer.cast(__MODULE__, {:pause})
  def stop(), do: GenServer.cast(__MODULE__, {:stop})
  def handle_command(command), do: GenServer.cast(__MODULE__, {:handle_command, command})
  def enqueue(command), do: GenServer.cast(__MODULE__, {:enqueue, command})
  def clear_queue(), do: GenServer.cast(__MODULE__, {:clear_queue})
  def quit(), do: GenServer.cast(__MODULE__, :quit)

  @impl true
  def init(args) do
    Logger.info("#{__MODULE__} Initializing with args #{inspect args}")
    Process.flag(:trap_exit, true)
    Phoenix.PubSub.subscribe(Userdocs.PubSub, "extension")
    state =
      case BrowserState.get() do
        nil -> %{run_state: :pause, queue: :queue.new()}
        current_state -> current_state
      end

    {:ok, state}
  end

  @impl true
  def handle_call({:page_pid}, _from, %{page_pid: page_pid} = state),
    do: {:reply, {:ok, page_pid}, state}

  def handle_call({:is_empty?}, _from, %{queue: queue} = state),
    do: {:reply, :queue.is_empty(queue), state}

  def handle_call({:browser_open?}, _from, state),
    do: {:reply, Browser.browser_open?(headed_browser()), state}

  def handle_call({:run_state}, _from, %{run_state: run_state} = state),
    do: {:reply, run_state, state}

  def handle_call({:queue}, _from, %{queue: {tail, head}} = state) do
    {:reply, head ++ tail, state}
  end
  def handle_call(:open_browser, _from, state) do
    case Browser.open_browser(headed_browser()) do
      {:ok, _} ->
        broadcast("browser", "browser_opened", %{timestamp: NaiveDateTime.utc_now()})
        {:reply, :ok, state}
      {:error, message} -> {:reply, {:error, message}, state}
    end
  end
  def handle_call(:ensure_browser_open, _from, state) do
    {:ok, result} = Browser.ensure_open(headed_browser())
    broadcast("browser", "browser_opened", %{timestamp: NaiveDateTime.utc_now()})
    {:reply, Map.put(result, :headed_browser_pid, headed_browser()), state}
  end
  def handle_call(:close_browser, _from, state) do
    Browser.close_browser(headed_browser())
    broadcast("browser", "browser_closed", %{timestamp: NaiveDateTime.utc_now()})
    {:reply, :ok, state}
  end
  def handle_call({:get_document}, _from, %{page_pid: page_pid} = state) do
    {:reply, Utilities.get_document(page_pid), state}
  end

  def handle_call({:execute, command}, _from, state) do
    case Browser.browser_open?(headed_browser()) do
      true -> {:reply, Browser.execute(headed_browser(), command), state}
      false -> {:reply, {:error, "Browser not open", state}}
    end
  end

  @impl true
  def handle_cast(:quit, _state), do: Kernel.exit(:normal)
  def handle_cast({:play}, %{page_pid: page_pid} = state) do
    broadcast("browser", "run_state_updated", %{run_state: :play})
    stop_extension_subscription(page_pid)
    {:noreply, state |> Map.put(:run_state, :play), {:continue, :handle_queue}}
  end
  def handle_cast({:pause}, %{page_pid: page_pid} = state) do
    broadcast("browser", "run_state_updated", %{run_state: :pause})
    start_extension_subscription(page_pid)
    {:noreply, state |> Map.put(:run_state, :pause) |> Map.put(:return_to, :pause)}
  end
  def handle_cast({:stop}, %{page_pid: page_pid} = state) do
    broadcast("browser", "run_state_updated", %{run_state: :stop})
    start_extension_subscription(page_pid)
    {:noreply, state |> Map.put(:run_state, :stop) |> Map.put(:return_to, :stop)}
  end
  def handle_cast({:clear_queue}, state) do
    {_queue, state} = Map.pop(state, :queue)
    updated_queue = :queue.new()
    broadcast("browser", "queue_updated", %{queue: :queue.to_list(updated_queue)})
    {:noreply, state |> Map.put(:queue, updated_queue)}
  end
  def handle_cast({:enqueue, commands}, %{queue: _, run_state: run_state} = state) do
    {queue, state} = Map.pop(state, :queue)
    updated_queue = update_queue(queue, commands)
    broadcast("browser", "queue_updated", %{queue: :queue.to_list(updated_queue)})
    case run_state do
      :play -> {:noreply, state |> Map.put(:queue, updated_queue), {:continue, :handle_queue}}
      :pause -> {:noreply, state |> Map.put(:queue, updated_queue)}
      :stop -> {:noreply, state |> Map.put(:queue, updated_queue)}
    end
  end
  def handle_cast({:handle_command, {:execute_process, %{process: process, context: context}}},
  %{queue: queue, run_state: run_state} = state)
  when run_state in [:stop, :pause] and queue == {[], []} do
    IO.puts("Handling Execute Process Command")
    {:ok, process_instance} =
      %{
        id: UUID.uuid4(), status: :started, error: "", warning: "",
        process_id: process.id, step_instances: []
      }
      |> ProcessInstances.create_process_instance()

    broadcast("data", "create", process_instance)
    context = Map.put(context, :process_instance, process_instance)

    Enum.each(process.steps, fn(step) ->
      enqueue({:execute_step, %{step: step, context: context}})
    end)
    play()
    {:noreply, state}
  end
  def handle_cast({:handle_command, {:execute_process, _}}, state) do
    Logger.warn("Handling unimplemented Execute Process Command")
    {:noreply, state}
  end
  def handle_cast({:handle_command, command}, %{queue: queue, run_state: run_state} = state)
  when run_state in [:stop, :pause] and queue == {[], []} do
    enqueue(command)
    play()
    {:noreply, state}
  end
  def handle_cast({:handle_command, _command}, %{run_state: :play} = state),
    do: {:noreply, state}

  @impl true
  def handle_info(%{topic: "extension", event: "context_menu_interaction", payload: %{"action" => "SVG"}}, socket) do
    Logger.warning("#{__MODULE__} received an SVG context menu interaction")
    handle_command({:full_screen_svg, %{}})
    {:noreply, socket}
  end
  def handle_info(%{topic: "extension", event: "context_menu_interaction", payload: payload}, socket) do
    Logger.warning("#{__MODULE__} received an unsupported context menu interaction #{inspect payload}")
    {:noreply, socket}
  end
  def handle_info(%{topic: "extension", event: "browser_interaction", payload: %{action: action}}, socket) do
    Logger.warning("#{__MODULE__} received an unsupported action #{action}")
    {:noreply, socket}
  end
  def handle_info(%{topic: "extension", event: "devtools_element_inspected"}, socket),
    do: {:noreply, socket}
  def handle_info({:EXIT, from, reason}, state) do
    IO.puts "#{__MODULE__} exiting because #{inspect reason}, from #{inspect from}"
    {:stop, reason, state} # see GenServer docs for other return types
  end

  @impl true
  def handle_continue(:handle_queue, %{queue: {[], []}} = state) do
    Logger.info("Queue is finished, halting execution")
    broadcast("browser", "queue_updated", %{queue: []})
    case Map.get(state, :return_to, :pause) do
      :pause -> pause()
      :stop -> stop()
    end
    {:noreply, state}
  end
  def handle_continue(:handle_queue, %{queue: _, server: server, page_pid: page_pid} = state) do
    {queue, state} = Map.pop(state, :queue)
    {{:value, {command_name, _opts} = command}, updated_queue} = :queue.out(queue)
    case execute(command, server, page_pid) do
      {:ok, _result} ->
        Logger.debug("#{command_name} command completed successfully")
        broadcast("browser", "queue_updated", %{queue: :queue.to_list(updated_queue)})
        {:noreply, state |> Map.put(:queue, updated_queue), {:continue, :handle_queue}}
      {:warn, message} ->
        Logger.warn("#{command_name} command completed with warnings")
        broadcast("browser", "queue_updated", %{queue: :queue.to_list(updated_queue)})
        broadcast("browser", "execution_warning", %{command: command, message: message})
        {:noreply, state |> Map.put(:queue, updated_queue), {:continue, :handle_queue}}
      {:error, message} ->
        Logger.error("#{command_name} failed. Invalidating queue.")
        new_run_state = Map.get(state, :return_to, :pause)
        empty_queue = :queue.new()
        broadcast("browser", "queue_updated", %{queue: :queue.to_list(empty_queue)})
        broadcast("browser", "execution_error", %{command: command, message: message})
        broadcast("browser", "run_state_updated", %{run_state: new_run_state})
        {
          :noreply,
          state
          |> Map.put(:queue, empty_queue)
          |> Map.put(:run_state, new_run_state)
        }
    end
  end

  @impl true
  def terminate(reason, state) do
    Logger.warning("#{__MODULE__} Terminating because #{inspect reason}")
    BrowserState.update(state)
  end

  def headed_browser(), do: Process.whereis(HeadedBrowser)

  ################# QUEUE HELPERS ##########################

  def update_queue(queue, [_ | _] = commands) do
    Enum.reduce(commands, queue, fn(command, inner_queue) ->
      :queue.in(command, inner_queue)
    end)
  end
  def update_queue(queue, {_command_name, _opts} = command) do
    :queue.in(command, queue)
  end

  ################# INTERNALS ##############################

  alias ChromeRemoteInterface.RPC.Page
  alias ChromeRemoteInterface.RPC.DOM
  alias ChromeRemoteInterface.PageSession
  alias ChromeRemoteInterface.Session
  alias ChromeRemoteInterface.RPC.Runtime
  alias ChromeRemoteInterface.RPC.Emulation
  alias ChromeRemoteInterface.RPC.Input

  def browser_open?(server) do
    case Session.version(server) do
      {:error, :econnrefused} -> false
      {:ok, _} -> true
    end
  end

  def open_chrome(url) do
    args = Constants.chrome_startup_args(url)
    chrome_path = Paths.chromium_executable_path()
    Port.open({:spawn_executable, chrome_path}, args: args)
    {:ok, "Chrome Opened"}
  end

  def connect_chrome(server) do
    {:ok, pages} = ChromeRemoteInterface.Session.list_pages(server)
    valid_page(pages)
    |> ChromeRemoteInterface.PageSession.start_link()
  end

  def valid_page(pages) do
    pages
    |> Enum.filter(fn(p) -> p["type"] == "page" end)
    |> Enum.at(-1)
    |> case do
      %{"id" => _page_id, "type" => "page"} = page -> page
      nil -> raise("No valid page exists, we should create a page")
    end
  end

  def disable_domain_events(page_pid) do
    Logger.info("#{__MODULE__} disabling domain events on an already started chrome instance")
    Page.disable(page_pid)
    DOM.disable(page_pid)
    Runtime.disable(page_pid)
    PageSession.execute_command(page_pid, "Overlay.disable", %{}, [])
    Page.removeScriptToEvaluateOnNewDocument(page_pid, %{identifier: "1"})
    {:ok, page_pid}
  end

  def active_page_pid(server, nil) do
    Logger.debug("No existing page_pid, connecting to chrome")
    {:ok, pages} = ChromeRemoteInterface.Session.list_pages(server)

    # This doesn't find the right page sometimes. sometimes the only page is a background_page, which we can find with p["type"] == "background_page"
    pages
    |> Enum.filter(fn(p) -> p["type"] == "page" end)
    |> Enum.at(-1)
    |> case do
      %{"id" => _page_id, "type" => "page"} = page -> ChromeRemoteInterface.PageSession.start_link(page)
      nil -> raise("No valid page exists, we should create a page")
    end
  end
  def active_page_pid(_server, page_pid) do
    Logger.debug("Using an existing page_pid: #{inspect page_pid}, with status #{inspect(Process.info(page_pid)[:status])}")
    {:ok, page_pid}
  end

  def close_connection(page_pid), do: PageSession.stop(page_pid)

  def start_extension_subscription(page_pid),
    do: Runtime.evaluate(page_pid, %{expression: "window.postMessage({action: 'subscribe'}, '*')"})
  def stop_extension_subscription(page_pid),
    do: Runtime.evaluate(page_pid, %{expression: "window.postMessage({action: 'unsubscribe'}, '*')"})

  def execute(command, server, page_pid) do
    Logger.debug("Executing command on page pid with status #{Process.info(page_pid)[:status]}")
    {:ok, page_pid} = active_page_pid(server, page_pid)

    command
    |> cast_command()
    |> execute_command(page_pid)
  end

  ################## COMMANDS #############################

  alias Userdocs.StepInstances
  alias Userdocs.Pages
  alias Schemas.Steps.Step
  alias Schemas.Teams.Team

  def cast_command({:navigate, opts}), do: {:navigate, opts}
  def cast_command({:highlight, opts}), do: {:highlight, opts}
  def cast_command({:hide_highlight, opts}), do: {:hide_highlight, opts}
  def cast_command({:create_annotation, opts}), do: {:create_annotation, opts}
  def cast_command({:remove_annotation, opts}), do: {:remove_annotation, opts}
  def cast_command({:update_annotation, opts}), do: {:update_annotation, opts}
  def cast_command({:full_screen_screenshot, opts}), do: {:full_screen_screenshot, opts}
  def cast_command({:element_screenshot, opts}), do: {:element_screenshot, opts}
  def cast_command({:full_document_screenshot, opts}), do: {:full_document_screenshot, opts}
  def cast_command({:set_size, opts}), do: {:set_size, opts}
  def cast_command({:execute_step, opts}), do: {:execute_step, opts}
  def cast_command({:execute_process, opts}), do: {:execute_process, opts}
  def cast_command({:fill_field, opts}), do: {:fill_field, opts}
  def cast_command({:click, opts}), do: {:click, opts}
  def cast_command({:clear_annotations, opts}), do: {:clear_annotations, opts}
  def cast_command({:full_screen_svg, opts}), do: {:full_screen_svg, opts}

  def broadcast_step_update(step) do
    broadcast("data", "update", step)
    broadcast("data", "update", step.step_instance)
    step
  end

  def type_text(page_pid, text) do
    text
    |> String.graphemes()
    |> Enum.each(fn(char) ->
      Input.dispatchKeyEvent(page_pid, %{type: "keyDown", text: char})
      Input.dispatchKeyEvent(page_pid, %{type: "keyUp"})
    end)
    :ok
  end

  def execute_command({:navigate, %{url: url}}, page_pid) do
    Logger.info("#{__MODULE__} executing navigate command")
    PageSession.subscribe(page_pid, "Page.frameStartedLoading")
    Page.navigate(page_pid, %{url: url})
    receive do
      {:chrome_remote_interface, "Page.frameStartedLoading", _payload} ->
        #Logger.debug("Page navigation started")
        PageSession.unsubscribe(page_pid, "Page.frameStartedLoading")
        PageSession.subscribe(page_pid, "Page.frameStoppedLoading")
        receive do
          {:chrome_remote_interface, "Page.frameStoppedLoading", _payload} ->
            #Logger.debug("Page Navigation Finished")
            PageSession.unsubscribe(page_pid, "Page.frameStoppedLoading")
            {:ok, %{}}
        end
    after
      500 -> {:ok, %{}}
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

  def execute_command({:full_document_screenshot, %{on_complete: on_complete, width: width}}, page_pid) do
    Logger.info("#{__MODULE__} executing full document screenshot command with on_complete callback")
    {:ok, %{"result" => %{"cssContentSize" => %{"height" => height}}}}
      = Page.getLayoutMetrics(page_pid)
    execute_command({:set_size, %{width: width, height: height}}, page_pid)
    params = %{captureBeyondViewport: true, clip: %{height: height, width: width, x: 0, y: 0, scale: 1}}
    case Page.captureScreenshot(page_pid, params) do
      {:ok, %{"result" => %{"data" => base64}}} -> on_complete.(base64)
    end
  end

  def execute_command({:full_document_screenshot, %{width: _width, page_id: page_id}}, page_pid) do
    Logger.info("#{__MODULE__} executing full document screenshot command with page_id")
    case Page.captureScreenshot(page_pid) do
      {:ok, %{"result" => %{"data" => base64}}} ->
        opts = [preloads: [:project, :screenshots]]
        page = Client.get_page!(page_id, opts)
        Client.upsert_page_screenshot(page, base64)
    end
  end

  def execute_command({:full_screen_screenshot, %{on_complete: on_complete}}, page_pid) do
    Logger.info("#{__MODULE__} executing full screen screenshot command with on_complete callback")
    with {:ok, response} <- Page.captureScreenshot(page_pid),
         %{"result" => %{"data" => base64}} <- response
    do
      on_complete.(base64)
    else
      _ -> {:error, "Screenshot Collection failed"}
    end
  end

  def execute_command({:full_screen_screenshot, %{page_id: page_id, screenshot_id: nil}}, page_pid) do
    Logger.info("#{__MODULE__} executing full screen screenshot command with page id and nil screenshot id")
    with {:ok, response} <- Page.captureScreenshot(page_pid),
         %{"result" => %{"data" => base64}} <- response,
         page <- Client.get_page!(page_id),
         attrs <- Pages.create_page_screenshot_attrs(page, base64),
         {:ok, screenshot} <- Client.create_screenshot(attrs)
    do
      {:ok, screenshot}
    else
      _ -> {:error, "Screenshot Collection failed"}
    end
  end

  def execute_command({:full_screen_screenshot, %{page_id: page_id, screenshot_id: screenshot_id}}, page_pid) do
    Logger.info("#{__MODULE__} executing full screen screenshot command with page id and screenshot id")
    with {:ok, response} <- Page.captureScreenshot(page_pid),
         %{"result" => %{"data" => base64}} <- response,
         page <- Client.get_page!(page_id),
         screenshot <- Client.get_screenshot!(screenshot_id),
         attrs <- Pages.update_page_screenshot_attrs(page, base64),
         {:ok, screenshot} <- Client.update_screenshot(screenshot, attrs)
    do
      {:ok, screenshot}
    else
      _ -> {:error, "Screenshot Collection failed"}
    end
  end

  def execute_command({:full_screen_screenshot, _opts}, page_pid) do
    Logger.info("#{__MODULE__} executing full screen screenshot command")
    case Page.captureScreenshot(page_pid) do
      {:ok, %{"result" => %{"data" => base64}}} -> {:ok, base64}
    end
  end

  def execute_command({:element_screenshot, %{element: %{selector: selector, strategy_id: strategy_id}, on_complete: on_complete}}, page_pid) do
    Logger.info("#{__MODULE__} executing element screenshot command with on_complete callback")
    with {:ok, remote_object} <- Utilities.get_remote_object(strategy_id, selector, page_pid),
         {:ok, box} <- Utilities.get_box(page_pid, %{object_id: remote_object.object_id}),
         viewport <-
           %{
             x: box.content.upper_left.x,
             y: box.content.upper_left.y,
             width: box.width,
             height: box.height,
             scale: 1
           },
         {:ok, response} <- Page.captureScreenshot(page_pid, %{clip: viewport}),
         %{"result" => %{"data" => base64}} <- response
    do
      on_complete.(base64)
    else
      {:warn, message} -> {:warn, message}
      result -> Logger.error("Element screenshot failed because #{inspect result}")
    end
  end

  def execute_command({:element_screenshot, %{element: _element}}, page_pid) do
    Logger.info("#{__MODULE__} executing element screenshot command")
    case Page.captureScreenshot(page_pid) do
      {:ok, %{"result" => %{"data" => base64}}} -> {:ok, base64}
    end
  end

  def execute_command({:set_size, %{width: width, height: height}}, page_pid) do
    Logger.info("#{__MODULE__} executing set size command")
    params = %{
      width: width,
      height: height,
      deviceScaleFactor: 0,
      mobile: false
    }
    {:ok, _} = Emulation.setDeviceMetricsOverride(page_pid, params)
    {:ok, %{"result" => %{"cssLayoutViewport" => %{"clientHeight" => clientHeight, "clientWidth" => clientWidth}}}}
      = Page.getLayoutMetrics(page_pid)
    {:ok, %{width: clientWidth, height: clientHeight}}
  end

  def execute_command({:fill_field, %{strategy: strategy, selector: selector, text: text}}, page_pid) do
    with {:ok, remote_object} <-
        Utilities.get_remote_object(strategy, selector, page_pid),
      {:ok, %{"result" => _focus_result}} <-
        DOM.focus(page_pid, %{objectId: remote_object.object_id}),
      :ok <- type_text(page_pid, text),
      {:ok, %{"result" => result}} <-
        Runtime.callFunctionOn(page_pid, %{
          arguments: [%{objectId: remote_object.object_id}],
          functionDeclaration: "(element) => {element.blur()}",
          objectId: remote_object.object_id
        })
    do
      {:ok, result}
    else
      {:error, error_object} -> cast_error(error_object)
      {:warn, message} -> {:warn, message}
    end
  end

  def execute_command({:do_nothing, _}, _page_pid), do: {:warn, "This command did nothing."}

  def execute_command({:click, %{strategy: strategy, selector: selector}}, page_pid) do
    with {:ok, remote_object} <-
        Utilities.get_remote_object(strategy, selector, page_pid),
      {:ok, box} <- Utilities.get_box(page_pid, %{object_id: remote_object.object_id}),
      x <- box.content.upper_left.x,
      y <- box.content.upper_left.y,
      {:ok, %{"result" => _move_result}} <-
        Input.dispatchMouseEvent(page_pid, %{type: "mouseMoved", x: x, y: y}),
      {:ok, %{"result" => _click_result}} <-
        Input.dispatchMouseEvent(page_pid, %{type: "mousePressed", button: "left", clickCount: 1,  x: x, y: y}),
      {:ok, %{"result" => _release_result}} <-
        Input.dispatchMouseEvent(page_pid, %{type: "mouseReleased", button: "left", x: x, y: y})
    do
      {:ok, %{}}
    else
      {:error, error_object} -> cast_error(error_object)
      {:warn, message} -> {:warn, message}
    end
  end

  def execute_command({:clear_annotations, %{}}, page_pid) do
    opts = %{
      expression: """
        elements = document.querySelectorAll(".userdocs-annotation");
        elements.forEach(element => element.remove());
        "ok"
      """
    }
    case Runtime.evaluate(page_pid, opts) do
      {:ok, %{"result" => %{"result" => %{"value" => "ok"}}}} -> {:ok, %{}}
      result -> Logger.error(inspect result)
    end
  end

  def execute_command({:full_screen_svg, _opts}, page_pid) do
    Logger.info("Here's another one")
    Logger.info("#{__MODULE__} executing full screen svg command")
    Emulation.setEmulatedMedia(page_pid, %{media: "screen"})
    {:ok, %{"result" => %{"cssContentSize" => %{"height" => height}}}}
      = Page.getLayoutMetrics(page_pid)
    {:ok, %{"result" => %{"result" => %{"type" => "number", "value" => dpi}}}}
      = Runtime.evaluate(page_pid, %{expression: "window.dpi()"})
    Logger.info("Height: #{height} dpi: #{dpi}")
    zoom_factor = 1.25
    height_inches = height/dpi*zoom_factor
    opts = %{marginTop: 0, marginBottom: 0, marginLeft: 0, marginRight: 0, printBackground: true, preferCSSPageSize: true, displayHeaderFooter: true, paperHeight: height_inches}
    case Page.printToPDF(page_pid, opts) do
      {:ok, %{"result" => %{"data" => base64}}} ->
        input_location = "C:\\test\\test.pdf"
        output_location = "C:\\test\\test.svg"
        optimized_output_location = "C:\\test\\test.min.svg"
        binary = Base.decode64!(base64)
        File.write(input_location, binary)
        Logger.info("Starting Inkscape")
        System.cmd("D:\\Program Files\\Inkscape\\inkscape.exe", ["--without-gui", input_location, "--export-plain-svg=#{output_location}"], [stderr_to_stdout: true])
        Logger.info("Starting svgo #{Paths.svgo_path()}")
        Logger.info(inspect(["< #{output_location} > #{optimized_output_location}"]))
        System.shell("#{Paths.svgo_path()} < #{output_location} > #{optimized_output_location}")
        {:ok, %{}}
    end
  end

  def cast_error(%{"error" => %{"code" => _code, "message" => message}}),
    do: {:error, message}

  def display_command({:navigate, %{url: url}}), do: "Navigate to #{url}"
  def display_command({:full_screen_screenshot, _params}), do: "Full Screen Screenshot"
  def display_command({:element_screenshot, _params}), do: "Element Screenshot"
  def display_command({:full_document_screenshot, _params}), do: "Full Document Screenshot"
  def display_command({:set_size, %{width: w, height: h}}), do: "Set Viewport Size to #{w} X #{h}"
  def display_command({:highlight, %{selector: selector}}), do: "Highlight Element #{selector}"
  def display_command({:create_annotation, %{annotation: %{name: name}}}), do: "Create Annotation #{name}"
  def display_command({:remove_annotation, %{annotation: %{name: name}}}), do: "Remove Annotation #{name}"
  def display_command({:update_annotation, %{annotation: %{name: name}}}), do: "Update Annotation #{name}"
  def display_command({:execute_step, %{step: %{name: name}}}), do: "Execute Step #{name}"
  def display_command({:execute_process, %{process: %{name: name}}}), do: "Execute Process #{name}"
  def display_command({:full_screen_svg, _opts}), do: "Full Screen SVG Document"

  def broadcast(channel, action, payload) do
    Phoenix.PubSub.broadcast(Userdocs.PubSub, channel, %{
      topic: channel,
      event: action,
      payload: payload
    })
  end
end
