defmodule BrowserController.Queue do
  # {:ok, pid} = GenServer.start_link(BrowserController.Browser, %{url: "http://localhost:5002"})
  require Logger
  alias Userdocs.ProcessInstances

  def enqueue_process(state, %{process: process, context: context}) do
    attrs = %{
      id: UUID.uuid4(),
      status: :started,
      error: "",
      warning: "",
      process_id: process.id,
      step_instances: []
    }

    {:ok, process_instance} =  ProcessInstances.create_process_instance(attrs)

    context = Map.put(context, :process_instance, process_instance)

    commands =
      Enum.map(process.steps, fn step ->
        {:execute_step, %{step: step, context: context}}
      end)

    enqueue(state, commands)
  end

  def dequeue (state) do
    {queue, state} = Map.pop(state, :queue)
    {{:value, item}, updated_queue} = :queue.out(queue)
    {item, Map.put(state, :queue, updated_queue)}
  end

  def enqueue(state, commands) do
    {queue, state} = Map.pop(state, :queue)
    updated_queue = update_queue(queue, commands)
    broadcast("browser", "queue_updated", %{queue: :queue.to_list(updated_queue)})
    Map.put(state, :queue, updated_queue)
  end

  def clear(state) do
    {_queue, state} = Map.pop(state, :queue)
    updated_queue = :queue.new()
    broadcast("browser", "queue_updated", %{queue: :queue.to_list(updated_queue)})
    Map.put(state, :queue, updated_queue)
  end

  def play(state) do
    broadcast("browser", "run_state_updated", %{run_state: :play})
    Map.put(state, :run_state, :play)
  end

  def pause(state) do
    broadcast("browser", "run_state_updated", %{run_state: :pause})
    Map.put(state, :run_state, :pause)
  end

  def stop(state) do
    broadcast("browser", "run_state_updated", %{run_state: :stop})
    Map.put(state, :run_state, :stop)
  end

  def halt_execution(state) do

    broadcast("browser", "queue_updated", %{queue: []})
    pause(state)
  end

  defp update_queue(queue, [_ | _] = commands) do
    Enum.reduce(commands, queue, fn command, inner_queue ->
      :queue.in(command, inner_queue)
    end)
  end

  defp update_queue(queue, {_command_name, _opts} = command) do
    :queue.in(command, queue)
  end

  defp broadcast(channel, action, payload) do
    Phoenix.PubSub.broadcast(Userdocs.PubSub, channel, %{
      topic: channel,
      event: action,
      payload: payload
    })
  end
end
