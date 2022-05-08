defmodule Client.BaseFixtures do
  def initialize_state(_) do
    Client.init_state()
    :ok
  end

  def reinitialize_state(_) do
    Client.destroy_state()
    Client.init_state()
    :ok
  end

  def put_context_in_client(context) do
    Client.put_in_state(context)
    :ok
  end

  def connect_channel(context) do
    Client.connect()
    :ok
  end
end
