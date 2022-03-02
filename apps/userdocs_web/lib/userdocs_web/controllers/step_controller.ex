defmodule UserdocsWeb.API.StepController do
  use UserdocsWeb, :controller

  alias Userdocs.Steps
  alias Schemas.Steps.Step
  alias UserdocsWeb.API.Helpers
  action_fallback UserdocsWeb.FallbackController
  @opts %{broadcast: true, context: %{repo: Userdocs.Repo}}

  def index(conn, params) do
    opts = Helpers.parse_params(params, @opts)
    steps = Steps.list_steps(opts)
    render(conn, "index.json", steps: steps)
  end

  def create(conn, %{"step" => step_params}) do
    with {:ok, %Step{} = step} <- Steps.create_step(step_params, @opts) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", Routes.api_step_path(conn, :show, step))
      |> render("show.json", step: step)
    end
  end

  def show(conn, %{"id" => id}) do
    step = Steps.get_step!(id, @opts)
    render(conn, "show.json", step: step)
  end

  def update(conn, %{"id" => id, "step" => step_params}) do
    step = Steps.get_step!(id, @opts)

    with {:ok, %Step{} = step} <- Steps.update_step(step, step_params, @opts) do
      render(conn, "show.json", step: step)
    end
  end

  def delete(conn, %{"id" => id}) do
    step = Steps.get_step!(id, @opts)

    with {:ok, %Step{}} <- Steps.delete_step(step, @opts) do
      send_resp(conn, :no_content, "")
    end
  end
end
