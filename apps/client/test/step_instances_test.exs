defmodule ClientTest.StepInstances do
  use Client.LocalCase
  use Client.Case
  alias Userdocs.StepInstanceFixtures
  alias Schemas.StepInstances.StepInstance

  setup [
    :reinitialize_state,
    :create_local_team,
    :create_local_strategy,
    :create_local_project,
    :create_local_process,
    :create_local_page,
    :create_local_step,
    :create_local_step_instance,
  ]

  setup do
    on_exit(fn -> Client.destroy_state() end)
  end

  describe "Step Instances State" do
    test "Initialize properly" do
      assert Map.has_key?(Client.data(), :step_instances)
    end

    test "Load", %{local_step: step, local_step_instance: step_instance} do
      Client.load_step_instances(%{filters: [step_ids: [step.id]]})
      %{step_instances: [result]} = Client.data()
      assert %StepInstance{} = result
      assert result.id == step_instance.id
    end

    test "Lists", %{local_step: step, local_step_instance: step_instance} do
      Client.load_step_instances(%{filters: %{step_ids: [step.id]}})
      [result] = Client.list_step_instances()
      assert %StepInstance{} = result
      assert result.id == step_instance.id
    end
  end

  describe "Step Instances CRUD" do
    setup do
      Phoenix.PubSub.subscribe(Userdocs.PubSub, "data")
      on_exit(fn -> Phoenix.PubSub.unsubscribe(Userdocs.PubSub, "data") end)
    end

    test "Creates", %{local_step: step} do
      Client.load_step_instances(%{filters: %{step_ids: [step.id]}})

      StepInstanceFixtures.step_instance_attrs(:valid, %{"step_id" => step.id})
      |> Client.create_step_instance()
      assert_receive(%{event: "create"}, 1000)
    end

    test "Updates", %{local_step: step, local_step_instance: step_instance} do
      Client.load_step_instances(%{filters: %{step_ids: [step.id]}})
      step_instance = step_instance |> Map.put(:inserted_at, Date.add(DateTime.utc_now(), -1))

      attrs = StepInstanceFixtures.step_instance_attrs(:valid, %{"step_id" => step.id})
      Client.update_step_instance(step_instance, attrs)
      assert_receive(%{event: "update"}, 1000)
    end

    test "Deletes", %{local_step: step, local_step_instance: step_instance} do
      Client.load_step_instances(%{filters: %{step_ids: [step.id]}})
      Client.delete_step_instance(step_instance.id)
      assert_receive(%{event: "delete"}, 1000)
    end
  end
end
