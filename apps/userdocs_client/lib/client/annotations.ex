defmodule Client.Annotations do
  @moduledoc "The Annotations context."
  require Logger
  alias Schemas.Annotations.Annotation
  alias Userdocs.Requests
  alias Userdocs.Annotations
  @url Application.compile_env(:userdocs_desktop, :host_url) <> "/api/annotations"

  def list_annotations(%{access_token: access_token} = opts) do
    params =  Map.take(opts, [:filters])
    request_fun = Requests.build_get(@url)
    {:ok, %{"data" => pages_attrs}} = Requests.send(request_fun, access_token, params)
    Annotations.create_annotation_structs(pages_attrs)
  end

  def create_annotation(attrs, %{access_token: access_token}) do
    params = %{annotation: attrs}
    request_fun = Requests.build_create(@url)
    {:ok, %{"data" => annotation_attrs}} = Requests.send(request_fun, access_token, params)
    Annotations.create_annotation_struct(annotation_attrs)
  end

  def update_annotation(%Annotation{} = annotation, attrs, %{access_token: access_token}) do
    request_fun = Requests.build_update(@url, annotation.id)
    {:ok, %{"data" => annotation_attrs}} = Requests.send(request_fun, access_token, %{annotation: attrs})
    Annotations.create_annotation_struct(annotation_attrs)
  end

  def delete_annotation(id, %{access_token: access_token}) do
    request = Requests.build_delete(@url, id)
    Requests.send(request, access_token, nil)
  end
end
