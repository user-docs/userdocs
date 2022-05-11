defmodule Client.Screenshots.Repo.S3 do
  alias Local.Paths
  alias Schemas.Screenshots.Screenshot
  alias Local.ImageComparison
  alias Client.Screenshots.FileSupport
  alias Client.Remote.PresignedUrls

  require Logger

  def prepare_screenshot(%Screenshot{presigned_urls: %{image: %{get: get_url}}}, opts \\ %{}) do
    with {:ok, file_path} <- Briefly.create(extname: "png"),
         {:ok, binary} <- PresignedUrls.get_object(get_url),
         :ok <- File.write(file_path, binary) do
      {:ok, %{file_path: file_path}}
    end
  end

  def create_screenshot(%Screenshot{id: id, presigned_urls: urls} = screenshot, _opts \\ %{}) do
    %{presigned_urls: %{image: %{put: url}}} = screenshot

    with base64 <- Map.get(screenshot, :base64, FileSupport.encoded_placeholder_image()),
         binary <- Base.decode64!(base64),
         {:ok, _} <- PresignedUrls.put_object(url, binary) do
      {:ok, %{image: urls.image.get}}
    end
  end

  def update_screenshot(%Screenshot{presigned_urls: urls} = screenshot, %{"base64" => base64}, opts \\ %{}) do
    %{diff: %{put: diff_put}, provisional: %{put: provisional_put}, image: %{get: get_image}} = urls
    magick_path = Map.get(opts, :magick_path, Paths.imagemagick_executable_path())

    with provisional_binary <- Base.decode64!(base64),
         {:ok, image_binary} <- PresignedUrls.get_object(get_image),
         {:ok, provisional_path} <- Briefly.create(extname: "png"),
         {:ok, diff_path} <- Briefly.create(extname: "png"),
         {:ok, image_path} <- Briefly.create(extname: "png"),
         :ok <- File.write(provisional_path, provisional_binary),
         :ok <- File.write(image_path, image_binary),
         paths = %{image: image_path, provisional: provisional_path, diff: diff_path},
         {:ok, result} <- ImageComparison.compare(paths, magick_path),
         {:ok, diff_binary} <- File.read(diff_path),
         {:ok, _} <- PresignedUrls.put_object(provisional_put, provisional_binary),
         {:ok, _} <- PresignedUrls.put_object(diff_put, diff_binary) do
      {:ok, Map.merge(result, paths(screenshot))}
    end
  end

  def delete_screenshot(%Screenshot{presigned_urls: urls} = screenshot, _opts \\ %{}) do
    with {:ok, _} <- PresignedUrls.delete_object(urls.diff.delete),
         {:ok, _} <- PresignedUrls.delete_object(urls.provisional.delete) do
      {:ok, paths(screenshot)}
    end
  end

  def approve_screenshot(%Screenshot{presigned_urls: urls}, _opts \\ %{}) do
    with {:ok, provisional_binary} <- PresignedUrls.get_object(urls.provisional.get),
         {:ok, _} <- PresignedUrls.put_object(urls.image.put, provisional_binary),
         {:ok, _} <- PresignedUrls.delete_object(urls.diff.delete),
         {:ok, _} <- PresignedUrls.delete_object(urls.provisional.delete) do
      {:ok, %{provisional: urls.provisional.get, image: urls.image.get, diff: urls.diff.get}}
    end
  end

  def reject_screenshot(%Screenshot{presigned_urls: urls}, _opts \\ %{}) do
    with {:ok, _} <- PresignedUrls.delete_object(urls.diff.delete),
         {:ok, _} <- PresignedUrls.delete_object(urls.provisional.delete) do
      {:ok, %{provisional: urls.provisional.get, diff: urls.diff.get}}
    end

  end

  defp screenshot_dir(id), do: "/#{id}/"

  defp paths(%Screenshot{presigned_urls: urls}), do: %{
    image: urls.image.get,
    diff: urls.diff.get,
    provisional: urls.provisional.get,
  }

  # defp deleted_dir(id, path), do: screenshot_dir(id, path) <> "-deleted"

  # defp image_path(id),
  #   do: screenshot_dir(id) |> Path.join("image.png")

  # def provisional_path(id),
  #   do: screenshot_dir(id) |> Path.join("provisional.png")

  # defp diff_path(id),
  #   do: screenshot_dir(id) |> Path.join("diff.png")

  # defp paths(id) when is_binary(id), do: %{
  #   image: image_path(id),
  #   provisional: provisional_path(id),
  #   diff: diff_path(id)
  # }
end
