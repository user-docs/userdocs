defmodule UserdocsWeb.API.TeamController do
  use UserdocsWeb, :controller

  alias Userdocs.Teams
  alias Schemas.Teams.Team
  alias UserdocsWeb.API.Helpers
  action_fallback UserdocsWeb.FallbackController
  @opts %{broadcast: true, context: %{repo: Userdocs.Repo}}

  def index(conn, params) do
    opts = Helpers.parse_params(params, @opts)
    teams = Teams.list_teams(opts)
    render(conn, "index.json", teams: teams)
  end

  def create(conn, %{"team" => team_params}) do
    with {:ok, %Team{} = team} <- Teams.create_team(team_params, @opts) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", Routes.api_team_path(conn, :show, team))
      |> render("show.json", team: team)
    end
  end

  def show(conn, %{"id" => id}) do
    team = Teams.get_team!(id, @opts)
    render(conn, "show.json", team: team)
  end

  def update(conn, %{"id" => id, "team" => team_params}) do
    team = Teams.get_team!(id, @opts)

    with {:ok, %Team{} = team} <- Teams.update_team(team, team_params, @opts) do
      render(conn, "show.json", team: team)
    end
  end

  def delete(conn, %{"id" => id}) do
    team = Teams.get_team!(id, @opts)

    with {:ok, %Team{}} <- Teams.delete_team(team, @opts) do
      send_resp(conn, :no_content, "")
    end
  end
end
