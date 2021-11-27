defmodule UserdocsDesktopWeb.ElementLive.Index do
  use UserdocsDesktopWeb, :live_view

  require Logger
  alias Schemas.Elements.Element
  alias Schemas.Pages.Page
  alias Schemas.Strategies.Strategy
  alias Userdocs.Pages
  alias Userdocs.Elements
  alias UserdocsDesktop.BrowserController
  alias UserdocsDesktopWeb.Icons
  alias UserdocsDesktopWeb.Root
  alias UserdocsDesktopWeb.Loaders
  alias UserdocsDesktopWeb.LiveHelpers
  alias UserdocsDesktopWeb.RootSubscriptionHandlers

  def opts(token), do: %{access_token: token, context: %{repo: Client}}

  def data_types do
    [
      Schemas.Strategies.Strategy,
      Schemas.Elements.Element,
      Schemas.Pages.Page
    ]
  end

  @impl true
  def mount(_params, session, socket) do
    UserdocsDesktopWeb.Endpoint.subscribe("extension")
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
    |> assign(:params, %{})
    |> Loaders.strategies()
    |> Loaders.pages()
    |> Loaders.elements()
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

  defp apply_action(socket, :edit, %{"page_id" => page_id, "element_id" => element_id} = params) do
    opts = socket.assigns.state_opts
    socket
    |> assign(:page_title, "Edit Element")
    |> assign(:page, State.Pages.get_page!(String.to_integer(page_id), socket, opts))
    |> assign(:element, State.Elements.get_element!(String.to_integer(element_id), socket, opts))
    |> assign(:params, Map.get(params, "params", %{}))
    |> prepare_elements(String.to_integer(page_id))
    |> assign_select_lists
  end

  defp apply_action(socket, :edit, %{"id" => id} = params) do
    opts = socket.assigns.state_opts
    socket
    |> assign(:page_title, "Edit Element")
    |> assign(:element, State.Elements.get_element!(String.to_integer(id), socket, opts))
    |> assign(:params, Map.get(params, "params", %{}))
    |> prepare_elements()
  end

  defp apply_action(socket, :new, %{"page_id" => page_id} = params) do
    opts = socket.assigns.state_opts
    socket
    |> assign(:page_title, "New Element")
    |> prepare_elements(String.to_integer(page_id))
    |> assign(:page, State.Pages.get_page!(String.to_integer(page_id), socket, opts))
    |> assign(:element, %Element{})
    |> assign(:params, Map.get(params, "params", %{}))
    |> assign_select_lists
  end

  defp apply_action(socket, :index, %{"page_id" => page_id}) do
    opts = socket.assigns.state_opts
    socket
    |> assign(:page_title, "Listing Elements")
    |> assign(:element, nil)
    |> prepare_elements(String.to_integer(page_id))
    |> assign(:page, State.Pages.get_page!(String.to_integer(page_id), socket, opts))
  end

  defp apply_action(socket, :index, _params) do
    socket
    |> assign(:page_title, "Listing Elements")
    |> assign(:element, nil)
    |> assign(:page, nil)
  end

  @impl true
  def handle_event("highlight", %{"id" => id}, socket) do
    opts = socket.assigns.state_opts |> Keyword.put(:preloads, [:strategy])
    element = State.Elements.get_element!(String.to_integer(id), socket, opts)
    BrowserController.execute({:highlight, %{strategy: element.strategy_id, selector: element.selector}})
    {:noreply, socket}
  end

  def handle_event("delete", %{"id" => id, "page-id" => _page_id}, socket) do
    opts = opts(socket.assigns.access_token)
    Elements.delete_element(id, opts)
    {:noreply, socket}
  end

  def handle_event("navigate", %{"id" => id}, %{assigns: %{state_opts: opts,  current_user: %{selected_project: project} = user}} = socket) do
    page = State.Pages.get_page!(String.to_integer(id), socket, opts)
    url = Pages.effective_url(page, project, user)
    BrowserController.execute({:navigate, %{url: url}})
    {:noreply, socket}
  end

  @impl true
  def handle_info(%{topic: "extension", event: "browser_interaction", payload: %{action: "click"} = payload},
  %{assigns: %{state_opts: opts, page: page, live_action: live_action}} = socket) do
    params =
      Map.take(payload, [:name, :direct_selector, :generated_selector, :outer_html])
      |> Map.put(:name, payload.element_name)
      |> Map.put(:strategy_id, "css")
      |> Map.put(:selector, payload.generated_selector)

    flash_message =
      case State.Elements.find_element(socket, opts, :selector, payload.generated_selector) do
        nil -> [
          content_tag(:label, "Would you like to create the element you are interacting with?", class: "mx-3"),
          live_patch("Create", to: Routes.element_index_path(socket, :new, page.id, params: params), class: "btn btn-primary")
        ]
        %Element{id: element_id} -> [
          content_tag(:label, "Would you like to update the element you are interacting with?", class: "mx-3"),
          live_patch("Update", to: Routes.element_index_path(socket, :edit, page.id, element_id, params: params), class: "btn btn-primary")
        ]
      end

    case live_action do
      :index ->
        flash_message =
        {:noreply, socket |> put_flash(:info, flash_message)}

      :new -> {:noreply, assign(socket, :params, params)}
      :edit -> {:noreply, assign(socket, :params, params)}
    end
  end
  def handle_info(%{topic: "extension", event: "browser_interaction", payload: payload}, socket) do
    Logger.debug("#{__MODULE__} received an unsupported action {action}")
    {:noreply, socket}
  end
  def handle_info(%{topic: _, event: _, payload: %Element{}} = sub_data,
  %{assigns: %{page: page}} = socket) do
    {:noreply, socket} = RootSubscriptionHandlers.handle_info(sub_data, socket)
    {:noreply, prepare_elements(socket, page.id)}
  end
  def handle_info(n, s), do: RootSubscriptionHandlers.handle_info(n, s)

  @preloads [:strategy]
  @order [%{field: :name, order: :asc}]
  defp prepare_elements(socket, page_id) do
     opts =
       socket.assigns.state_opts
       |> Keyword.put(:preloads, @preloads)
       |> Keyword.put(:order, @order)
       |> Keyword.put(:filter, {:page_id, page_id})

    assign(socket, :elements, State.Elements.list_elements(socket, opts))
  end

  defp prepare_elements(socket) do
    opts =
      socket.assigns.state_opts
      |> Keyword.put(:preloads, @preloads)
      |> Keyword.put(:order, @order)

   assign(socket, :elements, State.Elements.list_elements(socket, opts))
  end

  def assign_select_lists(socket) do
    assign(socket, :select_lists, %{
      pages_select: pages_select(socket),
      strategies: strategies_select(socket)
    })
  end

  def pages_select(%{assigns: %{state_opts: state_opts}} = socket) do
    State.Pages.list_pages(socket, state_opts)
    |> LiveHelpers.select_list(:name, :true)
  end

  def strategies_select(%{assigns: %{state_opts: state_opts}} = socket) do
    StateHandlers.list(socket, Strategy, state_opts)
    |> LiveHelpers.select_list(:name, :false)
  end
end
