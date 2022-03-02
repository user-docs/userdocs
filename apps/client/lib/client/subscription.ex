defmodule Client.Subscription do
  @moduledoc "Handles creating the data sent over on subscription updates"
  def apply(attrs, type, action) do
    attrs
    |> cast(type)
    |> broadcast(action)
  end

  alias Userdocs.Teams
  def cast(attrs, "Schemas.Teams.Team") do
    {:ok, team} = Teams.create_team_struct(attrs)
    team
  end

  alias Userdocs.Pages
  def cast(attrs, "Schemas.Pages.Page") do
    {:ok, page} = Pages.create_page_struct(attrs)
    page
  end

  alias Userdocs.Elements
  def cast(attrs, "Schemas.Elements.Element") do
    {:ok, element} = Elements.create_element_struct(attrs)
    element
  end

  alias Userdocs.Annotations
  def cast(attrs, "Schemas.Annotations.Annotation") do
    {:ok, annotation} = Annotations.create_annotation_struct(attrs)
    annotation
  end

  alias Userdocs.ElementAnnotations
  def cast(attrs, "Schemas.Elements.ElementAnnotation") do
    {:ok, element_annotation} = ElementAnnotations.create_element_annotation_struct(attrs)
    element_annotation
  end

  alias Userdocs.TeamUsers
  def cast(attrs, "Schemas.Teams.TeamUser") do
    {:ok, team_user} = TeamUsers.create_team_user_struct(attrs)
    team_user
  end

  alias Userdocs.Users
  def cast(attrs, "Schemas.Users.User") do
    {:ok, user} = Users.create_prepared_user(attrs)
    user
  end

  alias Userdocs.Projects
  def cast(attrs, "Schemas.Projects.Project") do
    {:ok, project} = Projects.create_project_struct(attrs)
    project
  end

  alias Userdocs.Screenshots
  def cast(attrs, "Schemas.Screenshots.Screenshot") do
    {:ok, screenshot} = Screenshots.create_screenshot_struct(attrs)
    screenshot
  end

  alias Userdocs.Processes
  def cast(attrs, "Schemas.Processes.Process") do
    {:ok, result} = Processes.create_process_struct(attrs)
    result
  end

  alias Userdocs.Steps
  def cast(attrs, "Schemas.Steps.Step") do
    {:ok, result} = Steps.create_step_struct(attrs)
    result
  end

  def broadcast(object, action) do
    Phoenix.PubSub.broadcast(Userdocs.PubSub, "data", %{topic: "data", event: action, payload: object})
  end

  def handle_event(state, "create" = _event, payload, opts) do
    StateHandlers.create(state, payload, opts)
  end
  def handle_event(state, "update" = _event, payload, opts) do
    StateHandlers.update(state, payload, opts)
  end
  def handle_event(state, "delete" = _event, payload, opts) do
    StateHandlers.delete(state, payload, opts)
  end
  def handle_event(state, "upsert" = _event, payload, opts) do
    StateHandlers.upsert(state, payload, opts)
  end
end
