defmodule ClientTest do
  use Client.RemoteCase
  use Client.LocalCase
  use Client.Case

  describe "Initialization" do
    setup [
      :reinitialize_state,
      :create_password,
      :create_user,
      :create_local_team,
      :create_local_strategy,
      :create_local_project,
      :create_local_user_context,
      :put_local_context_data,
      :put_user_in_state
    ]

    test "updating context works", %{local_team: team, local_project: project} do
      Client.update_context(%{team_id: team.id, project_id: project.id})
      assert %Schemas.Projects.Project{} = the_project = Client.current_project()
      assert the_project.id == project.id
      assert %Schemas.Teams.Team{} = the_team = Client.current_team()
      assert the_team.id == team.id
    end
  end
end
