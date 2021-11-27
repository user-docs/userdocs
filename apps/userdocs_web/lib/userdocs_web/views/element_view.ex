defmodule UserdocsWeb.API.ElementView do
  use UserdocsWeb, :view
  alias UserdocsWeb.API.ElementView

  def render("index.json", %{elements: elements}) do
    %{data: render_many(elements, ElementView, "element.json")}
  end

  def render("show.json", %{element: element}) do
    %{data: render_one(element, ElementView, "element.json")}
  end

  def render("element.json", %{element: element}) do
    %{
      id: element.id,
      name: element.name,
      selector: element.selector,
      strategy_id: element.strategy_id,
      page_id: element.page_id
    }
  end
end
