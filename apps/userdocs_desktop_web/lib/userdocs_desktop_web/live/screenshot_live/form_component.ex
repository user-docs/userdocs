defmodule UserdocsDesktopWeb.ScreenshotLive.FormComponent do
  use UserdocsDesktopWeb, :live_component

  alias UserdocsDesktop.Paths
  alias Userdocs.Screenshots

  @impl true
  def update(%{screenshot: screenshot} = assigns, socket) do
    changeset = Screenshots.change_screenshot(screenshot)

    {:ok,
     socket
     |> assign(assigns)
     |> assign(:changeset, changeset)}
  end

  @impl true
  def handle_event("validate", %{"screenshot" => screenshot_params}, socket) do
    changeset =
      socket.assigns.screenshot
      |> Screenshots.change_screenshot(screenshot_params)
      |> Map.put(:action, :validate)

    {:noreply, assign(socket, :changeset, changeset)}
  end

  def handle_event("save", %{"screenshot" => screenshot_params}, socket) do
    save_screenshot(socket, socket.assigns.action, screenshot_params)
  end

  defp save_screenshot(socket, :edit, screenshot_params) do
    case Client.update_screenshot(socket.assigns.screenshot, screenshot_params) do
      {:ok, _screenshot} ->
        {:noreply,
         socket
         |> put_flash(:info, "Screenshot updated successfully")
         |> push_redirect(to: socket.assigns.return_to)}

      {:error, %Ecto.Changeset{} = changeset} ->
        {:noreply, assign(socket, :changeset, changeset)}
    end
  end

  defp save_screenshot(socket, :new, screenshot_params) do
    case Client.create_screenshot(screenshot_params) do
      {:ok, _screenshot} ->
        {:noreply,
         socket
         |> put_flash(:info, "Screenshot created successfully")
         |> push_redirect(to: socket.assigns.return_to)}

      {:error, %Ecto.Changeset{} = changeset} ->
        {:noreply, assign(socket, changeset: changeset)}
    end
  end
end
