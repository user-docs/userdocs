defmodule Client.Context.Projects do
  alias Client.Constants
  alias Schemas.Users.Context

  def get_current_project(%{context: %Context{project_id: project_id}} = state) do
    state_opts = Constants.state_opts()
    State.Projects.get_project!(project_id, state, state_opts)
  end
end
