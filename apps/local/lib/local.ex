defmodule Local do
  use GenServer
  require Logger
  alias Local.Paths
  alias Local.ImageMagickInstaller
  alias Local.ChromiumInstaller
  alias Userdocs.LocalOptions
  alias Userdocs.Setups

  @setup_status %{
    local_dirs: %{order: 1, status: nil, next_task: :download_chromium, title: "Local Dirs"},
    download_chromium: %{
      order: 2,
      status: nil,
      next_task: :install_chromium,
      title: "Download Chromium"
    },
    install_chromium: %{
      order: 3,
      status: nil,
      next_task: :download_imagemagick,
      title: "Install Chromium"
    },
    download_imagemagick: %{
      order: 4,
      status: nil,
      next_task: :install_imagemagick,
      title: "Download Imagemagick"
    },
    install_imagemagick: %{order: 5, status: nil, next_task: :local_repo, title: "Install Imagemagick"},
    local_repo: %{order: 6, status: nil, next_task: :extension, title: "Local Options"},
    extension: %{order: 7, status: nil, next_task: :complete, title: "Extension"}
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

  def handle_continue(:download_chromium, state) do
    with {:error, :enoent} <- File.stat(Paths.chromium_executable_path()) do
      ChromiumInstaller.download()
      {:noreply, state}
    else
      {:ok, _stat} ->
        Setups.handle_setup_result({:ok, "Chrome Installed"}, state, :download_chromium)
    end
  end

  def handle_continue(:install_chromium, state) do
    install_chrome()
    |> Setups.handle_setup_result(state, :install_chromium)
  end

  def handle_continue(:download_imagemagick, state) do
    with {:error, :enoent} <- File.stat(Paths.imagemagick_executable_path()) do
      ImageMagickInstaller.download()
      {:noreply, state}
    else
      {:ok, _stat} ->
        Setups.handle_setup_result({:ok, "ImageMagick Installed"}, state, :install_imagemagick)
    end
  end

  def handle_continue(:install_imagemagick, state) do
    install_imagemagick()
    |> Setups.handle_setup_result(state, :install_imagemagick)
  end

  def handle_continue(:local_repo, state) do
    check_local_repo()
    |> Setups.handle_setup_result(state, :local_repo)
  end

  def handle_continue(:extension, state) do
    install_extension()
    |> Setups.handle_setup_result(state, :extension)
  end

  def handle_continue(:complete, state), do: {:noreply, state}

  @impl true
  def handle_info({:download_complete, %{from: :downloader, id: :chrome}}, state) do
    Setups.handle_setup_result({:ok, "Chrome Downloaded"}, state, :download_chromium)
  end

  def handle_info({:download_complete, %{from: :downloader, id: :imagemagick}}, state) do
    Setups.handle_setup_result({:ok, "ImageMagick Downloaded"}, state, :download_imagemagick)
  end

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
    with {:e, {:error, :enoent}} <- {:e, File.stat(Paths.chromium_executable_path())},
         {:d, {:ok, _stat}} <- {:d, File.stat(Paths.chromium_downloaded_file_path())} do
      ChromiumInstaller.install()
      {:ok, "Chrome Installed"}
    else
      {:e, {:ok, _stat}} ->
        {:ok, "Chrome Existed"}

      {_, {:error, reason}} ->
        Logger.error("Unhandled path error #{reason}")
        {:error, reason}
    end
  end

  def install_imagemagick() do
    with {:e, {:error, :enoent}} <- {:e, File.stat(Paths.imagemagick_executable_path())},
         {:d, {:ok, _stat}} <- {:d, File.stat(Paths.imagemagick_downloaded_file_path())} do
      ImageMagickInstaller.install()
      {:ok, "ImageMagick Installed"}
    else
      {:e, {:ok, _stat}} ->
        {:ok, "ImageMagick Existed"}

      {_, {:error, reason}} ->
        Logger.error("Unhandled path error #{reason}")
        {:error, reason}
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
