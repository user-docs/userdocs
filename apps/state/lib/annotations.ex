defmodule State.Annotations do
  @moduledoc "Context functiosn for operating on Page structs in memory state"

  require Logger

  alias Schemas.Annotations.Annotation
  alias Userdocs.Annotations

  def load_annotations(state, opts) do
    StateHandlers.load(state, Annotations.list_annotations(opts), Annotation, opts)
  end

  def list_annotations(state, opts) do
    StateHandlers.list(state, Annotation, opts)
    |> maybe_preload(opts[:preloads], state, opts)
  end

  def get_annotation!(id, state, opts \\ [])
  def get_annotation!(id, state, opts) when is_list(opts) do
    StateHandlers.get(state, id, Annotation, opts)
    |> maybe_preload(opts[:preloads], state, opts)
  end


  defp maybe_preload(process, nil, _, _), do: process
  defp maybe_preload(process, _preloads, state, opts) do
    opts = Keyword.delete(opts, :filter)
    StateHandlers.preload(state, process, opts)
  end
end
