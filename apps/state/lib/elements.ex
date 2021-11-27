defmodule State.Elements do
  @moduledoc "Context functiosn for operating on Page structs in memory state"

  require Logger
  alias Schemas.Elements.Element
  alias Userdocs.Elements

  def load_elements(state, opts) do
    StateHandlers.load(state, Elements.list_elements(opts), Element, opts)
  end

  def list_elements(state, opts) when is_list(opts) do
    StateHandlers.list(state, Element, opts)
    |> maybe_preload(opts[:preloads], state, opts)
  end

  def get_element!(id, state, opts) when is_list(opts) do
    StateHandlers.get(state, id, Element, opts)
    |> maybe_preload(opts[:preloads], state, opts)
  end

  def find_element(state, opts, field, value) do
    list_elements(state, opts)
    |> Enum.filter(fn(element) -> element |> Map.get(field) == value end)
    |> case do
      [element] -> element
      _ -> nil
    end
  end

  defp maybe_preload(process, nil, _, _), do: process
  defp maybe_preload(process, _preloads, state, opts) do
    opts = Keyword.delete(opts, :filter)
    StateHandlers.preload(state, process, opts)
  end
end
