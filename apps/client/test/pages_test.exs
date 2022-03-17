defmodule ClientTest.PagesTest do
  use ExUnit.Case
  use Client.Case
  alias Userdocs.ProjectsFixtures
  alias Userdocs.UsersFixtures
  alias Userdocs.TeamsFixtures
  alias Userdocs.WebFixtures

  @remote_opts %{context: %{repo: Userdocs.Repo}}

  defp create_password(_), do: %{password: UUID.uuid4()}
  defp create_user(%{password: password}), do: %{user: UsersFixtures.confirmed_user(password)}
  defp create_team(_), do: %{team: TeamsFixtures.team(@remote_opts)}
  defp create_team_user(%{user: user, team: team}), do: %{team_user: TeamsFixtures.team_user(user.id, team.id, @remote_opts)}
  defp create_strategy(_), do: %{strategy: WebFixtures.strategy(@remote_opts)}
  defp create_project(%{team: team, strategy: strategy}), do: %{project: ProjectsFixtures.project(team.id, strategy.id, @remote_opts)}
  defp create_page(%{project: project}), do: %{page: WebFixtures.page(project.id, @remote_opts)}
  defp make_selections(%{user: user, team: team, project: project}) do
    {:ok, user} = Userdocs.Users.update_user_selections(user, %{selected_team_id: team.id, selected_project_id: project.id}, %{context: %{repo: Userdocs.Repo}})
    %{user: user}
  end
  defp create_session(%{user: user, password: password}) do
    {:ok, _user} = Client.authenticate(%{"user" => %{"email" => user.email, "password" => password}})
    %{}
  end
  defp init_state(_) do
    Client.init_state()
    %{}
  end

  describe "Pages" do
    setup [
      :create_password,
      :create_user,
      :create_team,
      :create_team_user,
      :create_strategy,
      :create_project,
      :create_page,
      :make_selections,
      :create_session,
      :init_state
    ]

    setup do
      on_exit(fn -> Client.destroy_state() end)
    end

    test "Pages Initialize properly" do
      assert Map.has_key?(Client.data(), :pages)
    end

    test "Loads Pages", %{project: project, page: page} do
      Client.load_pages(%{filters: %{project_id: project.id}})
      %{pages: [result]} = Client.data()
      assert result.id == page.id
    end

    test "Lists Pages", %{project: project, page: page} do
      Client.load_pages(%{filters: %{project_id: project.id}})
      [result] = Client.list_pages([])
      assert result.id == page.id
    end

    test "Page CU", %{user: user, page: page} do
      Phoenix.PubSub.subscribe(Userdocs.PubSub, "data")
      Client.load_pages(%{project_id: user.selected_project_id})

      WebFixtures.page_attrs(:valid, user.selected_project_id)
      |> Client.create_page()
      assert_receive(%{event: "create"}, 1000)

      attrs = WebFixtures.page_attrs(:valid, user.selected_project_id)
      Client.update_page(page, attrs)
      assert_receive(%{event: "update"}, 1000)
      Phoenix.PubSub.unsubscribe(Userdocs.PubSub, "data")
    end
  end
end
