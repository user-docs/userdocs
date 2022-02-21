defmodule UserdocsDesktop.BrowserCommandsTest do
  use UserdocsDesktopWeb.ConnCase
  alias ChromeRemoteInterface.RPC.DOM
  alias Schemas.Elements.Element
  alias Schemas.Elements.ElementAnnotation
  alias Schemas.Annotations.Annotation
  alias Schemas.Annotations.AnnotationType
  alias Schemas.Steps.Step
  alias Schemas.Teams.Team
  alias Schemas.Screenshots.Screenshot
  alias Schemas.Processes.Process
  alias Schemas.Pages.Page
  alias Userdocs.Screenshots
  alias Userdocs.UsersFixtures
  alias Userdocs.TeamsFixtures
  alias Userdocs.ScreenshotFixtures
  alias UserdocsDesktop.BrowserController
  alias UserdocsDesktop.BrowserController.Utilities

  @opts %{context: %{repo: Userdocs.Repo, access_token: ""}}
  @screenshot_path Path.join([:code.priv_dir(:userdocs_desktop_web), "static", "images"])
  @test_page_path Path.join([:code.priv_dir(:userdocs_desktop_web), "static", "html", "test_page.html"])
  @magick_path UserdocsDesktop.Paths.image_magick_executable_path(Desktop.OS.type())
  @image_repo_path UserdocsDesktop.Paths.image_repo_path()

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

  def checkout(_), do: %{sql: Ecto.Adapters.SQL.Sandbox.checkout(Userdocs.Repo)}
  defp new_server(_), do: %{server: ChromeRemoteInterface.Session.new()}
  defp open_browser(%{server: server} = state) do
    {:ok, page_pid} = BrowserController.open_chrome(server, nil)
    Map.merge(state, %{page_pid: page_pid})
  end
  defp create_password(_), do: %{password: UUID.uuid4()}
  defp create_user(%{password: password}), do: %{user: UsersFixtures.confirmed_user(password)}
  defp create_team(_), do: %{team: TeamsFixtures.team(@opts)}
  defp create_team_user(%{user: user, team: team}), do: %{team_user: TeamsFixtures.team_user(user.id, team.id, @opts)}
  defp create_session(%{user: user, password: password}) do
    {:ok, _user} = Client.authenticate(%{"user" => %{"email" => user.email, "password" => password}})
    %{}
  end
  defp put_tokens(_) do
    {:ok, tokens} = Session.tokens()
    tokens
  end

  setup_all do
    BrowserController.open_browser(css())
    #on_exit(fn -> BrowserController.close_browser() end)
  end

  describe "Commands" do
    """
    test "Highlight highlights an element" do
      BrowserController.execute({:navigate, %{url: @test_page_path}})
      :timer.sleep(100)
      BrowserController.execute({:highlight, %{selector: "#p", strategy: "css"}})
    end

    test "Navigate navigates" do
      {:ok, _} = BrowserController.execute({:navigate, %{url: @test_page_path}})
      assert BrowserController.get_url() =~ "test_page.html"
    end

    test "create_annotation makes a badge annotation" do
      {:ok, page_pid} = BrowserController.page_pid()
      annotation = badge_annotation_fixture()
      BrowserController.execute({:navigate, %{url: @test_page_path}})
      BrowserController.execute({:create_annotation, %{annotation: annotation}})

      {:ok, locator_node_id} = Utilities.get_node_id("css", "#userdocs-annotation-1-locator", page_pid)
      {:ok, %{"result" => %{"attributes" => locator_attributes}}} = DOM.getAttributes(page_pid, %{nodeId: locator_node_id})
      {:ok, badge_node_id} = Utilities.get_node_id("css", "#userdocs-annotation-1-badge", page_pid)
      {:ok, %{"result" => %{"attributes" => badge_attributes}}} = DOM.getAttributes(page_pid, %{nodeId: badge_node_id})

      assert "userdocs-annotation-1-locator" in locator_attributes
      assert "userdocs-locator" in locator_attributes
      assert "userdocs-annotation-1-badge" in badge_attributes
      assert "userdocs-badge" in badge_attributes
    end

    test "remove_annotation removes the annotation" do
      {:ok, page_pid} = BrowserController.page_pid()
      annotation = badge_annotation_fixture()
      BrowserController.execute({:navigate, %{url: @test_page_path}})
      BrowserController.execute({:create_annotation, %{annotation: annotation}})
      {:ok, locator_node_id} = Utilities.get_node_id("css", "#userdocs-annotation-1-locator", page_pid)
      BrowserController.execute({:remove_annotation, %{annotation: annotation}})
      assert Utilities.get_node_id("css", "#userdocs-annotation-1-locator", page_pid) == {:ok, 0}
    end

    test "update_annotation updates the annotation" do
      {:ok, page_pid} = BrowserController.page_pid()
      annotation = badge_annotation_fixture()
      BrowserController.execute({:navigate, %{url: @test_page_path}})
      BrowserController.execute({:create_annotation, %{annotation: annotation}})
      annotation = annotation |> Map.put(:x_orientation, "R")
      BrowserController.execute({:update_annotation, %{annotation: annotation}})
      {status, node_id} = Utilities.get_node_id("css", "#userdocs-badge-1-locator", page_pid)
      {:ok, attributes} = Utilities.get_attributes(page_pid, node_id)
      assert String.contains?(attributes.class, "ud-x-right")
    end

    test "full_screen_screenshot" do
      BrowserController.execute({:navigate, %{url: @test_page_path}})
      {:ok, result} = BrowserController.execute({:full_screen_screenshot, %{}})
      assert String.starts_with?(result, "iVBORw0KGgoAAAANSUhEU")
    end

    test "set_size" do
      BrowserController.execute({:navigate, %{url: @test_page_path}})
      {:ok, result} = BrowserController.execute({:set_size, %{width: 40, height: 40}})
      #assert result == %{width: 23, height: 23}
    end
    test "fill_field" do
      BrowserController.execute({:navigate, %{url: @test_page_path}})
      BrowserController.execute({:fill_field, %{selector: ~w(//*[@id="name"]), strategy: "xpath", text: "testxpathtext"}})
      {:ok, document} = BrowserController.get_document()
      #assert document =~ "testxpathtext"

      BrowserController.execute({:navigate, %{url: @test_page_path}})
      BrowserController.execute({:fill_field, %{selector: ~w(#name), strategy: "css", text: "testcsstext"}})
      {:ok, document} = BrowserController.get_document()
      #assert document =~ "testcsstext"
    end

    test "click" do
      BrowserController.execute({:navigate, %{url: @test_page_path}})
      BrowserController.execute({:click, %{selector: ~w(#testButton), strategy: "css"}})
      {:ok, document} = BrowserController.get_document()
      assert document =~ "After"
    end

    test "clear_annotations" do
      annotation = badge_annotation_fixture()
      BrowserController.execute({:navigate, %{url: @test_page_path}})
      BrowserController.execute({:create_annotation, %{annotation: annotation}})
      BrowserController.execute({:clear_annotations, %{}})
    end
    """
    test "full screen screenshot step, new screenshot" do
      process = %Process{id: 1, name: "test"}
      page = %Page{id: 1, name: "test"}
      step = %Step{
        id: 1, name: "test", step_type_id: "full_screen_screenshot",
        screenshot: nil, process_id: 1, process: process, page_id: 1, page: page
      }
      context = %{team: %Team{id: 1}, opts: %{context: %{repo: Userdocs.Repo}}}
      BrowserController.execute({:execute_step, %{step: step, context: context}})
    end

    test "full screen screenshot step, existing screenshot" do
      screenshot = %Screenshot{id: "test", name: "test", status: "ok"}
      process = %Process{id: 1, name: "test"}
      step = %Step{
        id: 1, name: "test", step_type_id: "full_screen_screenshot",
        screenshot_id: "test", process_id: 1, process: process, screenshot: screenshot
      }
      context = %{team: %Team{id: 1}, opts: %{context: %{repo: Userdocs.Repo}}}
      BrowserController.execute({:execute_step, %{step: step, context: context}})
    end
  end
