defmodule Userdocs.Teams do
  @moduledoc """
  The Users context.
  """

  require Logger
  import Ecto.Query, warn: false
  alias Userdocs.RepoHandler
  alias Userdocs.Repo
  alias Userdocs.Requests
  alias Schemas.Teams.Team
  @url Application.get_env(:userdocs_desktop, :host_url) <> "/api/teams"

  @doc "Returns the list of teams."
  def list_teams(%{access_token: access_token, context: %{repo: Client}} = opts) do
    params = opts |> Map.take([:filters])
    request_fun = Requests.build_get(@url)
    {:ok, %{"data" => team_attrs}} = Requests.send(request_fun, access_token, params)
    create_team_structs(team_attrs)
  end
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

  def get_element_team!(id) do
    from(t in Team, as: :teams)
    |> join(:left, [teams: t], pr in assoc(t, :projects), as: :projects)
    |> join(:left, [projects: pr], pa in assoc(pr, :pages), as: :pages)
    |> join(:left, [pages: pa], e in assoc(pa, :elements), as: :elements)
    |> where([elements: e], e.id == ^id)
    |> Repo.one!()
  end

  def get_screenshot_team!(id) do
    from(t in Team, as: :teams)
    |> join(:left, [teams: t], p in assoc(t, :projects), as: :projects)
    |> join(:left, [projects: p], v in assoc(p, :processes), as: :processes)
    |> join(:left, [processes: p], s in assoc(p, :steps), as: :steps)
    |> join(:left, [steps: s], si in assoc(s, :screenshot), as: :screenshot)
    |> where([screenshot: s], s.id == ^id)
    |> Repo.one!()
  end

  def get_step_team!(id) do
    from(t in Team, as: :teams)
    |> join(:left, [teams: t], p in assoc(t, :projects), as: :projects)
    |> join(:left, [projects: p], v in assoc(p, :processes), as: :processes)
    |> join(:left, [processes: p], s in assoc(p, :steps), as: :step)
    |> where([step: s], s.id == ^id)
    |> Repo.one!()
  end

  def get_page_team(id) do
    from(t in Team, as: :teams)
    |> join(:left, [teams: t], pr in assoc(t, :projects), as: :projects)
    |> join(:left, [projects: pr], pa in assoc(pr, :pages), as: :pages)
    |> where([pages: pa], pa.id == ^id)
    |> Repo.one!()
  end

  def get_annotation_team(id) do
    from(t in Team, as: :teams)
    |> join(:left, [teams: t], pr in assoc(t, :projects), as: :projects)
    |> join(:left, [projects: pr], pa in assoc(pr, :pages), as: :pages)
    |> join(:left, [pages: pa], a in assoc(pa, :annotations), as: :annotations)
    |> where([annotations: a], a.id == ^id)
    |> Repo.one!()
  end

  def search_team_name(search_term) do
    wildcard_search = "%#{search_term}%"

    from(t in Team, as: :teams)
    |> where([teams: t], ilike(t.name, ^wildcard_search))
    |> Repo.all()
  end

  @doc "Creates a team."
  def create_team(attrs \\ %{}, opts)
  def create_team(attrs, %{access_token: access_token, context: %{repo: Client}}) do
    params = %{team: attrs}
    request_fun = Requests.build_create(@url)
    {:ok, %{"data" => team_attrs}} = Requests.send(request_fun, access_token, params)
    create_team_struct(team_attrs)
  end
  def create_team(attrs, opts) do
    %Team{}
    |> Team.changeset(attrs)
    |> Repo.insert()
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
  def update_team(%Team{} = team, attrs, %{access_token: access_token, context: %{repo: Client}}) do
    request_fun = Requests.build_update(@url, team.id)
    {:ok, %{"data" => team_attrs}} = Requests.send(request_fun, access_token, %{team: attrs})
    create_team_struct(team_attrs)
  end
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
  end
  def update_team(%Team{} = team, attrs, opts) do
    team
    |> Team.changeset(attrs)
    |> RepoHandler.update(opts)
  end

  @doc "Deletes a team."
  def delete_team(id, %{access_token: access_token, context: %{repo: Client}}) do
    request = Requests.build_delete(@url, id)
    Requests.send(request, access_token, nil)
  end
  def delete_team(%Team{} = team, opts) do
    RepoHandler.delete(team, opts)
  end

  @doc "Returns an `%Ecto.Changeset{}` for tracking team changes."
  def change_team(%Team{} = team, attrs \\ %{}) do
    Team.changeset(team, attrs)
  end
end
