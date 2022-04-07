defmodule Client.Remote.TeamUsers do
  @moduledoc "The Team Users Context"
  require Logger
  alias Client.Requests
  alias Userdocs.TeamUsers
  alias Schemas.Teams.TeamUser
  @url Application.compile_env(:userdocs_desktop, :host_url) <> "/api/team_users"

  @doc ""
  def list_team_users(%{access_token: access_token} = opts) do
    params = opts |> Map.take([:filters])
    request_fun = Requests.build_get(@url)
    {:ok, %{"data" => team_user_attrs}} = Requests.send(request_fun, access_token, params)
    TeamUsers.create_team_user_structs(team_user_attrs)
  end

  @doc "Deletes a team_user."
  def delete_team_user(%TeamUser{} = team_user, %{access_token: access_token}) do
    request = Requests.build_delete(@url, team_user.id)
    Requests.send(request, access_token, nil)
  end
end
