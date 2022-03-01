defmodule ClientTest.State do
  use ExUnit.Case
  use UserdocsClient.Case
  alias Userdocs.ProjectsFixtures
  alias Userdocs.UsersFixtures
  alias Userdocs.TeamsFixtures
  alias Userdocs.WebFixtures
  alias Userdocs.AutomationFixtures
  alias Userdocs.ScreenshotFixtures
  alias Userdocs.ElementAnnotationFixtures

  @remote_opts %{context: %{repo: Userdocs.Repo}}
  @local_opts %{context: %{repo: Userdocs.LocalRepo}}

  defp create_step_type(_), do: %{step_type: AutomationFixtures.step_type()}
  defp create_password(_), do: %{password: UUID.uuid4()}
  defp create_user(%{password: password}), do: %{user: UsersFixtures.confirmed_user(password)}
  defp create_remote_team(_), do: %{remote_team: TeamsFixtures.team(@remote_opts)}
  defp create_local_team(_), do: %{local_team: TeamsFixtures.team(@local_opts)}
  defp create_remote_annotation_type(_),
    do: %{remote_annotation_type: WebFixtures.annotation_type(:badge, @remote_opts)}
  defp create_local_annotation_type(_),
    do: %{local_annotation_type: WebFixtures.annotation_type(:badge, @local_opts)}
  defp create_team_user(%{user: user, remote_team: team}),
    do: %{team_user: TeamsFixtures.team_user(user.id, team.id, @remote_opts)}
  defp create_remote_strategy(_),
    do: %{remote_strategy: WebFixtures.strategy(@remote_opts)}
  defp create_local_strategy(_),
    do: %{local_strategy: WebFixtures.strategy(@local_opts)}
  defp create_remote_project(%{remote_team: team, remote_strategy: strategy}),
    do: %{remote_project: ProjectsFixtures.project(team.id, strategy.id, @remote_opts)}
  defp create_local_project(%{local_team: team, local_strategy: strategy}),
    do: %{local_project: ProjectsFixtures.project(team.id, strategy.id, @local_opts)}
  defp create_remote_screenshot(%{remote_project: project}),
    do: %{remote_screenshot: ScreenshotFixtures.screenshot(%{project_id: project.id}, @remote_opts)}
  defp create_local_screenshot(%{local_project: project}),
    do: %{local_screenshot: ScreenshotFixtures.screenshot(%{project_id: project.id}, @local_opts)}
  defp create_remote_page(%{remote_project: project}),
    do: %{remote_page: WebFixtures.page(project.id, @remote_opts)}
  defp create_local_page(%{local_project: project}),
    do: %{local_page: WebFixtures.page(project.id, @local_opts)}
  defp create_remote_process(%{remote_project: project}),
    do: %{remote_process: AutomationFixtures.process(project.id, @remote_opts)}
  defp create_local_process(%{local_project: project}),
    do: %{local_process: AutomationFixtures.process(project.id, @local_opts)}
  defp create_remote_step(%{remote_process: process, remote_page: page}),
    do: %{step: AutomationFixtures.step(page.id, process.id, @remote_opts)}
  defp create_local_step(%{local_process: process, local_page: page}),
    do: %{step: AutomationFixtures.step(page.id, process.id, @local_opts)}
  defp create_remote_element(%{remote_page: page, remote_strategy: strategy}),
    do: %{remote_element: WebFixtures.element(page.id, strategy.id, @remote_opts)}
  defp create_local_element(%{local_page: page, local_strategy: strategy}),
    do: %{local_element: WebFixtures.element(page.id, strategy.id, @local_opts)}
  defp create_remote_annotation(%{remote_page: page}),
    do: %{remote_annotation: WebFixtures.annotation(page.id, @remote_opts)}
  defp create_local_annotation(%{local_page: page}),
    do: %{local_annotation: WebFixtures.annotation(page.id, @local_opts)}
  defp create_remote_element_annotation(%{remote_element: element, remote_annotation: annotation}),
    do: %{remote_element_annotation: ElementAnnotationFixtures.element_annotation(element.id, annotation.id, @remote_opts)}
  defp create_local_element_annotation(%{local_element: element, local_annotation: annotation}),
    do: %{local_element_annotation: ElementAnnotationFixtures.element_annotation(element.id, annotation.id, @local_opts)}
  defp make_selections(%{user: user, remote_team: team, remote_project: project}) do
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

  describe "State" do
    setup [
      :create_step_type,
      :create_remote_annotation_type,
      :create_local_annotation_type,
      :create_password,
      :create_user,
      :create_remote_team,
      :create_local_team,
      :create_team_user,
      :create_remote_strategy,
      :create_local_strategy,
      :create_remote_project,
      :create_local_project,
      :create_remote_screenshot,
      :create_local_screenshot,
      :create_remote_page,
      :create_local_page,
      :create_remote_process,
      :create_local_process,
      :create_remote_step,
      :create_local_step,
      :create_remote_element,
      :create_local_element,
      :create_remote_annotation,
      :create_local_annotation,
      :create_remote_element_annotation,
      :create_local_element_annotation,
      :make_selections,
      :create_session,
      :init_state
    ]

    setup do
      on_exit(fn -> Client.destroy_state() end)
    end

    def correct_object_counts() do
      %{
        annotation_types: 1,
        annotations: 1,
        element_annotations: 1,
        elements: 1,
        pages: 1,
        processes: 1,
        projects: 2,
        screenshots: 1,
        step_types: 1,
        steps: 1,
        strategies: 1,
        team_users: 1,
        teams: 2,
        users: 1
      }
    end

    test "Loads State Based on remote Project ID", %{remote_project: _project} do
      assert Client.load() == correct_object_counts()
    end

    test "Loads State Based on local Project ID", %{local_project: _project} do
      assert Client.load() == correct_object_counts()
    end

    test "thing", %{user: user} do
      Client.load()
      Client.list_team_users(%{filters: %{user_id: user.id}, preloads: [:team]})
    end
  end
end
