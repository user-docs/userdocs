defmodule UserdocsWeb.API.InvitationController do
  use UserdocsWeb, :controller
  require Logger
  alias Schemas.Users.User
  alias Schemas.Teams.Team
  alias Userdocs.Users
  alias Userdocs.Teams
  alias Userdocs.TeamUsers
  alias UserdocsWeb.API.TeamView
  @opts %{context: %{repo: Userdocs.Repo}}

  def create(conn, %{"user" => %{"invited_by_id" => id} = user_params, "team_id" => team_id, "current_team_id" => current_team_id}) do
    invited_by = Users.get_user!(id, @opts)
    team = Teams.get_team!(team_id, @opts)
    channel = "team:#{current_team_id}"

    with {:ok, %User{} = user} <- Users.invite_user(invited_by, user_params) do
      signed_token =
        conn
        |> Pow.Plug.put_config(otp_app: :userdocs_web)
        |> PowInvitation.Plug.sign_invitation_token(user)

      %{
        url: UserdocsWeb.Endpoint.url <> Routes.pow_invitation_invitation_path(conn, :edit, signed_token),
        user: user,
        invited_by: invited_by,
      }
      |> Users.send_email_invitation()

      {:ok, team_user} = TeamUsers.create_team_user(%{user_id: user.id, team_id: team_id}, @opts)

      user_payload = %{type: "Schemas.Users.User", attrs: user}
      team_user_payload = %{type: "Schemas.Teams.TeamUser", attrs: team_user}

      UserdocsWeb.Endpoint.broadcast(channel, "create", user_payload)
      UserdocsWeb.Endpoint.broadcast(channel, "create", team_user_payload)

      conn
      |> put_status(:created)
      |> put_resp_header("location", Routes.api_team_path(conn, :show, team))
      |> put_view(TeamView)
      |> render("show.json", team: team)
    else
      {:error, %{changes: %{email: _email}, errors: [email: {"has already been taken", _}]}} ->
        Logger.error("Email already taken")
        user = Users.get_user!(id, @opts)
        {:ok, team_user} = TeamUsers.create_team_user(%{user_id: user.id, team_id: team_id})
        payload = %{type: "Schemas.Teams.TeamUser", attrs: team_user}
        UserdocsWeb.Endpoint.broadcast("team:#{team.id}", "create", payload)

        conn
        |> put_status(:created)
        |> put_resp_header("location", Routes.api_team_path(conn, :show, team))
        |> put_view(TeamView)
        |> render("show.json", team: team)
    end
  end
end
