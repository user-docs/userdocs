defmodule UserdocsDesktopWeb.MixProject do
  use Mix.Project

  def project do
    [
      app: :userdocs_desktop_web,
      version: "0.1.0",
      build_path: "../../_build",
      config_path: "../../config/config.exs",
      deps_path: "../../deps",
      lockfile: "../../mix.lock",
      elixir: "~> 1.7",
      elixirc_paths: elixirc_paths(Mix.env()),
      compilers: [:phoenix, :gettext] ++ Mix.compilers(),
      start_permanent: Mix.env() == :prod,
      aliases: aliases(),
      deps: deps()
    ]
  end

  # Configuration for the OTP application.
  #
  # Type `mix help compile.app` for more information.
  def application do
      if Mix.env in [:test] do
        [
          mod: {UserdocsDesktopWeb.Application, []},
          extra_applications: [:logger, :runtime_tools, :userdocs]
        ]
      else
        [
          mod: {UserdocsDesktopWeb.Application, []},
          extra_applications: [:logger, :runtime_tools]
        ]
      end
  end

  # Specifies which paths to compile per environment.
  defp elixirc_paths(:test), do: ["lib", "test/support"]
  defp elixirc_paths(_), do: ["lib"]

  # Specifies your project dependencies.
  #
  # Type `mix help deps` for examples and options.
  defp deps do
    [
      {:phoenix, "~> 1.5.13"},
      {:phoenix_ecto, "~> 4.4"},
      {:phoenix_html, "~> 2.11"},
      {:phoenix_live_dashboard, "~> 0.4"},
      {:telemetry_metrics, "~> 0.4"},
      {:telemetry_poller, "~> 0.4"},
      {:gettext, "~> 0.11"},
      {:jason, "~> 1.0"},
      {:plug_cowboy, "~> 2.0"},
      {:phoenix_slime, "~> 0.13.1"},
      {:phoenix_live_reload, "~> 1.2", only: :dev},
      {:floki, ">= 0.30.0", only: :test},
      {:esbuild, "~> 0.2", runtime: Mix.env() == :dev},
      {:credo, "~> 1.5", only: [:dev, :test], runtime: false},
      {:desktop, "~> 1.3.0"},
      {:download, "~> 0.0.4"},
      {:chrome_remote_interface, "~> 0.4.1"},
      {:phoenix_client, "~> 0.3"},
      {:inflex, "~> 2.1"},
      {:state, in_umbrella: true},
      {:userdocs_client, in_umbrella: true},
      {:userdocs, in_umbrella: true},
      {:state_handlers, in_umbrella: true},
      {:userdocs_web, in_umbrella: true, only: [:test], runtime: false},
    ]
  end

  # Aliases are shortcuts or tasks specific to the current project.
  #
  # See the documentation for `Mix` for more info on aliases.
  defp aliases do
    [
      setup: ["deps.get", "cmd npm install --prefix assets"],
      test: ["ecto.create --quiet", "ecto.migrate --quiet", "test"]
    ]
  end
end
