defmodule Userdocs.Processes do
  @moduledoc """
  The Automation context.
  """
  require Logger

  import Ecto.Query, warn: false
  alias Userdocs.RepoHandler
  alias Schemas.Processes.Process
  alias Userdocs.Teams
  alias Userdocs.Subscription


  @doc "Returns the list of processes."
  def list_processes(opts) do
    filters = Map.get(opts, :filters, [])
    base_processes_query()
    |> maybe_filter_processes_by_user_id(filters[:user_id])
    |> maybe_filter_processes_by_team_id(filters[:team_id])
    |> maybe_filter_processes_by_project_id(filters[:project_id])
    |> RepoHandler.all(opts)
  end

  defp maybe_filter_processes_by_project_id(query, nil), do: query
  defp maybe_filter_processes_by_project_id(query, project_id) do
    from(process in query,
      where: process.project_id == ^project_id
    )
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

  defp base_processes_query(), do: from processes in Process

  @doc "Gets a single process."
  def get_process!(id, opts) do
    RepoHandler.get!(Process, id, opts)
  end

  @doc "Creates a process."
  def create_process(attrs \\ %{}, opts)
  def create_process(attrs, opts) do
    %Process{}
    |> Process.changeset(attrs)
    |> RepoHandler.insert(opts)
    |> handle_broadcast(opts)
  end

  def create_process_structs(attrs_list) do
    Enum.map(attrs_list, fn(attrs) ->
      {:ok, process} = create_process_struct(attrs)
      process
    end)
  end

  def create_process_struct(attrs \\ %{}) do
    %Process{}
    |> Process.api_changeset(attrs)
    |> Ecto.Changeset.apply_action(:insert)
  end

  @doc "Updates a process."
  def update_process(%Process{} = process, attrs, opts) do
    process
    |> Process.changeset(attrs)
    |> RepoHandler.update(opts)
    |> handle_broadcast(opts)
  end

  @doc "Deletes a process."
  def delete_process(%Process{} = process, opts) do
    RepoHandler.delete(process, opts)
    |> handle_broadcast(opts)
  end

  @doc "Returns an `%Ecto.Changeset{}` for tracking process changes."
  def change_process(%Process{} = process, attrs \\ %{}) do
    Process.changeset(process, attrs)
  end

  @doc "Broadcasts a screenshot to the team it belongs to"
  def handle_broadcast({:error, _changeset} = response, _opts), do: response
  def handle_broadcast({:ok, %{__meta__: %{state: :deleted}} = struct}, opts) do
    Subscription.broadcast(channel(struct, opts), "delete", struct)
    {:ok, struct}
  end
  def handle_broadcast({:ok, %{inserted_at: same_time, updated_at: same_time} = struct}, opts) do
    Subscription.broadcast(channel(struct, opts), "create", struct)
    {:ok, struct}
  end
  def handle_broadcast({:ok, struct}, opts) do
    Subscription.broadcast(channel(struct, opts), "update", struct)
    {:ok, struct}
  end

  def channel(%Process{} = process, opts) do
    team = Teams.get_project_team!(process.project_id, opts)
    "team:#{team.id}"
  end
  def channel(_, _), do: ""
end
