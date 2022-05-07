defmodule Client.Screenshots.LocalFilesExportTest do
	use ExUnit.Case
  alias Client.Screenshots.LocalFilesExport
  alias Schemas.Screenshots.Screenshot
  alias Client.Screenshots.Repo.LocalFile
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

  describe "LocalFiles create_screenshot" do
    test "creates the file with id", %{screenshot: screenshot}  do
      assert {:ok, result} = LocalFilesExport.create_screenshot(screenshot)
      assert File.read!(result.image) |> Base.encode64() == ScreenshotFixtures.single_black_pixel()
    end
    test "creates the file with name", %{screenshot: screenshot}  do
      assert {:ok, result} = LocalFilesExport.create_screenshot(Map.put(screenshot, :name, "test"))
      assert File.read!(result.image) |> Base.encode64() == ScreenshotFixtures.single_black_pixel()
    end
  end

  describe "LocalFiles update_screenshot" do
    test "is a no op", %{black_attrs: black_attrs} do
      assert LocalFilesExport.update_screenshot(%Screenshot{}, black_attrs) == {:ok, nil}
    end
  end

  describe "LocalFiles delete_screenshot" do
    test "Deletes everything but history", %{screenshot: screenshot}  do
      LocalFilesExport.create_screenshot(screenshot)
      assert {:ok, paths} = LocalFilesExport.delete_screenshot(screenshot)
      assert !File.exists?(paths.id)
      assert !File.exists?(paths.image)
    end
  end

  describe "LocalFiles approve_screenshot" do
    test "Overwrites the image and writes to history", %{screenshot: screenshot, white_attrs: white_attrs} do
      LocalFile.create_screenshot(screenshot)
      screenshot |>  LocalFile.update_screenshot(white_attrs)
      assert {:ok, result} = LocalFile.approve_screenshot(screenshot)
      assert File.exists?(result.image)
      assert File.read!(result.image) |> Base.encode64() == ScreenshotFixtures.single_white_pixel()
    end
  end

  describe "LocalFile reject_screenshot" do
    test "does nothing", %{screenshot: screenshot, white_attrs: white_attrs} do
      LocalFile.create_screenshot(screenshot)
      assert {:ok, _result} = LocalFilesExport.create_screenshot(screenshot)
      screenshot |>  LocalFile.update_screenshot(white_attrs)
      assert {:ok, result} = LocalFilesExport.reject_screenshot(screenshot)
      assert File.exists?(result.image)
      assert File.read!(result.image) |> Base.encode64() == ScreenshotFixtures.single_black_pixel()
    end
  end
end
