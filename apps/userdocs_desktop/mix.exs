defmodule UserdocsDesktop.MixProject do
  use Mix.Project

  def project do
    [
      app: :userdocs_desktop,
      version: "0.1.0",
      build_path: "../../_build",
      config_path: "../../config/config.exs",
      deps_path: "../../deps",
      lockfile: "../../mix.lock",
      elixir: "~> 1.7",
      elixirc_paths: elixirc_paths(Mix.env()),
      start_permanent: Mix.env() == :prod,
      deps: deps()
    ]
  end

  # Configuration for the OTP application.
  #
  # Type `mix help compile.app` for more information.
  def application do
    [
      mod: {UserdocsDesktop.Application, []},
      extra_applications: [:logger, :runtime_tools],
      env: [
        environment: :desktop,
        db_path: Path.join([Desktop.OS.home(), ".config", "userdocs", "userdocs.db"])
      ]
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
      {:desktop, "~> 1.3.0"},
      {:userdocs, in_umbrella: true},
      {:client, in_umbrella: true},
      {:session, in_umbrella: true},
      {:userdocs_desktop_web, in_umbrella: true},
    ]
  end
end
