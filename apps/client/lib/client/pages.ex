defmodule Client.Pages do
  @moduledoc """
  The Pages context.
  """
  require Logger
  alias Schemas.Pages.Page
  alias Schemas.Screenshots.Screenshot
  alias Userdocs.Pages
  alias Client.Requests
  @url Application.compile_env(:userdocs_desktop, :host_url) <> "/api/pages"

  @doc "Returns the list of pages."
  def list_pages(%{access_token: access_token} = opts) do
    params =  Map.take(opts, [:filters])
    request_fun = Requests.build_get(@url)
    {:ok, %{"data" => pages_attrs}} = Requests.send(request_fun, access_token, params)
    Pages.create_page_structs(pages_attrs)
  end

  @doc "Creates a page."
  def create_page(attrs, %{access_token: access_token}) do
    params = %{page: attrs}
    request_fun = Requests.build_create(@url)
    {:ok, %{"data" => page_attrs}} = Requests.send(request_fun, access_token, params)
    Pages.create_page_struct(page_attrs)
  end

  @doc "Updates a page."
  def update_page(%Page{} = page, attrs, %{access_token: access_token}) do
    request_fun = Requests.build_update(@url, page.id)
    {:ok, %{"data" => page_attrs}} = Requests.send(request_fun, access_token, %{page: attrs})
    Pages.create_page_struct(page_attrs)
  end

  @doc "Deletes a page."
  def delete_page(id, %{access_token: access_token}) do
    request = Requests.build_delete(@url, id)
    Requests.send(request, access_token, nil)
  end

  @doc "Creates a screenshot for the page if there isn't one, or updates the existing one."
  def upsert_page_screenshot(%Page{screenshots: []} = page, base64, opts) do
    attrs = create_screenshot_attrs(page, base64)
    Client.Screenshots.create_screenshot(attrs, opts)
  end
  def upsert_page_screenshot(%Page{screenshots: [%Screenshot{} = screenshot]} = page, base64, opts) do
    attrs = update_screenshot_attrs(page, base64)
    Client.Screenshots.update_screenshot(screenshot, attrs, opts)
  end

  def create_screenshot_attrs(page, base64) do
    %{
      "id" => Ecto.UUID.generate(),
      "project_id" => page.project_id,
      "page_id" => page.id,
      "name" => page.name <> " screenshot",
      "status" => "ok",
      "base64" => base64
    }
  end

  def update_screenshot_attrs(page, base64) do
    %{
      "page_id" => page.id,
      "project_id" => page.project_id,
      "base64" => base64
    }
  end
end
