defmodule Client.AnnotationTypes do
  require Logger
  alias Client.Requests
  alias Userdocs.AnnotationTypes
  @url "http://localhost:4000/api/annotation_types"

  def list_annotation_types(%{access_token: access_token} = opts) do
    params = opts |> Map.take([:filters])
    request_fun = Requests.build_get(@url)
    {:ok, %{"data" => annotation_type_attrs}} = Requests.send(request_fun, access_token, params)
    AnnotationTypes.create_annotation_type_structs(annotation_type_attrs)
  end
end
