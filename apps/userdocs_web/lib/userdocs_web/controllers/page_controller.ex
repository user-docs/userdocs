defmodule UserdocsWeb.API.PageController do
  use UserdocsWeb, :controller

  alias Userdocs.Pages
  alias Schemas.Pages.Page
  alias UserdocsWeb.API.Helpers
  action_fallback UserdocsWeb.FallbackController
  @opts %{broadcast: true, context: %{repo: Userdocs.Repo}}

  def index(conn, params) do
    opts = Helpers.parse_params(params, @opts)
    pages = Pages.list_pages(opts)
    render(conn, "index.json", pages: pages)
  end

  def create(conn, %{"page" => page_params}) do
    with {:ok, %Page{} = page} <- Pages.create_page(page_params, @opts) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", Routes.api_page_path(conn, :show, page))
      |> render("show.json", page: page)
    end
  end

  def show(conn, %{"id" => id}) do
    page = Pages.get_page!(id, @opts)
    render(conn, "show.json", page: page)
  end

  def update(conn, %{"id" => id, "page" => page_params}) do
    page = Pages.get_page!(id, @opts)

    with {:ok, %Page{} = page} <- Pages.update_page(page, page_params, @opts) do
      render(conn, "show.json", page: page)
    end
  end

  def delete(conn, %{"id" => id}) do
    page = Pages.get_page!(id, @opts)

    with {:ok, %Page{}} <- Pages.delete_page(page, @opts) do
      send_resp(conn, :no_content, "")
    end
  end
end
