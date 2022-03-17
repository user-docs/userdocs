defmodule Userdocs.StepInstancesTest do
  use Userdocs.DataCase
	alias Schemas.StepInstances.StepInstance
	alias Userdocs.StepInstances

  @valid_attrs %{"status" => "succeeded", "step_id" => Ecto.UUID.generate()}
  @update_attrs %{"status" => "failed", "step_id" => Ecto.UUID.generate()}
  @invalid_attrs %{"status" => "enchanting", "step_id" => Ecto.UUID.generate()}

  def step_instance_fixture(attrs \\ %{}) do
    {:ok, step_instance} =
      attrs
      |> Enum.into(@valid_attrs)
      |> StepInstances.create_step_instance()

    step_instance
  end

  describe "Step Instances" do
    test "list_step_instances/0 returns all step_instances" do
      Userdocs.LocalRepo.delete_all(StepInstance)
      step_instance = step_instance_fixture()
      assert StepInstances.list_step_instances() == [step_instance]
    end

    test "create_step_instance/1 with valid data creates a step_instances" do
      assert {:ok, %StepInstance{} = step_instance} = StepInstances.create_step_instance(@valid_attrs)
      assert step_instance.status == :succeeded
    end

    test "create_step_instance/1 allows 5 records per step id" do
      Enum.each(1..7, fn _ -> StepInstances.create_step_instance(@valid_attrs) end)
      step_instances = StepInstances.list_step_instances(%{filters: [step_id: @valid_attrs["step_id"]]})
      assert Enum.count(step_instances) == 5
    end

    test "create_step_instance/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = StepInstances.create_step_instance(@invalid_attrs)
    end

    test "update_step_instance/2 with valid data updates the step_instance" do
      step_instance = step_instance_fixture()
      assert {:ok, %StepInstance{} = step_instance} = StepInstances.update_step_instance(step_instance, @update_attrs)
      assert step_instance.status == :failed
    end

    test "update_step_instance/2 with invalid data returns error changeset" do
      step_instance = step_instance_fixture()
      assert {:error, %Ecto.Changeset{}} = StepInstances.update_step_instance(step_instance, @invalid_attrs)
      assert step_instance == StepInstances.get_step_instance!(step_instance.id)
    end
  end
end