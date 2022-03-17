defmodule Userdocs.StepInstances do
  @moduledoc """
  The Steps context.
  """
  require Logger
  import Ecto.Query, warn: false
  alias Schemas.StepInstances.StepInstance
  alias Userdocs.LocalRepo

  def list_step_instances(opts \\ %{}) do
    filters = Map.get(opts, :filters, [])
    base_steps_query()
    |> maybe_filter_by_step_id(filters[:step_id])
    |> LocalRepo.all()
  end

  def get_step_instance!(step_instance_id) do
    from(step_instance in StepInstance, where: step_instance.id == ^step_instance_id)
    |> LocalRepo.one!()
  end

  def create_step_instance(attrs) do
    maybe_trim_step_instances(attrs)
    %StepInstance{}
    |> StepInstance.changeset(attrs)
    |> LocalRepo.insert()
  end

  defp maybe_trim_step_instances(%{"step_id" => step_id}), do: maybe_trim_step_instances(step_id)
  defp maybe_trim_step_instances(%{step_id: step_id}), do: maybe_trim_step_instances(step_id)
  defp maybe_trim_step_instances(step_id) when is_binary(step_id) do
    case list_step_instances(%{filters: [step_id: step_id]}) do
      [_, _, _, _ | tail] -> delete_step_instances(tail)
      list_of_5_or_less -> list_of_5_or_less
    end
  end

  defp delete_step_instances(steps) do
    Enum.each(steps, &delete_step_instance/1)
  end

  def delete_step_instance(%StepInstance{} = step_instance) do
    LocalRepo.delete(step_instance)
  end

  defp base_steps_query(), do: from(step_instances in StepInstance, order_by: [desc: step_instances.inserted_at])

  defp maybe_filter_by_step_id(query, nil), do: query
  defp maybe_filter_by_step_id(query, step_id) do
    from(step_instance in query,
      where: step_instance.step_id == ^step_id,
    )
  end

  def update_step_instance(%StepInstance{} = step_instance, attrs) do
    step_instance
    |> StepInstance.changeset(attrs)
    |> LocalRepo.update()
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
