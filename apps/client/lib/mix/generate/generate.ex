

defmodule Generate do
  def cast_args(args) do
    singular = args.singular
    plural = Map.get(args, :plural, singular <> "s")
    remote_fixtures = Map.get(args, :remote_fixtures, []) ++ args.common_fixtures
    local_fixtures = Map.get(args, :local_fixtures, []) ++ args.common_fixtures
    remote_context_text = Enum.reduce(args.required_context, "", fn c, a -> a <> "remote_#{c}: #{c}, " end)
    local_context_text = Enum.reduce(args.required_context, "", fn c, a -> a <> "local_#{c}: #{c}, " end)
    remote_fixtures_text = Enum.reduce(remote_fixtures, "", fn f, a -> a <> "      :create_remote_#{f},\n" end) |> String.slice(0..-2)
    local_fixtures_text = Enum.reduce(local_fixtures, "", fn f, a -> a <> "      :create_local_#{f},\n" end) |> String.slice(0..-2)
    attrs_function_args = Map.get(args, :attrs_function_args, singular <> "_attrs")
    invalid_attrs_function_args = Map.get(args, :invalid_attrs_function_args, singular <> "")
    fixture_module = Map.get(args, :fixture_module, nil)
    module_singular = Map.get(args, :module_singular, String.capitalize(singular))
    module_plural = Map.get(args, :module_plural, String.capitalize(plural))
    schema_module = Map.get(args, :schema_module, module_plural)
    create_function_name = Map.get(args, :create_function_name, "create_" <> singular)
    create_struct_function_name = Map.get(args, :create_struct_function_name, "create_" <> singular <> "_struct")
    create_structs_function_name = Map.get(args, :create_structs_function_name, "create_" <> singular <> "_structs")
    update_function_name = Map.get(args, :update_function_name, "update_" <> singular)
    delete_function_name = Map.get(args, :delete_function_name, "delete_" <> singular)
    get_function_name = Map.get(args, :get_function_name, "get_" <> singular)
    get_bang_function_name = Map.get(args, :get_function_name, "get_" <> singular <> "!")
    struct_args = Map.get(args, :struct_args, "")
    local = Map.get(args, :local, true)
    [
      atom_singular: String.to_atom(singular),
      module_singular: module_singular,
      module_plural: module_plural,
      variable_name_singular: singular,
      variable_name_plural: plural,
      fixture_module: fixture_module,
      schemas_module: schema_module,
      attrs_function_name: singular <>"_attrs",
      attrs_function_args: attrs_function_args,
      invalid_attrs_function_args: invalid_attrs_function_args,
      load_function_name: "load_" <> plural,
      get_function_name: get_function_name,
      get_bang_function_name: get_bang_function_name,
      list_function_name: "list_" <> plural,
      create_function_name: create_function_name,
      create_struct_function_name: create_struct_function_name,
      create_structs_function_name: create_structs_function_name,
      update_function_name: update_function_name,
      delete_function_name: delete_function_name,
      required_context: args.required_context,
      remote_context: remote_context_text,
      local_context: local_context_text,
      remote_fixtures: remote_fixtures_text,
      local_fixtures: local_fixtures_text,
      struct_args: struct_args,
      local: local
    ]
  end

  def cast_remote_args(args) do
    args
    |> Enum.uniq()
    |> Enum.reduce("", fn c, a -> a <> "remote_#{c}: #{c}, " end)
  end

  def cast_local_args(args) do
    args
    |> Enum.uniq()
    |> Enum.reduce("", fn c, a -> a <> "local_#{c}: #{c}, " end)
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

  def cast_remote_code(fields) do
    Path.join(".", "lib")
    |> Path.join("mix")
    |> Path.join("generate")
    |> Path.join("remote_client_calls.ex.eex")
    |> EEx.eval_file(fields)
  end

  def cast_remote_tests( fields) do
    Path.join(".", "lib")
    |> Path.join("mix")
    |> Path.join("generate")
    |> Path.join("remote_tests.ex.eex")
    |> EEx.eval_file(fields)
  end

  def write_remote_test_file(name, text) do
    Path.join(".", "test")
    |> Path.join("client")
    |> Path.join("remote")
    |> Path.join(to_string(name) <> "_test.exs")
    |> File.write!(text)
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

  def write_remote_client_calls_file(name, text) do
    Path.join(".", "lib")
    |> Path.join("client")
    |> Path.join("remote")
    |> Path.join(to_string(name) <> ".ex")
    |> File.write!(text)
  end
end
