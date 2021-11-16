defmodule Userdocs.Teams do
  @moduledoc """
  The Users context.
  """

  require Logger
  import Ecto.Query, warn: false
  alias Userdocs.Repo

  alias Schemas.Teams.Team

  @doc "Returns the list of teams."
  def list_teams(opts \\ %{}) do
    filters = Map.get(opts, :filters, [])
    base_teams_query()
    |> maybe_filter_team_by_user(filters[:user_id])
    |> maybe_filter_by_ids(filters[:ids])
    |> Repo.all()
  end

  defp maybe_filter_team_by_user(query, nil), do: query
  defp maybe_filter_team_by_user(query, user_id) do
    from(team in query,
    left_join: team_user in TeamUser, on: team.id == team_user.team_id,
    left_join: user in User, on: user.id == team_user.user_id,
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
  def get_team!(id, _opts \\ %{}) do
    base_team_query(id)
    |> Repo.one!()
  end

  defp base_team_query(id) do
    from(team in Team, where: team.id == ^id)
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
  def create_team(attrs \\ %{}) do
    %Team{}
    |> Team.changeset(attrs)
    |> Repo.insert()
  end

  def create_team_struct(attrs \\ %{}) do
    %Team{}
    |> Team.api_changeset(attrs)
    |> Ecto.Changeset.apply_action(:insert)
  end

  @doc "Updates a team."
  #TODO this could be more elegant, probably
  def update_team(%Team{} = team, %{"users" => _users} = attrs) do
    users =
      User
      |> where([user], user.id in ^attrs["users"])
      |> Repo.all()

      attrs = Map.put(attrs, "users", users)

    team
    |> Team.changeset(attrs)
    |> Repo.update()
  end
  def update_team(%Team{} = team, attrs) do
    team
    |> Team.changeset(attrs)
    |> Repo.update()
  end

  @doc "Deletes a team."
  def delete_team(%Team{} = team) do
    Repo.delete(team)
  end

  @doc "Returns an `%Ecto.Changeset{}` for tracking team changes."
  def change_team(%Team{} = team, attrs \\ %{}) do
    Team.changeset(team, attrs)
  end
end
