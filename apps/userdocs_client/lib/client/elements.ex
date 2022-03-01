defmodule Client.Elements do
  @moduledoc """
  The Elements context.
  """
  alias Userdocs.Requests
  alias Userdocs.Elements
  alias Schemas.Elements.Element
  @url Application.compile_env(:userdocs_desktop, :host_url) <> "/api/elements"

  @doc "Lists Elements"
  def list_elements(%{access_token: access_token} = opts) do
    params = opts |> Map.take([:filters])
    request_fun = Requests.build_get(@url)
    {:ok, %{"data" => element_attrs}} = Requests.send(request_fun, access_token, params)
    Elements.create_element_structs(element_attrs)
  end

  @doc "Creates an Element"
  def create_element(attrs, %{access_token: access_token}) do
    params = %{element: attrs}
    request_fun = Requests.build_create(@url)
    {:ok, %{"data" => element_attrs}} = Requests.send(request_fun, access_token, params)
    Elements.create_element_struct(element_attrs)
  end

  @doc "Updates an Element"
  def update_element(%Element{} = element, attrs, %{access_token: access_token}) do
    request_fun = Requests.build_update(@url, element.id)
    {:ok, %{"data" => element_attrs}} = Requests.send(request_fun, access_token, %{element: attrs})
    Elements.create_element_struct(element_attrs)
  end

  @doc "Deletes an element"
  def delete_element(id, %{access_token: access_token}) do
    request = Requests.build_delete(@url, id)
    Requests.send(request, access_token, nil)
  end
end
