defmodule Local do
  use GenServer
  require Logger
  alias Local.Paths
  alias Local.ImageMagickInstaller
  alias Local.ChromiumInstaller
  alias Userdocs.LocalOptions
  alias Userdocs.Setups

  @setup_status %{
    local_dirs: %{order: 1, status: nil, next_task: :chromium, title: "Local Dirs"},
    chromium: %{order: 2, status: nil, next_task: :imagemagick, title: "Chromium"},
    imagemagick: %{order: 3, status: nil, next_task: :local_repo, title: "Imagemagick"},
    local_repo: %{order: 4, status: nil, next_task: :extension, title: "Local Options"},
    extension: %{order: 5, status: nil, next_task: :complete, title: "Extension"}
  }


  def start_link(_), do: GenServer.start_link(__MODULE__, %{current_user: nil}, name: __MODULE__)
  def status(), do: GenServer.call(__MODULE__, :status)
  def remove_chrome(), do: ChromiumInstaller.remove()

  @impl true
  def handle_call(:status, _from, %{setup_status: setup_status} = state),
    do: {:reply, setup_status, state}

  @impl true
  def init(_) do
    {:ok, %{setup_status: @setup_status, topic: "local"}, {:continue, :local_dirs}}
  end

  @impl true
  def handle_continue(:local_dirs, state) do
    create_local_dirs()
    |> Setups.handle_setup_result(state, :local_dirs)
  end
  def handle_continue(:chromium, state) do
    install_chrome()
    |> Setups.handle_setup_result(state, :chromium)
  end
  def handle_continue(:imagemagick, state) do
    install_imagemagick()
    |> Setups.handle_setup_result(state, :imagemagick)
  end
  def handle_continue(:local_repo, state) do
    check_local_repo()
    |> Setups.handle_setup_result(state, :local_repo)
  end
  def handle_continue(:extension = step, state) do
    install_extension()
    |> Setups.handle_setup_result(state, step)
  end
  def handle_continue(:complete, state), do: {:noreply, state}

  def create_local_dirs() do
    Logger.debug("Making local dirs at #{Desktop.OS.home()}")

    [
      Paths.default_images_path(),
      Paths.default_user_data_dir_path(),
      Paths.chromium_path(),
      Paths.chromium_download_path(),
      Paths.imagemagick_path(),
      Paths.image_repo_path(),
      Paths.imagemagick_download_path(),
      Paths.extension_path(),
      Paths.assets_dir(),
      Paths.team_css_override_file()
    ]
    |> Enum.each(fn path -> :ok = File.mkdir_p!(path) end)

    {:ok, "Local directories exist"}
  end

  def install_chrome() do
    case File.stat(Paths.chromium_executable_path()) do
      {:ok, _stat} ->
        {:ok, "Chrome Existed"}

      {:error, :enoent} ->
        {:ok, _path} = ChromiumInstaller.download()
        :ok = ChromiumInstaller.install()
        {:ok, "Chrome Installed"}

      {:error, reason} ->
        Logger.error("Unhandled path error #{reason}")
        {:error, reason}
    end
  end

  def install_imagemagick() do
    case File.stat(Paths.imagemagick_executable_path(Desktop.OS.type())) do
      {:ok, _stat} ->
        {:ok, "Image Magick Existed"}

      {:error, :enoent} ->
        {:ok, _path} = ImageMagickInstaller.download()
        :ok = ImageMagickInstaller.install()
        {:ok, "ImageMagick Installed"}
    end
  end

  def check_local_repo() do
    try do
      LocalOptions.get_local_options()
      {:ok, "Local Options Existed"}
    rescue
      e in [Ecto.NoResultsError] ->
        Logger.warning("#{__MODULE__} threw #{inspect(e)}")

        %{
          image_path: Local.Paths.default_images_path(),
          image_repo_path: Local.Paths.image_repo_path(),
          max_retries: 5,
          browser_timeout: 10_000,
          user_data_dir_path: Local.Paths.default_user_data_dir_path(),
          chrome_path: Local.Paths.chromium_path(),
          magick_path: Local.Paths.imagemagick_executable_path()
        }
        |> LocalOptions.create_local_options()

        {:ok, "Local Options Created"}
    end
  end

  def install_extension() do
    Path.join([:code.priv_dir(:local), "static", "assets", "js", "extension"])
    |> File.cp_r(Paths.extension_path())
    |> case do
      {:ok, _dirs} -> {:ok, "Extension Installed"}
      {:error, _code, reason} -> {:error, "Extension Installation Failed because #{reason}"}
    end
  end
end
