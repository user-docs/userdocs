defmodule UserdocsWeb.API.InvitationController do
  use UserdocsWeb, :controller
  require Logger
  alias Schemas.Users.User
  alias Userdocs.Users
  alias Userdocs.Teams
  alias Userdocs.TeamUsers
  alias UserdocsWeb.API.TeamView
  @opts %{context: %{repo: Userdocs.Repo}, broadcast: true}

  def create(conn, %{"user" => %{"invited_by_id" => id} = user_params, "team_id" => team_id}) do
    invited_by = Users.get_user!(id, @opts)
    team = Teams.get_team!(team_id, @opts)

    case Users.invite_user(invited_by, user_params, @opts) do
      {:ok, %User{} = user} ->
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

        {:ok, _team_user} = TeamUsers.create_team_user(%{user_id: user.id, team_id: team_id}, @opts)
        Users.broadcast_user(user, "create", Users.channels(user, true))

        conn
        |> put_status(:created)
        |> put_resp_header("location", Routes.api_team_path(conn, :show, team))
        |> put_view(TeamView)
        |> render("show.json", team: team)

      {:error, %{changes: %{email: email}, errors: [email: {"has already been taken", _}]}} ->
        Logger.warning("Email already taken")
        user = Users.get_user_by_email!(email)
        {:ok, _team_user} = TeamUsers.create_team_user(%{user_id: user.id, team_id: team_id}, @opts)
        Users.broadcast_user(user, "create", Users.channels(user, true))

        conn
        |> put_status(:created)
        |> put_resp_header("location", Routes.api_team_path(conn, :show, team))
        |> put_view(TeamView)
        |> render("show.json", team: team)
    end
  end
end
