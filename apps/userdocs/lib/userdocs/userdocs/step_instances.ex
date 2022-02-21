defmodule Userdocs.StepInstances do
  @moduledoc """
  The Steps context.
  """
  require Logger
  import Ecto.Query, warn: false
  alias Schemas.StepInstances.StepInstance

  def create_step_instance(attrs \\ %{}) do
    %StepInstance{}
    |> StepInstance.changeset(attrs)
    |> Ecto.Changeset.apply_action(:insert)
  end

  def update_step_instance(%StepInstance{} = step_instance, attrs) do
    step_instance
    |> StepInstance.changeset(attrs)
    |> Ecto.Changeset.apply_action(:update)
  end

  def count_completed_step_instances([]), do: 0
  def count_completed_step_instances([%StepInstance{} | _] = step_instances) do
    Enum.reduce(step_instances, 0, fn(step_instance, acc) ->
      case step_instance.status do
        :succeeded -> acc + 1
        _ -> acc
      end
    end)
  end
end
