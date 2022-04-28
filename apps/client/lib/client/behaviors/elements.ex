defmodule Client.Elements do
  import Client.APISupport
  import Client.Constants
  alias Schemas.Elements.Element

  @callback list_elements(map()) :: list(Element)
  @callback create_element(map(), map()) :: {:ok, Element} | {:error, Ecto.Changeset}
  @callback update_element(Element, map(), map()) :: {:ok, Element} | {:error, Ecto.Changeset}
  @callback delete_element(binary(), map()) :: {:ok, Element} | {:error, Ecto.Changeset}
  def create_element(attrs, state),
    do: impl(state, "Elements").create_element(attrs, local_or_remote_opts(state)) # TODO: subsume Module.concat into impl
  
  def update_element(element, attrs, state),
    do: impl(state, "Elements").update_element(element, attrs, local_or_remote_opts(state))
  
  def delete_element(%Element{} = element, state), do: impl(state, "Elements").delete_element(element, local_or_remote_opts(state))
  def delete_element(element_id, state) when is_binary(element_id) do
    element = State.Elements.get_element!(element_id, state, state_opts())
    impl(state, "Elements").delete_element(element, local_or_remote_opts(state))
  end
  
  def load_elements(state, opts) do
    elements = impl(state, "Elements").list_elements(local_or_remote_opts(state, opts))
    StateHandlers.load(state, elements, Element, state_opts())
  end
end
