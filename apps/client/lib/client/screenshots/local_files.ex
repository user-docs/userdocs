defmodule Client.Screenshots.LocalFiles do
  alias Local.Paths
  alias Schemas.Screenshots.Screenshot
  alias Local.ImageComparison
  alias Client.Screenshots.FileSupport, as: Support

  require Logger

  def create_screenshot(%{"id" => id} = attrs, opts \\ %{}) do
    repo_path = Map.get(opts, :image_repo_path, Paths.image_repo_path())
    screenshot_dir = screenshot_dir(id, repo_path)
    image_path = image_path(id, repo_path)
    history_image = history_image(id, repo_path)

    with base64 <- Map.get(attrs, "base64", Support.encoded_placeholder_image()),
         binary <- Base.decode64!(base64),
         :ok <- Support.ensure_dir_exists(screenshot_dir),
         :ok <- Support.ensure_dir_exists(history_dir(id, repo_path)),
         :ok <- File.write(image_path, binary),
         :ok <- File.write(history_image, binary) do
      {:ok, %{id: id, dir: screenshot_dir, image: image_path, history: history_image}}
    end
  end

  def update_screenshot(%Screenshot{id: id} = screenshot, %{"base64" => base64} = attrs, opts \\ %{}) do
    repo_path = Map.get(opts, :image_repo_path, Paths.image_repo_path())
    magick_path = Map.get(opts, :magick_path, Paths.imagemagick_executable_path())
    paths = paths(screenshot.id, repo_path)
    provisional_path = provisional_path(id, repo_path)
    screenshot_dir = screenshot_dir(id, repo_path)

    with binary <- Base.decode64!(base64),
         :ok <- Support.ensure_dir_exists(screenshot_dir),
         :ok <- File.write(provisional_path, binary),
         {:ok, result} <- ImageComparison.compare(paths, magick_path)  do
      {:ok, Map.merge(paths(id, repo_path), result)}
    else
      {:error, "File not found"} ->
        with {:ok, result} <- create_screenshot(Map.put(attrs, "id", id), opts) do
          {:warn, Map.put(result, :message, "File not found, screenshot re-created")}
        end
      {:error, reason} -> {:error, reason}
    end
  end

  def delete_screenshot(%Screenshot{id: id}, opts \\ %{}) do
    repo_path = Map.get(opts, :image_repo_path, Paths.image_repo_path())
    provisional_path = provisional_path(id, repo_path)
    image_path = image_path(id, repo_path)
    diff_path = diff_path(id, repo_path)
    screenshot_dir = screenshot_dir(id, repo_path)
    deleted_dir = deleted_dir(id, repo_path)

    with :ok <- Support.ensure_deleted(provisional_path),
         :ok <- Support.ensure_deleted(image_path),
         :ok <- Support.ensure_deleted(diff_path),
         :ok <- File.rename(screenshot_dir, deleted_dir) do
      {:ok, paths(id, repo_path) |> Map.put(:deleted_dir, deleted_dir)}
    end
  end

  def approve_screenshot(%Screenshot{id: id}, opts \\ %{}) do
    repo_path = Map.get(opts, :image_repo_path, Paths.image_repo_path())
    provisional_path = provisional_path(id, repo_path)
    image_path = image_path(id, repo_path)
    history_image = history_image(id, repo_path)

    with :ok <- File.cp(provisional_path, image_path),
         :ok <- File.cp(provisional_path, history_image) do
      {:ok, %{provisional: provisional_path, image: image_path, history: history_image}}
    end
  end

  def reject_screenshot(%Screenshot{id: id}, opts \\ %{}) do
    repo_path = Map.get(opts, :image_repo_path, Paths.image_repo_path())
    provisional_path = provisional_path(id, repo_path)
    diff_path = diff_path(id, repo_path)

    with :ok <- Support.ensure_deleted(provisional_path),
         :ok <- Support.ensure_deleted(diff_path) do
      {:ok, %{provisional: provisional_path, diff: diff_path}}
    end

  end

  defp screenshot_dir(id, path), do: Path.join(path, id)

  defp deleted_dir(id, path), do: screenshot_dir(id, path) <> "-deleted"

  defp history_dir(id, path),
    do: screenshot_dir(id, path) |> Path.join("history")

  defp history_image(id, path) do
    timestamp =
      DateTime.utc_now()
      |> DateTime.truncate(:second)
      |> DateTime.to_string()
      |> String.replace(":", "")

    history_dir(id, path)
    |> Path.join("#{timestamp}.png")
  end

  defp image_path(id, path),
    do: screenshot_dir(id, path) |> Path.join("image.png")

  def provisional_path(id, path),
    do: screenshot_dir(id, path) |> Path.join("provisional.png")

  defp diff_path(id, path),
    do: screenshot_dir(id, path) |> Path.join("diff.png")

  defp paths(id, path), do: %{
    image: image_path(id, path),
    provisional: provisional_path(id, path),
    diff: diff_path(id, path)
  }
end
