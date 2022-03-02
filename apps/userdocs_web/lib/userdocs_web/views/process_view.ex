defmodule UserdocsWeb.API.ProcessView do
  use UserdocsWeb, :view
  alias UserdocsWeb.API.ProcessView

  def render("index.json", %{processes: processes}) do
    %{data: render_many(processes, ProcessView, "process.json")}
  end

  def render("show.json", %{process: process}) do
    %{data: render_one(process, ProcessView, "process.json")}
  end

  def render("process.json", %{process: process}) do
    %{
      id: process.id,
      name: process.name,
      project_id: process.project_id
    }
  end
end
