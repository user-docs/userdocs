defmodule Userdocs.Users do
  @moduledoc """
  The Users context.
  """
  import Ecto.Query, warn: false
  require Logger
  alias Schemas.Users.User
  alias Userdocs.Repo
  alias Userdocs.RepoHandler
  alias Userdocs.Requests
  alias Userdocs.Email
  @url Application.compile_env(:userdocs_desktop, :host_url) <> "/api/users"

  @behaviour Bodyguard.Policy
  def authorize(:get_user!, %{id: user_id} = _current_user, %{id: user_id} = _user), do: :ok
  def authorize(:get_user!, _current_user, _user), do: :error

  @doc "Returns the list of users."
  def list_users(%{access_token: access_token, context: %{repo: Client}} = opts) do
    params = opts |> Map.take([:filters])
    request_fun = Requests.build_get(@url)
    {:ok, %{"data" => user_attrs}} = Requests.send(request_fun, access_token, params)
    create_user_structs(user_attrs)
  end
  def list_users(opts) do
    filters = Map.get(opts, :filters, [])
    base_users_query()
    |> maybe_filter_by_team(filters[:team_id])
    |> maybe_filter_by_user(filters[:user_id])
    |> RepoHandler.all(opts)
  end

  defp maybe_filter_by_team(query, nil), do: query
  defp maybe_filter_by_team(query, team_id) do
    from(u in query, as: :user)
    |> join(:left, [user: u], tu in assoc(u, :team_users), as: :team_users)
    |> join(:left, [team_users: tu], t in assoc(tu, :team), as: :team)
    |> where([team: t], t.id == ^team_id)
  end

  defp maybe_filter_by_user(query, nil), do: query
  defp maybe_filter_by_user(query, id) do
    from(u in query, as: :user_1)
    |> join(:left, [user_1: u], tu in assoc(u, :team_users), as: :team_users_1)
    |> join(:left, [team_users_1: tu], t in assoc(tu, :team), as: :team)
    |> join(:left, [team: t], tu in assoc(t, :team_users), as: :team_users_2)
    |> join(:left, [team_users_2: tu], u in assoc(tu, :user), as: :user_2)
    |> where([user_2: u], u.id == ^id)
  end


  defp base_users_query(), do: from(users in User)

  @doc "Gets a single user."
  def get_user!(id, opts) do
    base_user_query(id)
    |> RepoHandler.get!(id, opts)
  end

  def get_user_by_email!(email) do
    from(user in User, where: user.email == ^email)
    |> Repo.one!()
  end

  defp base_user_query(id) do
    from(user in User, where: user.id == ^id)
  end

  def prepare_user(user_id) do
    get_user_and_configs!(user_id)
  end

  def create_prepared_user(attrs) do
    %User{}
    |> User.prepare_changeset(attrs)
    |> Ecto.Changeset.apply_action(:insert)
  end

  def create_test_user(attrs \\ %{}) do
    %User{}
    |> User.test_fixture_changeset(attrs)
    |> Repo.insert()
  end

  def get_user_and_configs!(id) do
    User
    |> where([u], u.id == ^id)
    |> join(:left, [u, tu], tu in assoc(u, :team_users))
    |> join(:left, [u, tu, t], t in assoc(tu, :team))
    |> join(:left, [u, tu, t, p], p in assoc(t, :projects))
    |> join(:left, [u, tu, t, p, sp], sp in assoc(u, :selected_project))
    |> join(:left, [u, tu, t, p, sp, st], st in assoc(u, :selected_team))
    |> preload([u, tu, t, p, sp, st], [team_users: tu])
    |> preload([u, tu, t, p, sp, st], [selected_project: sp])
    |> preload([u, tu, t, p, sp, st], [selected_team: st])
    |> preload([u, tu, t, p, sp, st], [teams: t])
    |> preload([u, tu, t, p, sp, st], [team_users: {tu, team: t}])
    |> preload([u, tu, t, p, sp, st], [team_users: {tu, team: {t, projects: p}}])
    |> Repo.one!()
  end

  @doc "Creates a user."
  def create_user(attrs \\ %{}, opts)
  def create_user(attrs, %{access_token: access_token, context: %{repo: Client}}) do
    params = %{user: attrs}
    request_fun = Requests.build_create(@url)
    {:ok, %{"data" => user_attrs}} = Requests.send(request_fun, access_token, params)
    {:ok, create_user_struct(user_attrs)}
  end
  def create_user(attrs, opts) do
    %User{}
    |> User.changeset(attrs)
    |> Repo.insert()
    |> case do
      {:ok, user} = result ->
        maybe_broadcast_user(result, "create", channels(user, opts[:broadcast]), opts[:broadcast])
      result -> result
    end
  end

  def invite_user(%User{} = invited_by, attrs \\ %{}, opts) do
    %User{}
    |> User.invite_changeset(invited_by, attrs)
    |> Repo.insert()
    |> case do
      {:ok, user} = result ->
        maybe_broadcast_user(result, "create", channels(user, opts[:broadcast]), opts[:broadcast])
      result -> result
    end
  end

  def send_email_invitation(attrs) do
    attrs
    |> Email.cast_onboarding()
    |> Email.onboarding()
    |> Email.send()
  end

  def create_user_structs(attrs_list) do
    Enum.map(attrs_list, fn(attrs) ->
      {:ok, user} = create_user_struct(attrs)
      user
    end)
  end

  def create_user_struct(attrs \\ %{}) do
    %User{}
    |> User.prepare_changeset(attrs)
    |> Ecto.Changeset.apply_action(:insert)
  end

  def validate_signup(attrs) do
    changeset = User.signup_changeset(%User{}, attrs)
    case Ecto.Changeset.apply_action(changeset, :insert) do
      {:error, inner_changeset} -> {:error, inner_changeset}
      {:ok, _user} -> {:ok, changeset}
    end
  end

  def validate_signin(attrs) do
    changeset = User.signin_changeset(%User{}, attrs)
    case Ecto.Changeset.apply_action(changeset, :insert) do
      {:error, inner_changeset} -> {:error, inner_changeset}
      {:ok, _user} -> {:ok, changeset}
    end
  end

  @doc "Updates a user."
  def update_user(%User{} = user, attrs) do
    user
    |> User.changeset(attrs)
    |> Repo.update()
  end

  def update_user_options(%User{} = user, attrs, %{access_token: access_token, context: %{repo: Client}}) do
    request_fun = Requests.build_update(@url, user.id)
    {:ok, %{"data" => user_attrs}} = Requests.send(request_fun, access_token, %{user: attrs})
    create_user_struct(user_attrs)
  end
  def update_user_options(%User{} = user, attrs, opts) do
    user
    |> User.change_options(attrs)
    |> RepoHandler.update(opts)
    |> maybe_broadcast_user("update", channels(user, opts[:broadcast]), opts[:broadcast])
  end

  def update_user_selections(%User{} = user, attrs, %{access_token: access_token, context: %{repo: Client}}) do
    request_fun = Requests.build_update(@url, user.id)
    {:ok, %{"data" => user_attrs}} = Requests.send(request_fun, access_token, %{user: attrs})
    create_user_struct(user_attrs)
  end
  def update_user_selections(%User{} = user, attrs, %{context: %{repo: repo}} = opts)
  when repo in [Userdocs.LocalRepo, Userdocs.Repo] do
    {:ok, updated_user} =
      user
      |> User.change_options(attrs)
      |> Repo.update()

    {:ok, get_user_and_configs!(updated_user.id)}
    |> maybe_broadcast_user("update", "user:#{user.id}", opts[:broadcast])
  end

  @doc "Deletes a user."
  def delete_user(%User{} = user, opts) do
    channels = channels(user, opts[:broadcast])
    Repo.delete(user)
    |> maybe_broadcast_user("delete", channels, opts[:broadcast])
  end

  @doc "Returns an `%Ecto.Changeset{}` for tracking user changes."
  def change_user(%User{} = user, attrs \\ %{}) do
    User.changeset(user, attrs)
  end

  def change_user_options(%User{} = user, attrs \\ %{}) do
    User.change_options(user, attrs)
  end

  def change_user_signup(%User{} = user, attrs \\ %{}) do
    User.signup_changeset(user, attrs)
  end

  def change_user_login(%User{} = user, attrs \\ %{}) do
    User.login_changeset(user, attrs)
  end

  def change_user_invite(%User{} = user, %User{} = invited_by, attrs \\ %{}) do
    User.invite_changeset(user, invited_by, attrs)
  end
  """
  def send_email_invitation(attrs) do
    attrs
    |> Email.cast_onboarding()
    |> Email.onboarding()
    |> Email.send()
  end
  """
  @doc "Broadcasts a element to the team it belongs to"
  def maybe_broadcast_user({:error, _} = state, _, _, _), do: state
  def maybe_broadcast_user({:ok, %User{} = user}, action, channels, true) do
    broadcast_user(user, action, channels)
    {:ok, user}
  end
  def maybe_broadcast_user(state, _, _, _), do: state

  def broadcast_user(user, action, channels) do
    payload = %{type: "Schemas.Users.User", attrs: user}
    channels
    |> Enum.each(fn channel ->
      Logger.debug("#{__MODULE__} broadcasting a User struct on #{channel}")
      UserdocsWeb.Endpoint.broadcast(channel, action, payload)
    end)
  end


  def channels(%User{id: id}, true) do
    Userdocs.Teams.list_user_teams(id)
    |> Enum.map(fn team -> "team:#{team.id}" end)
  end
  def channels(_, _), do: []

  alias Schemas.Users.Override
  def change_override(%Override{} = override, attrs \\ %{}) do
    Override.changeset(override, attrs)
  end
end
