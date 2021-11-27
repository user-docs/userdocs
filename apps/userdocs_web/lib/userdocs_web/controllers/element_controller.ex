defmodule UserdocsWeb.API.ElementController do
  use UserdocsWeb, :controller
  alias Schemas.Elements.Element
  alias UserdocsWeb.API.Helpers
  alias Userdocs.Elements
  action_fallback UserdocsWeb.FallbackController
  @opts %{broadcast: true, context: %{repo: Userdocs.Repo}}

  def index(conn, params) do
    opts = Helpers.parse_params(params, @opts)
    elements = Elements.list_elements(opts)
    render(conn, "index.json", elements: elements)
  end

  def create(conn, %{"element" => element_params}) do
    with {:ok, %Element{} = element} <- Elements.create_element(element_params, @opts) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", Routes.api_element_path(conn, :show, element))
      |> render("show.json", element: element)
    end
  end

  def show(conn, %{"id" => id}) do
    element = Elements.get_element!(id, @opts)
    render(conn, "show.json", element: element)
  end

  def update(conn, %{"id" => id, "element" => element_params}) do
    element = Elements.get_element!(id, @opts)

    with {:ok, %Element{} = element} <- Elements.update_element(element, element_params, @opts) do
      render(conn, "show.json", element: element)
    end
  end

  def delete(conn, %{"id" => id}) do
    element = Elements.get_element!(id, @opts)

    with {:ok, %Element{}} <- Elements.delete_element(element, @opts) do
      send_resp(conn, :no_content, "")
    end
  end
end
