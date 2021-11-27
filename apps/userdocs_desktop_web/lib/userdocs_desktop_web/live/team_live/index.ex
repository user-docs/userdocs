defmodule UserdocsDesktopWeb.TeamLive.Index do
  use UserdocsDesktopWeb, :live_view

  alias Schemas.Teams.Team
  alias Schemas.Teams.TeamUser
  alias Schemas.Users.User
  alias Schemas.Projects.Project
  alias Userdocs.Projects
  alias Userdocs.Users
  alias Userdocs.Teams
  alias Userdocs.TeamUsers
  alias UserdocsDesktopWeb.Root
  alias UserdocsDesktopWeb.LiveHelpers
  alias UserdocsDesktopWeb.RootSubscriptionHandlers
  alias UserdocsDesktopWeb.RootEventHandlers
  alias UserdocsDesktopWeb.Icons

  @preloads [:projects, :team_users, [team_users: :user]]

  def opts(token), do: %{access_token: token, context: %{repo: Client}}

  def types() do
    [
      Schemas.Teams.Team,
      Schemas.Users.User,
      Schemas.Teams.TeamUser,
      Schemas.Projects.Project
    ]
  end

  @impl true
  def mount(_params, session, socket) do
    {
      :ok,
      socket
      |> Root.apply(session, types())
      |> initialize()
    }
  end

  def initialize(%{assigns: %{status: "connecting"}} = socket), do: socket
  def initialize(%{assigns: %{status: "connected"}} = socket) do
    socket
    |> assign(:modal_action, :show)
    |> load_teams()
    |> load_team_users()
    |> load_users()
    |> load_projects()
  end
  def initialize(socket), do: socket

  @impl true
  def handle_params(_, _, %{assigns: %{status: "connecting"}} = socket), do: {:noreply, socket}
  def handle_params(params, url, %{assigns: %{status: "connected"}} = socket) do
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
    Teams.delete_team(id, opts(socket.assigns.access_token))
    {:noreply, socket}
  end
  # I had to do all this nonsense because I couldn't figure out how to know what team to send the broadcast to
  def handle_event("remove-team-user", %{"remove" => team_user_id}, socket) do
    opts = socket.assigns.state_opts
    TeamUsers.delete_team_user(team_user_id, opts(socket.assigns.access_token))
    team_user = State.TeamUsers.get_team_user!(team_user_id, socket, opts)
    socket = StateHandlers.delete(socket, team_user, opts)
    {:noreply, socket |> prepare_teams() |> prepare_team(socket.assigns.team.id)}
  end
  def handle_event(n, p, s), do: RootEventHandlers.handle_event(n, p, s)

  def prepare_teams(%{assigns: %{state_opts: state_opts}} = socket) do
    opts = Keyword.put(state_opts, :preloads, @preloads)
    assign(socket, :teams, State.Teams.list_teams(socket, opts))
  end

  def prepare_team(%{assigns: %{state_opts: state_opts}} = socket, id) do
    opts = Keyword.put(state_opts, :preloads, @preloads)
    team = State.Teams.get_team!(id, socket, opts)
    socket
    |> assign(:team, team)
    |> assign(:projects_select_options, LiveHelpers.select_list(team.projects, :name, false))
  end

  defp load_teams(%{assigns: %{state_opts: state_opts, access_token: access_token, current_user: %{id: user_id}}} = socket) do
    opts = %{
      filters: %{user_id: user_id},
      context: %{repo: Client},
      access_token: access_token
    }
    teams = Teams.list_teams(opts)
    StateHandlers.load(socket, teams, Team, state_opts)
  end

  defp load_team_users(%{assigns: %{state_opts: state_opts, access_token: access_token, current_user: %{id: user_id}}} = socket) do
    opts = %{
      filters: %{opposite_user_id: user_id},
      context: %{repo: Client},
      access_token: access_token
    }
    team_users = TeamUsers.list_team_users(opts)
    StateHandlers.load(socket, team_users, TeamUser, state_opts)
  end

  defp load_users(%{assigns: %{state_opts: state_opts, access_token: access_token, current_user: %{id: user_id}}} = socket) do
    opts = %{
      filters: %{user_id: user_id},
      context: %{repo: Client},
      access_token: access_token
    }
    users = Users.list_users(opts)
    StateHandlers.load(socket, users, User, state_opts)
  end

  defp load_projects(%{assigns: %{state_opts: state_opts, access_token: access_token, current_user: %{id: user_id}}} = socket) do
    opts = %{
      filters: %{user_id: user_id},
      context: %{repo: Client},
      access_token: access_token
    }
    projects = Projects.list_projects(opts)
    StateHandlers.load(socket, projects, Project, state_opts)
  end

  @impl true
  def handle_info(%{topic: _, event: _, payload: %TeamUser{}} = sub_data, socket) do
    {:noreply, socket} = RootSubscriptionHandlers.handle_info(sub_data, socket)
    case socket.assigns.live_action do
      action when action in [:edit, :invite] ->
        {:noreply, socket |> prepare_teams() |> prepare_team(socket.assigns.team.id)}
      _ -> {:noreply, prepare_teams(socket)}
    end
  end
  def handle_info(n, s), do: RootSubscriptionHandlers.handle_info(n, s)
end
