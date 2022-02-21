defmodule Schemas.Teams.TeamUserEncoder do
  @moduledoc "Jason encoder implementation for Team User Datatype"
  alias Schemas.Teams.Team
  alias Schemas.Users.User

  def encode(%{} = team_user, opts) do
    team_user
    |> Map.take([:id, :role, :team_id, :user_id])
    |> maybe_take_team(team_user)
    |> maybe_take_user(team_user)
    |> Jason.Encode.map(opts)
  end

  def maybe_take_team(state, %{team: %Team{} = team}),
    do: Map.put(state, :team, team)
  def maybe_take_team(state, _), do: state

  def maybe_take_user(state, %{user: %User{} = user}),
    do: Map.put(state, :user, user)
  def maybe_take_user(state, _), do: state
end
