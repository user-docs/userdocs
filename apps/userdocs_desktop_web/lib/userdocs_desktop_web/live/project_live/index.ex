defmodule UserdocsDesktopWeb.ProjectLive.Index do
  use UserdocsDesktopWeb, :live_view
  require Logger
  alias Schemas.Projects.Project
  alias Schemas.Users.User
  alias Userdocs.Helpers
  alias Userdocs.Users
  alias Userdocs.Projects
  alias UserdocsDesktopWeb.Root
  alias UserdocsDesktopWeb.Loaders
  alias UserdocsDesktopWeb.LiveHelpers
  alias UserdocsDesktopWeb.RootSubscriptionHandlers
  alias UserdocsDesktopWeb.RootEventHandlers
  alias UserdocsDesktopWeb.Icons

  def opts(token), do: %{access_token: token, context: %{repo: Client}}

  def types() do
    [
      Schemas.Projects.Project,
      Schemas.Teams.Team,
      Schemas.Strategies.Strategy
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
    |> Loaders.projects()
    |> Loaders.teams()
    |> Loaders.strategies()
    |> assign(:modal_action, :show)
    |> assign(:state_opts, socket.assigns.state_opts)
  end
  def initialize(socket), do: socket

  @impl true
  def handle_params(_, _, %{assigns: %{status: "connecting"}} = socket), do: {:noreply, socket}
  def handle_params(params, url, %{assigns: %{status: "connected"}} = socket) do
    {:noreply, socket |> apply_action(socket.assigns.live_action, params) |> assign(url: URI.parse(url))}
  end

  defp apply_action(socket, :edit, %{"id" => id}) do
    opts = socket.assigns.state_opts
    socket
    |> assign(:project, State.Projects.get_project!(id, socket, opts))
    |> assign(:projects, State.Projects.list_projects(socket, opts))
    |> assign(:page_title, "Edit Project")
    |> assign(:teams_select_options, teams_select_options(socket))
    |> assign(:strategies_select_options, strategies_select_options(socket))
  end

  defp apply_action(socket, :new, _params) do
    opts = socket.assigns.state_opts
    socket
    |> assign(:page_title, "New Project")
    |> assign(:project, %Project{})
    |> assign(:teams_select_options, teams_select_options(socket))
    |> assign(:strategies_select_options, strategies_select_options(socket))
    |> assign(:projects, State.Projects.list_projects(socket, opts))
  end

  defp apply_action(socket, :index, %{"team_id" => team_id}) do
    opts = socket.assigns.state_opts
    socket
    |> assign(:page_title, "Listing Projects")
    |> assign(:project, nil)
    |> assign(:current_team, State.Teams.get_team!(team_id, socket, opts))
    |> assign(:projects, State.Projects.list_projects(socket, opts))
  end
  defp apply_action(socket, :index, _params) do
    opts = socket.assigns.state_opts
    socket
    |> assign(:current_team, socket.assigns.current_user.selected_team)
    |> assign(:page_title, "Listing Projects")
    |> assign(:project, nil)
    |> assign(:projects, State.Projects.list_projects(socket, opts))
  end

  @impl true
  def handle_event("delete", %{"id" => id}, socket) do
    Projects.delete_project(id, opts(socket.assigns.access_token))
    {:noreply, socket}
  end
  def handle_event(n, p, s), do: RootEventHandlers.handle_event(n, p, s)

  @impl true
  def handle_info(%{topic: _, event: _, payload: %Project{}} = sub_data,
  %{assigns: %{current_user: %{selected_team_id: _team_id}}} = socket) do
    opts = socket.assigns.state_opts
    {:noreply, socket} = RootSubscriptionHandlers.handle_info(sub_data, socket)
    {:noreply, assign(socket, :projects, State.Projects.list_projects(socket, opts))}
  end
  def handle_info(%{topic: "data", event: "update_user", payload: payload}, socket) do
    alias Userdocs.Users
    {:ok, user} = Users.create_prepared_user(payload)
    Session.assign_current_user(user)
    {
      :noreply,
      socket
      |> Phoenix.LiveView.assign(:current_user, user)
      |> push_redirect(to: Routes.project_index_path(socket, :index, user.selected_team_id))
    }
  end
  def handle_info(n, p), do: RootSubscriptionHandlers.handle_info(n, p)

  defp strategies_select_options(socket) do
    State.Strategies.list_strategies(socket, socket.assigns.state_opts)
    |> LiveHelpers.select_list(:name, true)
  end

  defp teams_select_options(socket) do
    State.Teams.list_teams(socket, socket.assigns.state_opts)
    |> LiveHelpers.select_list(:name, true)
  end
end
