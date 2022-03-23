defmodule BrowserController.QueueTest do
	use ExUnit.Case
  alias BrowserController.Queue
  describe "Queue State" do
    setup do
      Phoenix.PubSub.subscribe(Userdocs.PubSub, "browser")
    end

    test "Enqueues queues lists" do
      assert Queue.enqueue(%{queue: :queue.new()}, [1, 2]) == %{queue: {[2], [1]}}
      assert_received(%{event: "queue_updated"})
    end

    test "Enqueues queues individuals" do
      assert Queue.enqueue(%{queue: :queue.new()}, {:command, %{}}) == %{queue: {[{:command, %{}}], []}}
      assert_received(%{event: "queue_updated"})
    end

    test "Clear Queue clears" do
      assert Queue.enqueue(%{queue: :queue.new()}, {:command, %{}})
      |> Queue.clear() == %{queue: :queue.new()}
      assert_received(%{event: "queue_updated"})
    end

    test "Play sets run state" do
      assert Queue.play(%{}) == %{run_state: :play}
    end

    test "Pause sets run state" do
      assert Queue.pause(%{}) == %{run_state: :pause}
    end

    test "Dequeue dequeues" do
      assert Queue.dequeue(%{queue: {[1], [2, 3]}}) == {2, %{queue: {[1], [3]}}}
    end
  end
end
