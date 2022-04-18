defmodule UserdocsDesktopWeb.ProcessLive.Index do
  use UserdocsDesktopWeb, :live_view
  require Logger

  alias Schemas.Processes.Process
  alias Schemas.ProcessInstances.ProcessInstance

  alias UserdocsDesktopWeb.Icons
  alias UserdocsDesktopWeb.LiveHelpers
  alias UserdocsDesktopWeb.RootSubscriptionHandlers
  alias UserdocsDesktopWeb.RootEventHandlers
  alias UserdocsDesktopWeb.Root

  @impl true
  def mount(_params, session, socket) do
    {
      :ok,
      socket
      |> Root.apply(session, [])
      |> assign(:current_project, Client.current_project())
      |> assign(:select_lists, %{})
    }
  end

  @impl true
  def handle_params(params, url, socket) do
    project = Client.current_project()
    {
      :noreply,
      socket
      |> prepare_processes(project.id)
      |> assign(url: URI.parse(url))
      |> apply_action(socket.assigns.live_action, params)
    }
  end

  defp apply_action(socket, :edit, %{"id" => process_id}) do
    socket
    |> assign(:page_title, "Edit Process")
    |> assign(:process, Client.get_process!(process_id))
    |> assign_select_lists()
  end

  defp apply_action(socket, :new, _params) do
    socket
    |> assign(:page_title, "New Process")
    |> assign(:process, %Process{})
    |> assign_select_lists()
  end

  defp apply_action(socket, :index, %{"project_id" => project_id}) do
    project = Client.get_project!(project_id)
    socket
    |> assign(:page_title, "Listing Processes")
    |> assign(:current_project, project)
    |> prepare_processes(project.id)
    |> assign_select_lists()
  end

  defp apply_action(socket, :index, _params) do
    socket
    |> assign(:page_title, "Listing Processes")
    |> assign(:process, nil)
  end

  @impl true
  def handle_event("select-project" = n, p, s) do
    {:noreply, socket} = RootEventHandlers.handle_event(n, p, s)
    {:noreply, prepare_processes(socket, socket.assigns.current_project.id)}
  end
  def handle_event("delete", %{"id" => id}, socket) do
    Client.delete_process(id)
    {:noreply, socket}
  end
  def handle_event(n, p, s), do: RootEventHandlers.handle_event(n, p, s)

  @impl true
  def handle_info(%{payload: %ProcessInstance{}} = sub_data, socket) do
    Logger.debug("#{__MODULE__} Received a ProcessInstance broadcast")
    {:noreply, socket} = RootSubscriptionHandlers.handle_info(sub_data, socket)
    project = Client.current_project()
    {:noreply, prepare_processes(socket, project.id)}
  end
  def handle_info(%{payload: %Process{}} = sub_data, socket) do
    Logger.debug("#{__MODULE__} Received a Process broadcast")
    {:noreply, socket} = RootSubscriptionHandlers.handle_info(sub_data, socket)
    project = Client.current_project()
    {:noreply, prepare_processes(socket, project.id)}
  end
  def handle_info(%{event: "load_finished"}, socket) do
    {:noreply, push_redirect(socket, to: Routes.process_index_path(socket, :index))}
  end

  def handle_info(p, s), do: RootSubscriptionHandlers.handle_info(p, s)

  def assign_select_lists(socket) do
    assign(socket, :select_lists, %{
      projects: projects_select()
    })
  end

  def projects_select() do
    Client.list_projects()
    |> LiveHelpers.select_list(:name, :true)
  end

  def prepare_processes(socket, project_id) do
    opts =
      []
      |> Keyword.put(:filters, {:project_id, project_id})
      |> Keyword.put(:order, [%{field: :name, order: :asc}])
      #|> Keyword.put(:preloads, [:process_instance])

    socket
    |> assign(:processes, Client.list_processes(opts))
  end

  def load_process_instances(socket, _opts) do
    socket
  end
end
