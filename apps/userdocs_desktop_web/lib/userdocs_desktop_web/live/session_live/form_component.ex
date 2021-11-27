defmodule UserdocsDesktopWeb.SessionLive.FormComponent do
  @moduledoc """
  Form for signing in to userdocs
  """
  use UserdocsDesktopWeb, :live_component
  alias Userdocs.Users
  require Logger

  @impl true
  def update(%{user: user} = assigns, socket) do
    changeset = Users.change_user(user)
    {
      :ok,
      socket
      |> assign(assigns)
      |> assign(:changeset, changeset)
    }
  end

  @impl true
  def handle_event("validate", %{"user" => user_params}, socket) do
    changeset =
      socket.assigns.user
      |> Users.change_user_login(user_params)
      |> Map.put(:action, :validate)

    {:noreply, assign(socket, :changeset, changeset)}
  end

  def handle_event("save", %{"user" => _user_params} = params, socket) do
    case Session.authenticate(params) do
      {:ok, user} ->
        {:ok, %{access_token: at}} = Session.tokens()
        :ok = Client.connect(user, at)
        {
          :noreply,
          socket
          |> Phoenix.LiveView.put_flash(:info, "Logged in successfully")
          |> push_redirect(to: Routes.home_path(socket, :index))
        }
      {:error, message} ->
        {:noreply, Phoenix.LiveView.put_flash(socket, :error, message)}
    end
  end
end
