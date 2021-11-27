defmodule UserdocsDesktop.BrowserCommandsTest do
  use ExUnit.Case
  alias ChromeRemoteInterface.RPC.DOM
  alias Schemas.Elements.Element
  alias Schemas.Elements.ElementAnnotation
  alias Schemas.Annotations.Annotation
  alias UserdocsDesktop.BrowserController
  alias UserdocsDesktop.BrowserController.Utilities

  @test_page_path Path.join([:code.priv_dir(:userdocs_desktop_web), "static", "html", "test_page.html"])

  defp badge_annotation_fixture() do
    %Annotation{id: 1, annotation_type_id: "badge", label: 1, element_annotations: [
      %ElementAnnotation{element: %Element{strategy_id: "css", selector: "#p"}}
    ]}
  end

  defp css() do
    "
    .userdocs-locator{
      position: relative;
      width: 0;
      height: 0;
    }
    .userdocs-mask{
      position: absolute;
    }
    .userdocs-badge {
      float: left;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      transform:translate(-50%, -50%);
      color: #fff;
      background-color: #7FBE7F;
      font-size: 24px;
      border-radius: 50%;
      padding: 10px;
      min-width: 1em;
      padding: .3em;
      line-height: 0;
    }
    .userdocs-badge::after {
      content: '';
      display: block;
      padding-bottom: 100%;
    }
    "
  end

  defp new_server(_), do: %{server: ChromeRemoteInterface.Session.new()}
  defp open_browser(%{server: server}) do
    {os_pid, server} = BrowserController.open_or_reconnect_chrome(server, nil)
    %{os_pid: os_pid}
  end
  defp active_page(%{server: server}) do
    {:ok, page_pid} = BrowserController.active_page_pid(server, nil)
    %{page_pid: page_pid}
  end
  defp setup_page(%{page_pid: page_pid}) do
    {:ok, page_pid} = BrowserController.setup_chrome(page_pid, css())
    %{}
  end

  setup_all [
    :new_server,
    :open_browser,
    :active_page,
    :setup_page
  ]

  describe "Commands" do
    test "Highlight highlights an element", %{server: server, page_pid: page_pid} do
      BrowserController.execute_command({:navigate, %{url: @test_page_path}}, page_pid)
      :timer.sleep(1000)
      BrowserController.execute_command({:highlight, %{selector: "#p", strategy: "css"}}, page_pid)
    end

    test "Navigate navigates", %{server: server, page_pid: page_pid} do
      BrowserController.execute_command({:navigate, %{url: @test_page_path}}, page_pid)
      assert Utilities.get_url(server) =~ "priv/static/html/test_page.html"
    end

    test "create_annotation makes a badge annotation", %{server: server, page_pid: page_pid} do
      annotation = badge_annotation_fixture()
      BrowserController.execute_command({:navigate, %{url: @test_page_path}}, page_pid)
      BrowserController.execute_command({:create_annotation, %{annotation: annotation}}, page_pid)

      {:ok, locator_node_id} = Utilities.get_node_id("css", "#userdocs-annotation-1-locator", page_pid)
      {:ok, %{"result" => %{"attributes" => locator_attributes}}} = DOM.getAttributes(page_pid, %{nodeId: locator_node_id})
      {:ok, badge_node_id} = Utilities.get_node_id("css", "#userdocs-annotation-1-badge", page_pid)
      {:ok, %{"result" => %{"attributes" => badge_attributes}}} = DOM.getAttributes(page_pid, %{nodeId: badge_node_id})

      assert "userdocs-annotation-1-locator" in locator_attributes
      assert "userdocs-locator" in locator_attributes
      assert "userdocs-annotation-1-badge" in badge_attributes
      assert "userdocs-badge" in badge_attributes
    end

    test "remove_annotation removes the annotation", %{server: server, page_pid: page_pid} do
      annotation = badge_annotation_fixture()
      BrowserController.execute_command({:navigate, %{url: @test_page_path}}, page_pid)
      BrowserController.execute_command({:create_annotation, %{annotation: annotation}}, page_pid)
      {:ok, locator_node_id} = Utilities.get_node_id("css", "#userdocs-annotation-1-locator", page_pid)
      BrowserController.execute_command({:remove_annotation, %{annotation: annotation}}, page_pid)
      assert Utilities.get_node_id("css", "#userdocs-annotation-1-locator", page_pid) == {:ok, 0}
    end

    test "update_annotation updates the annotation", %{server: server, page_pid: page_pid} do
      annotation = badge_annotation_fixture()
      BrowserController.execute_command({:navigate, %{url: @test_page_path}}, page_pid)
      BrowserController.execute_command({:create_annotation, %{annotation: annotation}}, page_pid)
      annotation = annotation |> Map.put(:x_orientation, "R")
      BrowserController.execute_command({:update_annotation, %{annotation: annotation}}, page_pid)
      {status, node_id} = Utilities.get_node_id("css", "#userdocs-badge-1-locator", page_pid)
      {:ok, attributes} = Utilities.get_attributes(page_pid, node_id)
      assert String.contains?(attributes.class, "ud-x-right")
    end
  end
  describe "get_node_id" do
    test "get_node_id finds a node with css when it's on the page", %{server: server, page_pid: page_pid} do
      BrowserController.execute_command({:navigate, %{url: @test_page_path}}, page_pid)
      {status, _node_id} = Utilities.get_node_id("css", "#p", page_pid)
      assert status == :ok
    end

    test "get_node_id finds a node with xpath when it's on the page", %{server: server, page_pid: page_pid} do
      BrowserController.execute_command({:navigate, %{url: @test_page_path}}, page_pid)
      {status, _node_id} = Utilities.get_node_id("xpath", "//p", page_pid)
      assert status == :ok
    end

    test "get_node_id doesn't blow up when the node isn't on the page", %{server: server, page_pid: page_pid}  do
      BrowserController.execute_command({:navigate, %{url: @test_page_path}}, page_pid)
      result = Utilities.get_node_id("css", "#partlysomething", page_pid)
      assert result == {:ok, 0}
    end
  end
  describe "utilities" do
    test "get_attributes", %{server: server, page_pid: page_pid} do
      BrowserController.execute_command({:navigate, %{url: @test_page_path}}, page_pid)
      {status, node_id} = Utilities.get_node_id("css", "#many_attributes_p", page_pid)
      Utilities.get_attributes(page_pid, node_id)
    end
  end
end
