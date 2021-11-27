defmodule UserdocsWeb.API.ElementAnnotationController do
  use UserdocsWeb, :controller
  alias Userdocs.ElementAnnotations
  alias UserdocsWeb.API.Helpers
  action_fallback UserdocsWeb.FallbackController
  @opts %{broadcast: true, context: %{repo: Userdocs.Repo}}

  def index(conn, params) do
    opts = Helpers.parse_params(params, @opts)
    element_annotations = ElementAnnotations.list_element_annotations(opts)
    render(conn, "index.json", element_annotations: element_annotations)
  end
end
