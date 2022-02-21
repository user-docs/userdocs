defmodule Schemas.Teams.TeamEncoder do
  @moduledoc "Jason encoder implementation for the Team data type"
  alias Schemas.Projects.Project

  def encode(%{} = team, opts) do
    team
    |> Map.take([:id, :name, :css, :aws_region, :aws_bucket])
    |> maybe_take_projects(team)
    |> Jason.Encode.map(opts)
  end

  def maybe_take_projects(state, %{projects: [%Project{} | _] = projects}), do: Map.put(state, :projects, projects)
  def maybe_take_projects(state, %{projects: [] = projects}), do: Map.put(state, :projects, projects)
  def maybe_take_projects(state, _), do: state
end
