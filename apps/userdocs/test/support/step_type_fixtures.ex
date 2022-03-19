defmodule Userdocs.StepTypeFixtures do
  @moduledoc false
  alias Userdocs.StepTypes


  def step_type(attrs) do
    {:ok, step_type} = step_type_attrs(attrs) |> StepTypes.create_step_type()
    step_type
  end

  def step_type_struct(attrs) do
    {:ok, step_type} = step_type_attrs(attrs) |> StepTypes.create_step_type_struct()
    step_type
  end

  def all_valid_step_types() do
    Userdocs.AutomationFixtures.StepTypes.data()
    |> Enum.map(
      fn(st) ->
        {:ok, step_type} = StepTypes.create_step_type(st)
        step_type
      end
    )
  end

  def all_valid_step_type_structs() do
    Userdocs.AutomationFixtures.StepTypes.data()
    |> Enum.map(
      fn(st) ->
        {:ok, step_type} = StepTypes.create_step_type_struct(st)
        step_type
      end
    )
  end

  def step_type_attrs(attrs) do
    %{
      id: "step_type_id",
      args: [],
      name: UUID.uuid4()
    }
    |> Map.merge(attrs)
  end
end
