defmodule Userdocs.Users do
  @moduledoc """
  The Users context.
  """

  require Logger
  import Ecto.Query, warn: false
  alias Userdocs.Repo

  alias Schemas.Users.User

  @behaviour Bodyguard.Policy
  def authorize(:get_user!, %{id: user_id} = _current_user, %{id: user_id} = _user), do: :ok
  def authorize(:get_user!, _current_user, _user), do: :error

  @doc "Returns the list of users."
  def list_users(opts \\ %{}) when is_map(opts) do
    filters = Map.get(opts, :filters, [])
    base_users_query()
    |> maybe_filter_by_team(filters[:team_id])
    |> Repo.all()
  end

  defp maybe_filter_by_team(query, nil), do: query
  defp maybe_filter_by_team(query, team_id) do
    from(user in query,
    left_join: team_user in TeamUser, on: user.id == team_user.user_id,
    left_join: team in Team, on: team.id == team_user.team_id,
    where: team_user.team_id == ^team_id
  )
  end

  defp base_users_query(), do: from(users in User)

  @doc "Gets a single user."
  def get_user!(id, _opts \\ %{}) do
    base_user_query(id)
    |> Repo.one!()
  end

  def get_user_by_email!(email) do
    from(user in User, where: user.email == ^email)
    |> Repo.one!()
  end

  defp base_user_query(id) do
    from(user in User, where: user.id == ^id)
  end

  alias Schemas.Teams.Team
  alias Schemas.Teams.TeamUser
  alias Schemas.Projects.Project

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
  def create_user(attrs \\ %{}) do
    %User{}
    |> User.changeset(attrs)
    |> Repo.insert()
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

  def update_user_options(%User{} = user, attrs) do
    user
    |> User.change_options(attrs)
    |> Repo.update()
  end

  def update_user_selections(%User{} = user, attrs, %{context: %{repo: repo}} = opts)
  when repo in [Userdocs.LocalRepo, Userdocs.Repo] do
    {:ok, updated_user} =
      user
      |> User.change_selections(attrs)
      |> Repo.update()

    {:ok, get_user_and_configs!(updated_user.id)}
    |> maybe_broadcast_user("update", "user:#{user.id}", opts[:broadcast])
  end
  def update_user_selections(%User{} = user, attrs, %{context: %{repo: Client}} = opts) do
    {:ok, payload} = %{
      module: "Userdocs.Users",
      function: "update_user_selections",
      struct_function: "create_prepared_user",
      type: "Schemas.Users.User",
      fields: user,
      attrs: attrs
    } |> Jason.encode()

    Client.update(payload)
  end

  @doc "Deletes a user."
  def delete_user(%User{} = user) do
    Repo.delete(user)
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

  def invite_user(%User{} = user, attrs \\ %{}) do
    User.invite_changeset(user, attrs)
    |> Repo.insert()
  end
  """
  def send_email_invitation(attrs) do
    attrs
    |> Email.cast_onboarding()
    |> Email.onboarding()
    |> Email.send()
  end
  """
  def maybe_broadcast_user({:error, _} = state, _, _, _), do: state
  def maybe_broadcast_user({:ok, %User{} = user}, action, channel, true) do
    Logger.debug("#{__MODULE__} broadcasting a User struct")
    payload = %{type: "Schemas.Users.User", attrs: user}
    UserdocsWeb.Endpoint.broadcast(channel, action, payload)
    {:ok, user}
  end
  def maybe_broadcast_user(state, _, _, _), do: state

  alias Schemas.Users.Override
  def change_override(%Override{} = override, attrs \\ %{}) do
    Override.changeset(override, attrs)
  end

  alias Schemas.Users.LocalOptions
  def change_local_options(%LocalOptions{} = local_options, attrs \\ %{}) do
    LocalOptions.changeset(local_options, attrs)
  end

  def update_local_options(%LocalOptions{} = local_options, attrs \\ %{}) do
    local_options
    |> LocalOptions.changeset(attrs)
    |> Ecto.Changeset.apply_action(:update)
  end
end
