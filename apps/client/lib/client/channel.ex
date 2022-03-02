defmodule Client.Channel do
  @moduledoc "Functions for managing channel connection to the server"
  require Logger

  alias PhoenixClient.{Socket, Channel}

  def connect(user, access_token) do
    Logger.debug("#{__MODULE__} connecting to channel")
    {:ok, socket} = connect_socket(access_token)
    wait_until_connected(socket)
    {:ok, _response, user_channel} = join_user_channel(socket, user.id)
    {:ok, _response, team_channel} = join_team_channel(socket, user.selected_team_id)
    {:ok, %{socket: socket, user_channel: user_channel, team_channel: team_channel}}
  end

  def maybe_reconnect(socket, user_channel, team_channel, user, access_token) do
    case Socket.connected?(socket) do
      true -> {:ok, %{socket: socket, user_channel: user_channel, team_channel: team_channel}}
      false -> connect(user, access_token)
    end
  end

  def connect_socket(token) do
    url = Application.get_env(:userdocs_desktop, :channels_url)
    socket_opts = [url: url, params: %{token: token}]
    Socket.start_link(socket_opts)
  end

  def wait_until_connected(socket) do
    if !Socket.connected?(socket) do
      Process.sleep(100)
      wait_until_connected(socket)
    end
  end

  def join_user_channel(socket, user_id) do
    topic = "user:" <> to_string(user_id)
    params = %{app: "userdocs_desktop"}
    Channel.join(socket, topic, params)
  end

  def join_team_channel(socket, team_id) do
    topic = "team:" <> to_string(team_id)
    params = %{app: "userdocs_desktop"}
    Channel.join(socket, topic, params)
  end

  def disconnect(socket, user_channel, team_channel) do
    Channel.leave(user_channel)
    Channel.leave(team_channel)
    Socket.stop(socket)
    :ok
  end
end
