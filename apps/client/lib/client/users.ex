defmodule Client.Users do
  @moduledoc """
  The Users context.
  """
  require Logger
  alias Client.Requests
  alias Userdocs.Users
  alias Schemas.Users.User
  @url Application.compile_env(:userdocs_desktop, :host_url) <> "/api/users"
  @invite_url Application.compile_env(:userdocs_desktop, :host_url) <> "/api/invite"

  @doc "Returns the list of users."
  def list_users(%{access_token: access_token} = opts) do
    params = opts |> Map.take([:filters])
    request_fun = Requests.build_get(@url)
    {:ok, %{"data" => user_attrs}} = Requests.send(request_fun, access_token, params)
    Users.create_user_structs(user_attrs)
  end

  @doc "Creates a user."
  def create_user(attrs, %{access_token: access_token}) do
    params = %{user: attrs}
    request_fun = Requests.build_create(@url)
    {:ok, %{"data" => user_attrs}} = Requests.send(request_fun, access_token, params)
    {:ok, Users.create_user_struct(user_attrs)}
  end

  @doc "Invites a user."
  def invite_user(attrs, %{access_token: access_token}) do
    request_fun = Requests.build_create(@invite_url)
    Requests.send(request_fun, access_token, attrs)
  end

  @doc "Changes user options, not credentials"
  def update_user_options(%User{} = user, attrs, %{access_token: access_token}) do
    request_fun = Requests.build_update(@url, user.id)
    {:ok, %{"data" => user_attrs}} = Requests.send(request_fun, access_token, %{user: attrs})
    Users.create_user_struct(user_attrs)
  end

  @doc "Changes user selectsions for team, project, etc"
  def update_user_selections(%User{} = user, attrs, %{access_token: access_token}) do
    request_fun = Requests.build_update(@url, user.id)
    {:ok, %{"data" => user_attrs}} = Requests.send(request_fun, access_token, %{user: attrs})
    Users.create_user_struct(user_attrs)
  end
end
