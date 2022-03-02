defmodule UserdocsWeb.TeamChannel do
  @moduledoc false
  use UserdocsWeb, :channel

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

  # Add authorization logic here as required.
  defp authorized?(_payload) do
    true
  end
end
