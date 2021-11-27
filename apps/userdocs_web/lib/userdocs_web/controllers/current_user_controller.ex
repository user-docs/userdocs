defmodule UserdocsWeb.CurrentUserController do
  use UserdocsWeb, :controller
  alias Userdocs.Users

  def get(conn, _params) do
    user = conn.assigns[:current_user]
    if user do # passing Bearer token
      user = Users.get_user_and_configs!(user.id)
      conn
      |> send_resp(:ok, Jason.encode!(%{user: user, status: "ok", message: "session created"}))
    end
  end
end
