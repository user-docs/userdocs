defmodule Userdocs.Screenshots.PresignedURLS do
  @moduledoc "The Step Types context."

  require Logger

  alias Userdocs.S3Provider
  alias Schemas.Screenshots.Screenshot

  def put_presigned_urls(screenshot, team) do
    Map.put(screenshot, :presigned_urls, presigned_urls(screenshot, team))
  end

  def presigned_urls(%Screenshot{id: id, page: %{project: %{team: team}}}),
    do: presigned_urls(id, S3Provider.cast_config(team))

  def presigned_urls(%Screenshot{id: id}, config),
    do: presigned_urls(id, config)

  def presigned_urls(screenshot_id, config) do
    bucket = Map.get(config, :bucket, "userdocs-image-repo")
    dir = dir(screenshot_id)
    image = image_path(screenshot_id)
    provisional = provisional_path(screenshot_id)
    diff = diff_path(screenshot_id)

    {:ok, dir_put} = ExAws.S3.presigned_url(config, :put, bucket, dir)

    {:ok, image_put} = ExAws.S3.presigned_url(config, :put, bucket, image)
    {:ok, provisional_put} = ExAws.S3.presigned_url(config, :put, bucket, provisional)
    {:ok, diff_put} = ExAws.S3.presigned_url(config, :put, bucket, diff)

    {:ok, image_get} = ExAws.S3.presigned_url(config, :get, bucket, image)
    {:ok, provisional_get} = ExAws.S3.presigned_url(config, :get, bucket, provisional)
    {:ok, diff_get} = ExAws.S3.presigned_url(config, :get, bucket, diff)

    {:ok, image_delete} = ExAws.S3.presigned_url(config, :delete, bucket, diff)
    {:ok, diff_delete} = ExAws.S3.presigned_url(config, :delete, bucket, diff)
    {:ok, provisional_delete} = ExAws.S3.presigned_url(config, :delete, bucket, provisional)

    %{
      dir: %{put: dir_put},
      image: %{put: image_put, get: image_get, delete: image_delete},
      diff: %{put: diff_put, get: diff_get, delete: diff_delete},
      provisional: %{put: provisional_put, get: provisional_get, delete: provisional_delete}
    }
  end

  defp dir(id), do: "/#{id}/"

  defp image_path(id),
    do: dir(id) |> Path.join("image.png")

  defp provisional_path(id),
    do: dir(id) |> Path.join("provisional.png")

  defp diff_path(id),
    do: dir(id) |> Path.join("diff.png")
end
