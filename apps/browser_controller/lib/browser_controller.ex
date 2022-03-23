defmodule BrowserController do
  require Logger
  use GenServer


  alias BrowserController.BrowserState
  alias BrowserController.Browser
  alias BrowserController.Queue
  alias BrowserController.StepHandler

  defguard is_empty(queue) when queue == {[], []}
  defguard not_running(state) when state.run_state in [:stop, :pause]

  def start_link(default), do: GenServer.start_link(__MODULE__, default, name: __MODULE__)

  def browser_open?(), do: GenServer.call(__MODULE__, {:browser_open?})
  def is_empty?(), do: GenServer.call(__MODULE__, {:is_empty?})
  def run_state(), do: GenServer.call(__MODULE__, {:run_state})
  # def execute(command), do: GenServer.call(__MODULE__, {:execute, command})
  def open_browser(), do: GenServer.call(__MODULE__, :open_browser)
  def ensure_browser_open(), do: GenServer.call(__MODULE__, :ensure_browser_open)
  def close_browser(), do: GenServer.call(__MODULE__, :close_browser)
  def queue(), do: GenServer.call(__MODULE__, {:queue})

  def play(), do: GenServer.cast(__MODULE__, {:play})
  def pause(), do: GenServer.cast(__MODULE__, {:pause})
  def stop(), do: GenServer.cast(__MODULE__, {:stop})
  def execute(command), do: GenServer.cast(__MODULE__, {:execute, command})
  def enqueue(command), do: GenServer.cast(__MODULE__, {:enqueue, command})
  def clear_queue(), do: GenServer.cast(__MODULE__, {:clear_queue})

  @impl true
  def init(args) do
    Logger.info("#{__MODULE__} Initializing with args #{inspect(args)}")
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

      {:error, message} ->
        {:reply, {:error, message}, state}
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

  def handle_call({:execute, command}, _from, state) do
    case Browser.browser_open?(headed_browser()) do
      true -> {:reply, Browser.execute(headed_browser(), command), state}
      false -> {:reply, {:error, "Browser not open"}, state}
    end
  end

  @impl true
  def handle_cast({:play}, state) do
    {:noreply, handle_play(state), {:continue, :handle_queue}}
  end

  def handle_cast({:pause}, state) do
    {:noreply, handle_pause(state)}
  end

  def handle_cast({:stop}, state) do
    {:noreply, handle_stop(state)}
  end

  def handle_cast({:clear_queue}, state) do
    {:noreply, Queue.clear(state)}
  end

  def handle_cast({:enqueue, commands}, %{run_state: _} = state) do
    {:noreply, Queue.enqueue(state, commands)}
  end

  def handle_cast({:execute, command}, state) when not_running(state) and is_empty(state.queue) do
    {:noreply, state |> Queue.enqueue(command) |> handle_play(), {:continue, :handle_queue}}
  end

  def handle_cast({:execute, {:execute_process, attrs}}, state) do
    {:noreply, state |> Queue.enqueue_process(attrs) |> handle_play(), {:continue, :handle_queue}}
  end

  def handle_cast({:handle_command, {:execute_process, _}}, state) do
    Logger.warn("Handling unimplemented Execute Process Command")
    {:noreply, state}
  end

  defp handle_play(state) do
    Browser.stop_extension_subscription(headed_browser())
    Queue.play(state)
  end

  defp handle_pause(state) do
    Browser.start_extension_subscription(headed_browser())
    Queue.pause(state)
  end

  defp handle_stop(state) do
    Browser.start_extension_subscription(headed_browser())
    Queue.stop(state)
  end

  @impl true
  def handle_continue(:handle_queue, %{queue: {[], []}} = state) do
    Logger.info("Queue is finished, halting execution")
    {:noreply, Queue.halt_execution(state)}
  end

  def handle_continue(:handle_queue, %{queue: _} = state) do
    {_queue, state} = Map.pop(state, :queue)
    {command, _} = Queue.dequeue(state)

    state = handle_execute(state, command)

    {:noreply, state, {:continue, :handle_queue}}
  end

  def handle_execute(state, {:execute_step, _attrs} = command) do
    %{step: _step, command: command, context: _context} = StepHandler.prepare(command)
    state = handle_execute(state, command)

  end

  def handle_execute(state, command) do
    case Browser.execute(headed_browser(), command) do
      {:ok, _result} ->
        {_, %{queue: queue} = state} = Queue.dequeue(state)
        broadcast("browser", "queue_updated", %{queue: :queue.to_list(queue)})
        state

      {:warn, message} ->
        {_, %{queue: queue} = state} = Queue.dequeue(state)
        broadcast("browser", "queue_updated", %{queue: :queue.to_list(queue)})
        broadcast("browser", "execution_warning", %{command: command, message: message})
        state

      {:error, message} ->
        %{queue: queue} = state
        state = Queue.pause(state)
        %{run_state: new_run_state} = state
        broadcast("browser", "queue_updated", %{queue: :queue.to_list(queue)})
        broadcast("browser", "execution_error", %{command: command, message: message})
        broadcast("browser", "run_state_updated", %{run_state: new_run_state})
        state
    end
  end

  @impl true
  def handle_info(
        %{topic: "extension", event: "context_menu_interaction", payload: %{"action" => "SVG"}},
        socket
      ) do
    Logger.warning("#{__MODULE__} received an SVG context menu interaction")
    execute({:full_screen_svg, %{}})
    {:noreply, socket}
  end

  def handle_info(
        %{topic: "extension", event: "context_menu_interaction", payload: payload},
        socket
      ) do
    Logger.warning(
      "#{__MODULE__} received an unsupported context menu interaction #{inspect(payload)}"
    )

    {:noreply, socket}
  end

  def handle_info(
        %{topic: "extension", event: "browser_interaction", payload: %{action: action}},
        socket
      ) do
    Logger.warning("#{__MODULE__} received an unsupported action #{action}")
    {:noreply, socket}
  end

  def handle_info(%{topic: "extension", event: "devtools_element_inspected"}, socket),
    do: {:noreply, socket}

  def handle_info({:EXIT, from, reason}, state) do
    IO.puts("#{__MODULE__} exiting because #{inspect(reason)}, from #{inspect(from)}")
    # see GenServer docs for other return types
    {:stop, reason, state}
  end


  @impl true
  def terminate(reason, state) do
    Logger.warning("#{__MODULE__} Terminating because #{inspect(reason)}")
    BrowserState.update(state)
  end

  def headed_browser(), do: Process.whereis(HeadedBrowser)

  ################# INTERNALS ##############################

  alias ChromeRemoteInterface.RPC.Runtime

  def display_command({:navigate, %{url: url}}), do: "Navigate to #{url}"
  def display_command({:full_screen_screenshot, _params}), do: "Full Screen Screenshot"
  def display_command({:element_screenshot, _params}), do: "Element Screenshot"
  def display_command({:full_document_screenshot, _params}), do: "Full Document Screenshot"
  def display_command({:set_size, %{width: w, height: h}}), do: "Set Viewport Size to #{w} X #{h}"
  def display_command({:highlight, %{selector: selector}}), do: "Highlight Element #{selector}"

  def display_command({:create_annotation, %{annotation: %{name: name}}}),
    do: "Create Annotation #{name}"

  def display_command({:remove_annotation, %{annotation: %{name: name}}}),
    do: "Remove Annotation #{name}"

  def display_command({:update_annotation, %{annotation: %{name: name}}}),
    do: "Update Annotation #{name}"

  def display_command({:execute_step, %{step: %{name: name}}}), do: "Execute Step #{name}"

  def display_command({:execute_process, %{process: %{name: name}}}),
    do: "Execute Process #{name}"

  def display_command({:full_screen_svg, _opts}), do: "Full Screen SVG Document"

  def broadcast(channel, action, payload) do
    Phoenix.PubSub.broadcast(Userdocs.PubSub, channel, %{
      topic: channel,
      event: action,
      payload: payload
    })
  end
end
