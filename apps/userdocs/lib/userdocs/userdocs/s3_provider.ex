defmodule Userdocs.S3Provider do
  @moduledoc "The Step Types context."

  require Logger

  # alias Userdocs.Teams
  alias Schemas.Screenshots.Screenshot
  # alias Schemas.Screenshots.PresignedURLs
  # @placeholder_path Path.join([:code.priv_dir(:userdocs), "static", "images", "userdocs_placeholder.png"])

  alias Schemas.Teams.Team
  alias ExAws.Config

  def cast_config(%Team{
        aws_region: region,
        aws_access_key_id: access_key_id,
        aws_secret_access_key: secret_access_key
      }) do
    Config.build_base(:s3)
    |> Map.put(:region, region)
    |> Map.put(:access_key_id, access_key_id)
    |> Map.put(:secret_access_key, secret_access_key)
    |> Map.put(:region, region)
    |> Config.parse_host_for_region()
  end

  def put_presigned_urls(screenshot, team) do
    Map.put(screenshot, :presigned_urls, presigned_urls(screenshot, team))
  end

  #   def create_aws_files(id, base64, bucket \\ "userdocs-screenshots") do
  #     source_path = Path.join([:code.priv_dir(:userdocs), "static", "images", "userdocs_placeholder.png"])
  #     file_contents =
  #       case base64 do
  #         nil -> File.read!(source_path)
  #         base64 -> Base.decode64!(base64)
  #       end
  #     attrs = aws_files_attrs(id)
  #     ExAws.S3.put_object(bucket, attrs.aws_screenshot, file_contents) |> ExAws.request()
  #     ExAws.S3.put_object(bucket, attrs.aws_provisional_screenshot, file_contents) |> ExAws.request()
  #     ExAws.S3.put_object(bucket, attrs.aws_diff_screenshot, file_contents) |> ExAws.request()
  #     :ok
  #   end

  #   def aws_files_attrs(id) do
  #     %{
  #       aws_screenshot: "screenshots/#{id}.png",
  #       aws_provisional_screenshot: "screenshots/#{id}-provisional.png",
  #       aws_diff_screenshot: "screenshots/#{id}-diff.png"
  #     }
  #   end

  def presigned_urls(%Screenshot{id: id}, config) do
    bucket = Map.get(config, :bucket, "userdocs-image-repo")
    dir = dir(id)
    image = image_path(id)
    provisional = provisional_path(id)
    diff = diff_path(id)

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

  #   def create_presigned_urls_struct(attrs \\ %{}) do
  #     %PresignedURLs{}
  #     |> PresignedURLs.changeset(attrs)
  #     |> Ecto.Changeset.apply_action(:insert)
  #   end
  #
  #   def original_path(screenshot, repo_path), do: Path.join(repo_path, "#{screenshot.id}.png")
  #   def provisional_path(screenshot, repo_path), do: Path.join(repo_path, "#{screenshot.id}-provisional.png")
  #   def diff_path(screenshot, repo_path), do: Path.join(repo_path, "#{screenshot.id}-diff.png")

  #   def encoded_placeholder_image() do
  #     @placeholder_path
  #     |> File.read!()
  #     |> Base.encode64()
  #   end

  defp dir(id), do: "/#{id}/"

  defp image_path(id),
    do: dir(id) |> Path.join("image.png")

  defp provisional_path(id),
    do: dir(id) |> Path.join("provisional.png")

  defp diff_path(id),
    do: dir(id) |> Path.join("diff.png")
end
