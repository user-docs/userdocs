defmodule Userdocs.PageFixtures do
  @moduledoc false
  alias Userdocs.Pages

  def page(attrs, opts) do
    {:ok, page} = page_attrs(attrs) |> Pages.create_page(opts)
    page
  end

  def page_struct(attrs) do
    {:ok, page} = page_attrs(attrs) |> Pages.create_page_struct()
    page
  end

  def page_attrs(attrs) do
    %{
      url: "http://google.com",
      name: UUID.uuid4(),
      project_id: UUID.uuid4()
    }
    |> Map.merge(attrs)
  end
end
