defmodule UserdocsDesktopWeb.PageLive.Index do
  use UserdocsDesktopWeb, :live_view

  alias Userdocs.Pages
  alias Schemas.Pages.Page
  alias UserdocsDesktop.BrowserController
  alias UserdocsDesktopWeb.Root
  alias UserdocsDesktopWeb.Loaders
  alias UserdocsDesktopWeb.LiveHelpers
  alias UserdocsDesktopWeb.RootSubscriptionHandlers
  alias UserdocsDesktopWeb.RootEventHandlers
  alias UserdocsDesktopWeb.Icons

  def opts(token), do: %{access_token: token, context: %{repo: Client}}

  def data_types do
    [
      Schemas.Pages.Page,
      Schemas.Projects.Project
    ]
  end

  @impl true
  def mount(_params, session, socket) do
    {
      :ok,
      socket
      |> Root.apply(session, data_types())
      |> initialize()
    }
  end

  def initialize(%{assigns: %{status: "connecting"}} = socket), do: socket
  def initialize(%{assigns: %{status: "connected"}} = socket) do
    socket
    |> Loaders.pages()
    |> Loaders.projects()
  end

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

  defp apply_action(%{assigns: %{state_opts: opts, current_user: %{selected_project_id: project_id}}} = socket, :edit, %{"id" => id}) do
    socket
    |> assign(:page_title, "Edit Page")
    |> assign(:page, State.Pages.get_page!(id, socket, opts))
    |> prepare_pages(project_id)
    |> assign_select_lists()
  end

  defp apply_action(socket, :new, _params) do
    socket
    |> assign(:page_title, "New Page")
    |> assign(:page, %Page{})
    |> prepare_pages(socket.assigns.current_user.selected_project.id)
    |> assign_select_lists()
  end

  defp apply_action(socket, :index, _params) do
    socket
    |> assign(:page_title, "Listing Pages")
    |> assign(:page, nil)
    |> prepare_pages(socket.assigns.current_user.selected_project.id)
    |> assign_select_lists()
  end

  @impl true
  def handle_event("delete", %{"id" => id}, socket) do
    Pages.delete_page(id, opts(socket.assigns.access_token))
    {:noreply, socket}
  end

  def handle_event("navigate", %{"id" => id}, %{assigns: %{state_opts: opts,  current_user: %{selected_project: project} = user}} = socket) do
    page = State.Pages.get_page!(String.to_integer(id), socket, opts)
    url = Pages.effective_url(page, project, user)
    BrowserController.execute({:navigate, %{url: url}})
    {:noreply, socket}
  end

  def handle_event(n, p, s), do: RootEventHandlers.handle_event(n, p, s)

  @impl true
  def handle_info(%{topic: _, event: _, payload: %Page{}} = sub_data,
  %{assigns: %{current_user: %{selected_project_id: project_id}}} = socket) do
    {:noreply, socket} = RootSubscriptionHandlers.handle_info(sub_data, socket)
    {:noreply, prepare_pages(socket, project_id)}
  end
  def handle_info(n, s), do: RootSubscriptionHandlers.handle_info(n, s)

  defp prepare_pages(socket, project_id) do
     opts =
       socket.assigns.state_opts
       |> Keyword.put(:order, [%{field: :name, order: :asc}])
       |> Keyword.put(:filter, {:project_id, project_id})

    assign(socket, :pages, State.Pages.list_pages(socket, opts))
  end

  def assign_select_lists(socket) do
    assign(socket, :select_lists, %{
      projects: projects_select(socket)
    })
  end

  def projects_select(%{assigns: %{state_opts: state_opts}} = socket) do
    State.Projects.list_projects(socket, state_opts)
    |> LiveHelpers.select_list(:name, :true)
  end
end
