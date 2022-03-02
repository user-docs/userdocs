defmodule UserdocsWeb.API.StepTypesController do
  use UserdocsWeb, :controller
  alias UserdocsWeb.API.Helpers
  action_fallback UserdocsWeb.FallbackController
  @opts %{broadcast: true, context: %{repo: Userdocs.Repo}}

  def index(conn, params) do
    opts = Helpers.parse_params(params, @opts)
    step_types = Userdocs.StepTypes.list_step_types(opts)
    render(conn, "index.json", step_types: step_types)
  end
end
