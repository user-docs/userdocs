defmodule BrowserController.Browser.LauncherTest do
  use BrowserController.DataCase
  alias BrowserController.Browser.Launcher
  alias BrowserController.Browser.Commands

  @test_page_path Path.join([:code.priv_dir(:browser_controller), "static", "html", "test_page.html"])
  @team_css "/styles/team_css_overrides.css"
  @annotations "/assets/annotations.js"
  @opts %{host_url: "http://localhost:5002", headless: false, port: 9222, initial_page: @test_page_path}

  defp close_browser(_) do
    Launcher.ensure_closed(@opts)
    :ok
  end

  describe "Open/Close Browser" do
    setup [
      :close_browser
    ]

    test "ensure open starts the browser with css and annotations javascript, and closes properly" do
      {:ok, %{server: server, page_pid: page_pid}} = Launcher.ensure_open(@opts)
      Commands.apply(page_pid, {:navigate, %{url: @test_page_path}})
      {:ok, document} = BrowserController.Utilities.get_document(page_pid)
      assert document =~ @team_css
      assert document =~ @annotations
      Launcher.stop(server, page_pid, @opts)
    end

    test "Initialize browser doesn't open the browser when it's closed" do
      {:ok, %{page_pid: page_pid}} = Launcher.init(@opts)
      assert page_pid == nil
    end

    test "Initialize browser works when the browser is already open" do
      {:ok, %{page_pid: page_pid}} = Launcher.ensure_open(@opts)
      Launcher.disconnect_chrome(page_pid)
      {:ok, %{server: server, page_pid: page_pid}} = Launcher.init(@opts)
      Commands.apply(page_pid, {:navigate, %{url: @test_page_path}})
      {:ok, document} = BrowserController.Utilities.get_document(page_pid)
      assert document =~ @team_css
      assert document =~ @annotations
      Launcher.stop(server, page_pid, @opts)
    end

    test "Initialize browser and then close doesn't crash" do
      {:ok, %{page_pid: page_pid}} = Launcher.ensure_open(@opts)
      Process.flag(:trap_exit, true)
      Process.monitor(page_pid)
      ChromeRemoteInterface.RPC.Browser.close(page_pid)
      assert_receive({:event, :chrome_closed})
    end

    test "Calling initialize_or_reinitialize_chrome doesn't screw things up with an existing pid" do
      {:ok, %{server: server, page_pid: page_pid}} = Launcher.ensure_open(@opts)
      Launcher.initialize_or_reinitialize_chrome(page_pid, server, @opts)
      Launcher.stop(server, page_pid, @opts)
    end
  end
end
