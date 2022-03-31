defmodule Client.Loaders do
  alias Schemas.Users.User
  alias Schemas.Teams.TeamUser
  alias Schemas.Teams.Team
  alias Schemas.Projects.Project
  alias Schemas.Strategies.Strategy
  alias Schemas.Annotations.AnnotationType
  alias Schemas.Steps.StepType
  alias Schemas.Pages.Page
  alias Schemas.Processes.Process
  alias Schemas.Screenshots.Screenshot
  alias Schemas.Steps.Step
  alias Schemas.Elements.Element
  alias Schemas.Annotations.Annotation
  alias Schemas.Elements.ElementAnnotation

  def apply(state, %{user: %User{selected_project_id: nil}} = opts) do
    state
    |> load_base_data(opts)
  end

  def apply(state, %{user: %User{selected_project_id: id}, state_opts: state_opts} = opts) do
    state = load_base_data(state, opts)
    project = State.Projects.get_project!(id, state, state_opts)
    opts = Map.put(opts, :project, project)
    state
    |> load_project_data(opts)
  end

  def load_base_data(state, %{access_token: token, state_opts: state_opts, user: user}) do
    opts = %{filters: %{user_id: user.id}, access_token: token}
    team_user_opts = %{filters: %{opposite_user_id: user.id}, access_token: token}
    local_opts = %{context: %{repo: Userdocs.LocalRepo}}
    token_only = %{access_token: token}

    [
      users,
      team_users,
      remote_teams,
      local_teams,
      strategies,
      annotation_types,
      step_types,
      remote_projects,
      local_projects
    ] =
      [
        Task.async(fn -> Client.Users.list_users(opts) end),
        Task.async(fn -> Client.TeamUsers.list_team_users(team_user_opts) end),
        Task.async(fn -> Client.Teams.list_teams(opts) end),
        Task.async(fn -> Userdocs.Teams.list_teams(local_opts)  end),
        Task.async(fn -> Client.Strategies.list_strategies(token_only) end),
        Task.async(fn -> Client.AnnotationTypes.list_annotation_types(token_only) end),
        Task.async(fn -> Client.StepTypes.list_step_types(token_only) end),
        Task.async(fn -> Client.Projects.list_projects(opts) end),
        Task.async(fn -> Userdocs.Projects.list_projects(local_opts)  end),
      ]
      |> Task.await_many()

    state
    |> StateHandlers.load(users, User, state_opts)
    |> StateHandlers.load(team_users, TeamUser, state_opts)
    |> StateHandlers.load(remote_teams ++ local_teams, Team, state_opts)
    |> StateHandlers.load(remote_projects ++ local_projects, Project, state_opts)
    |> StateHandlers.load(strategies, Strategy, state_opts)
    |> StateHandlers.load(annotation_types, AnnotationType, state_opts)
    |> StateHandlers.load(step_types, StepType, state_opts)
  end

  def load_project_data(state, %{access_token: token, state_opts: state_opts, project: %Project{__meta__: %{state: :built}, id: project_id}}) do
    opts = %{filters: %{project_id: project_id}, access_token: token}
    [
      pages,
      processes,
      screenshots,
      steps,
      elements,
      annotations,
      element_annotations,
    ] =
      [
        Task.async(fn -> Client.Pages.list_pages(opts) end),
        Task.async(fn -> Client.Processes.list_processes(opts) end),
        Task.async(fn -> Client.Screenshots.list_screenshots(opts) end),
        Task.async(fn -> Client.Steps.list_steps(opts) end),
        Task.async(fn -> Client.Elements.list_elements(opts) end),
        Task.async(fn -> Client.Annotations.list_annotations(opts) end),
        Task.async(fn -> Client.ElementAnnotations.list_element_annotations(opts) end),
      ]
      |> Task.await_many()


    state
    |> StateHandlers.load(pages, Page, state_opts)
    |> StateHandlers.load(processes, Process, state_opts)
    |> StateHandlers.load(screenshots, Screenshot, state_opts)
    |> StateHandlers.load(steps, Step, state_opts)
    |> StateHandlers.load(elements, Element, state_opts)
    |> StateHandlers.load(annotations, Annotation, state_opts)
    |> StateHandlers.load(element_annotations, ElementAnnotation, state_opts)
  end
  def load_project_data(state, %{state_opts: state_opts, project: %Project{__meta__: %{state: :loaded}, id: project_id}}) do
    opts = %{filters: %{project_id: project_id}, context: %{repo: Userdocs.LocalRepo}}
    [
      pages,
      processes,
      screenshots,
      steps,
      elements,
      annotations,
      element_annotations,
    ] =
      [
        Task.async(fn -> Userdocs.Pages.list_pages(opts) end),
        Task.async(fn -> Userdocs.Processes.list_processes(opts) end),
        Task.async(fn -> Userdocs.Screenshots.list_screenshots(opts) end),
        Task.async(fn -> Userdocs.Steps.list_steps(opts) end),
        Task.async(fn -> Userdocs.Elements.list_elements(opts) end),
        Task.async(fn -> Userdocs.Annotations.list_annotations(opts) end),
        Task.async(fn -> Userdocs.ElementAnnotations.list_element_annotations(opts) end),
      ]
      |> Task.await_many()

    state
    |> StateHandlers.load(pages, Page, state_opts)
    |> StateHandlers.load(processes, Process, state_opts)
    |> StateHandlers.load(screenshots, Screenshot, state_opts)
    |> StateHandlers.load(steps, Step, state_opts)
    |> StateHandlers.load(elements, Element, state_opts)
    |> StateHandlers.load(annotations, Annotation, state_opts)
    |> StateHandlers.load(element_annotations, ElementAnnotation, state_opts)
  end
end
