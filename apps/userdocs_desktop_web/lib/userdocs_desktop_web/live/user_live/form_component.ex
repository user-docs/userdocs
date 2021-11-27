defmodule UserdocsDesktopWeb.UserLive.FormComponent do
  use UserdocsDesktopWeb, :live_component

  alias Schemas.Users.Override
  alias Userdocs.Users
  alias UserdocsDesktopWeb.LiveHelpers
  def opts(token), do: %{access_token: token, context: %{repo: Client}}

  @impl true
  def render(%{action: action} = assigns) when action in [ :new, :edit ] do
    ~L"""
      <h2 class="title"><%= @title %></h2>
      <%= form_for @changeset, registration_path(@socket, action, @user), [
        phx_target: @myself.cid, phx_change: "validate", phx_submit: "save", id: "user-form", as: :user
      ], fn f -> %>
        <div class="form-control">
          <%= label f, Pow.Ecto.Schema.user_id_field(@changeset), class: "label" %>
          <%= text_input f, Pow.Ecto.Schema.user_id_field(@changeset), type: "text", class: "input input-bordered" %>
          <%= error_tag f, Pow.Ecto.Schema.user_id_field(@changeset) %>
        </div>

        <div class="form-control">
          <%= label f, :current_password, class: "label" %>
          <%= password_input f, :current_password, class: "input input-bordered" %>
          <%= error_tag f, :current_password %>
        </div>

        <div class="form-control">
          <%= label f, :password, class: "label" %>
          <%= password_input f, :password, class: "input input-bordered" %>
          <%= error_tag f, :password %>
        </div>

        <div class="form-control">
          <%= label f, :password_confirmation, class: "label" %>
          <%= password_input f, :password_confirmation, class: "input input-bordered" %>
          <%= error_tag f, :password_confirmation %>
        </div>

        <div class="mt-4">
          <%= submit "Save", phx_disable_with: "Saving...", class: "btn btn-primary mr-2" %>
        </div>

      <% end %>
    """
  end

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
  def handle_event("validate", %{"user" => user_params}, %{assigns: %{action: :options}} = socket) do
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
          |> push_redirect(to: socket.assigns.return_to)
        }

      {:error, %Ecto.Changeset{} = changeset} ->
        {:noreply, assign(socket, :changeset, changeset)}
    end
  end

  defp save_user(socket, :new, user_params) do
    case Users.create_user(user_params, opts(socket.assigns.access_token)) do
      {:ok, _user} ->
        {
          :noreply,
          socket
          |> put_flash(:info, "User created successfully")
          |> push_redirect(to: socket.assigns.return_to)
        }

      {:error, %Ecto.Changeset{} = changeset} ->
        {:noreply, assign(socket, changeset: changeset)}
    end
  end

  defp save_user(socket, :options, user_params) do
    #user_params = Map.put(user_params, "overrides", [])
    case Users.update_user_options(socket.assigns.user, user_params, opts(socket.assigns.access_token)) do
      {:ok, user} ->
        {
          :noreply,
          socket
          |> put_flash(:info, "User updated successfully")
          |> push_redirect(to: socket.assigns.return_to)
        }

      {:error, %Ecto.Changeset{} = changeset} ->
        {:noreply, assign(socket, changeset: changeset)}
    end
  end

  def registration_path(socket, :new, _user), do: Routes.registration_path(socket, :new)
  def registration_path(socket, :edit, user), do: Routes.registration_path(socket, :edit, user)
end
