defmodule UserdocsDesktopWeb.AnnotationLive.Index do
  use UserdocsDesktopWeb, :live_view

  alias Schemas.Annotations.Annotation
  alias Schemas.Annotations.AnnotationType
  alias Userdocs.Annotations
  alias Userdocs.Pages
  alias UserdocsDesktop.BrowserController
  alias UserdocsDesktopWeb.Icons
  alias UserdocsDesktopWeb.Root
  alias UserdocsDesktopWeb.LiveHelpers
  alias UserdocsDesktopWeb.Loaders
  alias UserdocsDesktopWeb.RootSubscriptionHandlers
  alias UserdocsDesktopWeb.RootEventHandlers

  @preloads [:annotation_type, :element_annotations, [element_annotations: :element]]
  @order [%{field: :name, order: :asc}]

  def opts(token), do: %{access_token: token, context: %{repo: Client}}

  def data_types do
    [
      Schemas.Annotations.AnnotationType,
      Schemas.Elements.ElementAnnotation,
      Schemas.Annotations.Annotation,
      Schemas.Elements.Element,
      Schemas.Pages.Page
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
    |> Loaders.annotation_types()
    |> Loaders.pages()
    |> Loaders.elements()
    |> Loaders.annotations()
    |> Loaders.element_annotations()
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

  defp apply_action(socket, :edit, %{"id" => id, "page_id" => page_id}) do
    opts = socket.assigns.state_opts |> Keyword.put(:preloads, @preloads)
    socket
    |> assign(:page_title, "Edit Annotation")
    |> assign(:page, State.Pages.get_page!(page_id, socket, socket.assigns.state_opts))
    |> assign(:annotation, State.Annotations.get_annotation!(id, socket, opts))
    |> prepare_annotations(String.to_integer(page_id))
    |> assign_select_lists
  end

  defp apply_action(socket, :new, %{"page_id" => page_id}) do
    opts = socket.assigns.state_opts
    socket
    |> assign(:page_title, "New Annotation")
    |> assign(:page, State.Pages.get_page!(page_id, socket, opts))
    |> assign(:annotation, %Annotation{})
    |> prepare_annotations(String.to_integer(page_id))
    |> assign_select_lists
  end

  defp apply_action(socket, :index, %{"page_id" => page_id}) do
    opts = socket.assigns.state_opts
    socket
    |> assign(:page_title, "Listing Annotation")
    |> assign(:page, State.Pages.get_page!(page_id, socket, opts))
    |> assign(:annotation, nil)
    |> prepare_annotations(String.to_integer(page_id))
  end

  @impl true
  def handle_event("delete", %{"id" => id}, socket) do
    opts = opts(socket.assigns.access_token)
    Annotations.delete_annotation(id, opts)
    {:noreply, socket}
  end
  def handle_event("apply_annotation", %{"id" => id} = params, socket) do
    opts = socket.assigns.state_opts |> Keyword.put(:preloads, @preloads)
    annotation = State.Annotations.get_annotation!(id, socket, opts)
    case params["value"] do
      "true" -> BrowserController.execute({:create_annotation, %{annotation: annotation}})
      _ -> BrowserController.execute({:remove_annotation, %{annotation: annotation}})
    end
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
  def handle_info(%{topic: _, event: _, payload: %Annotation{}} = sub_data,
  %{assigns: %{page: page}} = socket) do
    {:noreply, socket} = RootSubscriptionHandlers.handle_info(sub_data, socket)
    {:noreply, prepare_annotations(socket, page.id)}
  end
  def handle_info(n, s), do: RootSubscriptionHandlers.handle_info(n, s)

  defp prepare_annotations(socket, page_id) do
     opts = socket.assigns.state_opts
            |> Keyword.put(:order, @order)
            |> Keyword.put(:preloads, @preloads)
            |> Keyword.put(:filter, {:page_id, page_id})

    annotations = State.Annotations.list_annotations(socket, opts)
    assign(socket, :annotations, annotations)
  end

  def assign_select_lists(socket) do
    assign(socket, :select_lists, %{
      pages: pages_select(socket),
      annotation_types: annotation_types_select(socket),
      elements: elements_select(socket)
    })
  end

  def pages_select(%{assigns: %{state_opts: state_opts}} = socket) do
    State.Pages.list_pages(socket, state_opts)
    |> LiveHelpers.select_list(:name, :true)
  end

  def annotation_types_select(%{assigns: %{state_opts: state_opts}} = socket) do
    StateHandlers.list(socket, AnnotationType, state_opts)
    |> LiveHelpers.select_list(:name, :true)
  end

  def elements_select(%{assigns: %{page: page, state_opts: state_opts}} = socket) do
    State.Elements.list_elements(socket, state_opts)
    |> Enum.filter(fn(e) -> e.page_id == page.id end)
    |> LiveHelpers.select_list(:name, :true)
  end
end
