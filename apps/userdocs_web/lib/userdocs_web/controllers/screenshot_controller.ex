defmodule UserdocsWeb.API.ScreenshotController do
  use UserdocsWeb, :controller

  alias Userdocs.Screenshots
  alias Schemas.Screenshots.Screenshot
  alias UserdocsWeb.API.Helpers
  action_fallback UserdocsWeb.FallbackController
  @opts %{broadcast: true, context: %{repo: Userdocs.Repo}}

  def index(conn, params) do
    opts = Helpers.parse_params(params, @opts)
    screenshots = Screenshots.list_screenshots(opts)
    render(conn, "index.json", screenshots: screenshots)
  end

  def create(conn, %{"screenshot" => screenshot_params}) do
    with {:ok, %Screenshot{} = screenshot} <- Screenshots.create_screenshot(screenshot_params, @opts) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", Routes.api_screenshot_path(conn, :show, screenshot))
      |> render("show.json", screenshot: screenshot)
    end
  end

  def show(conn, %{"id" => id}) do
    screenshot = Screenshots.get_screenshot!(id, @opts)
    render(conn, "show.json", screenshot: screenshot)
  end

  def update(conn, %{"id" => id, "screenshot" => screenshot_params}) do
    screenshot = Screenshots.get_screenshot!(id, @opts)

    with {:ok, %Screenshot{} = screenshot} <- Screenshots.update_screenshot(screenshot, screenshot_params, @opts) do
      render(conn, "show.json", screenshot: screenshot)
    end
  end

  def delete(conn, %{"id" => id}) do
    screenshot = Screenshots.get_screenshot!(id, @opts)

    with {:ok, %Screenshot{}} <- Screenshots.delete_screenshot(screenshot, @opts) do
      send_resp(conn, :no_content, "")
    end
  end
end
