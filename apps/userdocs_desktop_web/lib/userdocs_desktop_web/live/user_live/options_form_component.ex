defmodule UserdocsDesktopWeb.UserLive.OptionsFormComponent do
  use UserdocsDesktopWeb, :live_component

  alias Schemas.Users.Override
  alias Userdocs.Users
  alias UserdocsDesktopWeb.LiveHelpers
  def opts(token), do: %{access_token: token, context: %{repo: Client}}

  @impl true
  def update(%{user: user, access_token: access_token} = assigns, socket) do
    changeset = Users.change_user(user)
    opts = %{filters: %{user_id: user.id}, context: %{repo: Client}, access_token: access_token}
    project_select_options =
      Userdocs.Projects.list_projects(opts)
      |> LiveHelpers.select_list(:name, true)

    {
      :ok,
      socket
      |> assign(assigns)
      |> assign(:changeset, changeset)
      |> assign(:project_select_options, project_select_options)
      |> assign(:append_overrides, [])
    }
  end

  @impl true
  def handle_event("validate", %{"user" => user_params}, socket) do
    changeset =
      socket.assigns.user
      |> Users.change_user_options(user_params)
      |> Map.put(:action, :validate)

    {:noreply, assign(socket, :changeset, changeset)}
  end

  @impl true
  def handle_event("validate", %{"user" => _user_params}, socket) do
    # blank validation, for tests
    {:noreply, socket}
  end

  def handle_event("save", %{"user" => user_params}, socket) do
    save_user(socket, socket.assigns.action, user_params)
  end

  def handle_event("add-override", _, socket) do
    append_overrides =
      socket.assigns.append_overrides
      |> Enum.concat([Users.change_override(%Override{temp_id: UUID.uuid4()})])

    {:noreply, assign(socket, append_overrides: append_overrides)}
  end

  def handle_event("remove-override", %{"temp-id" => temp_id}, socket) do
    append_overrides =
      socket.assigns.append_overrides
      |> Enum.reject(fn %{data: override} -> override.temp_id  == temp_id end)

    {
      :noreply,
      socket
      |> assign(append_overrides: append_overrides)
    }
  end

  defp save_user(socket, :edit, user_params) do
    case Users.update_user_options(socket.assigns.user, user_params, opts(socket.assigns.access_token)) do
      {:ok, _user} ->
        {
          :noreply,
          socket
          |> put_flash(:info, "User updated successfully")
          |> push_patch(to: socket.assigns.return_to)
        }

      {:error, %Ecto.Changeset{} = changeset} ->
        {:noreply, assign(socket, :changeset, changeset)}
    end
  end
end
