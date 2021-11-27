defmodule UserdocsWeb.API.ProjectController do
  use UserdocsWeb, :controller

  alias Userdocs.Projects
  alias Schemas.Projects.Project
  alias UserdocsWeb.API.Helpers
  action_fallback UserdocsWeb.FallbackController
  @opts %{broadcast: true, context: %{repo: Userdocs.Repo}}

  def index(conn, params) do
    opts = Helpers.parse_params(params, @opts)
    projects = Projects.list_projects(opts)
    render(conn, "index.json", projects: projects)
  end

  def create(conn, %{"project" => project_params}) do
    with {:ok, %Project{} = project} <- Projects.create_project(project_params, @opts) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", Routes.api_project_path(conn, :show, project))
      |> render("show.json", project: project)
    end
  end

  def show(conn, %{"id" => id}) do
    project = Projects.get_project!(id, @opts)
    render(conn, "show.json", project: project)
  end

  def update(conn, %{"id" => id, "project" => project_params}) do
    project = Projects.get_project!(id, @opts)

    with {:ok, %Project{} = project} <- Projects.update_project(project, project_params, @opts) do
      render(conn, "show.json", project: project)
    end
  end

  def delete(conn, %{"id" => id}) do
    project = Projects.get_project!(id, @opts)

    with {:ok, %Project{}} <- Projects.delete_project(project, @opts) do
      send_resp(conn, :no_content, "")
    end
  end
end
