defmodule Client.Remote.Screenshots do
  @moduledoc false
  require Logger
  alias Client.Requests
  alias Schemas.Screenshots.Screenshot
  alias Userdocs.Screenshots
  @url Application.compile_env(:userdocs_desktop, :host_url) <> "/api/screenshots"

  @doc "Returns the list of screenshots."
  def list_screenshots(%{access_token: access_token} = opts) do
    params =  Map.take(opts, [:filters])
    request_fun = Requests.build_get(@url)
    {:ok, %{"data" => screenshots_attrs}} = Requests.send(request_fun, access_token, params)
    Screenshots.create_screenshot_structs(screenshots_attrs)
  end

  @doc "Gets a single screenshot."
  def get_screenshot!(id, %{access_token: access_token} = opts) do
    params =  Map.take(opts, [:filters])
    request_fun = Requests.build_get_one(@url, id)
    {:ok, %{"data" => screenshots_attrs}} = Requests.send(request_fun, access_token, params)
    {:ok, screenshot} = Screenshots.create_screenshot_struct(screenshots_attrs)
    screenshot
  end

  @doc "Creates a screenshot."
  def create_screenshot(attrs, %{access_token: access_token}) do
    attrs = Map.delete(attrs, "base64")
    params = %{screenshot: attrs}
    request_fun = Requests.build_create(@url)
    {:ok, %{"data" => screenshot_attrs}} = Requests.send(request_fun, access_token, params)
    Screenshots.create_screenshot_struct(screenshot_attrs)
  end

  @doc "Updates a screenshot."
  def update_screenshot(%Screenshot{} = screenshot, attrs, %{access_token: access_token}) do
    attrs = Map.delete(attrs, "base64")
    params = %{screenshot: attrs}
    request_fun = Requests.build_update(@url, screenshot.id)
    {:ok, %{"data" => screenshot_attrs}} = Requests.send(request_fun, access_token, params)
    Screenshots.create_screenshot_struct(screenshot_attrs)
  end

  @doc "Deletes a screenshot."
  def delete_screenshot(id, %{access_token: access_token, repo_path: repo_path}) do
    request = Requests.build_delete(@url, id)
    Requests.send(request, access_token, nil)
  end
end
