defmodule State.Projects do
  @moduledoc "Context functiosn for operating on Project structs in memory state"

  require Logger

  alias Schemas.Projects.Project

  def load_projects(state, opts) do
    StateHandlers.load(state, Userdocs.Projects.list_projects(opts), Project, opts)
  end

  def list_projects(state, opts) do
    StateHandlers.list(state, Project, opts)
    |> maybe_preload(opts[:preloads], state, opts)
  end

  def get_project!(id, state, opts) when is_list(opts) do
    StateHandlers.get(state, id, Project, opts)
    |> maybe_preload(opts[:preloads], state, opts)
  end

  defp maybe_preload(object, nil, _, _), do: object
  defp maybe_preload(object, preloads, state, opts) do
    StateHandlers.preload(state, object, preloads, opts)
  end
end
