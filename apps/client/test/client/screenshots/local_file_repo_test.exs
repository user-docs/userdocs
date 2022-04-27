defmodule Client.Screenshots.LocalFileRepoTest do
	use ExUnit.Case
  alias Client.Screenshots.LocalFileRepo
  alias Schemas.Screenshots.Screenshot
  alias Userdocs.ScreenshotFixtures

  defp cleanup(id) do
    path = Local.Paths.image_repo_path()
    |> Path.join(id)
    File.rm_rf(path)
    File.rm_rf(path <> "-deleted")
  end

  setup do
    id = UUID.uuid4()
    black_attrs = ScreenshotFixtures.single_black_pixel()
    screenshot = %Screenshot{id: id} |> Map.put(:base64, black_attrs)
    on_exit(fn -> cleanup(id) end)
    %{
      id: id,
      screenshot: screenshot,
      black_attrs: %{"id" => id, "base64" => black_attrs},
      white_attrs: %{"base64" => ScreenshotFixtures.single_white_pixel()}
    }
  end

  describe "LocalFileRepo create_screenshot" do
    test "creates the dir, history dir, and file properly", %{screenshot: screenshot}  do
      assert {:ok, result} = LocalFileRepo.create_screenshot(screenshot)
      assert File.exists?(result.image)
      assert File.exists?(result.dir)
      assert File.exists?(result.history)
    end
  end

  describe "LocalFileRepo update_screenshot" do
    test "creates the diff and provisional", %{screenshot: screenshot, white_attrs: white_attrs} do
      LocalFileRepo.create_screenshot(screenshot)
      assert {:ok, result} = LocalFileRepo.update_screenshot(screenshot, white_attrs)
      assert %{score: 1.0, result_code: :image_difference} = result
      assert File.exists?(result.provisional)
      assert File.exists?(result.diff)
    end
    test "creates the file when it doesn't exist", %{screenshot: screenshot, white_attrs: attrs}  do
      assert {:warn, result} = LocalFileRepo.update_screenshot(screenshot, attrs)
      assert File.exists?(result.image)
      assert File.exists?(result.dir)
      assert File.exists?(result.history)
    end
  end

  describe "LocalFileRepo delete_screenshot" do
    test "Deletes everything but history", %{screenshot: screenshot}  do
      LocalFileRepo.create_screenshot(screenshot)
      assert {:ok, paths} = LocalFileRepo.delete_screenshot(screenshot)
      assert !File.exists?(paths.image)
      assert !File.exists?(paths.provisional)
      assert !File.exists?(paths.diff)
      assert File.exists?(paths.deleted_dir)
    end
  end

  describe "LocalFileRepo approve_screenshot" do
    test "Overwrites the image and writes to history", %{screenshot: screenshot, white_attrs: white_attrs} do
      LocalFileRepo.create_screenshot(screenshot)
      LocalFileRepo.update_screenshot(screenshot, white_attrs)
      assert {:ok, result} = LocalFileRepo.approve_screenshot(screenshot)
      assert File.exists?(result.image)
      assert File.exists?(result.provisional)
      assert File.exists?(result.history)
      assert File.read!(result.image) |> Base.encode64() == ScreenshotFixtures.single_white_pixel()
    end
  end

  describe "LocalFileRepo reject_screenshot" do
    test "removes the provisonal and diff", %{screenshot: screenshot, white_attrs: white_attrs} do
      LocalFileRepo.create_screenshot(screenshot)
      LocalFileRepo.update_screenshot(screenshot, white_attrs)
      assert {:ok, result} = LocalFileRepo.reject_screenshot(screenshot)
      assert !File.exists?(result.diff)
      assert !File.exists?(result.provisional)
    end
  end
end
