defmodule UserdocsWeb.API.IntegrationController do
  use UserdocsWeb, :controller

  alias Userdocs.Integrations
  alias Schemas.Integrations.Integration

  action_fallback UserdocsWeb.FallbackController
  @opts %{broadcast: true, context: %{repo: Userdocs.Repo}}

  def index(conn, _params) do
    integrations = Integrations.list_integrations(@opts)
    render(conn, "index.json", integrations: integrations)
  end

  def create(conn, %{"integration" => integration_params}) do
    with {:ok, %Integration{} = integration} <- Integrations.create_integration(integration_params, @opts) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", Routes.api_integration_path(conn, :show, integration))
      |> render("show.json", integration: integration)
    end
  end

  def show(conn, %{"id" => id}) do
    integration = Integrations.get_integration!(id, @opts)
    render(conn, "show.json", integration: integration)
  end

  def update(conn, %{"id" => id, "integration" => integration_params}) do
    integration = Integrations.get_integration!(id, @opts)

    with {:ok, %Integration{} = integration} <- Integrations.update_integration(integration, integration_params, @opts) do
      render(conn, "show.json", integration: integration)
    end
  end

  def delete(conn, %{"id" => id}) do
    integration = Integrations.get_integration!(id, @opts)

    with {:ok, %Integration{}} <- Integrations.delete_integration(integration, @opts) do
      send_resp(conn, :no_content, "")
    end
  end
end
