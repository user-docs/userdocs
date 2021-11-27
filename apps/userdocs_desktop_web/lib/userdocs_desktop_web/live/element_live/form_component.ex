defmodule UserdocsDesktopWeb.ElementLive.FormComponent do
  use UserdocsDesktopWeb, :live_component
  require Logger
  alias Schemas.Elements.Element
  alias Userdocs.Elements
  def opts(token), do: %{access_token: token, context: %{repo: Client}}

  @impl true
  def update(%{element: element} = assigns, socket) do
    params = Map.get(assigns, :params, %{})
    changeset = Element.changeset(element, params)
    {
      :ok,
      socket
      |> assign(assigns)
      |> assign(:changeset, changeset)
    }
  end

  @impl true
  def handle_event("validate", %{"element" => element_params}, socket) do
    changeset =
      socket.assigns.element
      |> Elements.change_element(element_params)
      |> Map.put(:action, :validate)

    { :noreply, assign(socket, :changeset, changeset) }
  end

  def handle_event("save", %{"element" => element_params}, socket) do
    save_element(socket, socket.assigns.action, element_params)
  end

  defp save_element(socket, :edit, element_params) do
    case Elements.update_element(socket.assigns.element, element_params, opts(socket.assigns.access_token)) do
      {:ok, _element} ->
        {
          :noreply,
          socket
          |> put_flash(:info, "Element updated successfully")
          |> push_patch(to: socket.assigns.return_to)
        }

      {:error, %Ecto.Changeset{} = changeset} ->
        {:noreply, assign(socket, :changeset, changeset)}
    end
  end

  defp save_element(socket, :new, element_params) do
    case Elements.create_element(element_params, opts(socket.assigns.access_token)) do
      {:ok, _element} ->
        {
          :noreply,
          socket
          |> put_flash(:info, "Element created successfully")
          |> push_patch(to: socket.assigns.return_to)
        }

      {:error, %Ecto.Changeset{} = changeset} ->
        {:noreply, assign(socket, changeset: changeset)}
    end
  end
end
