defmodule UserdocsWeb.UserChannelHandlers do
  @moduledoc false
  require Logger

  @opts %{broadcast: true, context: %{repo: Userdocs.Repo}}

  def precheck_call(module) do
    if !String.starts_with?(module, "Userdocs"),
      do: raise ("Function call on #{module} not allowed")
  end

  def query(%{module: module_attr, function: function_attr, args: arg_attr}) do
    precheck_call(module_attr)
    function = String.to_atom(function_attr)
    module = String.to_existing_atom("Elixir." <> module_attr)
    opts = Map.put(arg_attr, :context, %{repo: Userdocs.Repo})
    Kernel.apply(module, function, [opts])
  end

  def update(%{
    "module" => module_attr,
    "function" => function_attr,
    "struct_function" => struct_function_attr,
    "type" => _type,
    "fields" => fields,
    "attrs" => attrs}
  ) do
    precheck_call(module_attr)
    function = String.to_atom(function_attr)
    struct_function = String.to_atom(struct_function_attr)
    module = String.to_existing_atom("Elixir." <> module_attr)
    {:ok, object} = Kernel.apply(module, struct_function, [fields])
    Kernel.apply(module, function, [object, attrs, @opts])
  end

  def create(%{"attrs" => attrs, "function" => function_attr, "module" => module_attr}) do
    precheck_call(module_attr)
    function = String.to_atom(function_attr)
    module = String.to_existing_atom("Elixir." <> module_attr)
    Kernel.apply(module, function, [attrs, @opts])
  end

  def delete(%{
    "module" => module_attr,
    "get_function" => get_function_attr,
    "delete_function" => delete_function_attr,
    "id" => id}
  ) do
    precheck_call(module_attr)
    delete_function = String.to_atom(delete_function_attr)
    get_function = String.to_atom(get_function_attr)
    module = String.to_existing_atom("Elixir." <> module_attr)
    object = Kernel.apply(module, get_function, [id, @opts])
    Kernel.apply(module, delete_function, [object, @opts])
  end
end
