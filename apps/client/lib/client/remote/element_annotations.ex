defmodule Client.Remote.ElementAnnotations do
  @moduledoc """
  The Elements context.
  """
  alias Client.Requests
  alias Userdocs.ElementAnnotations
  @url Application.compile_env(:userdocs_desktop, :host_url) <> "/api/element_annotations"

  def list_element_annotations(%{access_token: access_token} = opts) do
    params = opts |> Map.take([:filters])
    request_fun = Requests.build_get(@url)
    {:ok, %{"data" => element_annotation_attrs}} = Requests.send(request_fun, access_token, params)
    ElementAnnotations.create_element_annotation_structs(element_annotation_attrs)
  end
end
