defmodule Userdocs.MixProject do
  use Mix.Project

  def project do
    [
      app: :userdocs,
      version: "0.1.0",
      build_path: "../../_build",
      config_path: "../../config/config.exs",
      deps_path: "../../deps",
      lockfile: "../../mix.lock",
      elixir: "~> 1.7",
      elixirc_paths: elixirc_paths(Mix.env()),
      start_permanent: Mix.env() == :prod,
      aliases: aliases(),
      deps: deps()
    ]
  end

  # Configuration for the OTP application.
  #
  # Type `mix help compile.app` for more information.
  def application do
    [
      mod: {Userdocs.Application, []},
      extra_applications: [:logger, :runtime_tools]
    ]
  end

  # Specifies which paths to compile per environment.
  defp elixirc_paths(:test), do: ["lib", "test/support"]
  defp elixirc_paths(_), do: ["lib"]

  # Specifies your project dependencies.
  #
  # Type `mix help deps` for examples and options.
  defp deps do
    [
      {:phoenix_pubsub, "~> 2.0"},
      {:ecto_sql, "~> 3.4"},
      {:postgrex, ">= 0.0.0"},
      {:ecto_sqlite3, "~> 0.7.4"},
      {:jason, "~> 1.0"},
      {:uuid, "~> 1.1"},
      {:pow, "~> 1.0.21"},
      {:bodyguard, "~> 2.4"},
      {:bamboo, "~> 2.2.0"},
      {:ex_aws, "~> 2.2"},
      {:ex_aws_s3, "~> 2.3"},
      {:inflex, "~> 2.1"},
      {:mix_test_watch, "~> 1.0", only: :dev, runtime: false},
      {:ex_doc, "~> 0.22", only: :dev, runtime: false},
      {:credo, "~> 1.5", only: [:dev, :test], runtime: false},
      {:flex_logger, "~> 0.2", only: [:dev]},
      {:schemas, in_umbrella: true},
    ]
  end

  # Aliases are shortcuts or tasks specific to the current project.
  #
  # See the documentation for `Mix` for more info on aliases.
  defp aliases do
    setup_clause =
      if Mix.env() in [:test] do
        ["ecto.create", "ecto.migrate"]
      else
        ["ecto.create", "ecto.migrate", "run priv/repo/seeds.exs"]
      end
    [
      setup: ["deps.get", "ecto.setup"],
      "ecto.setup": setup_clause,
      "ecto.reset": ["ecto.drop", "ecto.setup"],
      test: ["ecto.create --quiet", "ecto.migrate --quiet", "test"]
    ]
  end
end
