defmodule Client.Remote.Channel do
  alias PhoenixClient.{Channel, Socket}

  def push(channel, event, payload) do
    Channel.push(channel, event, payload)
  end

  def wait_until_connected(socket) do
    if !Socket.connected?(socket) do
      Process.sleep(100)
      wait_until_connected(socket)
    end
    :ok
  end
end
