defmodule Mix.Tasks.GenerateServerCallbacks do
  @moduledoc ""
  @shortdoc "Generates Tests"

  use Mix.Task

  @impl Mix.Task
  def run(args) do
    seed =
      args
      |> Enum.at(0)
      |> String.to_atom()
      |> Generate.Seeds.get()

    fields = Generate.cast_args(seed)
    Generate.cast_server_calls_code(fields)
    |> IO.puts()
  end
end
