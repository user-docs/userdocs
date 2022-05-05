defmodule Mix.Tasks.GenerateRemote do
  @moduledoc ""
  @shortdoc "Generates Tests"

  use Mix.Task

  @impl Mix.Task
  def run(args) do
    key =
      args
      |> Enum.at(0)
      |> String.to_atom()

    seed = Generate.Seeds.get(key)

    [{key, seed}]
    |> Enum.map(fn {k, v} -> {k, Generate.cast_args(v)} end)
    |> Enum.map(fn {k, v} -> {k, Generate.cast_remote_code(v)} end)
    |> Enum.map(fn {k, v} -> Generate.write_remote_client_calls_file(k, v) end)

    [{key, seed}]
    |> Enum.map(fn {k, v} -> {k, Generate.cast_args(v)} end)
    |> Enum.map(fn {k, v} -> {k, Generate.cast_remote_tests(v)} end)
    |> Enum.map(fn {k, v} -> Generate.write_remote_test_file(k, v) end)
  end
end
