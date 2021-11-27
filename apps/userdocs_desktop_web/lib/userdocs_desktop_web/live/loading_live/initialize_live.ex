defmodule UserdocsDesktopWeb.InitializeLive do
  use UserdocsDesktopWeb, :live_view

  @impl true
  def mount(_params, _session, socket) do
    {
      :ok,
      socket
      |> put_message("Userdocs initializing local directory structure")
      |> create_local_dirs()
      |> put_message("Userdocs initializing local data")
      |> check_local_repo()
      |> put_message("Userdocs authenticating with server")
      |> try_authentication()
      |> put_message("Userdocs connecting to server")
      |> try_connect()
      |> handle_redirect(),
      layout: {UserdocsDesktopWeb.LayoutView, "unauthenticated.html"}
    }
  end

  def put_message(socket, message), do: assign(socket, :message, message)

  def create_local_dirs(socket) do
    IO.inspect("Making local dirs at #{Desktop.OS.home()}")
    UserdocsDesktop.Paths.default_images_path() |> File.mkdir_p!()
    UserdocsDesktop.Paths.default_user_data_dir_path() |> File.mkdir_p!()
    UserdocsDesktop.Paths.chromium_path() |> File.mkdir_p!()
    UserdocsDesktop.Paths.chromium_download_path() |> File.mkdir_p!()
    UserdocsDesktop.Paths.image_magick_path() |> File.mkdir_p!()
    socket
  end

  def check_local_repo(socket) do
    try do
      Userdocs.LocalOptions.get_local_options()
    rescue
      e in [Ecto.NoResultsError] ->
        IO.puts("No results error")
        attrs = %{
          images_path: UserdocsDesktop.Paths.default_images_path(),
          max_retries: 5,
          browser_timeout: 10000,
          user_data_dir_path: UserdocsDesktop.Paths.default_user_data_dir_path(),
          chrome_path: UserdocsDesktop.Paths.chromium_path()
        }
        |> Userdocs.LocalOptions.create_local_options
    end
    socket
  end

  def try_authentication(socket) do
    case Session.authenticate() do
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

  def try_connect(%{assigns: %{current_user: user}} = socket) do
    case Session.tokens() do
      {:ok, %{access_token: at}} ->
        :ok = Client.connect(user, at)
        socket
        |> put_message("Userdocs Connected to Server")
    end
  end
  def try_connect(socket), do: socket

  def handle_redirect(%{assigns: %{redirect_to: path}} = socket) do
    socket
    |> push_redirect(to: path)
  end
end
