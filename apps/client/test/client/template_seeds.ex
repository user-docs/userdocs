s = "element"
p = "elements"
required_context = ["page", "strategy"]
elements = [
    module_singular: String.capitalize(s),
    module_plural: String.capitalize(p),
    variable_name_singular: s,
    variable_name_plural: p,
    fixture_module: "WebFixtures",
    attrs_function_name: s <>"_attrs",
    attrs_function_args: ":valid, page.id, strategy.id",
    create_function_name: "create_" <> s,
    update_function_name: "update_" <> s,
    delete_function_name: "delete_" <>s,
    load_function_name: "load_" <> p,
    get_function_name: "get_" <> s,
    list_function_name: "list_" <> p,
    remote_context: Enum.reduce(required_context, "", fn c, a -> a <> "remote_#{c}: #{c}, " end) |> String.slice(0..-3),
    local_context: Enum.reduce(required_context, "", fn c, a -> a <> "local_#{c}: #{c}, " end) |> String.slice(0..-3)
]
text = EEx.eval_file("template.exs.eex", elements)
File.write!("elements_test.exs", text)

text = EEx.eval_file("server_calls.ex.eex", elements)
IO.puts(text)

text = EEx.eval_file("client_calls.ex.eex", elements)
IO.puts(text)

s = "annotation"
p = "annotations"
required_context = ["page"]
common_fixtures = [:strategy, :project, :project, :page, :annotation]
remote_fixtures = [:team, :team_user] ++ common_fixtures
local_fixtures = [:team] ++ common_fixtures
fields = [
    module_singular: String.capitalize(s),
    module_plural: String.capitalize(p),
    variable_name_singular: s,
    variable_name_plural: p,
    fixture_module: "WebFixtures",
    attrs_function_name: s <>"_attrs",
    attrs_function_args: ":valid, page.id",
    create_function_name: "create_" <> s,
    update_function_name: "update_" <> s,
    delete_function_name: "delete_" <>s,
    load_function_name: "load_" <> p,
    get_function_name: "get_" <> s,
    list_function_name: "list_" <> p,
    remote_context: Enum.reduce(required_context, "", fn c, a -> a <> "remote_#{c}: #{c}, " end) |> String.slice(0..-3),
    local_context: Enum.reduce(required_context, "", fn c, a -> a <> "local_#{c}: #{c}, " end) |> String.slice(0..-3),
    remote_fixtures: Enum.reduce(remote_fixtures, "", fn f, a -> a <> ":create_remote_#{f},\n" end),
    local_fixtures: Enum.reduce(local_fixtures, "", fn f, a -> a <> ":create_local_#{f},\n" end)
]
text = EEx.eval_file("template.exs.eex", fields)
File.write!(p <> "_test.exs", text)

text = EEx.eval_file("server_calls.ex.eex", fields)
IO.puts(text)

text = EEx.eval_file("client_calls.ex.eex", fields)
IO.puts(text)

s = "team_user"
p = "team_users"
fixture_module = "TeamsFixture"
required_context = ["page"]
common_fixtures = []
remote_fixtures = [:team, :team_user] ++ common_fixtures
local_fixtures = [:team] ++ common_fixtures
fields = [
    module_singular: "TeamUser",
    module_plural: "Teams",
    variable_name_singular: s,
    variable_name_plural: p,
    fixture_module: fixture_module,
    attrs_function_name: s <>"_attrs",
    attrs_function_args: ":valid, page.id",
    create_function_name: "create_" <> s,
    update_function_name: "update_" <> s,
    delete_function_name: "delete_" <>s,
    load_function_name: "load_" <> p,
    get_function_name: "get_" <> s,
    list_function_name: "list_" <> p,
    remote_context: Enum.reduce(required_context, "", fn c, a -> a <> "remote_#{c}: #{c}, " end) |> String.slice(0..-3),
    local_context: Enum.reduce(required_context, "", fn c, a -> a <> "local_#{c}: #{c}, " end) |> String.slice(0..-3),
    remote_fixtures: Enum.reduce(remote_fixtures, "", fn f, a -> a <> ":create_remote_#{f},\n" end),
    local_fixtures: Enum.reduce(local_fixtures, "", fn f, a -> a <> ":create_local_#{f},\n" end)
]
text = EEx.eval_file("template.exs.eex", fields)
File.write!(p <> "_test.exs", text)

