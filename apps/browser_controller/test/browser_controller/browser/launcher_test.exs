defmodule BrowserController.Browser.LauncherTest do
  use ExUnit.Case
  alias BrowserController.Browser.Launcher

  @test_page_path Path.join([:code.priv_dir(:browser_controller), "static", "html", "test_page.html"])
  @team_css "/styles/team_css_overrides.css"
  @annotations "/assets/annotations.js"
  @url "http://localhost:5002"
  @opts %{host_url: "http://localhost:5002", headless: true, port: 9222}

  defp close_browser(_) do
    stuff = Launcher.init(@opts) |> IO.inspect()
    Launcher.stop(server, nil, @opts)
    :ok
  end

  describe "Open/Close Browser" do
    setup [
      :close_browser
    ]

    defp close(server, page_pid) do
      {:ok, _} = Launcher.close_chrome(page_pid)
      {:ok, _} = Launcher.wait_for_close(server)
      assert Launcher.browser_open?(server) == false
    end

    defp validate_opened(page_pid) do
      {:ok, document} = BrowserController.Utilities.get_document(page_pid)
      assert document =~ @team_css
      assert document =~ @annotations
    end

    defp open() do
      server = ChromeRemoteInterface.Session.new()
      {:ok, "Chrome Opened"} = Launcher.open_chrome(@opts)
      assert Launcher.browser_open?(server) == true
      {:ok, page_pid} = Launcher.connect_chrome(server)
      {:ok, page_pid} = Launcher.setup_chrome(page_pid, @url)
      {server, page_pid}
    end

    test "Open browser starts the browser with css and annotations javascript, and closes properly" do
      {server, page_pid} = open()
      BrowserController.execute({:navigate, %{url: @test_page_path}}, server, page_pid)
      validate_opened(page_pid)
      close(server, page_pid)
    end

    test "Initialize browser doesn't open the browser when it's closed" do
      {:ok, %{server: server, page_pid: page_pid}} = Launcher.init(@opts)
      assert page_pid == nil
    end

    test "Initialize browser works when the browser is already open" do
      {_server, page_pid} = open()
      Launcher.disconnect_chrome(page_pid)
      {:ok, %{server: server, page_pid: page_pid}} = Launcher.init(@opts)
      validate_opened(page_pid)
      BrowserController.execute({:navigate, %{url: @test_page_path}}, server, page_pid)
      close(server, page_pid)
    end

    test "Initialize browser and then close doesn't crash" do
      {server, page_pid} = open()
      Process.flag(:trap_exit, true)
      Process.monitor(page_pid)
      close(server, page_pid)
      assert_receive({:DOWN, _, _, _, :remote_closed})
    end
  end
end
