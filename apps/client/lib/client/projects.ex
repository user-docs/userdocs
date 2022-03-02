defmodule Client.Projects do
  @moduledoc """
  The Projects context.
  """
  require Logger
  alias Client.Requests
  alias Userdocs.Projects
  alias Schemas.Projects.Project
  @url Application.compile_env(:userdocs_desktop, :host_url) <> "/api/projects"

  @doc "Returns the list of projects."
  def list_projects(%{access_token: access_token} = opts) do
    params =  Map.take(opts, [:filters])
    request_fun = Requests.build_get(@url)
    {:ok, %{"data" => projects_attrs}} = Requests.send(request_fun, access_token, params)
    Projects.create_project_structs(projects_attrs)
  end

  @doc "Creates a project."
  def create_project(attrs, %{access_token: access_token}) do
    params = %{project: attrs}
    request_fun = Requests.build_create(@url)
    {:ok, %{"data" => project_attrs}} = Requests.send(request_fun, access_token, params)
    Projects.create_project_struct(project_attrs)
  end

  @doc "Updates a project."
  def update_project(%Project{} = project, attrs, %{access_token: access_token}) do
    request_fun = Requests.build_update(@url, project.id)
    {:ok, %{"data" => project_attrs}} = Requests.send(request_fun, access_token, %{project: attrs})
    Projects.create_project_struct(project_attrs)
  end

  @doc "Deletes a project."
  def delete_project(id, %{access_token: access_token}) do
    request = Requests.build_delete(@url, id)
    Requests.send(request, access_token, nil)
  end
end
