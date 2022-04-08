defmodule Mix.Tasks.GenerateTests do
  @moduledoc ""
  @shortdoc "Generates Tests"

  use Mix.Task

  @impl Mix.Task
  def run(_args) do
    Generate.Seeds.list()
    |> IO.inspect()
    |> Enum.map(fn {k, v} -> {k, Generate.cast_args(v)} end)
    |> Enum.map(fn {k, v} -> {k, Generate.cast_test_code(v)} end)
    |> Enum.map(fn {k, v} -> Generate.write_test_file(k, v)
    end)
  end
end
