defmodule UserdocsDesktopWeb.Loaders do
  alias Schemas.Pages.Page
  alias Schemas.Projects.Project
  alias Schemas.Elements.Element
  alias Schemas.Annotations.AnnotationType
  alias Schemas.Annotations.Annotation
  alias Schemas.Elements.ElementAnnotation
  alias Userdocs.Annotations
  alias Userdocs.ElementAnnotations
  alias Userdocs.AnnotationTypes
  alias Userdocs.Elements
  alias Userdocs.Pages
  alias Userdocs.Projects
  alias Userdocs.Strategies
  alias Schemas.Strategies.Strategy

  def pages(%{assigns: %{
    state_opts: state_opts,
    current_user: %{selected_project_id: project_id},
    access_token: access_token
  }} = socket) do
    opts = %{
      filters: %{project_id: project_id},
      context: %{repo: Client},
      access_token: access_token
    }
    pages = Pages.list_pages(opts)
    StateHandlers.load(socket, pages, Page, state_opts)
  end

  def projects(%{assigns: %{
    state_opts: state_opts,
    current_user: %{selected_team_id: team_id},
    access_token: access_token
  }} = socket) do
    opts = %{
      filters: %{team_id: team_id},
      context: %{repo: Client},
      access_token: access_token
    }
    projects = Projects.list_projects(opts)
    StateHandlers.load(socket, projects, Project, state_opts)
  end

  def strategies(%{assigns: %{state_opts: state_opts, access_token: access_token}} = socket) do
    opts = %{context: %{repo: Client}, access_token: access_token}
    strategies = Strategies.list_strategies(opts)
    StateHandlers.load(socket, strategies, Strategy, state_opts)
  end

  def elements(%{assigns: %{
    state_opts: state_opts,
    current_user: %{selected_project_id: project_id},
    access_token: access_token
  }} = socket) do
    opts = %{
      filters: %{project_id: project_id},
      context: %{repo: Client},
      access_token: access_token
    }
    elements = Elements.list_elements(opts)
    StateHandlers.load(socket, elements, Element, state_opts)
  end

  def annotation_types(%{assigns: %{state_opts: state_opts, access_token: access_token}} = socket) do
    opts = %{context: %{repo: Client}, access_token: access_token}
    annotation_types = AnnotationTypes.list_annotation_types(opts)
    StateHandlers.load(socket, annotation_types, AnnotationType, state_opts)
  end

  def annotations(%{assigns: %{
    state_opts: state_opts,
    current_user: %{selected_project_id: project_id},
    access_token: access_token
  }} = socket) do
    opts = %{
      filters: %{project_id: project_id},
      context: %{repo: Client},
      access_token: access_token
    }
    annotations = Annotations.list_annotations(opts)
    StateHandlers.load(socket, annotations, Annotation, state_opts)
  end

  def element_annotations(%{assigns: %{
    state_opts: state_opts,
    current_user: %{selected_project_id: project_id},
    access_token: access_token
  }} = socket) do
    opts = %{
      filters: %{project_id: project_id},
      context: %{repo: Client},
      access_token: access_token
    }
    element_annotations = ElementAnnotations.list_element_annotations(opts)
    StateHandlers.load(socket, element_annotations, ElementAnnotation, state_opts)
  end

  alias Userdocs.Teams
  alias Schemas.Teams.Team
  def teams(%{assigns: %{
    state_opts: state_opts,
    current_user: %{id: user_id},
    access_token: access_token
  }} = socket) do
    opts = %{
      filters: %{user_id: user_id},
      context: %{repo: Client},
      access_token: access_token
    }
    teams = Teams.list_teams(opts)
    StateHandlers.load(socket, teams, Team, state_opts)
  end
end
