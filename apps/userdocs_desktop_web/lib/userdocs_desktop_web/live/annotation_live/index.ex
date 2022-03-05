defmodule UserdocsDesktopWeb.AnnotationLive.Index do
  @moduledoc "Primary annotation live view"
  use UserdocsDesktopWeb, :live_view

  alias Schemas.Annotations.Annotation
  alias Userdocs.Pages
  alias UserdocsDesktopWeb.Icons
  alias UserdocsDesktopWeb.Root
  alias UserdocsDesktopWeb.LiveHelpers
  alias UserdocsDesktopWeb.RootSubscriptionHandlers
  alias UserdocsDesktopWeb.RootEventHandlers

  @preloads [:annotation_type, :element_annotations, [element_annotations: :element]]
  @order [%{field: :name, order: :asc}]

  @impl true
  def mount(_params, session, socket) do
    {
      :ok,
      socket
      |> Root.apply(session, [])
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

  defp apply_action(socket, :edit, %{"id" => id, "page_id" => page_id}) do
    opts = [preloads: @preloads]
    socket
    |> assign(:page_title, "Edit Annotation")
    |> assign(:page, Client.get_page!(page_id, []))
    |> assign(:annotation, Client.get_annotation!(id, opts))
    |> prepare_annotations(page_id)
    |> assign_select_lists
  end

  defp apply_action(socket, :new, %{"page_id" => page_id}) do
    socket
    |> assign(:page_title, "New Annotation")
    |> assign(:page, Client.get_page!(page_id, []))
    |> assign(:annotation, %Annotation{element_annotations: []})
    |> prepare_annotations(page_id)
    |> assign_select_lists
  end

  defp apply_action(socket, :index, %{"page_id" => page_id}) do
    socket
    |> assign(:page_title, "Listing Annotation")
    |> assign(:page, Client.get_page!(page_id, []))
    |> assign(:annotation, nil)
    |> prepare_annotations(page_id)
  end

  @impl true
  def handle_event("delete", %{"id" => id}, socket) do
    Client.delete_annotation(id)
    {:noreply, socket}
  end
  def handle_event("apply_annotation", %{"id" => id} = params, socket) do
    opts = [preloads: @preloads]
    annotation = Client.get_annotation!(id, opts)
    case params["value"] do
      "true" -> BrowserController.handle_command({:create_annotation, %{annotation: annotation}})
      _ -> BrowserController.handle_command({:remove_annotation, %{annotation: annotation}})
    end
    {:noreply, socket}
  end
  def handle_event("navigate", %{"id" => id}, socket) do
    user = Client.current_user()
    project = Client.current_project()
    page = Client.get_page!(id, %{})
    url = Pages.effective_url(page, project, user)
    BrowserController.handle_command({:navigate, %{url: url}})
    {:noreply, socket}
  end
  def handle_event(n, p, s), do: RootEventHandlers.handle_event(n, p, s)

  @impl true
  def handle_info(%{topic: _, event: _, payload: %Annotation{}},
  %{assigns: %{page: page}} = socket) do
    {:noreply, prepare_annotations(socket, page.id)}
  end
  def handle_info(n, s), do: RootSubscriptionHandlers.handle_info(n, s)

  defp prepare_annotations(socket, page_id) do
    opts = [order: @order, preloads: @preloads, filter: {:page_id, page_id}]
    annotations = Client.list_annotations(opts)
    assign(socket, :annotations, annotations)
  end

  def assign_select_lists(socket) do
    assign(socket, :select_lists, %{
      pages: pages_select(),
      annotation_types: annotation_types_select(),
      elements: elements_select(socket)
    })
  end

  def pages_select() do
    Client.list_pages(%{})
    |> LiveHelpers.select_list(:name, :true)
  end

  def annotation_types_select() do
    Client.list_annotation_types([])
    |> LiveHelpers.select_list(:name, :true)
  end

  def elements_select(%{assigns: %{page: page}}) do
    Client.list_elements([])
    |> Enum.filter(fn(e) -> e.page_id == page.id end)
    |> LiveHelpers.select_list(:name, :true)
  end
end
