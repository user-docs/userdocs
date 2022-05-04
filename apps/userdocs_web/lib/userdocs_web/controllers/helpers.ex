defmodule UserdocsWeb.API.Helpers do
  @moduledoc false

  def parse_params(params, opts) do
    parse_params(params)
    |> Map.merge(opts)
  end
  def parse_params(params) do
    params
    |> Jason.encode!()
    |> Jason.decode!(keys: :atoms)
  end
end
