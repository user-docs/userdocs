defmodule Client.Screenshots.LocalFilesExportTest do
	use ExUnit.Case
  alias Client.Screenshots.LocalFilesExport
  alias Schemas.Screenshots.Screenshot
  alias Client.Screenshots.LocalFiles
  alias Userdocs.ScreenshotFixtures

  defp cleanup(id) do
    path = Local.Paths.image_repo_path()
    |> Path.join(id)
    File.rm_rf(path)
    File.rm_rf(path <> "-deleted")
  end

  setup do
    id = UUID.uuid4()
    on_exit(fn -> cleanup(id) end)
    %{
      id: id,
      black_attrs: %{"id" => id, "base64" => ScreenshotFixtures.single_black_pixel()},
      white_attrs: %{"base64" => ScreenshotFixtures.single_white_pixel()}
    }
  end

  describe "LocalFiles create_screenshot" do
    test "creates the file with id", %{id: id, black_attrs: black_attrs}  do
      assert {:ok, result} = LocalFilesExport.create_screenshot(black_attrs)
      assert File.read!(result.image) |> Base.encode64() == ScreenshotFixtures.single_black_pixel()
    end
    test "creates the file with name", %{id: id, black_attrs: black_attrs}  do
      assert {:ok, result} = LocalFilesExport.create_screenshot(Map.put(black_attrs, "name", "test"))
      assert File.read!(result.image) |> Base.encode64() == ScreenshotFixtures.single_black_pixel()
    end
  end

  describe "LocalFiles update_screenshot" do
    test "is a no op", %{black_attrs: black_attrs} do
      assert LocalFilesExport.update_screenshot(%Screenshot{}, black_attrs) == {:ok, nil}
    end
  end

  describe "LocalFiles delete_screenshot" do
    test "Deletes everything but history", %{id: id, black_attrs: black_attrs}  do
      LocalFilesExport.create_screenshot(black_attrs)
      assert {:ok, paths} = LocalFilesExport.delete_screenshot(%Screenshot{id: id})
      assert !File.exists?(paths.id)
      assert !File.exists?(paths.image)
    end
  end

  describe "LocalFiles approve_screenshot" do
    test "Overwrites the image and writes to history", %{id: id, black_attrs: black_attrs, white_attrs: white_attrs} do
      LocalFiles.create_screenshot(black_attrs)
      {:ok, %{provisional: provisional}} = LocalFiles.update_screenshot(%Screenshot{id: id}, white_attrs)
      assert {:ok, result} = LocalFiles.approve_screenshot(%Screenshot{id: id})
      assert File.exists?(result.image)
      assert File.read!(result.image) |> Base.encode64() == ScreenshotFixtures.single_white_pixel()
    end
  end

  describe "LocalFiles reject_screenshot" do
    test "does nothing", %{id: id, black_attrs: black_attrs, white_attrs: white_attrs} do
      LocalFiles.create_screenshot(black_attrs)
      assert {:ok, result} = LocalFilesExport.create_screenshot(black_attrs)
      LocalFiles.update_screenshot(%Screenshot{id: id}, white_attrs)
      assert {:ok, result} = LocalFilesExport.reject_screenshot(%Screenshot{id: id})
      assert File.exists?(result.image)
      assert File.read!(result.image) |> Base.encode64() == ScreenshotFixtures.single_black_pixel()
    end
  end
end
