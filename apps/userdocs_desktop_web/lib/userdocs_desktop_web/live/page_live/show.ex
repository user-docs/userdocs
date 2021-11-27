defmodule UserdocsDesktopWeb.PageLive.Show do
  use UserdocsDesktopWeb, :live_view

  alias Schemas.Elements.Element
  alias Schemas.Projects.Project
  alias Schemas.Pages.Page

  alias UserdocsDesktopWeb.Root
  alias UserdocsDesktopWeb.Loaders
  alias UserdocsDesktopWeb.LiveHelpers

  def opts(token), do: %{access_token: token, context: %{repo: Client}}

  def data_types do
    [
      Schemas.Annotations.AnnotationType,
      Schemas.Strategies.Strategy,
      Schemas.Annotations.Annotation,
      Schemas.Elements.Element,
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

  def initialize(%{assigns: %{auth_state: :not_logged_in}} = socket), do: socket
  def initialize(socket) do
    socket
    |> Loaders.annotation_types()
    |> Loaders.strategies()
    |> Loaders.pages()
    |> Loaders.annotations()
    |> Loaders.elements()
    |> Loaders.projects()
  end

  @impl true
  def handle_params(_, _, %{assigns: %{status: "connecting"}} = socket), do: {:noreply, socket}
  def handle_params(params, url, %{assigns: %{status: "connected"}} = socket) do
    {:noreply, apply_action(socket, socket.assigns.live_action, params)}
  end

  @impl true
  def handle_info(n, s), do: RootSubscriptionHandlers.handle_info(n, s)

  defp apply_action(socket, :show, %{"id" => id}) do
    opts = socket.assigns.state_opts
    socket
    |> assign(:page_title, page_title(socket.assigns.live_action))
    |> assign(:page, State.Pages.get_page!(id, socket, opts))
    |> assign_select_lists
  end

  defp apply_action(socket, :edit, %{"id" => id}) do
    opts = socket.assigns.state_opts
    socket
    |> assign(:page_title, page_title(socket.assigns.live_action))
    |> assign(:page, State.Pages.get_page!(id, socket, opts))
    |> assign_select_lists
  end

  defp apply_action(socket, :edit_element, %{"page_id" => page_id, "element_id" => element_id}) do
    opts = socket.assigns.state_opts
    socket
    |> assign(:page_title, page_title(socket.assigns.live_action))
    |> assign(:page, State.Pages.get_page!(page_id, socket, opts))
    |> assign(:element, State.Elements.get_element!(element_id, socket, opts))
    |> assign_select_lists
  end

  defp apply_action(socket, :new_element, %{"page_id" => page_id}) do
    opts = socket.assigns.state_opts
    socket
    |> assign(:page_title, page_title(socket.assigns.live_action))
    |> assign(:page, State.Pages.get_page!(page_id, socket, opts))
    |> assign(:element, %Element{})
    |> assign_select_lists

  end

  defp page_title(:show), do: "Show Page"
  defp page_title(:edit), do: "Edit Page"
  defp page_title(:edit_element), do: "Edit Element"
  defp page_title(:new_element), do: "New Element"

  def parse_element_live_action(:new_element), do: :new
  def parse_element_live_action(:edit_element), do: :edit

  def assign_select_lists(socket) do
    assign(socket, :select_lists, %{
      projects: projects_select(socket)
    })
  end

  defp projects_select(%{assigns: %{state_opts: state_opts}} = socket) do
    State.Projects.list_projects(socket, state_opts)
    |> LiveHelpers.select_list(:name, :false)
  end
end
