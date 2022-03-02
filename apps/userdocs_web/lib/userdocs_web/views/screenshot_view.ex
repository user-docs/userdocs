defmodule UserdocsWeb.API.ScreenshotView do
  use UserdocsWeb, :view
  alias UserdocsWeb.API.ScreenshotView
  alias Userdocs.Screenshots

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
      file_name: screenshot.file_name,
      status: screenshot.status,
      score: screenshot.score,
      aws_file: screenshot.aws_file,
      aws_screenshot: screenshot.aws_screenshot,
      aws_diff_screenshot: screenshot.aws_diff_screenshot,
      aws_provisional_screenshot: screenshot.aws_provisional_screenshot,
      presigned_urls: Screenshots.presigned_urls(screenshot),
      project_id: screenshot.project_id,
      page_id: screenshot.page_id
    }
  end
end
