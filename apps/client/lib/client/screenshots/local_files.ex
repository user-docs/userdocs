defmodule Client.Screenshots.LocalFiles do
  alias Local.Paths

  def create_screenshot(attrs, opts \\ %{}) do
    repo_path = Map.get(opts, :image_repo_path, Paths.image_repo_path())
    id = Map.get(attrs, :id, UUID.uuid4())
    language_code_id = Map.get(attrs, :language_code_id, "en-us")

    with base64 <- Map.get(attrs, :base64, encoded_placeholder_image()),
         binary <- Base.decode64!(base64),
         screenshot_dir <- screenshot_dir(id, repo_path),
         image_path <- image_path(id, repo_path, language_code_id),
         :ok <- ensure_dir_exists(screenshot_dir),
         :ok <- ensure_dir_exists(language_dir(id, repo_path, language_code_id)),
         :ok <- ensure_dir_exists(history_dir(id, repo_path, language_code_id)),
         :ok <- File.write(image_path, binary) do
      %{id: id, dir: screenshot_dir, image_path: image_path}
    end
  end

  defp encoded_placeholder_image() do
    Paths.image_placeholder_path()
    |> File.read!()
    |> Base.encode64()
  end

  defp screenshot_dir(id, path), do: Path.join(path, id)

  defp language_dir(id, path, language_code),
    do: screenshot_dir(id, path) |> Path.join(language_code)

  defp history_dir(id, path, language_code),
    do: language_dir(id, path, language_code) |> Path.join("history")

  defp image_path(id, path, language_code),
    do: language_dir(id, path, language_code) |> Path.join("image.png")

  defp ensure_dir_exists(path) do
    case File.mkdir(path) do
      :ok -> :ok
      {:error, :eexist} -> :ok
      other -> other
    end
  end

  # defp provisional_path(screenshot_id, repo_path), do: Path.join(repo_path, "#{screenshot_id}-provisional.png")
  # defp diff_path(screenshot_id, repo_path), do: Path.join(repo_path, "#{screenshot_id}-diff.png")
end
