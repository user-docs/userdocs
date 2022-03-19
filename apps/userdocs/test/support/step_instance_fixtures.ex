defmodule Userdocs.StepInstanceFixtures do
  @moduledoc false

  alias Userdocs.StepInstances

  def step_instance(attrs) do
    {:ok, step_instance} =
      step_instance_attrs(:valid, attrs)
      |> StepInstances.create_step_instance()
    step_instance
  end

  def step_instance_attrs(:valid, attrs) do
    %{
      "status" => "succeeded",
      "step_id" => Ecto.UUID.generate()
    }
    |> Map.merge(attrs)
  end
  def step_instance_attrs(:invalid, attrs) do
    %{
      "status" => "enchanting",
      "step_id" => Ecto.UUID.generate()
    }
    |> Map.merge(attrs)
  end
end
