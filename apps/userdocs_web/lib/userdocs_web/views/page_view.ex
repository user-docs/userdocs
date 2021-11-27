defmodule UserdocsWeb.API.PageView do
  use UserdocsWeb, :view
  alias UserdocsWeb.API.PageView

  def render("index.json", %{pages: pages}) do
    %{data: render_many(pages, PageView, "page.json")}
  end

  def render("show.json", %{page: page}) do
    %{data: render_one(page, PageView, "page.json")}
  end

  def render("page.json", %{page: page}) do
    %{
      id: page.id,
      order: page.order,
      name: page.name,
      url: page.url,
      project_id: page.project_id
    }
  end
end
