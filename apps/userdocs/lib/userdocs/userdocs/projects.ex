defmodule Userdocs.Projects do
  @moduledoc """
  The Projects context.
  """
  require Logger
  import Ecto.Query, warn: false
  alias Schemas.Projects.Project
  alias Userdocs.RepoHandler
  alias Userdocs.Subscription

  @doc "Returns the list of projects."
  def list_projects(opts) do
    filters = Map.get(opts, :filters)
    base_projects_query()
    |> maybe_filter_by_team(filters[:team_id])
    |> maybe_filter_projects_by_user(filters[:user_id])
    |> RepoHandler.all(opts)
  end

  defp maybe_filter_by_team(query, nil), do: query
  defp maybe_filter_by_team(query, team_id) do
    from(item in query,
      where: item.team_id == ^team_id
    )
  end

  defp maybe_filter_projects_by_user(query, nil), do: query
  defp maybe_filter_projects_by_user(query, team_id) do
    from(project in query,
      left_join: team in assoc(project, :team),
      left_join: user in assoc(team, :users),
      where: user.id == ^team_id
    )
  end

  def base_projects_query(), do: from p in Project

  @doc "Gets a single project."
  def get_project!(id, opts) do
    RepoHandler.get!(Project, id, opts)
  end

  @doc "Creates a project."
  def create_project(attrs \\ %{}, opts)
  def create_project(attrs, opts) do
    %Project{}
    |> Project.changeset(attrs)
    |> RepoHandler.insert(opts)
    |> Subscription.broadcast_result(opts)
  end

  def create_project_structs(attrs_list) do
    Enum.map(attrs_list, fn(attrs) ->
      {:ok, project} = create_project_struct(attrs)
      project
    end)
  end

  def create_project_struct(attrs \\ %{}) do
    %Project{}
    |> Project.api_changeset(attrs)
    |> Ecto.Changeset.apply_action(:insert)
  end

  @doc "Updates a project."
  def update_project(%Project{} = project, attrs, opts) do
    project
    |> Project.changeset(attrs)
    |> RepoHandler.update(opts)
    |> Subscription.broadcast_result(opts)
  end

  @doc "Deletes a project."
  def delete_project(%Project{} = project, opts) do
    RepoHandler.delete(project, opts)
    |> Subscription.broadcast_result(opts)
  end

  @doc "Returns an `%Ecto.Changeset{}` for tracking project changes."
  def change_project(%Project{} = project, attrs \\ %{}) do
    Project.changeset(project, attrs)
  end

  def override_base_url(%Project{id: id, base_url: _url} = project, overrides) do
    overrides
    |> Enum.filter(fn(o) -> o.project_id == id end)
    |> case do
      overrides when overrides == [] -> project
      [%{url: url}] -> Map.put(project, :base_url, url)
    end
  end
end
