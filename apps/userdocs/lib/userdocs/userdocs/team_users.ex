defmodule Userdocs.TeamUsers do
  @moduledoc "The Team Users Context"
  require Logger
  import Ecto.Query, warn: false
  alias Userdocs.RepoHandler
  alias Userdocs.Requests
  alias Schemas.Teams.TeamUser
  @url Application.compile_env(:userdocs_desktop, :host_url) <> "/api/team_users"

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
    from(tu in query, as: :team_users_1)
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
    |> case do
      {:ok, team} = result ->
        maybe_broadcast_team_user(result, "create", channels(team, opts[:broadcast]), opts[:broadcast])
      result -> result
    end
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
    |> maybe_broadcast_team_user("update", channels(team_user, opts[:broadcast]), opts[:broadcast])
  end

  @doc "Deletes a team_user."
  def delete_team_user(id, %{access_token: access_token, context: %{repo: Client}}) do
    request = Requests.build_delete(@url, id)
    Requests.send(request, access_token, nil)
  end
  def delete_team_user(%TeamUser{} = team_user, opts) do
    channels = channels(team_user, opts[:broadcast])
    RepoHandler.delete(team_user, opts)
    |> maybe_broadcast_team_user("delete", channels, opts[:broadcast])
  end

  @doc "Returns an `%Ecto.Changeset{}` for tracking team_user changes."
  def change_team_user(%TeamUser{} = team_user, attrs \\ %{}) do
    TeamUser.changeset(team_user, attrs)
  end

  @doc "Broadcasts a team_user to the users that have acess to it."
  def maybe_broadcast_team_user({:error, _} = state, _, _, _), do: state
  def maybe_broadcast_team_user({:ok, %TeamUser{} = team_user}, action, channels, true) do
    payload = %{type: "Schemas.Teams.TeamUser", attrs: team_user}
    channels
    |> Enum.each(fn channel ->
      Logger.debug("#{__MODULE__} broadcasting a TeamUser struct on #{channel}")
      UserdocsWeb.Endpoint.broadcast(channel, action, payload)
    end)

    {:ok, team_user}
  end
  def maybe_broadcast_team_user(state, _, _, _), do: state

  def channels(%TeamUser{team_id: team_id}, true) do
    Userdocs.Users.list_users(%{filters: %{team_id: team_id}, context: %{repo: Userdocs.Repo}})
    |> Enum.map(fn user -> "user:#{user.id}" end)
  end
  def channels(_, _), do: []
end
