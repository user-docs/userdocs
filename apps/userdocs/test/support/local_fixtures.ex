defmodule Userdocs.LocalFixtures do
  alias Userdocs.ContextsFixtures
  alias Userdocs.ProjectsFixtures
  alias Userdocs.WebFixtures
  alias Userdocs.TeamsFixtures
  alias Userdocs.PageFixtures
  alias Userdocs.AutomationFixtures
  alias Userdocs.ElementAnnotationFixtures
  alias Userdocs.StepInstanceFixtures
  alias Userdocs.Tokens

  @local_opts %{context: %{repo: Userdocs.LocalRepo}}

  def create_local_strategy(_), do: %{local_strategy: WebFixtures.strategy(@local_opts)}
  def create_local_team(_), do: %{local_team: TeamsFixtures.team(%{type: :personal}, @local_opts)}

  def create_local_project(%{local_team: team, local_strategy: strategy}),
    do: %{local_project: ProjectsFixtures.project(team.id, strategy.id, @local_opts)}

  def create_remote_user_context(%{user: user, remote_team: team, remote_project: project}),
    do: %{remote_context: ContextsFixtures.context(%{user_id: user.id, team_id: team.id, project_id: project.id}, @local_opts)}

  def create_remote_user_context(%{user: user, remote_team: team}),
    do: %{remote_context: ContextsFixtures.context(%{user_id: user.id, team_id: team.id, project_id: nil}, @local_opts)}

  def create_local_user_context(%{user: user, local_team: team, local_project: project}),
    do: %{local_context: ContextsFixtures.context(%{user_id: user.id, team_id: team.id, project_id: project.id}, @local_opts)}

  def create_local_user_context(%{user: user, local_team: team}),
    do: %{local_context: ContextsFixtures.context(%{user_id: user.id, team_id: team.id, project_id: nil}, @local_opts)}

  def create_local_tokens(%{access_token: at, renewal_token: rt, user: user}) do
    Tokens.create_all_tokens(at, rt, user.id, @local_opts)
    :ok
  end

  def create_local_page(%{local_project: project}),
    do: %{local_page: PageFixtures.page(%{project_id: project.id}, @local_opts)}

  def create_local_process(%{local_project: project}),
    do: %{local_process: AutomationFixtures.process(project.id, @local_opts)}

  def create_local_step(%{local_process: process, local_page: page}),
    do: %{local_step: AutomationFixtures.step(page.id, process.id, @local_opts)}

  def create_local_element(%{local_page: page, local_strategy: strategy}),
    do: %{local_element: WebFixtures.element(page.id, strategy.id, @local_opts)}

  def create_local_annotation(%{local_page: page}),
    do: %{local_annotation: WebFixtures.annotation(page.id, @local_opts)}

  def create_local_annotation_type(_),
    do: %{local_annotation_type: WebFixtures.annotation_type(:badge, @local_opts)}

  def create_local_step_type(_), do: %{local_step_type: AutomationFixtures.step_type()}

  def create_local_element_annotation(%{local_element: element, local_annotation: annotation}) do
    object = ElementAnnotationFixtures.element_annotation(element.id, annotation.id, @local_opts)
    %{local_element_annotation: object}
  end

  def create_local_step_instance(%{local_step: step}),
    do: %{local_step_instance: StepInstanceFixtures.step_instance(%{"step_id" => step.id})}
end
