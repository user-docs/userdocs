defmodule Client.Constants do
  def types() do
    [
      Schemas.Users.User,
      Schemas.Teams.TeamUser,
      Schemas.Teams.Team,
      Schemas.Strategies.Strategy,
      Schemas.Annotations.AnnotationType,
      Schemas.Steps.StepType,
      Schemas.Projects.Project,
      Schemas.Processes.Process,
      Schemas.Steps.Step,
      Schemas.Elements.Element,
      Schemas.Elements.ElementAnnotation,
      Schemas.Annotations.Annotation,
      Schemas.Screenshots.Screenshot,
      Schemas.Pages.Page,
      Schemas.StepInstances.StepInstance
    ]
  end

  def state_opts(), do: [data_type: :list, strategy: :by_type, location: :data, types: types()]
  def local_opts(), do: %{context: %{repo: Userdocs.LocalRepo}}
end
