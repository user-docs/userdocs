defmodule BrowserController.Browser.CommandsTest do
  use ExUnit.Case

  alias BrowserController.Utilities
  alias BrowserController.Browser

  @test_page_path Path.join([:code.priv_dir(:browser_controller), "static", "html", "test_page.html"])

  setup_all do
    result = BrowserController.ensure_browser_open()
    BrowserController.execute({:navigate, %{url: @test_page_path}})
    result
  end

  describe "Navigation" do
    setup do
      BrowserController.execute({:navigate, %{url: "about:blank"}})
    end

    test "navigates to normal URL properly", %{server: server, headed_browser_pid: browser_pid} do
      {:ok, _} = Browser.execute(browser_pid, {:navigate, %{url: @test_page_path}})
      assert Utilities.get_url(server) =~ "test_page.html"
    end
  end

  describe "Highlight" do
    test "Highlight highlights an element", %{headed_browser_pid: browser_pid} do
      Browser.execute(browser_pid, {:highlight, %{selector: "#p", strategy: "css"}})
    end
  end

  describe "Set size" do
    test "sets size properly", %{headed_browser_pid: browser_pid} do
      {:ok, result} = Browser.execute(browser_pid, {:set_size, %{width: 40, height: 40}})
      assert result == %{width: 23, height: 23}
    end
  end

  describe "Screenshots" do
    test "full_screen_screenshot", %{headed_browser_pid: browser_pid} do
      {:ok, result} = Browser.execute(browser_pid, {:full_screen_screenshot, %{}})
      assert String.starts_with?(result, "iVBORw0KGgoAAAANSUhEU")
    end

    test "full document screenshot", %{headed_browser_pid: browser_pid} do
      {:ok, result} = Browser.execute(browser_pid, {:full_document_screenshot, %{width: 800}})
      assert String.starts_with?(result, "iVBORw0KGgoAAAANSUhEU")
    end

    test "element screenshot", %{headed_browser_pid: browser_pid} do
      {:ok, result} = Browser.execute(browser_pid, {:element_screenshot, %{strategy: "css", selector: ~w(#testForm)}})
      assert String.starts_with?(result, "iVBORw0KGgoAAAANSUhEU")
    end
  end

  describe "Fill Field" do
    test "fills a field selected with an xpath selctor", %{headed_browser_pid: browser_pid, page_pid: page_pid} do
      Browser.execute(browser_pid, {:fill_field, %{selector: ~w(//*[@id="name"]), strategy: "xpath", text: "testxpathtext"}})
      {:ok, document} = Utilities.get_document(page_pid)
      assert document =~ "testxpathtext"
    end

    test "fills a field selected with an css selctor", %{headed_browser_pid: browser_pid, page_pid: page_pid} do
      Browser.execute(browser_pid, {:fill_field, %{selector: ~w(#name), strategy: "css", text: "testcsstext"}})
      {:ok, document} = Utilities.get_document(page_pid)
      assert document =~ "testcsstext"
    end
  end

  describe "Click" do
    test "click", %{headed_browser_pid: browser_pid, page_pid: page_pid} do
      Browser.execute(browser_pid, {:click, %{selector: ~w(#testButton), strategy: "css"}})
      {:ok, document} = Utilities.get_document(page_pid)
      assert document =~ "After"
    end
  end
end
