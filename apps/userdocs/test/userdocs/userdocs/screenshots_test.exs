defmodule Userdocs.ScreenshotsTest do
  use Userdocs.DataCase
  alias Schemas.Screenshots.Screenshot
  alias Userdocs.Screenshots
  alias Userdocs.UsersFixtures
  alias Userdocs.TeamsFixtures
  alias Userdocs.ProjectsFixtures
  alias Userdocs.WebFixtures
  alias Userdocs.ScreenshotFixtures
  @local_path Path.join(:code.priv_dir(:userdocs), "screenshots")
  @opts %{context: %{repo: Userdocs.Repo}}

  defp make_file_dir(_), do: File.mkdir_p!(@local_path)
  defp create_password(_), do: %{password: UUID.uuid4()}
  defp create_user(%{password: password}), do: %{user: UsersFixtures.confirmed_user(password)}
  defp create_team(_), do: %{team: TeamsFixtures.team(@opts)}
  defp create_team_user(%{user: user, team: team}), do: %{team_user: TeamsFixtures.team_user(user.id, team.id, @opts)}
  defp create_strategy(_), do: %{strategy: WebFixtures.strategy(@opts)}
  defp create_project(%{team: team, strategy: strategy}), do: %{project: ProjectsFixtures.project(team.id, strategy.id, @opts)}
  defp clean_bucket(id) do
    ExAws.S3.delete_all_objects("userdocs-test", [
      "screenshots/" <> id <> ".png",
      "screenshots/" <> id <> "-provisional.png",
      "screenshots/" <> id <> "-diff.png"
    ]) |> ExAws.request()
  end

  describe "screenshots" do
    setup [
      :make_file_dir,
      :create_password,
      :create_user,
      :create_team,
      :create_team_user,
      :create_strategy,
      :create_project
    ]
    test "list_screenshots/0 returns all screenshots", %{project: project} do
      screenshot = ScreenshotFixtures.screenshot(%{project_id: project.id}, @opts)
      [queried_screenshot] = Screenshots.list_screenshots(@opts)
      assert screenshot.name == queried_screenshot.name
      assert screenshot.project_id == queried_screenshot.project_id
    end

    test "get_screenshot!/1 returns the screenshot with given id", %{project: project} do
      screenshot = ScreenshotFixtures.screenshot(%{project_id: project.id}, @opts)
      db_screenshot = Screenshots.get_screenshot!(screenshot.id, @opts)
      assert screenshot.name == db_screenshot.name
      assert screenshot.project_id == db_screenshot.project_id
      assert screenshot.aws_diff_screenshot == db_screenshot.aws_diff_screenshot
      assert screenshot.aws_screenshot == db_screenshot.aws_screenshot
    end

    test "create_screenshot/1 with valid data creates a screenshot", %{project: project} do
      attrs = ScreenshotFixtures.screenshot_attrs(:valid, %{project_id: project.id})
      assert {:ok, %Screenshot{} = screenshot} = Screenshots.create_screenshot(attrs, @opts)
      assert screenshot.name == attrs.name
    end

    test "create_aws_files/1 does the things" do
      id = "create_aws_file_test"
      Screenshots.create_aws_files(id, nil, "userdocs-test")
      {:ok, %{status_code: status_code}} = ExAws.S3.head_object("userdocs-test", "screenshots/" <> id <> ".png") |> ExAws.request()
      assert status_code == 200
      {:ok, %{status_code: status_code}} = ExAws.S3.head_object("userdocs-test", "screenshots/" <> id <> "-provisional.png") |> ExAws.request()
      assert status_code == 200
      {:ok, %{status_code: status_code}} =  ExAws.S3.head_object("userdocs-test", "screenshots/" <> id <> "-diff.png") |> ExAws.request()
      assert status_code == 200
      clean_bucket(id)
    end

    test "create_screenshot/1 with invalid data returns error changeset" do
      attrs = ScreenshotFixtures.screenshot_attrs(:invalid, %{})
      assert {:error, %Ecto.Changeset{}} = Screenshots.create_screenshot(attrs, @opts) # No such thing as invalid attrs atm
    end

    test "update_screenshot/2 with valid data updates the screenshot", %{project: project} do
      screenshot = ScreenshotFixtures.screenshot(%{project_id: project.id}, @opts)
      attrs = ScreenshotFixtures.screenshot_attrs(:valid, %{project_id: project.id})
      assert {:ok, %Screenshot{} = screenshot} = Screenshots.update_screenshot(screenshot, attrs, @opts)
      assert screenshot.name == attrs.name
    end

    test "update_screenshot/2 with invalid data returns error changeset", %{project: project} do
      screenshot = ScreenshotFixtures.screenshot(%{project_id: project.id}, @opts)
      attrs = ScreenshotFixtures.screenshot_attrs(:invalid, %{})
      assert {:error, %Ecto.Changeset{}} = Screenshots.update_screenshot(screenshot, attrs, @opts)
      db_screenshot = Screenshots.get_screenshot!(screenshot.id, @opts)
      assert screenshot.name == db_screenshot.name
      assert screenshot.project_id == db_screenshot.project_id
      assert screenshot.aws_diff_screenshot == db_screenshot.aws_diff_screenshot
      assert screenshot.aws_screenshot == db_screenshot.aws_screenshot
    end

    test "delete_screenshot/1 deletes the screenshot", %{project: project} do
      screenshot = ScreenshotFixtures.screenshot(%{project_id: project.id}, @opts)
      assert {:ok, %Screenshot{}} = Screenshots.delete_screenshot(screenshot, @opts)
      assert_raise Ecto.NoResultsError, fn -> Screenshots.get_screenshot!(screenshot.id, @opts) end
    end

    test "change_screenshot/1 returns a screenshot changeset", %{project: project} do
      screenshot = ScreenshotFixtures.screenshot(%{project_id: project.id}, @opts)
      assert %Ecto.Changeset{} = Screenshots.change_screenshot(screenshot)
    end
  end
end
