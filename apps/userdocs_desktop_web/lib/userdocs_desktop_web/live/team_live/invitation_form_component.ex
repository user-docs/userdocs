defmodule UserdocsDesktopWeb.TeamLive.InvitationFormComponent do
  use UserdocsDesktopWeb, :live_component
  alias Userdocs.Users
  alias Userdocs.Teams
  alias Userdocs.TeamUsers
  alias Userdocs.Requests
  alias Schemas.Users.User
  alias Schemas.Teams.TeamUser
  alias UserdocsDesktopWeb.Icons

  def opts(token), do: %{access_token: token, context: %{repo: Client}}

  @impl true
  def update(%{current_user: current_user} = assigns, socket) do
    changeset = Users.change_user_invite(%User{}, current_user, %{invited_by_id: current_user.id})

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
      |> Users.change_user_invite(socket.assigns.current_user, user_params)
      |> Map.put(:action, :validate)

    {:noreply, assign(socket, :changeset, changeset)}
  end

  def handle_event("save", %{"user" => user_attrs}, socket) do
    url = Application.get_env(:userdocs_desktop, :host_url) <> "/api/invite"
    params =  %{
      "user" => user_attrs,
      "team_id" => socket.assigns.team.id,
      "current_team_id" => socket.assigns.current_user.selected_team_id
    }
    request_fun = Requests.build_create(url)
    case Requests.send(request_fun, socket.assigns.access_token, params) do
      {:ok, %{"data" => team_attrs}} ->
        _team = Teams.create_team_struct(team_attrs)
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
