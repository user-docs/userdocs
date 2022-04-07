defmodule Client.Annotations do
  import Client.APISupport
  import Client.Constants
  alias Schemas.Annotations.Annotation

  @callback list_annotations(map()) :: list(Annotation)
  @callback create_annotation(map(), map()) :: {:ok, Annotation} | {:error, Ecto.Changeset}
  @callback update_annotation(Annotation, map(), map()) :: {:ok, Annotation} | {:error, Ecto.Changeset}
  @callback delete_annotation(binary(), map()) :: {:ok, Annotation} | {:error, Ecto.Changeset}

  def create_annotation(attrs, state),
    do: Module.concat(impl(state), "Annotations").create_annotation(attrs, local_or_remote_opts(state)) # TODO: subsume Module.concat into impl

  def update_annotation(annotation, attrs, state),
    do: Module.concat(impl(state), "Annotations").update_annotation(annotation, attrs, local_or_remote_opts(state))

  def  delete_annotation(%Annotation{} = annotation, state), do: Module.concat(impl(state), "Annotations").delete_annotation(annotation, local_or_remote_opts(state))

  def load_annotations(state, opts) do
    annotations = Module.concat(impl(state), "Annotations").list_annotations(local_or_remote_opts(state, opts))
    StateHandlers.load(state, annotations, Annotation, state_opts())
  end
end
