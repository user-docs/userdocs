defmodule Client.Screenshots.Repo.S3Test do
  use ExUnit.Case
  alias Client.Screenshots.Repo.S3
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

  describe "S3 create_screenshot" do
    test "creates the dir and file properly", context do
      %{screenshot: screenshot, black_attrs: black_attrs} = context
      assert {:ok, result} = S3.create_screenshot(screenshot)
      assert {:ok, base64} = PresignedUrls.get_object(result.image)
      assert Base.encode64(base64) == black_attrs
    end
  end

  describe "S3 update_screenshot" do
    test "updates the file properly", context do
      %{white_attrs: white_attrs, screenshot: screenshot, black_attrs: black_attrs} = context
      S3.create_screenshot(screenshot)

      assert {:ok, %{score: 1.0, status: :difference} = paths} =
               S3.update_screenshot(screenshot, white_attrs())

      assert {:ok, base64} = PresignedUrls.get_object(paths.image)
      assert Base.encode64(base64) == black_attrs

      assert {:ok, base64} = PresignedUrls.get_object(paths.provisional)
      assert Base.encode64(base64) == white_attrs

      assert {:ok, base64} = PresignedUrls.get_object(paths.diff)
      assert Base.encode64(base64) =~ ScreenshotFixtures.single_red_pixel_start()
    end
  end

  describe "S3 delete_screenshot" do
    test "Deletes everything but history", %{screenshot: screenshot} do
      S3.create_screenshot(screenshot)
      assert {:ok, paths} = S3.delete_screenshot(screenshot)

      assert {:error, "File not found"} = PresignedUrls.get_object(paths.diff)
      assert {:error, "File not found"} = PresignedUrls.get_object(paths.provisional)
    end
  end

  describe "S3 approve_screenshot" do
    test "Overwrites the image and writes to history", %{screenshot: screenshot, white_attrs: white_attrs} do
      S3.create_screenshot(screenshot)
      S3.update_screenshot(screenshot, white_attrs())
      assert {:ok, result} = S3.approve_screenshot(screenshot)

      assert {:ok, base64} = PresignedUrls.get_object(result.image)
      assert Base.encode64(base64) == white_attrs

      assert {:error, "File not found"} = PresignedUrls.get_object(result.diff)
      assert {:error, "File not found"} = PresignedUrls.get_object(result.provisional)
    end
  end

  describe "S3 reject_screenshot" do
    test "removes the provisonal and diff", %{screenshot: screenshot, white_attrs: white_attrs} do
      S3.create_screenshot(screenshot)
      S3.update_screenshot(screenshot, white_attrs())
      assert {:ok, result} = S3.reject_screenshot(screenshot)
      assert {:error, "File not found"} = PresignedUrls.get_object(result.diff)
      assert {:error, "File not found"} = PresignedUrls.get_object(result.provisional)
    end
  end

  defp white_attrs() do
    attrs = ScreenshotFixtures.screenshot_attrs(:valid_string_keys, %{})
            |> Map.put("base64", ScreenshotFixtures.single_white_pixel())
  end
end
