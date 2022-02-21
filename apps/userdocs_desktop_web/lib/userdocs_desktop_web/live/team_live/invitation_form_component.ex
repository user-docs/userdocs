defmodule UserdocsDesktopWeb.TeamLive.InvitationFormComponent do
  @moduledoc "The form that's used to invite new users to the team."
  use UserdocsDesktopWeb, :live_component
  alias Userdocs.Users
  alias Schemas.Users.User
  alias UserdocsDesktopWeb.Icons

  def opts(token), do: %{access_token: token, context: %{repo: Client}}

  @impl true
  def update(assigns, socket) do
    user = Client.current_user()
    changeset = Users.change_user_invite(%User{}, user, %{invited_by_id: user.id})

    {
      :ok,
      socket
      |> assign(assigns)
      |> assign(:user, %User{})
      |> assign(:changeset, changeset)
    }
  end

  @impl true
  def handle_event("validate", %{"user" => user_params}, socket) do
    changeset =
      socket.assigns.user
      |> Users.change_user_invite(Client.current_user(), user_params)
      |> Map.put(:action, :validate)

    {:noreply, assign(socket, :changeset, changeset)}
  end

  def handle_event("save", %{"user" => user_attrs}, socket) do
    attrs =  %{"user" => user_attrs, "team_id" => socket.assigns.team.id}
    case Client.invite_user(attrs) do
      {:ok, %{"data" => _team_attrs}} ->
        {
          :noreply,
          socket
          |> put_flash(:info, "User Invited successfully")
        }

      {:error, _} ->
        {:noreply, socket}
    end
  end
end
