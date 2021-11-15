defmodule State.AnnotationTypes do
  @moduledoc "Context functiosn for operating on Page structs in memory state"

  require Logger

  alias Schemas.Annotations.AnnotationType
  alias Userdocs.AnnotationTypes

  def load_annotation_types(state, opts \\ %{}) do
    StateHandlers.load(state, AnnotationTypes.list_annotation_types(opts), AnnotationType, opts)
  end

  def list_annotation_types(state, opts \\ %{}) do
    StateHandlers.list(state, AnnotationType, opts)
  end

  def get_annotation_type!(id, state, opts \\ %{}) do
    StateHandlers.get(state, id, AnnotationType, opts)
  end

end
