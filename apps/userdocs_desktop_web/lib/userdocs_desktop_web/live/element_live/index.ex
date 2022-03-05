defmodule UserdocsDesktopWeb.ElementLive.Index do
  @moduledoc "The primary element live view"
  use UserdocsDesktopWeb, :live_view

  require Logger
  alias Schemas.Elements.Element
  alias Userdocs.Pages
  alias UserdocsDesktopWeb.Icons
  alias UserdocsDesktopWeb.Root
  alias UserdocsDesktopWeb.LiveHelpers
  alias UserdocsDesktopWeb.RootSubscriptionHandlers
  alias UserdocsDesktopWeb.ExtensionMessages

  @impl true
  def mount(_params, session, socket) do
    UserdocsDesktopWeb.Endpoint.subscribe("extension")
    {
      :ok,
      socket
      |> Root.apply(session, [])
      |> assign(:params, %{})
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

  defp apply_action(socket, :edit, %{"page_id" => page_id, "element_id" => element_id} = params) do
    socket
    |> assign(:page_title, "Edit Element")
    |> assign(:page, Client.get_page!(page_id))
    |> assign(:element, Client.get_element!(element_id))
    |> assign(:params, Map.get(params, "params", %{}))
    |> prepare_elements(page_id)
    |> assign_select_lists
  end

  defp apply_action(socket, :edit, %{"id" => element_id} = params) do
    socket
    |> assign(:page_title, "Edit Element")
    |> assign(:element, Client.get_element!(element_id))
    |> assign(:params, Map.get(params, "params", %{}))
    |> prepare_elements()
  end

  defp apply_action(socket, :new, %{"page_id" => page_id} = params) do
    socket
    |> assign(:page_title, "New Element")
    |> prepare_elements(page_id)
    |> assign(:page, Client.get_page!(page_id))
    |> assign(:element, %Element{})
    |> assign(:params, Map.get(params, "params", %{}))
    |> assign_select_lists
  end

  defp apply_action(socket, :index, %{"page_id" => page_id}) do
    socket
    |> assign(:page_title, "Listing Elements")
    |> assign(:element, nil)
    |> prepare_elements(page_id)
    |> assign(:page, Client.get_page!(page_id))
  end

  defp apply_action(socket, :index, _params) do
    socket
    |> assign(:page_title, "Listing Elements")
    |> assign(:element, nil)
    |> assign(:page, nil)
  end

  @impl true
  def handle_event("highlight", %{"id" => element_id}, socket) do
    opts = [preloads: [:strategy]]
    element = Client.get_element!(element_id, opts)
    BrowserController.execute({:highlight, %{strategy: element.strategy_id, selector: element.selector}})
    {:noreply, socket}
  end
  def handle_event("delete", %{"id" => id, "page-id" => _page_id}, socket) do
    Client.delete_element(id)
    {:noreply, socket}
  end
  def handle_event("navigate", %{"id" => page_id}, socket) do
    page = Client.get_page!(page_id)
    user = Client.current_user()
    project = Client.current_project()
    url = Pages.effective_url(page, project, user)
    BrowserController.execute({:navigate, %{url: url}})
    {:noreply, socket}
  end

  @impl true
  def handle_info(%{topic: "extension", event: "browser_interaction", payload: %{action: "click"} = payload},
  %{assigns: %{page: page, live_action: live_action}} = socket) do
    params = ExtensionMessages.element_params(payload)
    case live_action do
      :index ->
        element = Client.find_element(:selector, payload.generated_selector)
        current_page = Client.find_page_by_path(payload.href, %{})
        flash_message =
          ExtensionMessages.maybe_create_element_flash("", socket, element, page, params, :patch)
          |> ExtensionMessages.maybe_update_element_flash(socket, element, page, params, :patch)
          |> ExtensionMessages.maybe_create_page_flash(socket, current_page, params, :redirect)

        {:noreply, socket |> put_flash(:info, flash_message)}
      :new -> {:noreply, assign(socket, :params, params)}
      :edit -> {:noreply, assign(socket, :params, params)}
    end
  end
  def handle_info(%{topic: "extension", event: "browser_interaction", payload: _payload}, socket) do
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
       []
       |> Keyword.put(:preloads, @preloads)
       |> Keyword.put(:order, @order)
       |> Keyword.put(:filter, {:page_id, page_id})

    assign(socket, :elements, Client.list_elements(opts))
  end

  defp prepare_elements(socket) do
    opts =
      []
      |> Keyword.put(:preloads, @preloads)
      |> Keyword.put(:order, @order)

   assign(socket, :elements, Client.list_elements(opts))
  end

  def assign_select_lists(socket) do
    assign(socket, :select_lists, %{
      pages: pages_select(),
      strategies: strategies_select()
    })
  end

  def pages_select() do
    Client.list_pages(%{})
    |> LiveHelpers.select_list(:name, :true)
  end

  def strategies_select() do
    Client.list_strategies(%{})
    |> LiveHelpers.select_list(:name, :false)
  end
end
