defmodule BrowserController.MixProject do
  use Mix.Project

  def project do
    [
      app: :browser_controller,
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
      extra_applications: [:logger],
      mod: {
        BrowserController.Application, [
          host_url: "http://localhost:4001",
          headed_browser: [port: 9222, headless: false]
        ]
      }
    ]
  end

  defp elixirc_paths(:test), do: ["lib", "test/support"]
  defp elixirc_paths(_), do: ["lib"]

  # Run "mix help deps" to learn about dependencies.
  defp deps do
    [
      {:chrome_remote_interface, git: "https://github.com/user-docs/chrome-remote-interface.git"},
      {:schemas, in_umbrella: true},
      {:userdocs, in_umbrella: true},
      {:client, in_umbrella: true, runtime: false},
      {:local, in_umbrella: true, runtime: false},
    ]
  end
end
