defmodule Client.Screenshots.AwsExport do
  alias Schemas.Screenshots.Screenshot
  alias Client.Remote.PresignedUrls
  alias Client.Screenshots.FileSupport

  require Logger

  def create_screenshot(%Screenshot{} = screenshot, _opts \\ %{}) do
    %{presigned_urls: %{export: %{put: url}}} = screenshot

    with base64 <- Map.get(screenshot, :base64, FileSupport.encoded_placeholder_image()),
         binary <- Base.decode64!(base64),
         {:ok, _result} <- PresignedUrls.put_object(url, binary) do
      {:ok, %{export: screenshot.presigned_urls.export.get}}
    end
  end

  def update_screenshot(_screenshot, _attrs, _opts \\ %{}), do: {:ok, nil}

  def delete_screenshot(%Screenshot{presigned_urls: urls} = screenshot, _opts \\ %{}) do
    with {:ok, _} <- PresignedUrls.delete_object(urls.export.delete) do
      {:ok, %{export: screenshot.presigned_urls.export.get}}
    end
  end

  def approve_screenshot(%Screenshot{presigned_urls: urls}, _opts \\ %{}) do
    with {:ok, binary} <- PresignedUrls.get_object(urls.image.get),
         {:ok, _} <- PresignedUrls.put_object(urls.export.put, binary) do
      {:ok, %{export: urls.export.get}}
    end
  end

  def reject_screenshot(_screenshot, _opts \\ %{}), do: {:ok, nil}
end
