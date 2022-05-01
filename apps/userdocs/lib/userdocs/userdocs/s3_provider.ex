defmodule Userdocs.S3Provider do
  @moduledoc "The Step Types context."

  require Logger

  # alias Userdocs.Teams
  # alias Schemas.Screenshots.Screenshot
  # alias Schemas.Screenshots.PresignedURLs
  # @placeholder_path Path.join([:code.priv_dir(:userdocs), "static", "images", "userdocs_placeholder.png"])

  alias Schemas.Teams.Team
  alias ExAws.Config

  def cast_config(%Team{
        aws_region: region,
        aws_access_key_id: access_key_id,
        aws_secret_access_key: secret_access_key,
        aws_host: host,
        aws_port: port,
        aws_scheme: scheme
      }) do
    Config.build_base(:s3)
    |> Map.put(:region, region)
    |> Map.put(:access_key_id, access_key_id)
    |> Map.put(:secret_access_key, secret_access_key)
    |> Map.put(:region, region)
    |> maybe_put(:host, host)
    |> maybe_put(:port, port)
    |> maybe_put(:scheme, scheme)
    |> Config.parse_host_for_region()
  end

  def maybe_put(config, _, nil), do: config
  def maybe_put(config, key, value), do: Map.put(config, key, value)

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
end
