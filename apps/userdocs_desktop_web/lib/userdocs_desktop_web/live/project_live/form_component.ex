defmodule UserdocsDesktopWeb.ProjectLive.FormComponent do
  use UserdocsDesktopWeb, :live_component
  alias Userdocs.Projects

  def opts(token), do: %{access_token: token, context: %{repo: Client}}

  @impl true
  def update(%{project: project} = assigns, socket) do
    changeset = Projects.change_project(project)

    {
      :ok,
      socket
      |> assign(assigns)
      |> assign(:changeset, changeset)
    }
  end

  @impl true
  def handle_event("validate", %{"project" => project_params}, socket) do
    changeset =
      socket.assigns.project
      |> Projects.change_project(project_params)
      |> Map.put(:action, :validate)

    {
      :noreply,
      assign(socket, :changeset, changeset)
    }
  end

  def handle_event("save", %{"project" => project_params}, socket) do
    save_project(socket, socket.assigns.action, project_params)
  end

  defp save_project(socket, :edit, project_params) do
    case Projects.update_project(socket.assigns.project, project_params, opts(socket.assigns.access_token)) do
      {:ok, _project} ->
        {
          :noreply,
          socket
          |> put_flash(:info, "Project updated successfully")
          |> push_patch(to: socket.assigns.return_to)
        }

      {:error, %Ecto.Changeset{} = changeset} ->
        {:noreply, assign(socket, :changeset, changeset)}
    end
  end

  defp save_project(socket, :new, project_params) do
    case Projects.create_project(project_params, opts(socket.assigns.access_token)) do
      {:ok, _project} ->
        {
          :noreply,
          socket
          |> put_flash(:info, "Project created successfully")
          |> push_patch(to: socket.assigns.return_to)
        }

      {:error, %Ecto.Changeset{} = changeset} ->
        {:noreply, assign(socket, changeset: changeset)}
    end
  end
end
