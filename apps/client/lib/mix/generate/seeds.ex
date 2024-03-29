defmodule Generate.Seeds do
  def list(), do: seeds()

  def get(key), do: Keyword.get(seeds(), key)

  def seeds() do
    [
      annotation_types: %{
        singular: "annotation_type",
        plural: "annotation_types",
        module_singular: "AnnotationType",
        module_plural: "AnnotationTypes",
        schemas_module: "Annotations",
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
        schemas_module: "Annotations",
        fixture_module: "WebFixtures",
        attrs_function_args: ":valid, page.id",
        required_context: [:page],
        local_fixtures: [:team],
        remote_fixtures: [:team, :team_user],
        common_fixtures: [:strategy, :project, :page, :annotation]
      },
      elements: %{
        singular: "element",
        fixture_module: "WebFixtures",
        attrs_function_args: ":valid, page.id, strategy.id",
        required_context: [:page, :strategy],
        local_fixtures: [:team],
        remote_fixtures: [:team, :team_user],
        common_fixtures: [:strategy, :project, :page, :element]
      },
      pages: %{
        singular: "page",
        fixture_module: "PageFixtures",
        attrs_function_args: "%{project_id: project.id}",
        required_context: [:project],
        local_fixtures: [:team],
        remote_fixtures: [:team, :team_user],
        common_fixtures: [:strategy, :project, :page]
      },
      processes: %{
        singular: "process",
        plural: "processes",
        fixture_module: "AutomationFixtures",
        attrs_function_args: ":valid, project.id",
        required_context: [:project],
        local_fixtures: [:team],
        remote_fixtures: [:team, :team_user],
        common_fixtures: [:strategy, :project, :process]
      },
      projects: %{
        singular: "project",
        fixture_module: "ProjectsFixtures",
        attrs_function_args: ":valid, team.id, strategy.id",
        required_context: [:strategy, :team],
        local_fixtures: [:team],
        remote_fixtures: [:team, :team_user],
        common_fixtures: [:strategy, :project]
      },
      step_types: %{
        singular: "step_type",
        plural: "step_types",
        module_singular: "StepType",
        module_plural: "StepTypes",
        schemas_module: "Steps",
        create_function_name: false,
        update_function_name: false,
        delete_function_name: false,
        required_context: [],
        common_fixtures: [:team, :step_type]
      },
      steps: %{
        singular: "step",
        fixture_module: "AutomationFixtures",
        attrs_function_args: ":valid, page.id, process.id",
        required_context: [:page, :process],
        local_fixtures: [:team],
        remote_fixtures: [:team, :team_user],
        common_fixtures: [:strategy, :project, :process, :page, :step]
      },
      team_users: %{
        singular: "team_user",
        plural: "team_users",
        module_singular: "TeamUser",
        module_plural: "TeamUsers",
        schemas_module: "Teams",
        create_function_name: false,
        update_function_name: false,
        required_context: [],
        local_fixtures: [:team],
        remote_fixtures: [:team, :team_user],
        common_fixtures: [],
        struct_args: "id: UUID.uuid4()",
        local: false,
      },
      teams: %{
        singular: "team",
        fixture_module: "TeamsFixtures",
        attrs_function_args: ":valid, %{}",
        required_context: [],
        local_fixtures: [:team],
        remote_fixtures: [:team, :team_user],
        common_fixtures: []
      },
      element_annotations: %{
        singular: "element_annotation",
        plural: "element_annotations",
        module_singular: "ElementAnnotation",
        module_plural: "ElementAnnotations",
        schemas_module: "Elements",
        create_function_name: false,
        update_function_name: false,
        delete_function_name: false,
        get_function_name: false,
        required_context: [],
        local_fixtures: [:team],
        remote_fixtures: [:team, :team_user],
        common_fixtures: [:strategy, :project, :page, :element, :annotation, :element_annotation],
        struct_args: "id: UUID.uuid4()",
        local: false,
      },
      strategies: %{
        singular: "strategy",
        plural: "strategies",
        create_function_name: false,
        update_function_name: false,
        delete_function_name: false,
        get_function_name: false,
        required_context: [],
        local_fixtures: [:team],
        remote_fixtures: [:team, :team_user],
        common_fixtures: [:strategy],
        local: false,
      },
      integrations: %{
        singular: "integration",
        fixture_module: "IntegrationFixtures",
        attrs_function_args: "%{project_id: project.id}",
        invalid_attrs_function_args: "%{project_id: nil}",
        required_context: [:project],
        local_fixtures: [:team],
        remote_fixtures: [:team, :team_user],
        common_fixtures: [:strategy, :project, :integration]
      },
      screenshot_integrations: %{
        singular: "screenshot_integration",
        fixture_module: "ScreenshotIntegrationFixtures",
        schemas_module: "Integrations",
        attrs_function_args: "%{screenshot_id: screenshot.id, integration_id: integration.id}",
        invalid_attrs_function_args: "%{screenshot_id: nil, integration_id: nil}",
        required_context: [:screenshot, :integration],
        local_fixtures: [:team],
        remote_fixtures: [:team, :team_user],
        common_fixtures: [:strategy, :project, :integration, :page, :screenshot, :screenshot_integration],
        match_field: "integration_id"
      },
      # screenshots: %{
      #   singular: "screenshot",
      #   fixture_module: "ScreenshotFixtures",
      #   attrs_function_args: ":valid_string_keys, %{\"page_id\" => page.id, \"project_id\" => project.id}",
      #   required_context: [:page, :project],
      #   local_fixtures: [:team],
      #   remote_fixtures: [:team, :team_user],
      #   common_fixtures: [:strategy, :project, :page, :screenshot],
      #   struct_args: "id: UUID.uuid4()",
      # },
      # Can't use this yet. Tests are custom
      # users: %{
      #   singular: "user",
      #   fixture_module: "UsersFixtures",
      #   attrs_function_args: ":valid, password",
      #   create_function_name: false,
      #   delete_function_name: false,
      #   required_context: [:password],
      #   local_fixtures: [:team],
      #   remote_fixtures: [:team, :team_user],
      #   common_fixtures: [],
      #   local: false
      # }
    ]
  end
end
