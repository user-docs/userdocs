defmodule Generate.Seeds do
  def list(), do: seeds()

  def get(key), do: Keyword.get(seeds(), key)

  def seeds() do
    [
      step_types: %{
        singular: "step_type",
        plural: "step_types",
        module_singular: "StepType",
        module_plural: "StepTypes",
        schema_module: "Steps",
        create_function_name: false,
        update_function_name: false,
        delete_function_name: false,
        required_context: [],
        common_fixtures: [:team, :step_type]
      },
      annotation_types: %{
        singular: "annotation_type",
        plural: "annotation_types",
        module_singular: "AnnotationType",
        module_plural: "AnnotationTypes",
        schema_module: "Annotations",
        create_function_name: false,
        update_function_name: false,
        delete_function_name: false,
        required_context: [],
        common_fixtures: [:team, :annotation_type]
      },
      annotations: %{
        singular: "annotation",
        plural: "annotations",
        module_singular: "Annotation",
        module_plural: "Annotations",
        schema_module: "Annotations",
        fixture_module: "WebFixtures",
        attrs_function_args: ":valid, page.id",
        required_context: [:page],
        local_fixtures: [:team],
        remote_fixtures: [:team, :team_user,],
        common_fixtures: [:strategy, :project, :page, :annotation]
      },
      elements: %{
        singular: "element",
        fixture_module: "WebFixtures",
        attrs_function_args: ":valid, page.id, strategy.id",
        required_context: [:page, :strategy],
        local_fixtures: [:team],
        remote_fixtures: [:team, :team_user,],
        common_fixtures: [:strategy, :project, :page, :element]
      },
      pages: %{
        singular: "page",
        fixture_module: "PageFixtures",
        attrs_function_args: "%{project_id: project.id}",
        required_context: [:project],
        local_fixtures: [:team],
        remote_fixtures: [:team, :team_user,],
        common_fixtures: [:strategy, :project, :page]
      }
    ]
  end
end
