defmodule State.Pages do
  @moduledoc "Context functiosn for operating on Page structs in memory state"

  require Logger

  alias Schemas.Pages.Page
  alias Userdocs.Pages

  def load_pages(state, opts \\ []) do
    StateHandlers.load(state, Pages.list_pages(opts), Page, opts)
  end

  def load_these_pages(state, pages, opts \\ []),
    do: StateHandlers.load(state, pages, Page, opts)

  def list_pages(state, opts \\ []) do
    StateHandlers.list(state, Page, opts)
  end

  def get_page!(id, state, opts \\ []) do
    StateHandlers.get(state, id, Page, opts)
  end

end