"""
  describe "get_node_id" do
    test "get_node_id finds a node with css when it's on the page" do
      {:ok, page_pid} = BrowserController.page_pid()
      BrowserController.execute({:navigate, %{url: @test_page_path}})
      {status, _node_id} = Utilities.get_node_id("css", "#p", page_pid)
      assert status == :ok
    end

    test "get_node_id finds a node with xpath when it's on the page" do
      {:ok, page_pid} = BrowserController.page_pid()
      BrowserController.execute({:navigate, %{url: @test_page_path}})
      {status, _node_id} = Utilities.get_node_id("xpath", "//p", page_pid)
      assert status == :ok
    end

    test "get_node_id doesn't blow up when the node isn't on the page"  do
      {:ok, page_pid} = BrowserController.page_pid()
      BrowserController.execute({:navigate, %{url: @test_page_path}})
      result = Utilities.get_node_id("css", "#partlysomething", page_pid)
      assert result == {:ok, 0}
    end
  end

  describe "utilities" do
    test "get_attributes" do
      {:ok, page_pid} = BrowserController.page_pid()
      BrowserController.execute({:navigate, %{url: @test_page_path}})
      {status, node_id} = Utilities.get_node_id("css", "#many_attributes_p", page_pid)
      Utilities.get_attributes(page_pid, node_id)
    end
  end
  """
end
