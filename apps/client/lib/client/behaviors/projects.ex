defmodule Client.Projects do
  import Client.APISupport
  import Client.Constants
  alias Schemas.Projects.Project

  @callback list_projects(map()) :: list(Project)
  @callback create_project(map(), map()) :: {:ok, Project} | {:error, Ecto.Changeset}
  @callback update_project(Project, map(), map()) :: {:ok, Project} | {:error, Ecto.Changeset}
  @callback delete_project(Project, map()) :: {:ok, Project} | {:error, Ecto.Changeset}

  def create_project(attrs, state),
    do: Module.concat(impl(state), "Projects").create_project(attrs, local_or_remote_opts(state))

  def update_project(project, attrs, state),
    do: Module.concat(impl(state), "Projects").update_project(project, attrs, local_or_remote_opts(state))

  def delete_project(project, state), do: Module.concat(impl(state), "Projects").delete_project(project, local_or_remote_opts(state))

  def load_projects(state, opts) do
    projects = Module.concat(impl(state), "Projects").list_projects(local_or_remote_opts(state, opts))
    StateHandlers.load(state, projects, Project, state_opts())
  end
end