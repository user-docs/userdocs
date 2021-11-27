defmodule UserdocsDesktopWeb.RootEventHandlers do
  require Logger
  alias UserdocsDesktopWeb.Router.Helpers, as: Routes

  def handle_event("sign-out", _payload, socket) do
    alias Userdocs.Tokens
    Tokens.delete_all(%{context: %{repo: Userdocs.LocalRepo}})
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
