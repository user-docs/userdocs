defmodule Client.Screenshots.AwsRepoTest do
  use ExUnit.Case
  alias Client.Screenshots.AwsRepo
  alias Userdocs.ScreenshotFixtures
  alias Schemas.Screenshots.Screenshot
  alias Client.Remote.PresignedUrls

  setup do
    alias Schemas.Teams.Team
    id = UUID.uuid4()
    bucket = "userdocs-image-repo"

    team = %Team{
      aws_region: "local",
      aws_access_key_id: "minioadmin",
      aws_secret_access_key: "minioadmin",
      aws_bucket: bucket
    }

    config =
      team
      |> Userdocs.S3Provider.cast_config()
      |> Map.put(:host, "localhost")
      |> Map.put(:port, 9000)
      |> Map.put(:scheme, "http://")

    black_attrs = ScreenshotFixtures.single_black_pixel()

    screenshot =
      %Screenshot{id: id}
      |> Userdocs.Screenshots.PresignedURLS.put_presigned_urls(config)
      |> Map.put(:base64, black_attrs)

    %{
      id: id,
      black_attrs: black_attrs,
      white_attrs: ScreenshotFixtures.single_white_pixel(),
      team: team,
      config: config,
      screenshot: screenshot,
      bucket: bucket
    }
  end

  describe "AwsRepo create_screenshot" do
    test "creates the dir and file properly", context do
      %{screenshot: screenshot, black_attrs: black_attrs} = context
      assert {:ok, result} = AwsRepo.create_screenshot(screenshot)
      assert {:ok, base64} = PresignedUrls.get_object(result.image)
      assert Base.encode64(base64) == black_attrs
    end
  end

  describe "AwsRepo update_screenshot" do
    test "updates the file properly", context do
      %{white_attrs: white_attrs, screenshot: screenshot, black_attrs: black_attrs} = context
      AwsRepo.create_screenshot(screenshot)

      assert {:ok, %{score: 1.0, result_code: :image_difference} = paths} =
               screenshot
               |> Map.put(:base64, white_attrs)
               |> AwsRepo.update_screenshot(screenshot)

      assert {:ok, base64} = PresignedUrls.get_object(paths.image)
      assert Base.encode64(base64) == black_attrs

      assert {:ok, base64} = PresignedUrls.get_object(paths.provisional)
      assert Base.encode64(base64) == white_attrs

      assert {:ok, base64} = PresignedUrls.get_object(paths.diff)
      assert Base.encode64(base64) =~ ScreenshotFixtures.single_red_pixel_start()
    end
  end

  describe "LocalFileRepo delete_screenshot" do
    test "Deletes everything but history", %{screenshot: screenshot} do
      AwsRepo.create_screenshot(screenshot)
      assert {:ok, paths} = AwsRepo.delete_screenshot(screenshot)

      assert {:error, "File not found"} = PresignedUrls.get_object(paths.diff)
      assert {:error, "File not found"} = PresignedUrls.get_object(paths.provisional)
    end
  end

  describe "LocalFileRepo approve_screenshot" do
    test "Overwrites the image and writes to history", %{screenshot: screenshot, white_attrs: white_attrs} do
      AwsRepo.create_screenshot(screenshot)
      screenshot |> Map.put(:base64, white_attrs) |> AwsRepo.update_screenshot()
      assert {:ok, result} = AwsRepo.approve_screenshot(screenshot)

      assert {:ok, base64} = PresignedUrls.get_object(result.image)
      assert Base.encode64(base64) == white_attrs

      assert {:error, "File not found"} = PresignedUrls.get_object(result.diff)
      assert {:error, "File not found"} = PresignedUrls.get_object(result.provisional)
    end
  end

  describe "LocalFileRepo reject_screenshot" do
    test "removes the provisonal and diff", %{screenshot: screenshot, white_attrs: white_attrs} do
      AwsRepo.create_screenshot(screenshot)
      screenshot |> Map.put(:base64, white_attrs) |> AwsRepo.update_screenshot()
      assert {:ok, result} = AwsRepo.reject_screenshot(screenshot)

      assert {:error, "File not found"} = PresignedUrls.get_object(result.diff)
      assert {:error, "File not found"} = PresignedUrls.get_object(result.provisional)
    end
  end
end
