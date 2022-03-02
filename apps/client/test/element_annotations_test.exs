defmodule ClientTest.ElementAnnotations do
  use ExUnit.Case
  use Client.Case
  alias Userdocs.ProjectsFixtures
  alias Userdocs.UsersFixtures
  alias Userdocs.TeamsFixtures
  alias Userdocs.WebFixtures
  alias Schemas.Elements.ElementAnnotation

  @remote_opts %{context: %{repo: Userdocs.Repo}}

  defp create_password(_), do: %{password: UUID.uuid4()}
  defp create_user(%{password: password}), do: %{user: UsersFixtures.confirmed_user(password)}
  defp create_team(_), do: %{team: TeamsFixtures.team(@remote_opts)}
  defp create_team_user(%{user: user, team: team}), do: %{team_user: TeamsFixtures.team_user(user.id, team.id, @remote_opts)}
  defp create_strategy(_), do: %{strategy: WebFixtures.strategy(@remote_opts)}
  defp create_project(%{team: team, strategy: strategy}), do: %{project: ProjectsFixtures.project(team.id, strategy.id, @remote_opts)}
  defp create_page(%{project: project}), do: %{page: WebFixtures.page(project.id, @remote_opts)}
  defp create_element(%{page: page, strategy: strategy}), do: %{element: WebFixtures.element(page.id, strategy.id, @remote_opts)}
  defp create_annotation(%{page: page}), do: %{annotation: WebFixtures.annotation(page.id, @remote_opts)}
  defp create_element_annotation(%{element: element, annotation: annotation}) do
    {:ok, element_annotation} =
      %{id: UUID.uuid4(), element_id: element.id, annotation_id: annotation.id}
      |> Userdocs.ElementAnnotations.create_element_annotation(@remote_opts)
    %{element_annotation: element_annotation}
  end
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

  describe "ElementAnnotations" do
    setup [
      :create_password,
      :create_user,
      :create_team,
      :create_team_user,
      :create_strategy,
      :create_project,
      :create_page,
      :create_element,
      :create_annotation,
      :create_element_annotation,
      :make_selections,
      :create_session,
      :init_state
    ]

    setup do
      on_exit(fn -> Client.destroy_state() end)
    end

    test "ElementAnnotations Initialize properly" do
      assert Map.has_key?(Client.data(), :element_annotations)
    end

    test "Loads ElementAnnotations", %{project: project, element_annotation: element_annotation} do
      Client.load_element_annotations(%{filters: %{project_id: project.id}})
      %{element_annotations: [result]} = Client.data()
      assert %ElementAnnotation{} = result
      assert result.id == element_annotation.id
    end
  end
end
