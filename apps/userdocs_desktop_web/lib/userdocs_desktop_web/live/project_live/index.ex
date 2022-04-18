defmodule UserdocsDesktopWeb.ProjectLive.Index do
  @moduledoc "Primary project live view"
  use UserdocsDesktopWeb, :live_view
  require Logger
  alias Schemas.Projects.Project
  alias UserdocsDesktopWeb.Root
  alias UserdocsDesktopWeb.LiveHelpers
  alias UserdocsDesktopWeb.RootSubscriptionHandlers
  alias UserdocsDesktopWeb.RootEventHandlers
  alias UserdocsDesktopWeb.Icons

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
      |> apply_action(socket.assigns.live_action, params)
      |> assign(url: URI.parse(url))
    }
  end

  defp apply_action(socket, :edit, %{"id" => id}) do
    socket
    |> assign(:project, Client.get_project!(id, %{}))
    |> assign(:projects, prepare_projects())
    |> assign(:page_title, "Edit Project")
    |> assign(:teams_select_options, teams_select_options())
    |> assign(:current_team, Client.current_team())
    |> assign(:strategies_select_options, strategies_select_options())
  end

  defp apply_action(socket, :new, _params) do
    socket
    |> assign(:page_title, "New Project")
    |> assign(:project, %Project{})
    |> assign(:teams_select_options, teams_select_options())
    |> assign(:strategies_select_options, strategies_select_options())
    |> assign(:current_team, Client.current_team())
    |> assign(:projects, prepare_projects())
  end

  defp apply_action(socket, :index, %{"team_id" => team_id}) do
    socket
    |> assign(:page_title, "Listing Projects")
    |> assign(:project, nil)
    |> assign(:current_team, Client.get_team!(team_id, %{}))
    |> assign(:projects, prepare_projects())
  end

  defp apply_action(socket, :index, _params) do
    socket
    |> assign(:page_title, "Listing Projects")
    |> assign(:project, nil)
    |> assign(:current_team, Client.current_team())
    |> assign(:projects, prepare_projects())
  end

  @impl true
  def handle_event("delete", %{"id" => id}, socket) do
    Client.delete_project(id)
    {:noreply, socket}
  end

  def handle_event(n, p, s), do: RootEventHandlers.handle_event(n, p, s)

  @impl true
  def handle_info(%{payload: %Project{}} = sub_data, socket) do
    {:noreply, socket} = RootSubscriptionHandlers.handle_info(sub_data, socket)
    {:noreply, assign(socket, :projects, prepare_projects())}
  end
  def handle_info(%{event: "load_finished"}, socket) do
    {:noreply, push_redirect(socket, to: Routes.project_index_path(socket, :index))}
  end

  def handle_info(n, p), do: RootSubscriptionHandlers.handle_info(n, p)

  defp prepare_projects() do
    team = Client.current_team()
    opts = [filter: {:team_id, team.id}]
    Client.list_projects(opts)
  end

  defp strategies_select_options() do
    Client.list_strategies()
    |> LiveHelpers.select_list(:name, true)
  end

  defp teams_select_options() do
    Client.list_teams()
    |> LiveHelpers.select_list(:name, true)
  end
end
