defmodule UserdocsDesktopWeb.Root do
  @moduledoc "Functions that are used by most/all live views, typically for initialization"
  use Phoenix.LiveView
  require Logger
  alias Schemas.Users.User
  alias UserdocsDesktopWeb.Defaults
  alias UserdocsDesktopWeb.Router.Helpers, as: Routes

  def render(assigns), do: ~L""

  def apply(socket, session, types) do
    socket
    |> maybe_assign_loading_status()
    |> do_authentication(session, types)
  end

  def do_authentication(%{assigns: %{status: "connected"}} = socket, session, types) do
    socket
    #|> put_access_token()
    #|> assign_current_user()
    |> continue_apply(session, types)
  end
  def do_authentication(socket, _session, _types), do: socket

  # def continue_apply(%{assigns: %{status: "loading"}} = socket, _, _), do: socket
  def continue_apply(socket, _session, types) do
    opts = Defaults.opts(socket, types)
    socket
    #|> check_channel()
    #|> assign_state_opts(types)
    |> subscribe()
    #|> StateHandlers.initialize(opts)
  end
  def continue_apply(socket, _session, _types), do: socket

  # https://elixirforum.com/t/liveview-calls-mount-two-times/30519/3
  def maybe_assign_loading_status(socket) do
    """
    case connected?(socket) do
      true -> assign(socket, status: "connected")
      false -> assign(socket, status: "connecting")
    end
    """
    assign(socket, status: "connected")
  end

  def put_access_token(socket) do
    {:ok, %{access_token: access_token}} = Session.tokens()
    assign(socket, :access_token, access_token)
  end

  # This will go, eventually
  def assign_current_user(socket) do
    case Client.current_user() do
      %User{} = user ->
        socket
        |> assign(:current_user, user)
      _ ->
        socket
        |> put_flash(:warning, "Session initialization failed, please log in.")
        |> assign(:current_user, nil)
        |> push_redirect(to: Routes.session_index_path(socket, :new))
    end
  end

  def check_channel(%{assigns: %{current_user: %User{} = user}} = socket) do
    case Client.connected?() do
      true -> socket
      false ->
        {:ok, %{access_token: access_token}} = Session.tokens()
        #:ok = Client.connect()
        socket
    end
  end

  def subscribe(socket) do
    UserdocsDesktopWeb.Endpoint.subscribe("data")
    socket
  end

  def assign_state_opts(socket, types),
    do: assign(socket, :state_opts, Defaults.opts(socket, types))

  def assign_url(socket), do: assign(socket, :url, %URI{})
end
