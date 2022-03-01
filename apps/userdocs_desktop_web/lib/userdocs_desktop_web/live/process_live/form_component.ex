defmodule UserdocsDesktopWeb.ProcessLive.FormComponent do
  use UserdocsDesktopWeb, :live_component

  alias Userdocs.Processes

  @impl true
  def update(%{process: process} = assigns, socket) do
    changeset = Processes.change_process(process)

    {
      :ok,
      socket
      |> assign(assigns)
      |> assign(:changeset, changeset)
    }
  end

  @impl true
  def handle_event("validate", %{"process" => process_params}, socket) do
    changeset =
      socket.assigns.process
      |> Processes.change_process(process_params)
      |> Map.put(:action, :validate)

    {
      :noreply,
      assign(socket, :changeset, changeset)
    }
  end

  def handle_event("save", %{"process" => process_params}, socket) do
    save_process(socket, socket.assigns.action, process_params)
  end

  defp save_process(socket, :edit, process_params) do
    case Client.update_process(socket.assigns.process, process_params) do
      {:ok, _process} ->
        {
          :noreply,
          socket
          |> put_flash(:info, "Process updated successfully")
          |> push_patch(to: socket.assigns.return_to)
        }

      {:error, %Ecto.Changeset{} = changeset} ->
        {:noreply, assign(socket, :changeset, changeset)}
    end
  end

  defp save_process(socket, :new, process_params) do
    case Client.create_process(process_params) do
      {:ok, _process} ->
        {
          :noreply,
          socket
          |> put_flash(:info, "Process created successfully")
          |> push_patch(to: socket.assigns.return_to)
        }

      {:error, %Ecto.Changeset{} = changeset} ->
        {:noreply, assign(socket, changeset: changeset)}
    end
  end
end
