defmodule UserdocsWeb.API.StrategyController do
  use UserdocsWeb, :controller
  alias Userdocs.Strategies
  alias UserdocsWeb.API.Helpers
  action_fallback UserdocsWeb.FallbackController
  @opts %{broadcast: true, context: %{repo: Userdocs.Repo}}

  def index(conn, params) do
    opts = Helpers.parse_params(params, @opts)
    strategies = Strategies.list_strategies(opts)
    render(conn, "index.json", strategies: strategies)
  end

  def show(conn, %{"id" => id}) do
    strategy = Strategies.get_strategy!(id, @opts)
    render(conn, "show.json", strategy: strategy)
  end
end
