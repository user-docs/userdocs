defmodule Client.Pages do
  import Client.APISupport
  import Client.Constants
  alias Schemas.Pages.Page

  @callback list_pages(map()) :: list(Page)
  @callback create_page(map(), map()) :: {:ok, Page} | {:error, Ecto.Changeset}
  @callback update_page(Page, map(), map()) :: {:ok, Page} | {:error, Ecto.Changeset}
  @callback delete_page(binary(), map()) :: {:ok, Page} | {:error, Ecto.Changeset}
  def create_page(attrs, state),
    do: Module.concat(impl(state), "Pages").create_page(attrs, local_or_remote_opts(state)) # TODO: subsume Module.concat into impl
  
   def update_page(page, attrs, state),
    do: Module.concat(impl(state), "Pages").update_page(page, attrs, local_or_remote_opts(state))
  
  def delete_page(%Page{} = page, state), do: Module.concat(impl(state), "Pages").delete_page(page, local_or_remote_opts(state))
  def delete_page(page_id, state) when is_binary(page_id) do
    page = State.Pages.get_page!(page_id, state, state_opts())
    Module.concat(impl(state), "Pages").delete_page(page, local_or_remote_opts(state))
  end
  
  def load_pages(state, opts) do
    pages = Module.concat(impl(state), "Pages").list_pages(local_or_remote_opts(state, opts))
    StateHandlers.load(state, pages, Page, state_opts())
  end
end
