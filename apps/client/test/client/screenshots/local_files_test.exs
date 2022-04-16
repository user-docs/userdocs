defmodule Client.Screenshots.LocalFilesTest do
	use ExUnit.Case
  alias Client.Screenshots.LocalFiles

  describe "LocalFiles create_screenshot" do
    test "creates the dir, history dir, and file properly with no attrs" do
      assert %{dir: dir, image_path: image_path, id: _id} = LocalFiles.create_screenshot(%{})
      assert image_path |> File.exists?()
      assert dir |> File.exists?()
      assert dir |> Path.join("en-us") |> File.exists?()
      assert dir |> Path.join("en-us") |> Path.join("history") |> File.exists?()
    end

    test "creates in the correct language directory" do
      code = "en-gb"
      assert %{dir: dir} = LocalFiles.create_screenshot(%{language_code_id: code})
      assert dir |> Path.join(code) |> File.exists?()
    end
  end

end
