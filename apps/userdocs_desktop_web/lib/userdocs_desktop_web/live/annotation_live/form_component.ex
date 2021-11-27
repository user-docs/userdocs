defmodule UserdocsDesktopWeb.AnnotationLive.FormComponent do
  use UserdocsDesktopWeb, :live_component
  require Logger
  alias Schemas.Annotations.AnnotationType
  alias Schemas.Elements.ElementAnnotation
  alias Userdocs.Annotations
  alias Userdocs.ElementAnnotations
  alias UserdocsDesktop.BrowserController
  def opts(token), do: %{access_token: token, context: %{repo: Client}}

  @impl true
  def update(%{annotation: annotation} = assigns, socket) do
    changeset = Annotations.change_annotation(annotation)
    {
      :ok,
      socket
      |> assign(assigns)
      |> assign(:changeset, changeset)
      |> assign(:append_element_annotations, [])
      |> name_annotation(changeset)
    }
  end

  @impl true
  def handle_event("validate", %{"annotation" => annotation_params}, socket) do
    changeset =
      socket.assigns.annotation
      |> Annotations.change_annotation(annotation_params)
      |> Ecto.Changeset.cast(annotation_params, [:id])
      |> Map.put(:action, :validate)

    {:ok, annotation} = Ecto.Changeset.apply_action(changeset, :insert)
    BrowserController.execute({:update_annotation, %{annotation: annotation}})

    {
      :noreply,
      socket
      |> assign(:changeset, changeset)
      |> name_annotation(changeset)
    }
  end

  def handle_event("save", %{"annotation" => annotation_params}, socket) do
    save_annotation(socket, socket.assigns.action, annotation_params)
  end

  def handle_event("add-element", _, %{assigns: %{append_element_annotations: append}} = socket) do
    append_element_annotations =
      Enum.concat(append, [ElementAnnotations.change_element_annotation(%ElementAnnotation{temp_id: UUID.uuid4()})])

    {:noreply, assign(socket, append_element_annotations: append_element_annotations)}
  end

  def handle_event("remove-element-annotation", %{"temp-id" => temp_id}, %{assigns: %{append_element_annotations: append}} = socket) do
    append_element_annotations =
      append
      |> Enum.reject(fn %{data: element_annotation} -> element_annotation.temp_id  == temp_id end)

    {:noreply, socket |> assign(append_element_annotations: append_element_annotations)}
  end

  defp save_annotation(socket, :edit, annotation_params) do
    case Annotations.update_annotation(socket.assigns.annotation, annotation_params, opts(socket.assigns.access_token)) do
      {:ok, _annotation} ->
        {
          :noreply,
          socket
          |> put_flash(:info, "Annotation updated successfully")
          |> push_patch(to: socket.assigns.return_to)
        }

      {:error, %Ecto.Changeset{} = changeset} ->
        {:noreply, assign(socket, :changeset, changeset)}
    end
  end

  defp save_annotation(socket, :new, annotation_params) do
    case Annotations.create_annotation(annotation_params, opts(socket.assigns.access_token)) do
      {:ok, _annotation} ->
        {
          :noreply,
          socket
          |> put_flash(:info, "Annotation created successfully")
          |> push_patch(to: socket.assigns.return_to)
        }

      {:error, %Ecto.Changeset{} = changeset} ->
        {:noreply, assign(socket, changeset: changeset)}
    end
  end

  def field_enabled?(changeset, name, %{state_opts: opts} = assigns) do
    case Ecto.Changeset.get_field(changeset, :annotation_type_id) do
      nil -> false
      annotation_type_id ->
        annotation_type = StateHandlers.get(assigns, annotation_type_id, AnnotationType, opts)
        enabled_fields = annotation_type.args |> Enum.map(fn(a) -> String.to_atom(a) end)
        name in enabled_fields
    end
  end
  def field_enabled?(_, _, _), do: false

  def name_annotation(%{assigns: %{state_opts: opts}} = socket, %Ecto.Changeset{} = changeset) do
    annotation_type_id = Ecto.Changeset.get_field(changeset, :annotation_type_id)
    element_id =
      case Ecto.Changeset.get_field(changeset, :element_annotations, [%ElementAnnotation{}]) do
        [%ElementAnnotation{element_id: element_id}] -> element_id
        [%ElementAnnotation{element_id: element_id} | _ ] -> element_id
        [] -> nil
      end

    annotation_type_name =
      case annotation_type_id do
        nil -> ""
        annotation_type_id ->
          StateHandlers.get(socket, annotation_type_id, AnnotationType, opts)
          |> Map.get(:name)
      end

    element_name =
      case element_id do
        nil -> ""
        element_id ->
          State.Elements.get_element!(element_id, socket, opts)
          |> Map.get(:name)
      end

    socket
    |> assign(:annotation_name, "#{annotation_type_name} #{element_name}" )
  end
  def name_annotation(_, _), do: ""
  def element_annotations_count(_), do: ""
  def element_annotations_count(changeset, append_element_annotations) do
    changeset
    |> Ecto.Changeset.get_field(:element_annotations)
    |> Enum.concat(append_element_annotations)
    |> Enum.count()
  end
end
