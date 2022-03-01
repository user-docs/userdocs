defmodule UserdocsDesktopWeb.UserLive.LocalFormComponent do
  @moduledoc """
    This is used to modify settings on the users local machine
  """
  use UserdocsDesktopWeb, :live_component

  alias Userdocs.LocalOptions
  alias Schemas.Users.LocalOption

  @impl true
  def update(assigns, socket) do
    local_option = Userdocs.LocalOptions.get_local_options()
    changeset = LocalOptions.change_local_options(local_option)
    {
      :ok, socket
      |> assign(assigns)
      |> assign(:changeset, changeset)
    }
  end

  @impl true
  def handle_event("validate", %{"local_option" => params}, socket) do
    changeset =
      socket.assigns.local_option
      |> LocalOption.changeset(params)
      |> Map.put(:action, :validate)

    {
      :noreply,
      assign(socket, :changeset, changeset)
    }
  end

  def handle_event("save", %{"local_option" => local_option}, socket) do
    save_local_option(socket, socket.assigns.action, local_option)
  end

  defp save_local_option(%{assigns: %{local_option: local_option}} = socket, :edit, local_option_params) do
    case LocalOptions.update_local_options(local_option, local_option_params) do
      {:ok, _local_options} ->
        {
          :noreply,
          socket
          |> put_flash(:info, "Local Options updated successfully")
          |> push_patch(to: socket.assigns.return_to)
        }

      {:error, %Ecto.Changeset{} = changeset} ->
        {:noreply, assign(socket, :changeset, changeset)}
    end
  end
end
