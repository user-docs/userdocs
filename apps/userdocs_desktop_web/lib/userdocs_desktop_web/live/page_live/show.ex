defmodule UserdocsDesktopWeb.PageLive.Show do
  @moduledoc "Shows a page, will eventually include element and annotation CRUD operations"
  use UserdocsDesktopWeb, :live_view

  alias Schemas.Elements.Element

  alias UserdocsDesktopWeb.Root
  alias UserdocsDesktopWeb.LiveHelpers
  alias UserdocsDesktopWeb.RootSubscriptionHandlers

  @impl true
  def mount(_params, session, socket) do
    {
      :ok,
      socket
      |> Root.apply(session, [])
      |> assign(:user, Client.current_user())
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

  @impl true
  def handle_info(n, s), do: RootSubscriptionHandlers.handle_info(n, s)

  defp apply_action(socket, :show, %{"id" => id}) do
    socket
    |> assign(:page_title, page_title(socket.assigns.live_action))
    |> assign(:page, Client.get_page!(id))
    |> assign_select_lists
  end

  defp apply_action(socket, :edit, %{"id" => id}) do
    socket
    |> assign(:page_title, page_title(socket.assigns.live_action))
    |> assign(:page, Client.get_page!(id))
    |> assign_select_lists
  end

  defp apply_action(socket, :edit_element, %{"page_id" => page_id, "element_id" => element_id}) do
    socket
    |> assign(:page_title, page_title(socket.assigns.live_action))
    |> assign(:page, Client.get_page!(page_id))
    |> assign(:element, Client.get_element!(element_id))
    |> assign_select_lists
  end

  defp apply_action(socket, :new_element, %{"page_id" => page_id}) do
    socket
    |> assign(:page_title, page_title(socket.assigns.live_action))
    |> assign(:page, Client.get_page!(page_id))
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
      projects: projects_select()
    })
  end

  defp projects_select() do
    Client.list_projects()
    |> LiveHelpers.select_list(:name, :false)
  end
end
