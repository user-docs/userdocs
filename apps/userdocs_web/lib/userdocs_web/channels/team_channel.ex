defmodule UserdocsWeb.TeamChannel do
  @moduledoc false
  use UserdocsWeb, :channel
  alias UserdocsWeb.Presence

  @impl true
  def join("team:" <> _team_id, %{"app" => app} = payload, socket) do
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
  def handle_in("create", payload, socket) do
    IO.puts("#{__MODULE__}.create subscription message")
    broadcast!(socket, "create", payload)
    {:reply, {:ok, payload}, socket}
  end
  def handle_in("update", payload, socket) do
    IO.puts("#{__MODULE__}.update subscription message")
    broadcast!(socket, "update", payload)
    {:reply, {:ok, payload}, socket}
  end

  @impl true
  def handle_info({:after_join, app}, socket) do
    {:ok, _} = Presence.track(socket, app, %{
      online_at: inspect(System.system_time(:second))
    })
    {:noreply, socket}
  end
  def handle_info(%{event: event, payload: payload}, socket) when event in ["create", "update", "delete"] do
    broadcast!(socket, event, payload)
    {:noreply, socket}
  end

  # Add authorization logic here as required.
  defp authorized?(_payload) do
    true
  end
end
