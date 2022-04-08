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
        fixture_module: "AutomationFixtures",
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
        fixture_module: "WebFixtures",
        create_function_name: false,
        update_function_name: false,
        delete_function_name: false,
        required_context: [],
        common_fixtures: [:annotation_type]
      }
    ]
  end
end
