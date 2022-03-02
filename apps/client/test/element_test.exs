defmodule ClientTest.Elements do
  use ExUnit.Case
  use Client.Case
  alias Userdocs.ProjectsFixtures
  alias Userdocs.UsersFixtures
  alias Userdocs.TeamsFixtures
  alias Userdocs.WebFixtures
  alias Schemas.Elements.Element

  @remote_opts %{context: %{repo: Userdocs.Repo}}

  defp create_password(_), do: %{password: UUID.uuid4()}
  defp create_user(%{password: password}), do: %{user: UsersFixtures.confirmed_user(password)}
  defp create_team(_), do: %{team: TeamsFixtures.team(@remote_opts)}
  defp create_team_user(%{user: user, team: team}), do: %{team_user: TeamsFixtures.team_user(user.id, team.id, @remote_opts)}
  defp create_strategy(_), do: %{strategy: WebFixtures.strategy(@remote_opts)}
  defp create_project(%{team: team, strategy: strategy}), do: %{project: ProjectsFixtures.project(team.id, strategy.id, @remote_opts)}
  defp create_page(%{project: project}), do: %{page: WebFixtures.page(project.id, @remote_opts)}
  defp create_element(%{page: page, strategy: strategy}), do: %{element: WebFixtures.element(page.id, strategy.id, @remote_opts)}
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

  describe "Elements" do
    setup [
      :create_password,
      :create_user,
      :create_team,
      :create_team_user,
      :create_strategy,
      :create_project,
      :create_page,
      :create_element,
      :make_selections,
      :create_session,
      :init_state
    ]

    setup do
      on_exit(fn -> Client.destroy_state() end)
    end

    test "Elements Initialize properly" do
      assert Map.has_key?(Client.data(), :elements)
    end

    test "Loads Elements", %{project: project, element: element} do
      Client.load_elements(%{filters: %{project_id: project.id}})
      %{elements: [result]} = Client.data()
      assert %Element{} = result
      assert result.id == element.id
    end

    test "Lists Elements", %{project: project, element: element} do
      Client.load_elements(%{filters: %{project_id: project.id}})
      [result] = Client.list_elements([])
      assert %Element{} = result
      assert result.id == element.id
    end

    test "Element CU", %{project: project, element: element, strategy: strategy, page: page} do
      Client.connect()
      Phoenix.PubSub.subscribe(Userdocs.PubSub, "data")
      Client.load_elements(%{filters: %{project_id: project.id}})

      WebFixtures.element_attrs(:valid, page.id, strategy.id)
      |> Client.create_element()
      assert_receive(%{event: "create"}, 1000)

      attrs = WebFixtures.element_attrs(:valid, page.id, strategy.id)
      Client.update_element(element, attrs)
      assert_receive(%{event: "update"}, 1000)
      Phoenix.PubSub.unsubscribe(Userdocs.PubSub, "data")
      Client.disconnect()
    end
  end
end
