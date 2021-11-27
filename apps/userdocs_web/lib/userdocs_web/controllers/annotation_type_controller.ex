defmodule UserdocsWeb.API.AnnotationTypeController do
  use UserdocsWeb, :controller
  alias Userdocs.AnnotationTypes
  alias UserdocsWeb.API.Helpers
  action_fallback UserdocsWeb.FallbackController
  @opts %{broadcast: true, context: %{repo: Userdocs.Repo}}

  def index(conn, params) do
    opts = Helpers.parse_params(params, @opts)
    annotation_types = AnnotationTypes.list_annotation_types(opts)
    render(conn, "index.json", annotation_types: annotation_types)
  end
end
