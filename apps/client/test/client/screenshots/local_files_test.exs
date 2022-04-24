defmodule Client.Screenshots.LocalFilesTest do
	use ExUnit.Case
  alias Client.Screenshots.LocalFiles
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
    on_exit(fn -> cleanup(id) end)
    %{
      id: id,
      black_attrs: %{"id" => id, "base64" => ScreenshotFixtures.single_black_pixel()},
      white_attrs: %{"base64" => ScreenshotFixtures.single_white_pixel()}
    }
  end

  describe "LocalFiles create_screenshot" do
    test "creates the dir, history dir, and file properly", %{id: id}  do
      assert {:ok, result} = LocalFiles.create_screenshot(%{"id" => id})
      assert File.exists?(result.image)
      assert File.exists?(result.dir)
      assert File.exists?(result.history)
    end
  end

  describe "LocalFiles update_screenshot" do
    test "creates the diff and provisional", %{id: id, black_attrs: black_attrs, white_attrs: white_attrs} do
      LocalFiles.create_screenshot(black_attrs)
      assert {:ok, result} = LocalFiles.update_screenshot(%Screenshot{id: id}, white_attrs)
      assert %{score: 1.0, result_code: :image_difference} = result
      assert File.exists?(result.provisional)
      assert File.exists?(result.diff)
    end
    test "creates the file when it doesn't exist", %{id: id, white_attrs: attrs}  do
      assert {:warn, result} = LocalFiles.update_screenshot(%Screenshot{id: id}, attrs)
      assert File.exists?(result.image)
      assert File.exists?(result.dir)
      assert File.exists?(result.history)
    end
  end

  describe "LocalFiles delete_screenshot" do
    test "Deletes everything but history", %{id: id, black_attrs: black_attrs}  do
      LocalFiles.create_screenshot(black_attrs)
      assert {:ok, paths} = LocalFiles.delete_screenshot(%Screenshot{id: id})
      assert !File.exists?(paths.image)
      assert !File.exists?(paths.provisional)
      assert !File.exists?(paths.diff)
      assert File.exists?(paths.deleted_dir)
    end
  end

  describe "LocalFiles approve_screenshot" do
    test "Overwrites the image and writes to history", %{id: id, black_attrs: black_attrs, white_attrs: white_attrs} do
      LocalFiles.create_screenshot(black_attrs)
      LocalFiles.update_screenshot(%Screenshot{id: id}, white_attrs)
      assert {:ok, result} = LocalFiles.approve_screenshot(%Screenshot{id: id})
      assert File.exists?(result.image)
      assert File.exists?(result.provisional)
      assert File.exists?(result.history)
      assert File.read!(result.image) |> Base.encode64() == ScreenshotFixtures.single_white_pixel()
    end
  end

  describe "LocalFiles reject_screenshot" do
    test "removes the provisonal and diff", %{id: id, black_attrs: black_attrs, white_attrs: white_attrs} do
      LocalFiles.create_screenshot(black_attrs)
      LocalFiles.update_screenshot(%Screenshot{id: id}, white_attrs)
      assert {:ok, result} = LocalFiles.reject_screenshot(%Screenshot{id: id})
      assert !File.exists?(result.diff)
      assert !File.exists?(result.provisional)
    end
  end
end
