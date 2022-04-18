defmodule UserdocsDesktopWeb.RootSubscriptionHandlers do
  @moduledoc "Functions for handling subscriptions that are common to most/all views and are delegated to the root."
  require Logger

  def handle_info(%{topic: "data", event: "update_user", payload: payload}, socket) do
    alias Userdocs.Users
    {:ok, user} = Users.create_prepared_user(payload)
    {
      :noreply,
      socket
      |> Phoenix.LiveView.assign(:current_user, user)
    }
  end
  def handle_info(%{topic: "browser", event: _, payload: _}, _socket) do
    raise("Received browser event at root")
  end
  def handle_info(%{topic: topic, event: event, payload: payload}, socket) do
    schema = case payload do
      %{objects: [object | _ ]} -> object.__meta__.schema
      object -> object.__meta__.schema
    end
    Logger.debug("#{__MODULE__} handling info on topic #{topic}, event #{event}, view: #{socket.view}, type: #{schema}")
    {:noreply, socket}
  end
end
