defmodule ClientTest do
  use Client.Case
  use Client.RemoteCase
  alias Client.Authentication
  alias Userdocs.UsersFixtures
  alias Userdocs.TeamsFixtures
  alias Userdocs.WebFixtures
  alias Userdocs.ProjectsFixtures
  alias Userdocs.Tokens
  alias Schemas.Users.User
  @local_opts %{context: %{repo: Userdocs.LocalRepo}}
  @remote_opts %{context: %{repo: Userdocs.Repo}}

  defp create_password(_), do: %{password: UUID.uuid4()}
  defp create_user(%{password: password}), do: %{user: UsersFixtures.confirmed_user(password)}
  defp create_team(_), do: %{team: TeamsFixtures.team(@remote_opts)}
  defp create_team_user(%{user: user, team: team}), do: %{team_user: TeamsFixtures.team_user(user.id, team.id, @remote_opts)}
  defp create_strategy(_), do: %{strategy: WebFixtures.strategy(@remote_opts)}
  defp create_project(%{team: team, strategy: strategy}), do: %{project: ProjectsFixtures.project(team.id, strategy.id, @remote_opts)}
  defp create_session(%{user: user, password: password}) do
    {:ok, _user} = Client.authenticate(%{"user" => %{"email" => user.email, "password" => password}})
    %{}
  end
  defp put_tokens(_) do
    {:ok, tokens} = Client.tokens()
    tokens
  end
  defp allow_client(%{local_pid: local_pid}) do
    Ecto.Adapters.SQL.Sandbox.allow(Userdocs.LocalRepo, local_pid, Process.whereis(Client))
    :ok
  end
  def load_client(_), do: Client.load()

  describe "Initialization" do
    setup [
      :allow_client,
      :create_password,
      :create_user,
      :create_team,
      :create_team_user,
      :create_strategy,
      :create_project,
      :create_session,
      :put_tokens,
      :load_client
    ]

    test "updating context works", %{team: team, project: project} do
      Client.update_context(%{team_id: team.id, project_id: project.id})
      assert {:ok, %{id: project_id}} = Client.current_project()
      assert project_id == project.id
      assert {:ok, %{id: team_id}} = Client.current_team()
      assert team_id == team.id
    end
  end
end
