defmodule UserdocsWeb.UserChannel do
  @moduledoc false
  require Logger
  use UserdocsWeb, :channel
  alias UserdocsWeb.Presence
  alias UserdocsWeb.UserChannelHandlers

  @impl true
  def join("user:" <> _user_id, %{"app" => app} = payload, socket) do
    if authorized?(payload) do
      send(self(), {:after_join, app})
      {:ok, socket}
    else
      {:error, %{reason: "unauthorized"}}
    end
  end

  @impl true
  def handle_in("ping", payload, socket) do
    {:reply, {:ok, payload}, socket}
  end
  def handle_in("client:query", payload, socket) do
    Logger.debug("Received query")
    {:ok, payload} = Jason.decode(payload, keys: :atoms)
    result = UserChannelHandlers.query(payload)
    {:reply, {:ok, result}, socket}
  end

  def handle_in("client:create", payload, socket) do
    Logger.debug("Received create mutation")
    case UserChannelHandlers.create(payload) do
      {:ok, _} = result -> {:reply, result, socket}
      {:error, _} -> {:reply, {:error, "Create failed, check form errors and try again."}, socket}
    end
  end

  def handle_in("client:update", payload, socket) do
    Logger.debug("Received client update mutation")
    {:ok, update} = Jason.decode(payload)
    case UserChannelHandlers.update(update) do
      {:ok, _} = result -> {:reply, result, socket}
      {:error, _} -> {:reply, {:error, "Update failed, check form errors and try again."}, socket}
    end
  end

  def handle_in("client:delete", payload, socket) do
    Logger.debug("Received delete")
    {:ok, args} = Jason.decode(payload)
    {:reply, UserChannelHandlers.delete(args), socket}
  end

  def handle_in("update", payload, socket) do
    Logger.debug("Received server update broadcast")
    broadcast!(socket, "update", payload)
    {:noreply, socket}
  end

  @impl true
  def handle_info({:after_join, app}, socket) do
    {:ok, _} = Presence.track(socket, app, %{
      online_at: inspect(System.system_time(:second))
    })
    presence_list = Presence.list(socket)
    push(socket, "presence_state", presence_list)
    broadcast!(socket, "presence_state", presence_list)
    {:noreply, socket}
  end

  # Add authorization logic here as required.
  defp authorized?(_payload) do
    true
  end
end
