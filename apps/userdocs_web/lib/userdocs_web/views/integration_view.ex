defmodule UserdocsWeb.API.IntegrationView do
  use UserdocsWeb, :view
  alias UserdocsWeb.API.IntegrationView

  def render("index.json", %{integrations: integrations}) do
    %{data: render_many(integrations, IntegrationView, "integration.json")}
  end

  def render("show.json", %{integration: integration}) do
    %{data: render_one(integration, IntegrationView, "integration.json")}
  end

  def render("integration.json", %{integration: integration}) do
    %{id: integration.id,
      name: integration.name,
      type: integration.type}
  end
end
