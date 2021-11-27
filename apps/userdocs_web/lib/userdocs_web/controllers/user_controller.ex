defmodule UserdocsWeb.API.UserController do
  use UserdocsWeb, :controller

  alias Userdocs.Users
  alias Schemas.Users.User
  alias UserdocsWeb.API.Helpers
  action_fallback UserdocsWeb.FallbackController
  @opts %{broadcast: true, context: %{repo: Userdocs.Repo}}

  def index(conn, params) do
    opts = Helpers.parse_params(params, @opts)
    users = Users.list_users(opts)
    render(conn, "index.json", users: users)
  end

  def show(conn, %{"id" => id}) do
    user = Users.get_user!(id, @opts)
    render(conn, "show.json", user: user)
  end

  def update(conn, %{"id" => id, "user" => user_params}) do
    user = Users.get_user_and_configs!(id)

    with {:ok, %User{} = user} <- Users.update_user_options(user, user_params, @opts) do
      render(conn, "show.json", user: user)
    end
  end
end