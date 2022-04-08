defmodule ClientTest.PagesExtra do
  use ExUnit.Case

  describe "Server Lists" do
    setup do
      %{page: %Schemas.Pages.Page{url: "https://www.google.com"}}
    end

    test "Gets Page by url", %{page: page} do
      Client.put_in_state(:data, %{pages: [page]})
      result = Client.find_page_by_path(page.url)
      assert result == page
    end

    test "Gets Page by url returns nil when url is nil", %{page: page} do
      Client.put_in_state(:data, %{pages: [page]})
      result = Client.find_page_by_path(nil)
      assert result == nil
    end
  end
end
