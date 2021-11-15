defmodule Schemas.MixProject do
  use Mix.Project

  def project do
    [
      app: :schemas,
      version: "0.1.0",
      build_path: "../../_build",
      config_path: "../../config/config.exs",
      deps_path: "../../deps",
      lockfile: "../../mix.lock",
      elixir: "~> 1.12",
      start_permanent: Mix.env() == :prod,
      deps: deps()
    ]
  end

  # Run "mix help compile.app" to learn about applications.
  def application do
    [
      extra_applications: [:logger]
    ]
  end

  # Run "mix help deps" to learn about dependencies.
  defp deps do
    [
      {:credo, "~> 1.5", only: [:dev, :test], runtime: false},
      {:ecto, "~> 3.7"},
      {:cloak_ecto, "~> 1.2.0"},
      {:pow, "~> 1.0.21"},
      {:waffle_ecto, "~> 0.0.9"}
    ]
  end
end
