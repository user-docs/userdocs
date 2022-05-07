defmodule Client.Screenshots.AwsExportTest do
  use ExUnit.Case
  alias Client.Screenshots.AwsExport
  alias Userdocs.ScreenshotFixtures
  alias Schemas.Screenshots.Screenshot
  alias Client.Remote.PresignedUrls

  setup do
    alias Schemas.Teams.Team
    id = UUID.uuid4()
    bucket = "userdocs-image-repo"

    team = %Team{
      name: "team_name",
      aws_host: "localhost",
      aws_port: 9000,
      aws_scheme: "http://",
      aws_region: "local",
      aws_access_key_id: "minioadmin",
      aws_secret_access_key: "minioadmin",
      aws_bucket: bucket
    }

    black_attrs = ScreenshotFixtures.single_black_pixel()

    base_screenshot =
      %Screenshot{id: id}
      |> Map.put(:base64, black_attrs)
      |> Map.put(:page, %{project: %{}})
      |> put_in([Access.key(:page), :project], %{name: "test_project", team: %{}})
      |> put_in([Access.key(:page), :project, :team], team)
      |> Userdocs.Screenshots.PresignedURLS.put_presigned_urls()

    file_named_screenshot =
      base_screenshot
      |> Map.put(:file_name, UUID.uuid4())
      |> Userdocs.Screenshots.PresignedURLS.put_presigned_urls()

    named_screenshot =
      base_screenshot
      |> Map.put(:name, "A crazy Name! With Special *Characters*")
      |> Userdocs.Screenshots.PresignedURLS.put_presigned_urls()

    %{
      id: id,
      black_attrs: black_attrs,
      white_attrs: ScreenshotFixtures.single_white_pixel(),
      team: team,
      screenshot: base_screenshot,
      file_named_screenshot: file_named_screenshot,
      named_screenshot: named_screenshot,
      bucket: bucket
    }
  end

  describe "AwsRepo create_screenshot" do
    test "creates the file with id", %{screenshot: screenshot, team: team} do
      assert {:ok, result} = AwsExport.create_screenshot(screenshot)
      assert {:ok, base64} = PresignedUrls.get_object(result.export)
      assert result.export =~ team.name
      assert result.export =~ screenshot.page.project.name
      assert result.export =~ screenshot.id
      assert Base.encode64(base64) == ScreenshotFixtures.single_black_pixel()
    end

    test "creates the file with file_name", %{file_named_screenshot: screenshot, team: team} do
      assert {:ok, result} = AwsExport.create_screenshot(screenshot)
      assert {:ok, base64} = PresignedUrls.get_object(result.export)
      assert result.export =~ team.name
      assert result.export =~ screenshot.page.project.name
      assert result.export =~ screenshot.file_name
      assert Base.encode64(base64) == ScreenshotFixtures.single_black_pixel()
    end

    test "creates the file with name", %{named_screenshot: screenshot, team: team} do
      assert {:ok, result} = AwsExport.create_screenshot(screenshot)
      assert {:ok, base64} = PresignedUrls.get_object(result.export)
      assert result.export =~ team.name
      assert result.export =~ screenshot.page.project.name
      assert result.export =~ Inflex.parameterize_to_ascii(screenshot.name, "_")
      assert Base.encode64(base64) == ScreenshotFixtures.single_black_pixel()
    end
  end

  describe "AwsExport update_screenshot" do
    test "is a no op", %{black_attrs: black_attrs} do
      assert AwsExport.update_screenshot(%Screenshot{}, black_attrs) == {:ok, nil}
    end
  end

  describe "AwsExport delete_screenshot" do
    test "Deletes everything but history", %{screenshot: screenshot}  do
      AwsExport.create_screenshot(screenshot)
      assert {:ok, paths} = AwsExport.delete_screenshot(screenshot)
      assert {:error, "File not found"} = PresignedUrls.get_object(paths.export)
    end
  end

  describe "AwsExport approve_screenshot" do
    test "Overwrites the image and writes to history", %{screenshot: screenshot, white_attrs: white_attrs} do
      alias Client.Screenshots.Repo.S3
      S3.create_screenshot(screenshot)
      screenshot |> Map.put(:base64, white_attrs) |> S3.update_screenshot()
      S3.approve_screenshot(screenshot)
      assert {:ok, result} = AwsExport.approve_screenshot(screenshot)

      assert {:ok, base64} = PresignedUrls.get_object(result.export)
      assert Base.encode64(base64) == white_attrs
    end
  end

  describe "AwsExport reject_screenshot" do
    test "is a no op", %{black_attrs: black_attrs} do
      assert AwsExport.reject_screenshot(%Screenshot{}, black_attrs) == {:ok, nil}
    end
  end
end
