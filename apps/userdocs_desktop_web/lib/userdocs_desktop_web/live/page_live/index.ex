defmodule UserdocsDesktopWeb.PageLive.Index do
  @moduledoc "Primary page live view"
  use UserdocsDesktopWeb, :live_view
  require Logger

  alias Userdocs.Pages
  alias Schemas.Pages.Page
  alias Schemas.Screenshots.Screenshot
  alias UserdocsDesktopWeb.Root
  alias UserdocsDesktopWeb.LiveHelpers
  alias UserdocsDesktopWeb.RootSubscriptionHandlers
  alias UserdocsDesktopWeb.RootEventHandlers
  alias UserdocsDesktopWeb.Icons
  alias UserdocsDesktopWeb.ExtensionMessages
  alias UserdocsDesktopWeb.Root.BrowserAutomationEventHandlers, as: BrowserEvents
  @preloads [:project, :screenshots]

  @impl true
  def mount(_params, session, socket) do
    Client.list_pages(%{})
    UserdocsDesktopWeb.Endpoint.subscribe("extension")
    {
      :ok,
      socket
      |> Root.apply(session, [])
      |> assign(:user, Client.current_user())
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

  defp apply_action(socket, :edit, %{"id" => page_id} = params) do
    project = Client.current_project()
    socket
    |> assign(:page_title, "Edit Page")
    |> assign(:page, prepare_page(page_id))
    |> assign(:params, Map.get(params, "params", %{}))
    |> assign(:pages, prepare_pages(project.id))
    |> assign_select_lists()
  end

  defp apply_action(socket, :review_screenshot, %{"id" => page_id}) do
    project = Client.current_project()
    socket
    |> assign(:page_title, "Review Screenshot")
    |> assign(:page, prepare_page(page_id))
    |> assign(:pages, prepare_pages(project.id))
    |> assign_select_lists()
  end

  defp apply_action(socket, :new, params) do
    project = Client.current_project()
    socket
    |> assign(:page_title, "New Page")
    |> assign(:page, %Page{project: project})
    |> assign(:params, Map.get(params, "params", %{}))
    |> assign(:pages, prepare_pages(project.id))
    |> assign_select_lists()
  end

  defp apply_action(socket, :index, _params) do
    project = Client.current_project()
    socket
    |> assign(:page_title, "Listing Pages")
    |> assign(:page, nil)
    |> assign(:pages, prepare_pages(project.id))
    |> assign_select_lists()
  end

  @impl true
  def handle_event("delete", %{"id" => id}, socket) do
    Client.delete_page(id)
    {:noreply, socket}
  end
  def handle_event("navigate", %{"id" => page_id}, socket) do
    BrowserEvents.handle_navigate(page_id)
    {:noreply, socket}
  end
  def handle_event("screenshot-all", _payload, socket) do
    project = Client.current_project()
    outer_acc = [{:set_size, %{width: project.default_width, height: project.default_height}}]
    Enum.reduce(socket.assigns.pages, outer_acc, fn(page, acc) ->
      acc ++ screenshot_command(page, project, nil)
    end)
    |> BrowserController.execute()
    {:noreply, socket}
  end
  def handle_event("screenshot", %{"id" => page_id}, socket) do
    project = Client.current_project()
    page = prepare_page(page_id)
    filters = [&(&1.page_id == page.id), &(&1.step_id == nil)]
    screenshot_id =
      case Client.list_screenshots([filter_functions: filters]) do
        [] -> nil
        s when is_list(s) -> s |> Enum.at(0) |> Map.get(:id)
      end

    screenshot_command(page, project, screenshot_id)
    |> BrowserController.execute()

    {:noreply, socket}
  end
  def handle_event(n, p, s), do: RootEventHandlers.handle_event(n, p, s)

  @impl true
  def handle_info(%{topic: "extension", event: "browser_interaction", payload: %{action: "navigate"} = payload},
  %{assigns: %{live_action: live_action}} = socket) do
    user = Client.current_user()
    project = Client.current_project()
    page = Client.find_page_by_path(payload.href, %{})
    params = ExtensionMessages.page_params(payload, user, project)
    case live_action do
      :index ->
        flash_message =
          ExtensionMessages.maybe_create_page_flash("", socket, page, params, :patch)
          |> ExtensionMessages.maybe_update_page_flash(socket, page, params, :patch)

        {:noreply, socket |> put_flash(:info, flash_message)}
      :new -> {:noreply, assign(socket, :params, params)}
      :edit -> {:noreply, assign(socket, :params, params)}
      :review_screenshot -> {:noreply, assign(socket, :params, params)}
    end
  end
  def handle_info(%{topic: "extension", event: "browser_interaction", payload: %{action: action}}, socket) do
    Logger.warning("#{__MODULE__} received an unsupported action #{action}")
    {:noreply, socket}
  end
  def handle_info(%{topic: t, event: _, payload: %Page{}}, socket) do
    project = Client.current_project()
    {:noreply, assign(socket, :pages, prepare_pages(project.id))}
  end
  def handle_info(%{topic: _, event: _, payload: %Screenshot{}}, socket) do
    project = Client.current_project()
    {:noreply, assign(socket, :pages, prepare_pages(project.id))}
  end
  def handle_info(n, s), do: RootSubscriptionHandlers.handle_info(n, s)

  defp prepare_page(page_id) do
    opts = [preloads: @preloads]
    Client.get_page!(page_id, opts)
  end

  defp prepare_pages(project_id) do
    [
      preloads: @preloads,
      order: [%{field: :name, order: :asc}],
      filter: {:project_id, project_id}
    ]
    |> Client.list_pages()
  end

  defp assign_select_lists(socket) do
    assign(socket, :select_lists, %{
      projects: projects_select()
    })
  end

  defp projects_select() do
    team = Client.current_team()
    opts = [filter: {:team_id, team.id}]
    Client.list_projects(opts)
    |> LiveHelpers.select_list(:name, :true)
  end

  defp page_screenshot(page), do: Pages.page_screenshot(page)

  defp screenshot_command(page, project, screenshot_id) do
    width = page.default_width || project.default_width
    height = page.default_height || project.default_height
    user = Client.current_user()
    project = Client.current_project()
    page = Client.get_page!(page.id)
    url = Pages.effective_url(page, project, user)
    [
      {:navigate, %{url: url}},
      {:set_size, %{width: width, height: height}},
      {:full_document_screenshot, %{width: width, screenshot_id: screenshot_id, page_id: page.id}}
    ]
  end
end
