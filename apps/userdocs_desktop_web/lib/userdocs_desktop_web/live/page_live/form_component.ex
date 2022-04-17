defmodule UserdocsDesktopWeb.PageLive.FormComponent do
  @moduledoc "Page Form"
  use UserdocsDesktopWeb, :live_component
  require Logger
  alias Userdocs.Pages
  alias Schemas.Projects.Project
  alias Schemas.Pages.Page

  @impl true
  def update(%{page: page} = assigns, socket) do
    params = Map.get(assigns, :params, %{})
    changeset = Page.changeset(page, params)
    {
      :ok,
      socket
      |> assign(assigns)
      |> assign(:user, Client.current_user())
      |> assign(:current_project, Client.current_project())
      |> assign(:changeset, changeset)
    }
  end

  @impl true
  def handle_event("validate", %{"page" => page_params}, socket) do
    changeset =
      socket.assigns.page
      |> Pages.change_page(page_params)
      |> Map.put(:action, :validate)

    {:noreply, assign(socket, :changeset, changeset)}
  end

  def handle_event("save", %{"page" => page_params}, socket) do
    save_page(socket, socket.assigns.action, page_params)
  end

  defp save_page(socket, :edit, page_params) do
    case Client.update_page(socket.assigns.page, page_params) do
      {:ok, _page} ->
        {
          :noreply,
          socket
          |> put_flash(:info, "Page updated successfully")
          |> push_patch(to: socket.assigns.return_to)
        }

        {:error, message} ->
          {:noreply, put_flash(socket, :error, message)}
    end
  end

  defp save_page(socket, :new, page_params) do
    case Client.create_page(page_params) do
      {:ok, _page} ->
        Logger.debug("Page saved successfully, should redirect to #{socket.assigns.return_to}")
        {
          :noreply,
          socket
          |> put_flash(:info, "Page created successfully")
          |> push_patch(to: socket.assigns.return_to)
        }

      {:error, message} ->
        Logger.debug("Page save failed")
        {:noreply, put_flash(socket, :error, message)}
    end
  end

  def form_url_starts_with_slash(%{source: source}) do
    case Ecto.Changeset.get_field(source, :url, "") do
      nil -> false
      url -> String.at(url, 0) == "/"
    end
  end

  def url_prefix(project, user) do
    if Kernel.is_struct(project, Project) do
      if project.id in Enum.map(user.overrides, fn(o) -> o.project_id end) do
        Enum.filter(user.overrides, fn(o) -> o.project_id == project.id end)
        |> Enum.at(0)
        |> Map.get(:url)
      else
        project.base_url
      end
    end
  end
end
