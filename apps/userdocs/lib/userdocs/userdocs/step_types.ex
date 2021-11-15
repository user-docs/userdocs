defmodule Userdocs.StepTypes do
  @moduledoc "The Step Types context."

  require Logger

  import Ecto.Query, warn: false
  alias Userdocs.Repo

  alias Schemas.Steps.StepType

  @doc "Lists all Step Types."
  def list_step_types(params \\ %{}) do
    filters = Map.get(params, :filters, [])
    base_step_types_query()
    |> maybe_filter_by_name(filters[:name])
    |> Repo.all()
  end

  defp base_step_types_query(), do: from(step_type in StepType)

  defp maybe_filter_by_name(query, nil), do: query
  defp maybe_filter_by_name(query, name) do
    from(step_type in query,
      where: step_type.name == ^name
    )
  end

  @doc "Gets a single Step Type."
  def get_step_type!(id), do: Repo.get!(StepType, id)

  @doc "Creates a step_type."
  def create_step_type(attrs \\ %{}) do
    %StepType{}
    |> StepType.changeset(attrs)
    |> Repo.insert()
  end

  @doc "Updates a step_type."
  def update_step_type(%StepType{} = step_type, attrs) do
    step_type
    |> StepType.changeset(attrs)
    |> Repo.update()
  end

  @doc "Deletes a step_type."
  def delete_step_type(%StepType{} = step_type) do
    Repo.delete(step_type)
  end

  @doc "Returns an `%Ecto.Changeset{}` for tracking step_type changes."
  def change_step_type(%StepType{} = step_type, attrs \\ %{}) do
    StepType.changeset(step_type, attrs)
  end
end