text = EEx.eval_file("server_calls.ex.eex", fields)
IO.puts(text)

text = EEx.eval_file("client_calls.ex.eex", fields)
IO.puts(text)

s = "annotation_type"
p = "annotation_types"
fixture_module = "TeamsFixture"
required_context = []
common_fixtures = [:annotation_type]
remote_fixtures = [] ++ common_fixtures
local_fixtures = [] ++ common_fixtures
fields = [
    module_singular: "AnnotationType",
    module_plural: "AnnotationTypes",
    variable_name_singular: s,
    variable_name_plural: p,
    fixture_module: fixture_module,
    attrs_function_name: s <>"_attrs",
    attrs_function_args: ":valid, :badge",
    create_function_name: "create_" <> s,
    update_function_name: "update_" <> s,
    delete_function_name: "delete_" <>s,
    load_function_name: "load_" <> p,
    get_function_name: "get_" <> s,
    list_function_name: "list_" <> p,
    remote_context: Enum.reduce(required_context, "", fn c, a -> a <> "remote_#{c}: #{c}, " end) |> String.slice(0..-3),
    local_context: Enum.reduce(required_context, "", fn c, a -> a <> "local_#{c}: #{c}, " end) |> String.slice(0..-3),
    remote_fixtures: Enum.reduce(remote_fixtures, "", fn f, a -> a <> ":create_remote_#{f},\n" end),
    local_fixtures: Enum.reduce(local_fixtures, "", fn f, a -> a <> ":create_local_#{f},\n" end)
]
text = EEx.eval_file("template.exs.eex", fields)
File.write!(p <> "_test.exs", text)

text = EEx.eval_file("server_calls.ex.eex", fields)
IO.puts(text)

text = EEx.eval_file("client_calls.ex.eex", fields)
IO.puts(text)

s = "step_type"
p = "step_types"
ms = "StepType"
mp = "StepTypes"
sm = "Steps"
fixture_module = "AutomationFixture"
required_context = []
common_fixtures = [:team, :step_type]
remote_fixtures = [] ++ common_fixtures
local_fixtures = [] ++ common_fixtures
fields = [
    module_singular: ms,
    module_plural: mp,
    variable_name_singular: s,
    variable_name_plural: p,
    fixture_module: fixture_module,
    schemas_module: sm,
    attrs_function_name: s <>"_attrs",
    attrs_function_args: ":valid, :badge",
    load_function_name: "load_" <> p,
    get_function_name: "get_" <> s,
    list_function_name: "list_" <> p,
    create_function_name: false,
    update_function_name: false,
    delete_function_name: false,
    remote_context: Enum.reduce(required_context, "", fn c, a -> a <> "remote_#{c}: #{c}, " end) |> String.slice(0..-3),
    local_context: Enum.reduce(required_context, "", fn c, a -> a <> "local_#{c}: #{c}, " end) |> String.slice(0..-3),
    remote_fixtures: Enum.reduce(remote_fixtures, "", fn f, a -> a <> ":create_remote_#{f},\n" end),
    local_fixtures: Enum.reduce(local_fixtures, "", fn f, a -> a <> ":create_local_#{f},\n" end)
]
text = EEx.eval_file("template.exs.eex", fields)
File.write!(p <> "_test.exs", text)

text = EEx.eval_file("server_calls.ex.eex", fields)
IO.puts(text)

text = EEx.eval_file("client_calls.ex.eex", fields)
IO.puts(text)

seeds = [
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
  }
]

seeds
|> Enum.map(fn {k, v} -> {k, Generate.cast_args(v)} end)
|> Enum.map(fn {k, v} -> {k, Generate.cast_test_code(v)} end)
|> Enum.map(fn {k, v} -> Generate.write_file(k, v) end)


seeds
fields = Enum.map(seeds, fn {k, v} -> {k, Generate.cast_args(v)} end)
text = Enum.map(fields, fn {k, v} -> {k, Generate.cast_client_calls_code(v)} end)
Enum.map(text, fn {k, v} ->
  IO.puts(v)
end)
