defmodule UserdocsWeb.API.ScreenshotView do
  use UserdocsWeb, :view
  alias UserdocsWeb.API.ScreenshotView
  alias Userdocs.S3Provider

  def render("index.json", %{screenshots: screenshots}) do
    %{data: render_many(screenshots, ScreenshotView, "screenshot.json")}
  end

  def render("show.json", %{screenshot: screenshot}) do
    %{data: render_one(screenshot, ScreenshotView, "screenshot.json")}
  end

  def render("screenshot.json", %{screenshot: screenshot}) do
    %{
      id: screenshot.id,
      name: screenshot.name,
      status: screenshot.status,
      score: screenshot.score,
      presigned_urls: S3Provider.presigned_urls(screenshot),
      page_id: screenshot.page_id
    }
  end
end
