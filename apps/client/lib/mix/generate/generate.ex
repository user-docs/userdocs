

defmodule Generate do
  def cast_args(args) do
    remote_fixtures = [] ++ args.common_fixtures
    local_fixtures = [] ++ args.common_fixtures
    [
        module_singular: args.module_singular,
        module_plural: args.module_plural,
        variable_name_singular: args.singular,
        variable_name_plural: args.plural,
        fixture_module: args.fixture_module,
        schemas_module: args.schema_module,
        attrs_function_name: args.singular <>"_attrs",
        attrs_function_args: ":valid, :badge",
        load_function_name: "load_" <> args.plural,
        get_function_name: "get_" <> args.singular,
        list_function_name: "list_" <> args.plural,
        create_function_name: if(!args.create_function_name, do: false, else: "create_" <> args.singular),
        update_function_name: if(!args.update_function_name, do: false, else: "update_" <> args.singular),
        delete_function_name: if(!args.delete_function_name, do: false, else: "delete_" <> args.singular),
        remote_context: Enum.reduce(args.required_context, "", fn c, a -> a <> "remote_#{c}: #{c}, " end) |> String.slice(0..-3),
        local_context: Enum.reduce(args.required_context, "", fn c, a -> a <> "local_#{c}: #{c}, " end) |> String.slice(0..-3),
        remote_fixtures: Enum.reduce(remote_fixtures, "", fn f, a -> a <> "      :create_remote_#{f},\n" end) |> String.slice(0..-4),
        local_fixtures: Enum.reduce(local_fixtures, "", fn f, a -> a <> "      :create_local_#{f},\n" end |> String.slice(0..-4))
    ]
  end

  def cast_test_code(fields) do
    Path.join(".", "lib")
    |> Path.join("mix")
    |> Path.join("generate")
    |> Path.join("template.exs.eex")
    |> Path.expand()
    |> EEx.eval_file(fields)
  end

  def cast_client_calls_code(fields) do
    Path.join(".", "lib")
    |> Path.join("mix")
    |> Path.join("generate")
    |> Path.join("client_calls.ex.eex")
    |> Path.expand()
    |> EEx.eval_file(fields)
  end

  def cast_server_calls_code(fields) do
    Path.join(".", "lib")
    |> Path.join("mix")
    |> Path.join("generate")
    |> Path.join("server_calls.ex.eex")
    |> EEx.eval_file(fields)
  end

  def write_test_file(name, text) do
    Path.join(".", "test")
    |> Path.join("client")
    |> Path.join(to_string(name) <> "_test.exs")
    |> File.write!(text)
  end

  def write_behaviors_file(name, text) do
    Path.join(".", "lib")
    |> Path.join("client")
    |> Path.join("behaviors")
    |> Path.join(to_string(name) <> ".ex")
    |> File.write!(text)
  end
end
