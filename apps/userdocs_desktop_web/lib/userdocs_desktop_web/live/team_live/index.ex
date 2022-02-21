defmodule UserdocsDesktopWeb.TeamLive.Index do
  @moduledoc "Primary team live view"
  use UserdocsDesktopWeb, :live_view

  alias Schemas.Teams.Team
  alias Schemas.Teams.TeamUser
  alias UserdocsDesktopWeb.Root
  alias UserdocsDesktopWeb.LiveHelpers
  alias UserdocsDesktopWeb.RootSubscriptionHandlers
  alias UserdocsDesktopWeb.RootEventHandlers
  alias UserdocsDesktopWeb.Icons

  @preloads [:projects, :team_users, [team_users: :user]]

  def opts(token), do: %{access_token: token, context: %{repo: Client}}

  @impl true
  def mount(_params, session, socket) do
    {
      :ok,
      socket
      |> Root.apply(session, [])
      |> assign(:modal_action, :show)
    }
  end

  @impl true
  def handle_params(params, url, socket) do
    {
      :noreply,
      socket
      |> assign(url: URI.parse(url))
      |> apply_action(socket.assigns.live_action, params)
    }
  end

  defp apply_action(socket, :edit, %{"id" => id}) do
    socket
    |> assign(:page_title, "Edit Team")
    |> prepare_teams()
    |> prepare_team(id)
  end

  defp apply_action(socket, :invite, %{"id" => id}) do
    socket
    |> assign(:page_title, "Invite New Users")
    |> prepare_teams()
    |> prepare_team(id)
  end

  defp apply_action(socket, :new, _params) do
    socket
    |> assign(:page_title, "New Team")
    |> assign(:team, %Team{users: [], projects: []})
    |> assign(:projects_select_options, [])
    |> prepare_teams()
  end

  defp apply_action(socket, :index, _params) do
    socket
    |> assign(:page_title, "Listing Teams")
    |> assign(:team, nil)
    |> prepare_teams()
  end

  @impl true
  def handle_event("delete", %{"id" => id}, socket) do
    Client.delete_team(id, %{})
    {:noreply, socket}
  end
  # I had to do all this nonsense because I couldn't figure out how to know what team to send the broadcast to
  def handle_event("remove-team-user", %{"remove" => team_user_id}, socket) do
    Client.delete_team_user(team_user_id)
    {:noreply, socket}
  end
  def handle_event(n, p, s), do: RootEventHandlers.handle_event(n, p, s)

  def prepare_teams(socket) do
    opts = [preloads: @preloads]
    assign(socket, :teams, Client.list_teams(opts))
  end

  def prepare_team(socket, id) do
    opts = [preloads: @preloads]
    team = Client.get_team!(id, opts)
    socket
    |> assign(:team, team)
    |> assign(:projects_select_options, LiveHelpers.select_list(team.projects, :name, false))
  end

  @impl true
  def handle_info(%{topic: _, event: _, payload: %Team{}}, %{assigns: %{team: %Team{id: id}}} = socket) do
    {:noreply, socket |> prepare_teams() |> prepare_team(id)}
  end
  def handle_info(%{topic: _, event: _, payload: %Team{}}, socket) do
    {:noreply, socket |> prepare_teams()}
  end
  def handle_info(%{topic: _, event: _, payload: %TeamUser{}}, socket) do
    case socket.assigns.live_action do
      action when action in [:edit, :invite] ->
        {:noreply, socket |> prepare_teams() |> prepare_team(socket.assigns.team.id)}
      _ -> {:noreply, prepare_teams(socket)}
    end
  end
  def handle_info(n, s), do: RootSubscriptionHandlers.handle_info(n, s)
end
