defmodule Userdocs.Setups do
  def handle_setup_result({:halt = status, message}, state, task_key) do
    %{setup_status: setup_status, topic: topic} = state
    setup_status = update_setup_status(setup_status, status, task_key, message)
    broadcast(setup_status, topic)

    IO.puts("setup is halting at #{task_key} because #{message}")

    {:noreply, Map.put(state, :setup_status, setup_status)}
  end
  def handle_setup_result({status, message}, state, task_key) do
    %{setup_status: setup_status, topic: topic} = state
    setup_status = update_setup_status(setup_status, status, task_key, message)
    next_task_key = setup_status[task_key][:next_task]
    broadcast(setup_status, topic)

    IO.puts("#{task_key} is #{status} because #{message}")

    {:noreply, Map.put(state, :setup_status, setup_status), {:continue, next_task_key}}
  end

  def broadcast(payload, topic) do
    Phoenix.PubSub.broadcast(Userdocs.PubSub, topic, %{
      topic: topic,
      event: "setup_status_updated",
      payload: payload
    })
  end

  def update_setup_status(setup_status, status, key, reason) do
    task =
      setup_status[key]
      |> Map.put(:status, status)
      |> Map.put(:message, reason)

    Map.put(setup_status, key, task)
  end

  def sort(setups) do
    setups
    |> Enum.into([])
    |> Enum.sort(fn({_, s1}, {_, s2}) -> s1.order < s2.order end)
  end
end