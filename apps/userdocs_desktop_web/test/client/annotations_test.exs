defmodule ClientTest.Annotations do
  use UserdocsDesktopWeb.ConnCase
  use UserdocsDesktopWeb.ChannelCase
  alias Userdocs.ProjectsFixtures
  alias Userdocs.UsersFixtures
  alias Userdocs.TeamsFixtures
  alias Userdocs.WebFixtures
  alias Schemas.Annotations.Annotation

  @remote_opts %{context: %{repo: Userdocs.Repo}}

  defp create_password(_), do: %{password: UUID.uuid4()}
  defp create_user(%{password: password}), do: %{user: UsersFixtures.confirmed_user(password)}
  defp create_team(_), do: %{team: TeamsFixtures.team(@remote_opts)}
  defp create_team_user(%{user: user, team: team}), do: %{team_user: TeamsFixtures.team_user(user.id, team.id, @remote_opts)}
  defp create_strategy(_), do: %{strategy: WebFixtures.strategy(@remote_opts)}
  defp create_project(%{team: team, strategy: strategy}), do: %{project: ProjectsFixtures.project(team.id, strategy.id, @remote_opts)}
  defp create_page(%{project: project}), do: %{page: WebFixtures.page(project.id, @remote_opts)}
  defp create_annotation(%{page: page}), do: %{annotation: WebFixtures.annotation(page.id, @remote_opts)}
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

  describe "Annotations" do
    setup [
      :create_password,
      :create_user,
      :create_team,
      :create_team_user,
      :create_strategy,
      :create_project,
      :create_page,
      :create_annotation,
      :make_selections,
      :create_session,
      :init_state
    ]

    setup do
      on_exit(fn -> Client.destroy_state() end)
    end

    test "Annotations Initialize properly" do
      assert Map.has_key?(Client.data(), :annotations)
    end

    test "Loads Annotations", %{project: project, annotation: annotation} do
      Client.load_annotations(%{filters: %{project_id: project.id}})
      %{annotations: [result]} = Client.data()
      assert %Annotation{} = result
      assert result.id == annotation.id
    end

    test "Lists Annotations", %{project: project, annotation: annotation} do
      Client.load_annotations(%{filters: %{project_id: project.id}})
      [result] = Client.list_annotations([])
      assert %Annotation{} = result
      assert result.id == annotation.id
    end

    test "Annotation CU", %{project: project, page: page, annotation: annotation} do
      Client.connect()
      UserdocsDesktopWeb.Endpoint.subscribe("data")
      Client.load_annotations(%{filters: %{project_id: project.id}})

      WebFixtures.annotation_attrs(:valid, page.id)
      |> Client.create_annotation()
      assert_broadcast("create", %{})

      attrs = WebFixtures.annotation_attrs(:valid, page.id)
      Client.update_annotation(annotation, attrs)
      assert_broadcast("update", %{})
      UserdocsDesktopWeb.Endpoint.unsubscribe("data")
      Client.disconnect()
    end
  end
end
