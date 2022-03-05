defmodule UserdocsDesktopWeb.AnnotationLive.FormComponent do
  @moduledoc "The annotation form"
  use UserdocsDesktopWeb, :live_component
  require Logger
  alias Schemas.Annotations.Annotation
  alias Schemas.Annotations.AnnotationType
  alias Schemas.Elements.ElementAnnotation
  alias Userdocs.Annotations
  alias Userdocs.ElementAnnotations

  @impl true
  def update(%{annotation: annotation} = assigns, socket) do
    changeset = Annotations.change_annotation(annotation)
    {
      :ok,
      socket
      |> assign(assigns)
      |> name_annotation(changeset)
      |> assign(:changeset, changeset)
      |> assign(:append_element_annotations, [])
      |> assign(:selected_annotation_type, %{id: "none", args: [], name: "None", max_elements: 0})
      |> assign_annotation_type(Ecto.Changeset.get_field(changeset, :annotation_type_id, nil))
    }
  end

  @impl true
  def handle_event("validate", %{"annotation" => annotation_params}, socket) do
    changeset =
      socket.assigns.annotation
      |> Annotations.change_annotation(annotation_params)
      |> Ecto.Changeset.cast(annotation_params, [:id])
      |> Map.put(:action, :validate)

    selected_annotation_type =
      Ecto.Changeset.get_field(changeset, :annotation_type_id, nil)
      |> Client.get_annotation_type!()

    changeset = maybe_trim_element_annotations_over_max(changeset, selected_annotation_type.max_elements)

    case Ecto.Changeset.apply_action(changeset, :insert) do
      {:ok, annotation} -> BrowserController.handle_command({:update_annotation, %{annotation: load_elements(annotation)}})
      {:error, _changeset} -> Logger.warning("Change not valid, not updating rendered annotation")
    end

    {
      :noreply,
      socket
      |> assign(:changeset, changeset)
      |> name_annotation(changeset)
      |> assign(:selected_annotation_type, selected_annotation_type)
    }
  end

  def handle_event("save", %{"annotation" => annotation_params}, socket) do
    save_annotation(socket, socket.assigns.action, annotation_params)
  end

  def handle_event("add-element", _, socket) do
    existing_element_annotations =
      Map.get(socket.assigns.changeset.changes, :element_annotations, socket.assigns.annotation.element_annotations)

    element_annotations =
      existing_element_annotations
      |> Enum.concat([
        ElementAnnotations.change_element_annotation(%ElementAnnotation{}, %{id: UUID.uuid4()})
      ])

    changeset =
      socket.assigns.changeset
      |> Ecto.Changeset.put_assoc(:element_annotations, element_annotations)

    {:noreply, assign(socket, changeset: changeset)}
  end

  def handle_event("remove-element-annotation", %{"id" => id}, socket) do
    element_annotations =
      socket.assigns.changeset.changes.element_annotations
      |> Enum.reject(fn %{changes: element_annotation} ->
        Map.get(element_annotation, :id, :wont_match) == id
      end)

      changeset =
        socket.assigns.changeset
        |> Ecto.Changeset.put_assoc(:element_annotations, element_annotations)

      case Ecto.Changeset.apply_action(changeset, :insert) do
        {:ok, annotation} -> BrowserController.handle_command({:update_annotation, %{annotation: load_elements(annotation)}})
        {:error, _changeset} -> Logger.warning("Change not valid, not updating rendered annotation")
      end

      {:noreply, assign(socket, changeset: changeset)}
  end

  defp save_annotation(socket, :edit, annotation_params) do
    case Client.update_annotation(socket.assigns.annotation, annotation_params) do
      {:ok, annotation} ->
        BrowserController.handle_command({:remove_annotation, %{annotation: annotation}})
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
    case Client.create_annotation(annotation_params) do
      {:ok, annotation} ->
        BrowserController.handle_command({:remove_annotation, %{annotation: annotation}})
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

  def field_enabled?(changeset, name) do
    case Ecto.Changeset.get_field(changeset, :annotation_type_id) do
      nil -> false
      annotation_type_id ->
        annotation_type = Client.get_annotation_type!(annotation_type_id)
        enabled_fields = annotation_type.args |> Enum.map(fn(a) -> String.to_atom(a) end)
        name in enabled_fields
    end
  end

  def assign_annotation_type(socket, nil), do: assign(socket, :annotation_type, %AnnotationType{args: []})
  def assign_annotation_type(socket, annotation_type_id) do
    annotation_type = Client.get_annotation_type!(annotation_type_id)
    assign(socket, :selected_annotation_type, annotation_type)
  end

  def maybe_trim_element_annotations_over_max(changeset, max) do
    case Ecto.Changeset.apply_action(changeset, :insert) do
      {:ok, annotation} -> trim_element_annotations_over_max(changeset, annotation, max)
      _ -> changeset
    end
  end
  def trim_element_annotations_over_max(changeset, annotation, 1) do
    case annotation.element_annotations do
      [_] -> changeset
      [_ | _] ->
        [valid | invalid] = changeset.changes.element_annotations
        updated = Enum.map(invalid, fn(changeset) ->
          Ecto.Changeset.put_change(changeset, :delete, true)
        end)
        Ecto.Changeset.put_assoc(changeset, :element_annotations, [valid | updated])
    end
  end
  def trim_element_annotations_over_max(changeset, annotation, max) do
    case Enum.count(annotation.element_annotations) > max do
      true -> raise("An unhandled trim element annotations clause was reached")
      false -> changeset
    end
  end

  def name_annotation(socket, %Ecto.Changeset{} = changeset) do
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
          Client.get_annotation_type!(annotation_type_id)
          |> Map.get(:name)
      end

    element_name =
      case element_id do
        nil -> ""
        element_id ->
          Client.get_element!(element_id)
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

  def load_elements(%Annotation{element_annotations: [_ | _] = element_annotations} = annotation) do
    Map.put(annotation, :element_annotations, Enum.map(element_annotations, fn(ea) ->
      element = Client.get_element!(ea.element_id)
      Map.put(ea, :element, element)
    end))
  end
  def load_elements(%Annotation{element_annotations: ea} = annotation) when ea == [], do: annotation
end
