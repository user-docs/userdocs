defmodule Client.MixProject do
  use Mix.Project

  def project do
    [
      app: :client,
      version: "0.1.0",
      build_path: "../../_build",
      config_path: "../../config/config.exs",
      deps_path: "../../deps",
      lockfile: "../../mix.lock",
      elixir: "~> 1.12",
      elixirc_paths: elixirc_paths(Mix.env()),
      start_permanent: Mix.env() == :prod,
      deps: deps()
    ]
  end

  # Run "mix help compile.app" to learn about applications.
  def application do
    [
      mod: {Client.Application, []},
      extra_applications: [:logger]
    ]
  end

  defp elixirc_paths(:test), do: ["lib", "test/support"]
  defp elixirc_paths(_), do: ["lib"]

  # Run "mix help deps" to learn about dependencies.
  defp deps do
    [
      {:phoenix_client, "~> 0.3"},
      {:inflex, "~> 2.1"},
      {:httpoison, "~> 1.8"},
      {:briefly, "~> 0.3"},
      {:state_handlers, in_umbrella: true},
      {:local, in_umbrella: true},
      {:schemas, in_umbrella: true},
      {:state, in_umbrella: true},
      {:userdocs, in_umbrella: true},
      {:userdocs_web, in_umbrella: true, only: [:test], runtime: :false}
    ]
  end
end
