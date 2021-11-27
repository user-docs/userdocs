defmodule Userdocs.TeamUsers do
  @moduledoc "The Team Users Context"
  require Logger
  import Ecto.Query, warn: false
  alias Userdocs.RepoHandler
  alias Userdocs.Requests
  alias Schemas.Teams.TeamUser
  @url Application.get_env(:userdocs_desktop, :host_url) <> "/api/team_users"

  @doc ""
  def list_team_users(%{access_token: access_token, context: %{repo: Client}} = opts) do
    params = opts |> Map.take([:filters])
    request_fun = Requests.build_get(@url)
    {:ok, %{"data" => team_user_attrs}} = Requests.send(request_fun, access_token, params)
    create_team_user_structs(team_user_attrs)
  end
  def list_team_users(opts) do
    filters = Map.get(opts, :filters, [])
    base_team_users_query()
    |> maybe_filter_by_user(filters[:user_id])
    |> maybe_filter_by_opposite_user(filters[:opposite_user_id])
    |> RepoHandler.all(opts)
  end

  defp maybe_filter_by_user(query, nil), do: query
  defp maybe_filter_by_user(query, user_id) do
    from(team_user in query,
      where: team_user.user_id == ^user_id
    )
  end

  defp maybe_filter_by_opposite_user(query, nil), do: query
  defp maybe_filter_by_opposite_user(query, user_id) do
    from(tu in TeamUser, as: :team_users_1)
    |> join(:left, [team_users_1: tu], t in assoc(tu, :team), as: :teams)
    |> join(:left, [teams: t], tu in assoc(t, :team_users), as: :team_users_2)
    |> where([team_users_2: tu], tu.user_id == ^user_id)
  end

  defp base_team_users_query(), do: from(team_users in TeamUser)

  @doc " Gets a single team_user."
  def get_team_user!(id, opts)do
    RepoHandler.get!(TeamUser, id, opts)
  end

  @doc "Creates a team_user."
  def create_team_user(attrs \\ %{}, opts) do
    %TeamUser{}
    |> TeamUser.changeset(attrs)
    |> RepoHandler.insert(opts)
  end

  def create_team_user_structs(attrs_list) do
    Enum.map(attrs_list, fn(attrs) ->
      {:ok, team_user} = create_team_user_struct(attrs)
      team_user
    end)
  end

  def create_team_user_struct(attrs \\ %{}) do
    %TeamUser{}
    |> TeamUser.api_changeset(attrs)
    |> Ecto.Changeset.apply_action(:insert)
  end

  @doc "Updates a team_user."
  def update_team_user(%TeamUser{} = team_user, attrs, opts) do
    team_user
    |> TeamUser.changeset(attrs)
    |> RepoHandler.update(opts)
  end

  @doc "Deletes a team_user."
  def delete_team_user(id, %{access_token: access_token, context: %{repo: Client}}) do
    request = Requests.build_delete(@url, id)
    Requests.send(request, access_token, nil)
  end
  def delete_team_user(%TeamUser{} = team_user, opts) do
    RepoHandler.delete(team_user, opts)
  end

  @doc "Returns an `%Ecto.Changeset{}` for tracking team_user changes."
  def change_team_user(%TeamUser{} = team_user, attrs \\ %{}) do
    TeamUser.changeset(team_user, attrs)
  end
end
