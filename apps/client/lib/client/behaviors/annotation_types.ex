defmodule Client.AnnotationTypes do
  import Client.APISupport
  import Client.Constants
  alias Schemas.Annotations.AnnotationType

  @callback list_annotation_types(map()) :: list(AnnotationType)
  
  
  
  
  
  
  def load_annotation_types(state, opts) do
    annotation_types = impl(state, "AnnotationTypes").list_annotation_types(local_or_remote_opts(state, opts))
    StateHandlers.load(state, annotation_types, AnnotationType, state_opts())
  end
end
