defmodule UserdocsDesktopWeb.RootSubscriptionHandlers do
  require Logger

  def handle_info(%{topic: "data", event: "update_user", payload: payload}, socket) do
    alias Userdocs.Users
    {:ok, user} = Users.create_prepared_user(payload)
    Session.assign_current_user(user)
    {
      :noreply,
      socket
      |> Phoenix.LiveView.assign(:current_user, user)
    }
  end
  def handle_info(%{topic: "browser", event: _, payload: _}, socket) do
    raise("Received browser event at root")
  end
  def handle_info(%{topic: topic, event: event, payload: payload}, socket) do
    schema = case payload do
      %{objects: [object | _ ]} -> object.__meta__.schema
      object -> object.__meta__.schema
    end
    Logger.debug("#{__MODULE__} handling info on topic #{topic}, event #{event}, view: #{socket.view}, type: #{schema}")


    case Keyword.get(socket.assigns.state_opts, :types) do
      nil -> raise(RuntimeError, "Types not populated in calling subscribed view #{socket.view}")
      _ -> ""
    end

    socket =
      case schema in socket.assigns.state_opts[:types] do
        true -> Userdocs.Subscription.handle_event(socket, event, payload, socket.assigns.state_opts)
        false -> socket
      end

    {:noreply, socket}
  end

  def handle_info(%{topic: topic, event: event, payload: _payload}, socket) do
    Logger.warning("Root subscription handler received an unhandled message on topic #{topic}, event #{event}")
    {:noreply, socket}
  end

end
