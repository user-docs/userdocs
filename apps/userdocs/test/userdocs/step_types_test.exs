defmodule Userdocs.AutomationTest do
  use Userdocs.DataCase

  alias Userdocs.AutomationFixtures
  alias Userdocs.StepTypes
  alias Schemas.Steps.StepType

  describe "step_types" do

    test "list_step_types/0 returns all step_types" do
      step_type = AutomationFixtures.step_type()
      assert StepTypes.list_step_types() == [step_type]
    end

    test "get_step_type!/1 returns the step_type with given id" do
      step_type = AutomationFixtures.step_type()
      assert StepTypes.get_step_type!(step_type.id) == step_type
    end

    test "create_step_type/1 with valid data creates a step_type" do
      attrs = AutomationFixtures.step_type_attrs(:valid)
      assert {:ok, %StepType{} = step_type} = StepTypes.create_step_type(attrs)
      assert step_type.args == []
      assert step_type.name == attrs.name
    end

    test "create_step_type/1 with invalid data returns error changeset" do
      attrs = AutomationFixtures.step_type_attrs(:invalid)
      assert {:error, %Ecto.Changeset{}} = StepTypes.create_step_type(attrs)
    end

    test "update_step_type/2 with valid data updates the step_type" do
      step_type = AutomationFixtures.step_type()
      attrs = AutomationFixtures.step_type_attrs(:valid)
      assert {:ok, %StepType{} = step_type} = StepTypes.update_step_type(step_type, attrs)
      assert step_type.args == []
      assert step_type.name == attrs.name
    end

    test "update_step_type/2 with invalid data returns error changeset" do
      step_type = AutomationFixtures.step_type()
      attrs = AutomationFixtures.step_type_attrs(:invalid)
      assert {:error, %Ecto.Changeset{}} = StepTypes.update_step_type(step_type, attrs)
      assert step_type == StepTypes.get_step_type!(step_type.id)
    end

    test "delete_step_type/1 deletes the step_type" do
      step_type = AutomationFixtures.step_type()
      assert {:ok, %StepType{}} = StepTypes.delete_step_type(step_type)
      assert_raise Ecto.NoResultsError, fn -> StepTypes.get_step_type!(step_type.id) end
    end

    test "change_step_type/1 returns a step_type changeset" do
      step_type = AutomationFixtures.step_type()
      assert %Ecto.Changeset{} = StepTypes.change_step_type(step_type)
    end
  end
end
