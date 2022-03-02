defmodule UserdocsWeb.API.TeamUserController do
  use UserdocsWeb, :controller
  alias Schemas.Teams.TeamUser
  alias Userdocs.TeamUsers
  alias UserdocsWeb.API.Helpers
  action_fallback UserdocsWeb.FallbackController
  @opts %{context: %{repo: Userdocs.Repo}, broadcast: true}

  def index(conn, params) do
    opts = Helpers.parse_params(params, @opts)
    team_users = TeamUsers.list_team_users(opts)
    render(conn, "index.json", team_users: team_users)
  end

  def delete(conn, %{"id" => id}) do
    team_user = TeamUsers.get_team_user!(id, @opts)

    with {:ok, %TeamUser{}} <- TeamUsers.delete_team_user(team_user, @opts) do
      send_resp(conn, :no_content, "")
    end
  end
end
