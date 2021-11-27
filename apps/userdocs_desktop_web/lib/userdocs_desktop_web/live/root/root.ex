defmodule UserdocsDesktopWeb.Root do
  use Phoenix.LiveView
  require Logger
  alias Schemas.Users.User
  alias UserdocsDesktopWeb.Defaults
  alias UserdocsDesktopWeb.Router.Helpers, as: Routes

  def apply(socket, session, types) do
    socket
    |> maybe_assign_loading_status()
    |> continue_apply(session, types)
  end

  # def continue_apply(%{assigns: %{status: "loading"}} = socket, _, _), do: socket
  def continue_apply(socket, session, types) do
    opts = Defaults.opts(socket, types)
    socket
    |> assign_current_user()
    |> put_access_token()
    |> check_channel()
    |> assign_state_opts(types)
    |> subscribe()
    |> StateHandlers.initialize(opts)
  end

  # https://elixirforum.com/t/liveview-calls-mount-two-times/30519/3
  def maybe_assign_loading_status(socket) do
    case connected?(socket) do
      true -> assign(socket, status: "connected")
      false -> assign(socket, status: "connecting")
    end
  end

  def assign_current_user(socket) do
    case Session.current_user() do
      {:ok, user} ->
        socket
        |> assign(:current_user, user)
      _ ->
        socket
        |> put_flash(:warning, "Session initialization failed, please log in.")
        |> push_redirect(to: Routes.session_index_path(socket, :new))
    end
  end

  def put_access_token(socket) do
    {:ok, %{access_token: access_token}} = Session.tokens()
    assign(socket, :access_token, access_token)
  end

  def check_channel(%{assigns: %{current_user: %User{} = user}} = socket) do
    case Client.connected?() do
      true -> socket
      false ->
        {:ok, %{access_token: access_token}} = Session.tokens()
        :ok = Client.connect(user, access_token)
        socket
    end
  end

  def subscribe(socket) do
    UserdocsDesktopWeb.Endpoint.subscribe("data")
    socket
  end

  def assign_state_opts(socket, types),
    do: assign(socket, :state_opts, Defaults.opts(socket, types))
end
