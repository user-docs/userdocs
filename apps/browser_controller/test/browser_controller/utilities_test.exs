defmodule BrowserController.Browser.UtilitiesTest do
  use ExUnit.Case

  alias BrowserController.Utilities

  @test_page_path Path.join([:code.priv_dir(:browser_controller), "static", "html", "test_page.html"])

  setup_all do
    result = BrowserController.ensure_browser_open()
    BrowserController.execute({:navigate, %{url: @test_page_path}})
    result
  end

  describe "Get Node ID" do
    test "finds a node with css when it's on the page", %{page_pid: page_pid} do
      {status, _node_id} = Utilities.get_node_id("css", "#p", page_pid)
      assert status == :ok
    end

    test "finds a node with xpath when it's on the page", %{page_pid: page_pid} do
      {status, _node_id} = Utilities.get_node_id("xpath", "//p", page_pid)
      assert status == :ok
    end

    test "get_node_id doesn't blow up when the node isn't on the page", %{page_pid: page_pid} do
      result = Utilities.get_node_id("css", "#partlysomething", page_pid)
      assert result == {:ok, 0}
    end
  end

  describe "Get Attributes" do
    test "works", %{page_pid: page_pid} do
      {_status, node_id} = Utilities.get_node_id("css", "#many_attributes_p", page_pid)
      {:ok, result} = Utilities.get_attributes(page_pid, node_id)
      assert result == %{id: "many_attributes_p", name: "name", style: "color: green;"}
    end
  end
end
