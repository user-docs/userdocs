defmodule Mix.Tasks.GenerateBehaviors do
  @moduledoc ""
  @shortdoc "Generates Tests"

  use Mix.Task

  @impl Mix.Task
  def run(_args) do
    Generate.Seeds.list()
    |> Enum.map(fn {k, v} -> {k, Generate.cast_args(v)} end)
    |> Enum.map(fn {k, v} -> {k, Generate.cast_client_calls_code(v)} end)
    |> Enum.map(fn {k, v} -> Generate.write_behaviors_file(k, v)
    end)
  end
end
