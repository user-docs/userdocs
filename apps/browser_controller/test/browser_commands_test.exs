defmodule BrowserController.BrowserCommandsTest do
  use ExUnit.Case
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
  alias BrowserController.Utilities

  @screenshot_path Path.join([:code.priv_dir(:browser_controller), "static", "images"])
  @test_page_path Path.join([:code.priv_dir(:browser_controller), "static", "html", "test_page.html"])
  @magick_path Local.Paths.imagemagick_executable_path(Desktop.OS.type())
  @image_repo_path Local.Paths.image_repo_path()

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

  defp badge_annotation_fixture() do
    %{
      label: UUID.uuid4(),
      name: UUID.uuid4(),
      color: "some color",
      font_size: 42,
      size: 42,
      x_offset:  42,
      x_orientation: "R",
      y_offset: 42,
      y_orientation: "M"
    }
  end

  setup_all do
    BrowserController.open_browser(css())
    #on_exit(fn -> BrowserController.close_browser() end)
  end

  describe "Commands" do

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
    """
  end
end
