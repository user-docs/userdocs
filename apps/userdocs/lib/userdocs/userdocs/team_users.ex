defmodule Userdocs.TeamUsers do
  @moduledoc "The Team Users Context"

  require Logger
  import Ecto.Query, warn: false
  alias Userdocs.Repo

  alias Schemas.Teams.TeamUser

  @doc ""
  def list_team_users(opts \\ %{}) do
    filters = Map.get(opts, :filters, [])
    base_team_users_query()
    |> maybe_filter_by_user(filters[:user_id])
    |> Repo.all()
  end

  defp maybe_filter_by_user(query, nil), do: query
  defp maybe_filter_by_user(query, user_id) do
    from(team_user in query,
      where: team_user.user_id == ^user_id
    )
  end

  defp base_team_users_query(), do: from(team_users in TeamUser)

  @doc " Gets a single team_user."
  def get_team_user!(id), do: Repo.get!(TeamUser, id)

  @doc "Creates a team_user."
  def create_team_user(attrs \\ %{}) do
    %TeamUser{}
    |> TeamUser.changeset(attrs)
    |> Repo.insert()
  end

  @doc "Updates a team_user."
  def update_team_user(%TeamUser{} = team_user, attrs) do
    team_user
    |> TeamUser.changeset(attrs)
    |> Repo.update()
  end

  @doc "Deletes a team_user."
  def delete_team_user(%TeamUser{} = team_user) do
    Repo.delete(team_user)
  end

  @doc "Returns an `%Ecto.Changeset{}` for tracking team_user changes."
  def change_team_user(%TeamUser{} = team_user, attrs \\ %{}) do
    TeamUser.changeset(team_user, attrs)
  end
end
