defmodule Userdocs.LocalOptionsFixtures do
  @moduledoc false

  alias Userdocs.LocalOptions

  def local_options(attrs \\ %{}) do
    {:ok, local_options} =
      local_options_attrs(:valid, attrs)
      |> LocalOptions.create_local_options()
      local_options
  end

  def local_options_attrs(:valid, attrs) do
    %{
      magick_path: "C:\\Users\\johns10\\userdocs\\image_magick\\magick.exe",
      image_repo_path: "C:\\Users\\johns10\\userdocs\\internal_data\\images",
      image_path: "C:\\Users\\johns10\\userdocs\\images"
    }
    |> Map.merge(attrs)
  end
end
