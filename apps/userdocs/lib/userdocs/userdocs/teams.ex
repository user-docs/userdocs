defmodule Userdocs.Teams do
  @moduledoc """
  The Users context.
  """

  require Logger
  import Ecto.Query, warn: false
  alias Userdocs.RepoHandler
  alias Userdocs.Repo
  alias Userdocs.RepoHandler
  alias Schemas.Teams.Team
  alias Userdocs.Subscription

  @doc "Returns the list of teams."
  def list_teams(opts) do
    filters = Map.get(opts, :filters, [])
    base_teams_query()
    |> maybe_filter_team_by_user(filters[:user_id])
    |> maybe_filter_by_ids(filters[:ids])
    |> RepoHandler.all(opts)
  end

  defp maybe_filter_team_by_user(query, nil), do: query
  defp maybe_filter_team_by_user(query, user_id) do
    from(team in query,
      left_join: team_user in assoc(team, :team_users),
      left_join: user in assoc(team_user, :user),
      where: team_user.user_id == ^user_id
    )
  end

  defp maybe_filter_by_ids(query, nil), do: query
  defp maybe_filter_by_ids(query, ids) do
    from(item in query,
    where: item.id in ^ids
  )
  end

  defp base_teams_query(), do: from(teams in Team)

  @doc "Gets a single team."
  def get_team!(id, opts) do
    RepoHandler.get!(Team, id, opts)
  end

  def get_element_team!(id, opts) do
    from(t in Team, as: :teams)
    |> join(:left, [teams: t], pr in assoc(t, :projects), as: :projects)
    |> join(:left, [projects: pr], pa in assoc(pr, :pages), as: :pages)
    |> join(:left, [pages: pa], e in assoc(pa, :elements), as: :elements)
    |> where([elements: e], e.id == ^id)
    |> RepoHandler.one!(opts)
  end

  def get_screenshot_team!(id, opts) do
    from(t in Team, as: :teams)
    |> join(:left, [teams: t], p in assoc(t, :projects), as: :projects)
    |> join(:left, [projects: p], pa in assoc(p, :pages), as: :pages)
    |> join(:left, [pages: pa], s in assoc(pa, :screenshots), as: :screenshots)
    |> where([screenshots: s], s.id == ^id)
    |> RepoHandler.one!(opts)
  end

  def get_step_team!(id, opts) do
    from(t in Team, as: :teams)
    |> join(:left, [teams: t], p in assoc(t, :projects), as: :projects)
    |> join(:left, [projects: p], v in assoc(p, :processes), as: :processes)
    |> join(:left, [processes: p], s in assoc(p, :steps), as: :step)
    |> where([step: s], s.id == ^id)
    |> RepoHandler.one!(opts)
  end

  def get_page_team!(page_id, opts) do
    from(t in Team, as: :teams)
    |> join(:left, [teams: t], pr in assoc(t, :projects), as: :projects)
    |> join(:left, [projects: pr], pa in assoc(pr, :pages), as: :pages)
    |> where([pages: p], p.id == ^page_id)
    |> RepoHandler.one!(opts)
  end

  def get_annotation_team!(id, opts) do
    from(t in Team, as: :teams)
    |> join(:left, [teams: t], pr in assoc(t, :projects), as: :projects)
    |> join(:left, [projects: pr], pa in assoc(pr, :pages), as: :pages)
    |> join(:left, [pages: pa], a in assoc(pa, :annotations), as: :annotations)
    |> where([annotations: a], a.id == ^id)
    |> RepoHandler.one!(opts)
  end

  def get_process_team!(id, opts) do
    from(t in Team, as: :teams)
    |> join(:left, [teams: t], p in assoc(t, :projects), as: :projects)
    |> join(:left, [projects: p], v in assoc(p, :processes), as: :processes)
    |> where([processes: p], p.id == ^id)
    |> RepoHandler.one!(opts)
  end

  def get_project_team!(id, opts) do
    from(t in Team, as: :teams)
    |> join(:left, [teams: t], p in assoc(t, :projects), as: :projects)
    |> where([projects: p], p.id == ^id)
    |> RepoHandler.one!(opts)
  end

  def list_user_teams(id) do
    from(t in Team, as: :teams)
    |> join(:left, [teams: t], tu in assoc(t, :team_users), as: :team_users)
    |> join(:left, [team_users: tu], u in assoc(tu, :user), as: :users)
    |> where([users: u], u.id == ^id)
    |> Repo.all()
  end

  def search_team_name(search_term) do
    wildcard_search = "%#{search_term}%"

    from(t in Team, as: :teams)
    |> where([teams: t], ilike(t.name, ^wildcard_search))
    |> Repo.all()
  end

  @doc "Creates a team."
  def create_team(attrs \\ %{}, opts)
  def create_team(attrs, opts) do
    %Team{}
    |> Team.changeset(attrs)
    |> RepoHandler.insert(opts)
    |> case do
      {:ok, team} = result ->
        maybe_broadcast_team(result, "create", channels(team, opts[:broadcast]), opts[:broadcast])
      result -> result
    end
  end

  def create_team_structs(attrs_list) do
    Enum.map(attrs_list, fn(attrs) ->
      {:ok, team} = create_team_struct(attrs)
      team
    end)
  end

  def create_team_struct(attrs \\ %{}) do
    %Team{}
    |> Team.api_changeset(attrs)
    |> Ecto.Changeset.apply_action(:insert)
  end

  @doc "Updates a team."
  #TODO this could be more elegant, probably
  def update_team(%Team{} = team, %{"users" => _users} = attrs, opts) do
    users =
      User
      |> where([user], user.id in ^attrs["users"])
      |> Repo.all()

      attrs = Map.put(attrs, "users", users)

    team
    |> Team.changeset(attrs)
    |> RepoHandler.update(opts)
    |> maybe_broadcast_team("update", channels(team, opts[:broadcast]), opts[:broadcast])
  end
  def update_team(%Team{} = team, attrs, opts) do
    team
    |> Team.changeset(attrs)
    |> RepoHandler.update(opts)
    |> maybe_broadcast_team("update", channels(team, opts[:broadcast]), opts[:broadcast])
  end

  @doc "Deletes a team."
  def delete_team(%Team{} = team, opts) do
    channels = channels(team, opts[:broadcast])
    RepoHandler.delete(team, opts)
    |> maybe_broadcast_team("delete", channels, opts[:broadcast])
  end

  @doc "Returns an `%Ecto.Changeset{}` for tracking team changes."
  def change_team(%Team{} = team, attrs \\ %{}) do
    Team.changeset(team, attrs)
  end

  @doc "Broadcasts a team to the team it belongs to"
  def maybe_broadcast_team({:error, _} = state, _, _, _), do: state
  def maybe_broadcast_team({:ok, %Team{} = team}, action, channels, true) do
    payload = %{type: "Schemas.Teams.Team", attrs: team}
    channels
    |> Enum.each(fn channel ->
      Logger.debug("#{__MODULE__} broadcasting a Team struct on #{channel}")
      Subscription.broadcast(channel, action, payload)
    end)

    {:ok, team}
  end
  def maybe_broadcast_team(state, _, _, _), do: state

  def channels(%Team{id: id}, true) do
    Userdocs.Users.list_users(%{filters: %{team_id: id}, context: %{repo: Userdocs.Repo}})
    |> Enum.map(fn user -> "user:#{user.id}" end)
  end
  def channels(_, _), do: []
end
