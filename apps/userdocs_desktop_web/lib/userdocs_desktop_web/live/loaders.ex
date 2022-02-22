defmodule UserdocsDesktopWeb.Loaders do
  @moduledoc "These functions are used to issue http calls to the backend for hydration of live views"
  alias Schemas.Pages.Page
  alias Schemas.Elements.Element
  alias Schemas.Annotations.AnnotationType
  alias Userdocs.AnnotationTypes
  alias Userdocs.Elements
  alias Userdocs.Pages
  alias Userdocs.Strategies
  alias Schemas.Strategies.Strategy

  def pages(socket), do: load_pages(socket, list_pages(socket))
  def list_pages(%{assigns: %{
    current_user: %{selected_project_id: project_id},
    access_token: access_token
  }}) do
    opts = %{
      filters: %{project_id: project_id},
      context: %{repo: Client},
      access_token: access_token
    }
    Pages.list_pages(opts)
  end
  def load_pages(%{assigns: %{state_opts: state_opts}} = socket, pages),
    do: StateHandlers.load(socket, pages, Page, state_opts)

  alias Userdocs.Projects
  alias Schemas.Projects.Project
  def projects(socket), do: load_projects(socket, list_projects(socket))
  def list_projects(%{assigns: %{
    current_user: %{selected_team_id: team_id},
    access_token: access_token
  }}) do
    opts = %{
      filters: %{team_id: team_id},
      context: %{repo: Client},
      access_token: access_token
    }
    Projects.list_projects(opts)
  end
  def load_projects(%{assigns: %{state_opts: state_opts}} = socket, projects),
    do: StateHandlers.load(socket, projects, Project, state_opts)

  def strategies(socket), do: load_strategies(socket, list_strategies(socket))
  def list_strategies(%{assigns: %{access_token: access_token}}) do
    opts = %{context: %{repo: Client}, access_token: access_token}
    Strategies.list_strategies(opts)
  end
  def load_strategies(%{assigns: %{state_opts: state_opts}} = socket, strategies),
    do: StateHandlers.load(socket, strategies, Strategy, state_opts)

  def elements(socket), do: load_elements(socket, list_elements(socket))
  def list_elements(%{assigns: %{
    current_user: %{selected_project_id: project_id},
    access_token: access_token
  }}) do
    opts = %{
      filters: %{project_id: project_id},
      context: %{repo: Client},
      access_token: access_token
    }
    Elements.list_elements(opts)
  end
  def load_elements(%{assigns: %{state_opts: state_opts}} = socket, elements),
    do: StateHandlers.load(socket, elements, Element, state_opts)

  def annotation_types(socket), do: load_annotation_types(socket, list_annotation_types(socket))
  def list_annotation_types(%{assigns: %{access_token: access_token}}) do
    opts = %{context: %{repo: Client}, access_token: access_token}
    AnnotationTypes.list_annotation_types(opts)
  end
  def load_annotation_types(%{assigns: %{state_opts: state_opts}} = socket, annotation_types),
    do: StateHandlers.load(socket, annotation_types, AnnotationType, state_opts)

  alias Userdocs.Annotations
  alias Schemas.Annotations.Annotation
  def annotations(socket), do: load_annotations(socket, list_annotations(socket))
  def list_annotations(%{assigns: %{
    current_user: %{selected_project_id: project_id},
    access_token: access_token
  }}) do
    opts = %{
      filters: %{project_id: project_id},
      context: %{repo: Client},
      access_token: access_token
    }
    Annotations.list_annotations(opts)
  end
  def load_annotations(%{assigns: %{state_opts: state_opts}} = socket, annotations),
    do: StateHandlers.load(socket, annotations, Annotation, state_opts)

  alias Userdocs.ElementAnnotations
  alias Schemas.Elements.ElementAnnotation
  def element_annotations(socket), do: load_element_annotations(socket, list_element_annotations(socket))
  def list_element_annotations(%{assigns: %{
    current_user: %{selected_project_id: project_id},
    access_token: access_token
  }} = socket) do
    opts = %{
      filters: %{project_id: project_id},
      context: %{repo: Client},
      access_token: access_token
    }
    ElementAnnotations.list_element_annotations(opts)
  end
  def load_element_annotations(%{assigns: %{state_opts: state_opts}} = socket, element_annotations),
    do: StateHandlers.load(socket, element_annotations, ElementAnnotation, state_opts)

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

  alias Userdocs.Screenshots
  alias Schemas.Screenshots.Screenshot
  def screenshots(socket), do: load_screenshots(socket, list_screenshots(socket))
  def list_screenshots(%{assigns: %{
    current_user: %{selected_team_id: team_id},
    access_token: access_token
  }}) do
    opts = %{
      filters: %{team_id: team_id},
      context: %{repo: Client},
      access_token: access_token
    }
    Screenshots.list_screenshots(opts)
  end
  def load_screenshots(%{assigns: %{state_opts: state_opts}} = socket, screenshots),
    do: StateHandlers.load(socket, screenshots, Screenshot, state_opts)

  alias Userdocs.Processes
  alias Schemas.Processes.Process
  def processes(socket), do: load_processes(socket, list_processes(socket))
  def list_processes(%{assigns: %{
    current_user: %{id: user_id},
    access_token: access_token
  }}) do
    opts = %{
      filters: %{user_id: user_id},
      context: %{repo: Client},
      access_token: access_token
    }
    Processes.list_processes(opts)
  end
  def load_processes(%{assigns: %{state_opts: state_opts}} = socket, processes),
    do: StateHandlers.load(socket, processes, Process, state_opts)

  alias Userdocs.Steps
  alias Schemas.Steps.Step
  def steps(socket), do: load_steps(socket, list_steps(socket))
  def list_steps(%{assigns: %{
    current_user: %{selected_project_id: project_id},
    access_token: access_token
  }}) do
    opts = %{
      filters: %{project_id: project_id},
      context: %{repo: Client},
      access_token: access_token
    }
    Steps.list_steps(opts)
  end
  def load_steps(%{assigns: %{state_opts: state_opts}} = socket, steps),
    do: StateHandlers.load(socket, steps, Step, state_opts)

  alias Schemas.Steps.StepType
  alias Userdocs.StepTypes
  def step_types(socket), do: load_step_types(socket, list_step_types(socket))
  def list_step_types(%{assigns: %{access_token: access_token}}) do
    opts = %{context: %{repo: Client}, access_token: access_token}
    StepTypes.list_step_types(opts)
  end
  def load_step_types(%{assigns: %{state_opts: state_opts}} = socket, steps),
    do: StateHandlers.load(socket, steps, StepType, state_opts)
end
