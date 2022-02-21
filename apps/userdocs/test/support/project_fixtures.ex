defmodule Userdocs.ProjectsFixtures do
  @moduledoc false
  alias Userdocs.Projects

  def project(team_id \\ nil, strategy_id \\ nil, opts) do
    {:ok, project } =
      project_attrs(:valid, team_id, strategy_id)
      |> Projects.create_project(opts)
      project
  end

  def project_attrs(type, team_id \\ nil, strategy_id \\ nil)
  def project_attrs(:valid, team_id, strategy_id) do
    %{
      base_url: "https://www.#{UUID.uuid4()}.com",
      name: UUID.uuid4(),
      team_id: team_id,
      strategy_id: strategy_id,
      default_width: 800,
      default_height: 600
    }
  end
  def project_attrs(:default, team_id, strategy_id) do
    %{
      base_url: UUID.uuid4(),
      name: UUID.uuid4(),
      team_id: team_id,
      strategy_id: strategy_id
    }
  end
  def project_attrs(:invalid, team_id, strategy_id) do
    %{
      base_url: nil,
      name: nil,
      strategy_id: strategy_id,
      team_id: team_id
    }
  end

end
