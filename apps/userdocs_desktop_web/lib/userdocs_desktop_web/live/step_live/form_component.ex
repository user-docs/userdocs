defmodule UserdocsDesktopWeb.StepLive.FormComponent do
  @moduledoc "Step Form"
  use UserdocsDesktopWeb, :live_component
  require Logger
  alias Userdocs.Steps
  alias Schemas.Steps.Step
  alias Schemas.Steps.StepType
  alias Schemas.Pages.Page
  alias Schemas.Annotations.Annotation
  alias UserdocsDesktopWeb.Icons
  alias UserdocsDesktopWeb.LiveHelpers

  @impl true
  def update(%{step: step} = assigns, socket) do
    params = Map.get(assigns, :params, %{})
    changeset =
      (Map.get(socket.assigns, :changeset, nil) || Step.changeset(step, %{}))
      |> Ecto.Changeset.cast(params, Step.__schema__(:fields))

    page_id = Ecto.Changeset.get_field(changeset, :page_id, nil)
    {
      :ok,
      socket
      |> assign(assigns)
      |> assign(:changeset, changeset)
      |> assign(:modal_action, :nil)
      |> assign_step_type(Ecto.Changeset.get_field(changeset, :step_type_id, nil))
      |> assign_select_lists(page_id)
      |> assign_selected_page(page_id)
    }
  end

  @impl true
  def handle_event("validate", %{"step" => step_params}, socket) do
    changeset =
      socket.assigns.step
      |> Steps.change_step(step_params)
      |> Map.put(:action, :validate)

    {
      :noreply,
      socket
      |> assign(:changeset, changeset)
      |> assign_select_lists(Ecto.Changeset.get_field(changeset, :page_id, nil))
      |> assign_step_type(Ecto.Changeset.get_field(changeset, :step_type_id, nil))
    }
  end

  def handle_event("save", %{"step" => step_params}, socket) do
    save_step(socket, socket.assigns.action, step_params)
  end

  defp save_step(socket, :edit, step_params) do
    case Client.update_step(socket.assigns.step, step_params) do
      {:ok, _step} ->
        {
          :noreply,
          socket
          |> put_flash(:info, "Step updated successfully")
          |> push_patch(to: socket.assigns.return_to)
        }

        {:error, message} ->
          {:noreply, put_flash(socket, :error, message)}
    end
  end

  defp save_step(socket, :new, step_params) do
    case Client.create_step(step_params) do
      {:ok, _step} ->
        Logger.debug("Step saved successfully, should redirect to #{socket.assigns.return_to}")
        {
          :noreply,
          socket
          |> put_flash(:info, "Step created successfully")
          |> push_patch(to: socket.assigns.return_to)
        }

      {:error, message} ->
        Logger.debug("Step save failed")
        {:noreply, put_flash(socket, :error, message)}
    end
  end

  def assign_step_type(socket, nil), do: assign(socket, :step_type, %StepType{args: []})
  def assign_step_type(socket, step_type_id) do
    step_type = Client.get_step_type!(step_type_id)
    assign(socket, :step_type, step_type)
  end

  def assign_selected_page(socket, page_id), do: assign(socket, :selected_page, selected_page(page_id))
  def selected_page(page_id) do
    if page_id,
      do: Client.get_page!(page_id),
      else: %Page{id: nil}
  end

  def assign_select_lists(socket, page_id), do: assign(socket, :select_lists, select_lists(page_id))

  def select_lists(page_id) do
    %{
      annotation_types: annotation_types_select(),
      annotations: annotations_select(page_id),
      elements: elements_select(page_id),
      pages: pages_select(),
      processes: processes_select(),
      projects: projects_select(),
      step_types: step_types_select(),
      strategies: strategies_select()
   }
  end

  def annotation_types_select() do
    [order: [%{field: :id, order: :asc}]]
    |> Client.list_annotation_types()
    |> LiveHelpers.select_list(:name, :false)
  end

  def annotations_select(nil) do
    Client.list_annotations()
    |> LiveHelpers.select_list(:name, :false)
  end
  def annotations_select(page_id) do
    [filter: {:page_id, page_id}]
    |> Client.list_annotations()
    |> LiveHelpers.select_list(:name, :false)
  end

  def elements_select(nil) do
    Client.list_elements()
    |> LiveHelpers.select_list(:name, :true)
  end
  def elements_select(page_id) do
    [filter: {:page_id, page_id}]
    |> Client.list_elements()
    |> LiveHelpers.select_list(:name, :true)
  end

  def pages_select() do
    Client.list_pages()
    |> LiveHelpers.select_list(:name, :true)
  end

  def processes_select() do
    Client.list_processes()
    |> LiveHelpers.select_list(:name, :false)
  end
  def processes_select(_), do: []

  def projects_select() do
    Client.list_projects()
    |> LiveHelpers.select_list(:name, :false)
  end

  def step_types_select() do
    Client.list_step_types()
    |> LiveHelpers.select_list(:name, :true)
  end

  def strategies_select() do
    Client.list_strategies()
    |> LiveHelpers.select_list(:name, :false)
  end

end
