defmodule UserdocsDesktopWeb.RootEventHandlers do
  @moduledoc "handlers for events that are common to most or all views and are delegated to the root."
  require Logger
  alias UserdocsDesktopWeb.Router.Helpers, as: Routes

  def handle_event("sign-out", _payload, socket) do
    alias Userdocs.Secrets
    Tokens.delete_all_tokens(%{context: %{repo: Userdocs.LocalRepo}})
    {
      :noreply,
      socket
      |> Phoenix.LiveView.push_redirect(to: Routes.session_index_path(socket, :new))
    }
  end

  def handle_event("local-options", _payload, socket),
    do: {:noreply, Phoenix.LiveView.assign(socket, :live_action, :local_options)}
  def handle_event("user-options", _payload, socket),
    do: {:noreply, Phoenix.LiveView.assign(socket, :live_action, :user_options)}
  def handle_event("edit-credentials", _payload, socket),
    do: {:noreply, Phoenix.LiveView.assign(socket, :live_action, :edit_credentials)}
end
