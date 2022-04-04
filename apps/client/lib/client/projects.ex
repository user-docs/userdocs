defmodule Client.Projects do
  import Client.Helpers
  import Client.Constants
  alias Client.Remote
  alias Schemas.Projects.Project

  def load_projects(state, opts) do
    case is_remote?(state) do
      true -> load_remote_projects(state, merge_token(opts, state))
      false -> load_local_projects(state, merge_local_opts(opts))
    end
  end

  defp load_remote_projects(state, opts) do
    projects = Client.Remote.Projects.list_projects(opts)
    StateHandlers.load(state, projects, Project, state_opts())
  end

  defp load_local_projects(state, opts) do
    projects = Userdocs.Projects.list_projects(opts)
    StateHandlers.load(state, projects, Project, state_opts())
  end

  def create_project(attrs, state) do
    case is_remote?(state) do
      true -> Remote.Projects.create_project(attrs, state)
      false -> Userdocs.Projects.create_project(attrs, local_opts())
    end
  end

  def update_project(project, attrs, state) do
    case is_remote?(state) do
      true -> Remote.Projects.update_project(project, attrs, state)
      false -> Userdocs.Projects.update_project(project, attrs, local_opts())
    end
  end

  def delete_project(id, state) do
    case is_remote?(state) do
      true -> Remote.Projects.delete_project(id, state)
      false -> Userdocs.Projects.delete_project(id, local_opts())
    end
  end
end
