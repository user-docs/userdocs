defmodule UserdocsDesktopWeb.Root do
  @moduledoc "Functions that are used by most/all live views, typically for initialization"
  use Phoenix.LiveView
  require Logger
  alias Schemas.Users.User
  alias UserdocsDesktopWeb.Defaults
  alias UserdocsDesktopWeb.Router.Helpers, as: Routes

  def render(assigns), do: ~L""

  def apply(socket, _session, _types) do
    socket
    |> subscribe()
    |> assign_current_user()
  end

  # https://elixirforum.com/t/liveview-calls-mount-two-times/30519/3
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

  def subscribe(socket) do
    UserdocsDesktopWeb.Endpoint.subscribe("data")
    socket
  end

  def assign_state_opts(socket, types),
    do: assign(socket, :state_opts, Defaults.opts(socket, types))

  def assign_url(socket), do: assign(socket, :url, %URI{})
end
