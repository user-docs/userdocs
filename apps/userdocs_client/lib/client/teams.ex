defmodule Client.Teams do
  @moduledoc "The Teams context."

  require Logger
  alias Userdocs.Requests
  alias Userdocs.Teams
  alias Schemas.Teams.Team
  @url Application.compile_env(:userdocs_desktop, :host_url) <> "/api/teams"

  @doc "Returns the list of teams."
  def list_teams(%{access_token: access_token} = opts) do
    params = opts |> Map.take([:filters])
    request_fun = Requests.build_get(@url)
    {:ok, %{"data" => team_attrs}} = Requests.send(request_fun, access_token, params)
    Teams.create_team_structs(team_attrs)
  end

  @doc "Creates a team."
  def create_team(attrs, %{access_token: access_token}) do
    params = %{team: attrs}
    request_fun = Requests.build_create(@url)
    {:ok, %{"data" => team_attrs}} = Requests.send(request_fun, access_token, params)
    Teams.create_team_struct(team_attrs)
  end

  @doc "Updates a team."
  def update_team(%Team{} = team, attrs, %{access_token: access_token}) do
    request_fun = Requests.build_update(@url, team.id)
    {:ok, %{"data" => team_attrs}} = Requests.send(request_fun, access_token, %{team: attrs})
    Teams.create_team_struct(team_attrs)
  end

  @doc "Deletes a team."
  def delete_team(id, %{access_token: access_token}) do
    request = Requests.build_delete(@url, id)
    Requests.send(request, access_token, nil)
  end
end
