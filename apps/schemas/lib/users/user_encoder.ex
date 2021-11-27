
  defmodule Schemas.Users.UserEncoder do
    alias Schemas.Teams.Team
    alias Schemas.Teams.TeamUser
    alias Schemas.Projects.Project
    def encode(%{} = user, opts) do
      user
      |> Map.take([:id, :email, :selected_team_id, :selected_project_id, :overrides])
      |> maybe_take_team_users(user)
      |> maybe_take_project(user)
      |> maybe_take_team(user)
      |> Jason.Encode.map(opts)
    end

    def maybe_take_team_users(state, %{team_users: [%TeamUser{} | _] = team_users}), do: Map.put(state, :team_users, team_users)
    def maybe_take_team_users(state, %{team_users: [] = team_users}), do: Map.put(state, :team_users, team_users)
    def maybe_take_team_users(state, _), do: state

    def maybe_take_project(state, %{selected_project: %Project{} = project}), do: Map.put(state, :selected_project, project)
    def maybe_take_project(state, _), do: state

    def maybe_take_team(state, %{selected_team: %Team{} = team}), do: Map.put(state, :selected_team, team)
    def maybe_take_team(state, _), do: state
  end
