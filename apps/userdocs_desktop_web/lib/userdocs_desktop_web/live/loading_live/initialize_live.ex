defmodule UserdocsDesktopWeb.InitializeLive do
  @moduledoc "Controls and displays the initialization of the desktop application."
  use UserdocsDesktopWeb, :live_view
  require Logger
  alias UserdocsDesktop.Paths
  alias UserdocsDesktop.ImageMagickInstaller
  alias  UserdocsDesktop.ChromiumInstaller

  @impl true
  def mount(_params, _session, socket) do
    Process.send_after(self(), :start_initialization, 500)
    {
      :ok,
      socket
      |> put_message("Userdocs initializing local directory structure"),
      layout: {UserdocsDesktopWeb.LayoutView, "unauthenticated.html"}
    }
  end

  @impl true
  def handle_info(:start_initialization, socket) do
    socket = socket |> create_local_dirs() |> create_local_files()

    message = "Userdocs installing Chromium"
    Process.send_after(self(), :install_chrome, 10)
    {:noreply, socket |> put_message(message)}
  end
  def handle_info(:install_chrome, socket) do
    socket = install_chrome(socket)

    message = "Userdocs installing Imagemagick"
    Process.send_after(self(), :install_imagemagick, 10)
    {:noreply, socket |> put_message(message)}
  end
  def handle_info(:install_imagemagick, socket) do
    socket = install_imagemagick(socket)

    message = "Userdocs initializing local data"
    Process.send_after(self(), :local_data, 10)
    {:noreply, socket |> put_message(message)}
  end
  def handle_info(:local_data, socket) do
    socket = check_local_repo(socket)

    message = "Userdocs authenticating with server"
    Process.send_after(self(), :authentication, 10)
    {:noreply, socket |> put_message(message)}
  end
  def handle_info(:authentication, socket) do
    :timer.sleep(1000)
    socket = try_authentication(socket)

    message = "Userdocs connecting to server"
    Process.send_after(self(), :connect, 10)
    {:noreply, socket |> put_message(message)}
  end
  def handle_info(:connect, socket) do
    socket = try_connect(socket)

    message = "Userdocs is sending you to the application"
    Process.send_after(self(), :redirect, 10)
    {:noreply, socket |> put_message(message)}
  end
  """
  def handle_info(:hydrate_client, socket) do
    socket = hydrate_client(socket)

    message = "Userdocs loading data"
    Process.send_after(self(), :redirect, 10)
    {:noreply, socket |> put_message(message)}
  end
  """
  def handle_info(:redirect, socket) do
    {:noreply, socket |> handle_redirect()}
  end

  def handle_stage(socket, %{message: message, next_stage_atom: next_stage, function: stage_function}) do
    Process.send_after(self(), next_stage, 10)
    {
      :noreply,
      socket
      |> put_message(message)
      |> stage_function.()
    }
  end

  def put_message(socket, message), do: assign(socket, :message, message)

  def create_local_dirs(socket) do
    Logger.debug("Making local dirs at #{Desktop.OS.home()}")
    [
      Paths.default_images_path(),
      Paths.default_user_data_dir_path(),
      Paths.chromium_path(),
      Paths.chromium_download_path(),
      Paths.image_magick_path(),
      Paths.image_repo_path(),
      Paths.image_magick_download_path()
    ]
    |> Enum.each(fn(path) -> File.mkdir_p!(path) end)
    socket
  end

  def create_local_files(socket) do
    [
      Paths.team_css_override_file()
    ]
    |> Enum.each(fn(path) ->
      case File.stat(path) do
        {:ok, _info} -> ""
        {:error, _reason} -> File.write(path, "")
      end
    end)
    socket
  end

  def install_chrome(socket) do
    Logger.debug("#{__MODULE__} Installing Chrome Browser")
    case File.stat(Paths.chromium_executable_path()) do
      {:ok, _stat} -> socket
      {:error, :enoent} ->
        {:ok, _path} = ChromiumInstaller.download()
        :ok = ChromiumInstaller.install()
        socket
      {:error, reason} ->
        Logger.error("Unhandled path error #{reason}")
        socket
    end
  end

  def install_imagemagick(socket) do
    case File.stat(Paths.image_magick_executable_path(Desktop.OS.type())) do
      {:ok, _stat} -> socket
      {:error, :enoent} ->
        {:ok, _path} = ImageMagickInstaller.download()
        :ok = ImageMagickInstaller.install()
        socket

    end
  end

  def check_local_repo(socket) do
    try do
      Userdocs.LocalOptions.get_local_options()
    rescue
      e in [Ecto.NoResultsError] ->
        Logger.warning("#{__MODULE__} threw #{inspect e}")
        %{
          image_path: UserdocsDesktop.Paths.default_images_path(),
          image_repo_path: UserdocsDesktop.Paths.image_repo_path(),
          max_retries: 5,
          browser_timeout: 10_000,
          user_data_dir_path: UserdocsDesktop.Paths.default_user_data_dir_path(),
          chrome_path: UserdocsDesktop.Paths.chromium_path(),
          magick_path: UserdocsDesktop.Paths.image_magick_executable_path(),
        }
        |> Userdocs.LocalOptions.create_local_options
    end
    socket
  end

  #TODO: This needs to be modified, probably to remove current user, etc
  def try_authentication(socket) do
    case Client.authenticate() do
      {:ok, user} ->
        socket
        |> assign(:current_user, user)
        |> assign(:auth_state, :authenticated)
        |> assign(:redirect_to, Routes.home_path(socket, :index))

      {:error, message} ->
        socket
        |> assign(:auth_state, :not_authenticated)
        |> assign(:redirect_to, Routes.session_index_path(socket, :new))
        |> assign(:message, message)
    end
  end

  def try_connect(socket), do: socket
  def hydrate_client(socket) do
    Client.init_state()
    Client.load()
    socket
  end

  def handle_redirect(%{assigns: %{redirect_to: path}} = socket) do
    socket
    |> push_redirect(to: path)
  end
end
