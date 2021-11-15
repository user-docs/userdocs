defmodule Userdocs.Processes do
  @moduledoc """
  The Automation context.
  """

  require Logger

  import Ecto.Query, warn: false
  alias Userdocs.Repo
  alias Schemas.Processes.Process


  @doc "Returns the list of processes."
  def list_processes(params \\ %{}, filters \\ %{})
  def list_processes(params, filters) when is_map(params) and is_map(filters) do
    base_processes_query()
    |> maybe_filter_processes_by_user_id(filters[:user_id])
    |> maybe_filter_processes_by_team_id(filters[:team_id])
    |> Repo.all()
  end


  defp maybe_filter_processes_by_user_id(query, nil), do: query
  defp maybe_filter_processes_by_user_id(query, user_id) do
    from(process in query,
      left_join: project in assoc(process, :project),
      left_join: team in assoc(project, :team),
      left_join: user in assoc(team, :users),
      where: user.id == ^user_id
    )
  end

  defp maybe_filter_processes_by_team_id(query, nil), do: query
  defp maybe_filter_processes_by_team_id(query, team_id) do
    from(process in query,
    left_join: project in assoc(process, :project),
      left_join: team in assoc(project, :team),
      where: team.id == ^team_id
    )
  end

  defp base_processes_query(), do: from(processes in Process)

  @doc "Gets a single process."
  def get_process!(id, params \\ %{})
  def get_process!(id, %{preloads: "*"}) do
    Repo.one! from process in Process,
      where: process.id == ^id,
      left_join: step in assoc(process, :steps),
      left_join: page in assoc(step, :page),
      left_join: screenshot in assoc(step, :screenshot),
      left_join: step_type in assoc(step, :step_type),
      left_join: annotation in assoc(step, :annotation),
      left_join: annotation_type in assoc(annotation, :annotation_type),
      left_join: element in assoc(step, :element),
      left_join: strategy in assoc(element, :strategy),
      preload: [
        steps: {step,
          page: page,
          annotation: annotation,
          element: element,
          step_type: step_type,
          process: process,
          screenshot: screenshot,
          annotation: {annotation, annotation_type: annotation_type}
        }
      ]
  end
  def get_process!(id, _params) do
    base_process_query(id)
    |> Repo.one!()
  end

  defp base_process_query(id) do
    from(process in Process, where: process.id == ^id)
  end

  @doc "Creates a process."
  def create_process(attrs \\ %{}) do
    %Process{}
    |> Process.changeset(attrs)
    |> Repo.insert()
  end

  @doc "Updates a process."
  def update_process(%Process{} = process, attrs) do
    process
    |> Process.changeset(attrs)
    |> Repo.update()
  end

  def clear_last_process_instance(%Process{} = process) do
    Map.put(process, :last_process_instance, nil)
  end

  @doc "Deletes a process."
  def delete_process(%Process{} = process) do
    Repo.delete(process)
  end

  @doc "Returns an `%Ecto.Changeset{}` for tracking process changes."
  def change_process(%Process{} = process, attrs \\ %{}) do
    Process.changeset(process, attrs)
  end
end
