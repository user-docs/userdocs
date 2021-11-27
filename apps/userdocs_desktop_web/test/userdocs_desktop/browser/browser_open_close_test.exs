defmodule UserdocsDesktop.BrowserOpenCloseTest do
  use ExUnit.Case
  alias UserdocsDesktop.BrowserController

  @test_page_path Path.join([:code.priv_dir(:userdocs_desktop_web), "static", "html", "test_page.html"])

  describe "Open/Close Browser" do
    test "Open browser starts the browser with css and annotations javascript, and closes properly" do
      server = ChromeRemoteInterface.Session.new()
      :ok = BrowserController.close_chrome(server, nil)

      {:ok, os_pid} = BrowserController.open_or_reconnect_chrome(server, nil)
      {:ok, page_pid} = BrowserController.active_page_pid(server, nil)
      {:ok, page_pid} = BrowserController.setup_chrome(page_pid, "{key: value}")

      BrowserController.execute_command({:navigate, %{url: @test_page_path}}, page_pid)
      {:ok, document} = BrowserController.get_document(page_pid)
      assert document =~ "{key: value}"
      assert document =~ "/assets/annotations.js"
      :ok = BrowserController.close_chrome(server, page_pid)
    end

    test "Open browser when the browser is already open works the same way" do
      server = ChromeRemoteInterface.Session.new()
      :ok = BrowserController.close_chrome(server, nil)

      {:ok, os_pid} = BrowserController.open_or_reconnect_chrome(server, nil)
      {:ok, page_pid} = BrowserController.active_page_pid(server, nil)
      {:ok, page_pid} = BrowserController.setup_chrome(page_pid, "{key: value}")

      {:ok, os_pid} = BrowserController.open_or_reconnect_chrome(server, os_pid)
      {:ok, page_pid} = BrowserController.active_page_pid(server, page_pid)
      {:ok, page_pid} = BrowserController.setup_chrome(page_pid, "{key: value}")
      BrowserController.execute_command({:navigate, %{url: @test_page_path}}, page_pid)
      {:ok, document} = BrowserController.get_document(page_pid)
      assert document =~ "{key: value}"
      assert document =~ "/assets/annotations.js"
      :ok = BrowserController.close_chrome(server, page_pid)
    end
  end
end
