defmodule State.ElementAnnotations do
  @moduledoc "Context functiosn for operating on User structs in memory state"

  require Logger

  alias Schemas.Elements.ElementAnnotation

  def load_element_annotations(state, opts) do
    StateHandlers.load(state, Userdocs.ElementAnnotations.list_element_annotations(opts), ElementAnnotation, opts)
  end

  def list_element_annotations(state, opts) do
    StateHandlers.list(state, ElementAnnotation, opts)
    |> maybe_preload(opts[:preloads], state, opts)
  end

  def get_element_annotation!(id, state, opts) when is_binary(id),
    do: get_element_annotation!(String.to_integer(id), state, opts)
  def get_element_annotation!(id, state, opts) when is_integer(id) do
    StateHandlers.get(state, id, ElementAnnotation, opts)
    |> maybe_preload(opts[:preloads], state, opts)
  end

  defp maybe_preload(object, nil, _, _), do: object
  defp maybe_preload(object, _preloads, state, opts) do
    opts = Keyword.delete(opts, :filter)
    StateHandlers.preload(state, object, opts)
  end
end
