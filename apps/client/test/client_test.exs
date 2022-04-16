defmodule ClientTest do
  use Client.RemoteCase
  use Client.LocalCase
  use Client.Case

  defp create_session(%{user: user, password: password}) do
    {:ok, _user} = Client.authenticate(%{"user" => %{"email" => user.email, "password" => password}})
    %{}
  end

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
      Client.load()
      Client.update_context(%{team_id: team.id, project_id: project.id})
      assert {:ok, %{id: project_id}} = Client.current_project()
      assert project_id == project.id
      assert {:ok, %{id: team_id}} = Client.current_team()
      assert team_id == team.id
    end
  end
end
