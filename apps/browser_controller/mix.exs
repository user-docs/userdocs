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

  # Run "mix help deps" to learn about dependencies.
  defp deps do
    [
      {:chrome_remote_interface, path: "D:\\Users\\johns10\\Documents\\GitHub\\chrome-remote-interface"},
      {:schemas, in_umbrella: true},
      {:userdocs, in_umbrella: true},
      {:client, in_umbrella: true, runtime: false},
      {:local, in_umbrella: true, runtime: false},
    ]
  end
end
