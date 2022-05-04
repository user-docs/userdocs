defmodule Userdocs.RemoteFixtures do
  alias Userdocs.UsersFixtures
  alias Userdocs.ProjectsFixtures
  alias Userdocs.WebFixtures
  alias Userdocs.PageFixtures
  alias Userdocs.TeamsFixtures
  alias Userdocs.AutomationFixtures
  alias Userdocs.ElementAnnotationFixtures
  alias Userdocs.ScreenshotFixtures
  alias Userdocs.IntegrationFixtures

  @remote_opts %{context: %{repo: Userdocs.Repo}}

  def create_password(_), do: %{password: UUID.uuid4()}
  def create_user(%{password: password}), do: %{user: UsersFixtures.confirmed_user(password)}
  def create_remote_team(_), do: %{remote_team: TeamsFixtures.team(@remote_opts)}

  def create_remote_team_user(%{user: user, remote_team: team}),
    do: %{remote_team_user: TeamsFixtures.team_user(user.id, team.id, @remote_opts)}

  def create_remote_strategy(_), do: %{remote_strategy: WebFixtures.strategy(@remote_opts)}

  def create_remote_project(%{remote_team: team, remote_strategy: strategy}),
    do: %{remote_project: ProjectsFixtures.project(team.id, strategy.id, @remote_opts)}

  def create_remote_page(%{remote_project: project}),
    do: %{remote_page: PageFixtures.page(%{project_id: project.id}, @remote_opts)}

  def create_remote_process(%{remote_project: project}),
    do: %{remote_process: AutomationFixtures.process(project.id, @remote_opts)}

  def create_remote_step(%{remote_process: process, remote_page: page}),
    do: %{remote_step: AutomationFixtures.step(page.id, process.id, @remote_opts)}

  def create_remote_element(%{remote_page: page, remote_strategy: strategy}),
    do: %{remote_element: WebFixtures.element(page.id, strategy.id, @remote_opts)}

  def create_remote_annotation(%{remote_page: page}),
    do: %{remote_annotation: WebFixtures.annotation(page.id, @remote_opts)}

  def create_remote_annotation_type(_),
    do: %{remote_annotation_type: WebFixtures.annotation_type(:badge, @remote_opts)}

  def create_remote_step_type(_), do: %{remote_step_type: AutomationFixtures.step_type()}

  def create_remote_element_annotation(%{remote_element: element, remote_annotation: annotation}) do
    ea = ElementAnnotationFixtures.element_annotation(element.id, annotation.id, @remote_opts)
    %{remote_element_annotation: ea}
  end

  def create_remote_screenshot(%{remote_page: page}) do
    s = ScreenshotFixtures.screenshot(%{id: UUID.uuid4(), page_id: page.id}, @remote_opts)
    %{remote_screenshot: s}
  end

  def create_remote_integration(%{remote_project: project}) do
    i = IntegrationFixtures.integration(%{project_id: project.id}, @remote_opts)
    %{remote_integration: i}
  end
end
