defmodule UserdocsDesktopWeb.StepLive.Index do
  @moduledoc "The primary element live view"
  use UserdocsDesktopWeb, :live_view

  require Logger
  alias Schemas.Annotations.Annotation
  alias Schemas.Elements.Element
  alias Schemas.Pages.Page
  alias Schemas.Steps.Step
  alias Schemas.Processes.Process
  alias Schemas.Screenshots.Screenshot
  alias Schemas.ProcessInstances.ProcessInstance
  alias Schemas.StepInstances.StepInstance
  alias Userdocs.Steps
  alias Userdocs.Pages
  alias UserdocsDesktop.Paths
  alias UserdocsDesktopWeb.LiveHelpers
  alias UserdocsDesktopWeb.Root
  alias UserdocsDesktopWeb.StepLive.MenuComponent
  alias UserdocsDesktopWeb.StepLive.FormComponent
  alias UserdocsDesktopWeb.RootSubscriptionHandlers
  alias UserdocsDesktopWeb.RootEventHandlers
  alias UserdocsDesktopWeb.ExtensionMessages

  def step_preloads() do
    [
      :step_type,
      :screenshots,
      :page,
      [page: :project],
      :annotation,
      [annotation: :element_annotations],
      [annotation: [element_annotations: :element]],
      :element,
      :process,
      #:step_instances,
      [annotation: :annotation_type],
      [element: :strategy],
    ]
  end

  def process_preloads() do
    [
      :steps,
      #:process_instance,
      #[process_instance: :step_instances]
    ]
  end

  def opts(token), do: %{
    magick_path: Paths.imagemagick_executable_path(Desktop.OS.type()),
    repo_path: Paths.image_repo_path(),
    access_token: token,
    context: %{repo: Client}
  }

  @impl true
  def mount(_params, session, socket) do
    UserdocsDesktopWeb.Endpoint.subscribe("extension")
    UserdocsDesktopWeb.Endpoint.subscribe("browser")
    {
      :ok,
      socket
      |> Root.apply(session, [])
      |> assign(:form_data, %{})
      |> assign(:params, %{})
      |> assign(:page_params, %{})
      |> assign(:page_title, "")
      |> assign(:drag, nil)
      |> assign(:browser_open?, BrowserController.browser_open?())
      |> assign(:run_state, BrowserController.run_state())
    }
  end

  @impl true
  def handle_params(%{"process_id" => process_id} = params, url, socket) do
    process = fetched_or_current_process(socket, process_id)
    project = Client.current_project()
    {
      :noreply,
      socket
      |> assign(url: URI.parse(url))
      |> assign(:process, process)
      |> assign(:project, project)
      |> assign(:select_lists, %{})
      |> prepare_steps(process_id)
      |> apply_action(socket.assigns.live_action, params)
    }
  end
  def handle_params(_, _, socket), do: {:noreply, socket}

  defp apply_action(socket, :edit, %{"id" => id}) do
    socket
    |> assign(:page_title, "Edit Step")
    |> prepare_step(id)
  end

  defp apply_action(socket, :edit_page, %{"id" => id, "page_id" => page_id} = params) do
    socket
    |> assign(:page_title, "Edit Page")
    |> assign_form_data(:page, Client.get_page!(page_id))
    |> assign(:step, fetched_or_current_step(socket, id))
    |> assign(:params, Map.get(params, "params", %{}))
  end

  defp apply_action(socket, :edit_element, %{"id" => id, "element_id" => element_id} = params) do
    socket
    |> assign(:page_title, "Edit Element")
    |> assign(:step, fetched_or_current_step(socket, id))
    |> assign_form_data(:element, Client.get_element!(element_id))
    |> assign(:params, Map.get(params, "params", %{}))
  end

  defp apply_action(socket, :edit_annotation, %{"id" => id, "annotation_id" => annotation_id} = params) do
    opts = [preloads: [:annotation_type, :element_annotations, [element_annotations: :element]]]
    socket
    |> assign(:page_title, "Edit Annotation")
    |> assign(:step, fetched_or_current_step(socket, id))
    |> assign_form_data(:annotation, Client.get_annotation!(annotation_id, opts))
    |> assign(:params, Map.get(params, "params", %{}))
  end

  defp apply_action(socket, :new, %{"params" => params}) do
    attrs = %{
      process_id: socket.assigns.process.id,
      order: Steps.next_order(socket.assigns.steps),
      page_id: Map.get(params, "page_id", nil)
    }
    {:ok, step} = Client.create_step(attrs)
    socket
    |> assign(:live_action, :edit)
    |> assign(:page_title, "New Step")
    |> assign(:step, step)
  end

  defp apply_action(socket, :new_page, %{"id" => id} = params) do
    socket
    |> assign_form_data(:page, %Page{})
    |> assign(:step, fetched_or_current_step(socket, id))
    |> assign(:params, Map.get(params, "params", %{}))
    |> assign(:page_title, "New Page")
  end

  defp apply_action(socket, :new_element, %{"id" => id} = params) do
    socket
    |> assign_form_data(:element, %Element{})
    |> assign(:step, fetched_or_current_step(socket, id))
    |> assign(:params, Map.get(params, "params", %{}))
    |> assign(:page_title, "New Element")
  end

  defp apply_action(socket, :new_annotation, %{"id" => id} = params) do
    socket
    |> assign_form_data(:annotation, %Annotation{})
    |> assign(:step, fetched_or_current_step(socket, id))
    |> assign(:params, Map.get(params, "params", %{}))
    |> assign(:page_title, "New Annotation")
  end

  defp apply_action(socket, :show_step_instance, %{"id" => id}) do
    socket
    |> assign(:page_title, "Show Step Instance")
    |> prepare_step(id)
  end

  defp apply_action(socket, :show_process_instance, %{"process_id" => _id}) do
    socket
    |> assign(:page_title, "Show Process Instance")
    |> assign(:step, nil)
  end

  defp apply_action(socket, :index, _params) do
    socket
    |> assign(:page_title, "Listing Steps")
    |> assign(:step, nil)
  end

  defp apply_action(socket, action, _params) do
    Logger.error("Apply action clause not found for action #{action}")
    socket
  end

  @impl true
  def handle_event("navigate", %{"page-id" => nil}, socket), do: {:noreply, socket}
  def handle_event("navigate", %{"page-id" => page_id}, socket)
  when is_binary(page_id) do
    user = Client.current_user()
    project = Client.current_project()
    page = Client.get_page!(page_id)
    url = Pages.effective_url(page, project, user)
    BrowserController.handle_command({:navigate, %{url: url}})
    {:noreply, socket}
  end
  def handle_event("navigate", _params, socket), do: {:noreply, socket}
  def handle_event("highlight", %{"element-id" => nil}, socket), do: {:noreply, socket}
  def handle_event("highlight", %{"element-id" => element_id}, socket)
  when is_binary(element_id) do
    element = Client.get_element!(element_id, [preloads: [:strategy]])
    BrowserController.handle_command({:highlight, %{strategy: element.strategy_id, selector: element.selector}})
    {:noreply, socket}
  end
  def handle_event("highlight", _params, socket), do: {:noreply, socket}
  def handle_event("apply_annotation", %{"annotation-id" => nil}, socket), do: {:noreply, socket}
  def handle_event("apply_annotation", %{"annotation-id" => annotation_id}, socket)
  when is_binary(annotation_id) do
    opts = [preloads: [:annotation_type, :element_annotations, [element_annotations: :element]]]
    annotation = Client.get_annotation!(annotation_id, opts)
    BrowserController.handle_command({:create_annotation, %{annotation: annotation}})
    {:noreply, socket}
  end
  def handle_event("apply_annotation", _params, socket), do: {:noreply, socket}
  def handle_event("queue-step", %{"id" => id}, socket) do
    user = Client.current_user()
    team = Client.current_team()
    step = Client.get_step!(id, step_opts())
    opts = %{step: step, context: %{user: user, team: team, opts: opts("")}}
    BrowserController.handle_command({:execute_step, opts})
    {:noreply, socket}
  end
  def handle_event("queue-process", %{"id" => _id}, %{assigns: %{process: process, steps: steps}} = socket) do
    user = Client.current_user()
    team = Client.current_team()
    process = Map.put(process, :steps, steps)
    opts = %{process: process, context: %{user: user, team: team, opts: opts("")}}
    BrowserController.handle_command({:execute_process, opts})
    {:noreply, socket}
  end
  def handle_event("delete", %{"id" => id}, socket) do
    Client.delete_step(id)
    {:noreply, socket}
  end
  def handle_event("reorder_start", %{"id" => step_id}, socket) do
    step = Client.get_step!(step_id, step_opts())
    {:noreply, socket |> assign(:drag, step) |> assign(:items, socket.assigns.steps)}
  end
  def handle_event("reorder_dragenter", %{"step-id" => ""}, socket) do
    {:noreply, socket}
  end
  def handle_event("reorder_dragenter", %{"order" => to_order}, socket) do
    drag = socket.assigns.drag
    Logger.debug("Reordering #{drag.name} from #{drag.order} to #{to_order}, #{drag.id}")
    steps =
      move(socket.assigns.items, drag, String.to_integer(to_order))
      |> Enum.sort(&(&1.order < &2.order))
    {:noreply, assign(socket, :steps, steps)}
  end
  def handle_event("reorder_dragenter", _, socket), do: {:noreply, socket}
  def handle_event("reorder_end", _, socket) do
    Enum.map(socket.assigns.steps, fn(updated_step) ->
      Task.async(fn ->
        original_step = Client.get_step!(updated_step.id, step_opts())
        {:ok, step} = Client.update_step(original_step, %{order: updated_step.order})
        step
      end)
    end)
    |> Task.await_many()
    {:noreply, socket |> assign(:drag, nil) |> assign(:items, nil)}
  end
  def handle_event("reorder_dragend", _, %{assigns: %{drag: nil}} = socket),
    do: {:noreply, socket}
  def handle_event("reorder_dragend", _, %{assigns: %{drag: _, items: items}} = socket),
    do: {:noreply, socket |> assign(:drag, nil) |> assign(:steps, items)}
  def handle_event("select_element", %{"id" => element_id}, %{assigns: %{params: params}} = socket) do
    params = Map.put(params, :element_id, element_id)
    {:noreply, socket |> assign(:params, params)}
  end
  def handle_event(n, p, s), do: RootEventHandlers.handle_event(n, p, s)

  @impl true
  def handle_info(%{topic: "extension", event: "browser_interaction", payload: %{action: "ITEM_SELECTED"} = payload},
  %{assigns: %{current_user: %{selected_project: project} = user, process: process, step: step, live_action: live_action}} = socket) do
    IO.puts("item selected #{live_action}")
    params = ExtensionMessages.element_params(payload)
    page_params = ExtensionMessages.page_params(payload, user, project)
    case live_action do
      :edit ->
        element = Client.find_element(:selector, payload.generated_selector)
        current_page = Client.find_page_by_path(payload.href)
        flash_message =
          ExtensionMessages.maybe_create_step_element_flash("", socket, element, current_page, step.id, process.id, params, :patch)
          |> ExtensionMessages.maybe_update_step_element_flash(socket, element, current_page, step.id, process.id, params, :patch)
          |> ExtensionMessages.maybe_create_step_page_flash(socket, current_page, step.id, process.id, page_params, :patch)

        {:noreply, socket |> put_flash(:info, flash_message)}
      :new_element -> {:noreply, assign(socket, :params, params)}
      :edit_element -> {:noreply, assign(socket, :params, params)}
      _ -> {:noreply, socket}
    end
  end
  def handle_info(%{topic: "extension", event: "browser_interaction", payload: %{action: "keypress", value: value}}, socket) do
    {:noreply, socket |> assign(:params, Map.put(socket.assigns.params, :text, value))}
  end
  def handle_info(%{topic: "extension", event: "browser_interaction", payload: %{action: action}}, socket) do
    Logger.debug("#{__MODULE__} handling browser interaction #{action}. Browser Controller state is #{BrowserController.run_state()}")
    {:noreply, socket}
  end
  def handle_info(%{topic: "browser", event: "execution_warning", payload: %{command: {name, _opts}, message: msg}}, socket) do
    {:noreply, socket |> put_flash(:warning, "#{name} command finished with warning: #{msg}")}
  end
  def handle_info(%{topic: "browser", event: "browser_opened"}, socket),
    do: {:noreply, socket |> assign(:browser_open?, true)}
  def handle_info(%{topic: "browser", event: "browser_closed"}, socket),
    do: {:noreply, socket |> assign(:browser_open?, false)}
  def handle_info(%{topic: "browser", event: "run_state_updated", payload: %{run_state: run_state}}, socket) do
    {:noreply, socket |> assign(:run_state, run_state)}
  end
  def handle_info(%{topic: "browser", event: "execution_error", payload: %{command: {name, _opts}, message: msg}}, socket) do
    {:noreply, socket |> put_flash(:error, "#{name} command finished with warning: #{msg}")}
  end
  def handle_info(%{topic: _, event: _, payload: %Annotation{}} = sub_data, socket),
    do: {:noreply, handle_subscription_update(socket, sub_data)}
  def handle_info(%{topic: _, event: _, payload: %Element{}} = sub_data, socket),
    do: {:noreply, handle_subscription_update(socket, sub_data)}
  def handle_info(%{topic: _, event: _, payload: %Screenshot{}} = sub_data, socket),
    do: {:noreply, handle_subscription_update(socket, sub_data)}
  def handle_info(%{topic: _, event: _, payload: %Step{}} = sub_data, socket),
    do: {:noreply, handle_subscription_update(socket, sub_data)}
  def handle_info(%{topic: _, event: _, payload: %Page{}} = sub_data, socket),
    do: {:noreply, handle_subscription_update(socket, sub_data)}
  def handle_info(%{topic: _, event: _, payload: %StepInstance{}} = sub_data, socket) do
    {:noreply, socket} = RootSubscriptionHandlers.handle_info(sub_data, socket)
    {:noreply, socket |> prepare_process(socket.assigns.process.id)}
  end
  def handle_info(%{topic: _, event: _, payload: %ProcessInstance{}} = sub_data, socket) do
    {:noreply, socket} = RootSubscriptionHandlers.handle_info(sub_data, socket)
    {:noreply, socket |> prepare_process(socket.assigns.process.id)}
  end

  def handle_info(%{topic: "browser", event: _, payload: _}, socket), do: {:noreply, socket}
  def handle_info(n, s), do: RootSubscriptionHandlers.handle_info(n, s)

  def handle_subscription_update(%{assigns: %{process: process, step: %Step{} = step}} = socket, sub_data) do
    {:noreply, socket} = RootSubscriptionHandlers.handle_info(sub_data, socket)
    socket
    |> prepare_steps(process.id)
    |> prepare_step(step.id)
  end
  def handle_subscription_update(%{assigns: %{process: process}} = socket, sub_data) do
    {:noreply, socket} = RootSubscriptionHandlers.handle_info(sub_data, socket)
    socket
    |> prepare_steps(process.id)
  end

  def step_opts() do
    []
    |> Keyword.put(:preloads, step_preloads())
    |> Keyword.put(:order, [
      %{field: :order, order: :asc},
      step_instances: %{field: :id, order: :desc},
      annotations: [element_annotations: %{field: :id, order: :desc}]
    ])
  end

  def process_opts(), do:  [preloads: process_preloads()]

  def prepare_process(socket, id) do
    process = Client.get_process!(id, process_opts())
    assign(socket, :process, process)
  end

  def prepare_step(socket, id) do
    step = Client.get_step!(id, step_opts())
    assign(socket, :step, step)
  end

  defp prepare_steps(socket, process_id) do
    opts = step_opts() |> Keyword.put(:filter, {:process_id, process_id})
    assign(socket, :steps, Client.list_steps(opts))
  end

  def fetched_or_current_step(socket, id) do
    if Map.get(socket.assigns, :step, nil) == %Step{},
      do: socket.assigns.step,
      else: Client.get_step!(id, step_opts())
  end

  def fetched_or_current_process(socket, id) do
    if Map.get(socket.assigns, :process, nil) == %Process{},
      do: socket.assigns.process,
      else: Client.get_process!(id, process_opts())
  end

  def assign_form_data(%{assigns: %{form_data: form_data}} = socket, key, value),
    do: assign(socket, :form_data, Map.put(form_data, key, value))

  # Had to use order ... using id's screws things up, because it's hard to get the orders and id's to sync
  def move(items, %{order: from_order}, to_order) when from_order == to_order do
    items
  end
  def move(items, %{order: from_order}, to_order) when Kernel.abs(from_order - to_order) == 1 do
    Logger.debug("Moving to an adjacent item")
    Enum.map(items, fn(item) ->
      case item.order do
        order when order == from_order -> item |> Map.put(:order, to_order)
        order when order == to_order -> item |> Map.put(:order, from_order)
        _ -> item
      end
    end)
  end
  def move(items, %{order: from_order}, to_order) when Kernel.abs(from_order - to_order) > 1 do
    Logger.debug("Moving to a non adjacent item")
    args = order_args(from_order, to_order)
    Enum.map(items, fn(item) ->
      case item.order do
        order when order <= args.max and order >= args.min -> Map.put(item, :order, item.order + args.adjustment)
        order when order == from_order -> item |> Map.put(:order, to_order)
        _ -> item
      end
    end)
  end
  def move(items, %{order: from_order}, to_order)  do
    IO.puts("Should move from #{from_order} to #{to_order} with dfiff #{Kernel.abs(from_order - to_order)}")
    items
  end

  def order_args(source_order, target_order)
  when source_order < target_order == true do
    %{
      min: source_order + 1,
      max: target_order,
      adjustment: -1
    }
  end

  def order_args(source_order, target_order)
  when source_order < target_order == false do
    %{
      min: target_order,
      max: source_order - 1,
      adjustment: 1
    }
  end
end
