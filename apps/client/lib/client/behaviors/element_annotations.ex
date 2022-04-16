defmodule Client.ElementAnnotations do
  import Client.APISupport
  import Client.Constants
  alias Schemas.Elements.ElementAnnotation

  @callback list_element_annotations(map()) :: list(ElementAnnotation)
  
  
  
  
  
  
  def load_element_annotations(state, opts) do
    element_annotations = Module.concat(impl(state), "ElementAnnotations").list_element_annotations(local_or_remote_opts(state, opts))
    StateHandlers.load(state, element_annotations, ElementAnnotation, state_opts())
  end
end
