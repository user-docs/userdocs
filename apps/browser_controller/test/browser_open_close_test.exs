defmodule UserdocsDesktop.BrowserOpenCloseTest do
  use ExUnit.Case

  @test_page_path Path.join([:code.priv_dir(:browser_controller), "static", "html", "test_page.html"])
  describe "Open/Close Browser" do

    test "Open browser starts the browser with css and annotations javascript, and closes properly" do
      server = ChromeRemoteInterface.Session.new()
      {:ok, page_pid} = BrowserController.open_chrome(server, nil)
      assert BrowserController.browser_open?() == true

      BrowserController.execute({:navigate, %{url: @test_page_path}}, server, page_pid)
      {:ok, document} = BrowserController.Utilities.get_document(page_pid)
      assert document =~ "/assets/team_css_overrides.css"
      assert document =~ "/assets/annotations.js"

      :ok = BrowserController.close_chrome(server, page_pid)
      assert BrowserController.browser_open?() == false
    end
    test "Open browser when the browser is already open works the same way" do
      server = ChromeRemoteInterface.Session.new()
      {:ok, page_pid} = BrowserController.open_chrome(server, nil)

      {:ok, page_pid} = BrowserController.open_chrome(server, page_pid)
      :ok = BrowserController.execute({:navigate, %{url: @test_page_path}}, server, page_pid)

      {:ok, page_pid} = BrowserController.active_page_pid(server, page_pid)
      {:ok, document} = BrowserController.Utilities.get_document(page_pid)
      assert document =~ "/assets/team_css_overrides.css"
      assert document =~ "/assets/annotations.js"

      :ok = BrowserController.close_chrome(server, page_pid)
      assert BrowserController.browser_open?() == false
    end

  end
end
