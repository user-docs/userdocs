defmodule UserdocsDesktopWeb.ScreenshotLive.ReviewComponent do
  use UserdocsDesktopWeb, :live_component

  alias Local.Paths
  alias Schemas.Screenshots.Screenshot
  alias Userdocs.ImageComparison

  @impl true
  def update(%{screenshot: screenshot} = assigns, socket) do
    {
      :ok,
      socket
      |> assign(assigns)
      |> assign_default_tab(screenshot)
      |> assign_dimensions(screenshot)
    }
  end

  @impl true
  def handle_event("approve", %{"id" => _}, socket) do
    {:ok, screenshot} = Client.approve_screenshot(socket.assigns.screenshot)
    {
      :noreply,
      socket
      |> assign_default_tab(screenshot)
      |> assign(:screenshot, screenshot)
    }
  end
  def handle_event("reject", %{"id" => _}, socket) do
    {:ok, screenshot} = Client.reject_screenshot(socket.assigns.screenshot)
    {
      :noreply,
      socket
      |> assign_default_tab(screenshot)
      |> assign(:screenshot, screenshot)
    }
  end
  def handle_event("set-tab", %{"tab" => tab}, socket) do
    {:noreply, socket |> assign(:tab, String.to_atom(tab))}
  end

  def assign_dimensions(socket, %Screenshot{status: :size_difference} = screenshot) do
    repo_path = Paths.image_repo_path()
    magick_path = Paths.imagemagick_executable_path()
    original_path = Path.join(repo_path, "#{screenshot.id}.png")
    provisional_path = Path.join(repo_path, "#{screenshot.id}-provisional.png")
    original_dimensions = ImageComparison.ping(original_path, magick_path)
    provisional_dimensions = ImageComparison.ping(provisional_path, magick_path)
    assign(socket, :dimensions, %{
      provisional: %{w: provisional_dimensions.w, h: provisional_dimensions.h},
      original: %{w: original_dimensions.w, h: original_dimensions.h},
    })
  end
  def assign_dimensions(socket, %Screenshot{status: :difference} = screenshot) do
    original_path = Path.join(Paths.image_repo_path(), "#{screenshot.id}.png")
    original_dimensions = ImageComparison.ping(original_path, Paths.imagemagick_executable_path())
    assign(socket, :dimensions, %{original: %{w: original_dimensions.w, h: original_dimensions.h}})
  end
  def assign_dimensions(socket, _), do: socket

  def assign_default_tab(socket, %Screenshot{status: :size_difference}), do: assign(socket, :tab, :side_by_side)
  def assign_default_tab(socket, %Screenshot{status: :difference}), do: assign(socket, :tab, :swipe)
  def assign_default_tab(socket, %Screenshot{status: _}), do: assign(socket, :tab, :screenshot)

  def tab_active(true), do: " tab-active"
  def tab_active(false), do: ""

  def screenshot_link(id), do: "#{UserdocsDesktopWeb.Endpoint.url()}/images/#{id}.png?#{NaiveDateTime.utc_now()}"
  def provisional_link(id), do: "#{UserdocsDesktopWeb.Endpoint.url()}/images/#{id}-provisional.png?#{NaiveDateTime.utc_now()}"
  def diff_link(id), do: "#{UserdocsDesktopWeb.Endpoint.url()}/images/#{id}-diff.png?#{NaiveDateTime.utc_now()}"
end
