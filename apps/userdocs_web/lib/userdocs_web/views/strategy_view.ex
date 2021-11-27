defmodule UserdocsWeb.API.StrategyView do
  use UserdocsWeb, :view
  alias UserdocsWeb.API.StrategyView

  def render("index.json", %{strategies: strategies}) do
    %{data: render_many(strategies, StrategyView, "strategy.json")}
  end

  def render("show.json", %{strategy: strategy}) do
    %{data: render_one(strategy, StrategyView, "strategy.json")}
  end

  def render("strategy.json", %{strategy: strategy}) do
    %{id: strategy.id,
      name: strategy.name}
  end
end
