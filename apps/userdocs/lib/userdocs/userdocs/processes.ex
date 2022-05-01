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
    |> case do
      {:ok, process} = result -> maybe_broadcast_process(result, "create", channel(process, opts[:broadcast]), opts[:broadcast])
      result -> result
    end
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
    |> maybe_broadcast_process("update", channel(process, opts[:broadcast]), opts[:broadcast])
  end

  @doc "Deletes a process."
  def delete_process(%Process{} = process, opts) do
    channel = channel(process, opts[:broadcast])
    RepoHandler.delete(process, opts)
    |> maybe_broadcast_process("delete", channel, opts[:broadcast])
  end

  @doc "Returns an `%Ecto.Changeset{}` for tracking process changes."
  def change_process(%Process{} = process, attrs \\ %{}) do
    Process.changeset(process, attrs)
  end

  @doc "Broadcasts a process to the team it belongs to"
  def maybe_broadcast_process({:error, _} = state, _, _, _), do: state
  def maybe_broadcast_process({:ok, %Process{} = process}, action, channel, true) do
    Logger.debug("#{__MODULE__} broadcasting a Process struct")
    payload = %{type: "Schemas.Processes.Process", attrs: process}
    Subscription.broadcast(channel, action, payload)
    {:ok, process}
  end
  def maybe_broadcast_process(state, _, _, _), do: state

  def channel(%Process{} = process, true) do
    team = Teams.get_process_team!(process.id)
    "team:#{team.id}"
  end
  def channel(_, _), do: ""
end
