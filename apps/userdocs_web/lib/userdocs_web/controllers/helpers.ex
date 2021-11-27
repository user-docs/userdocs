defmodule UserdocsWeb.API.Helpers do
  def parse_params(params, opts) do
    params
    |> Jason.encode!()
    |> Jason.decode!(keys: :atoms)
    |> Map.merge(opts)
  end
end