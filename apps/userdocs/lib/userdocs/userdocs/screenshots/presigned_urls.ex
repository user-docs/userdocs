defmodule Userdocs.Screenshots.PresignedURLS do
  @moduledoc "The Step Types context."

  require Logger

  alias Userdocs.S3Provider
  alias Schemas.Screenshots.Screenshot

  def put_presigned_urls(%Screenshot{page: %{project: %{team: _}}} = screenshot),
    do: screenshot |> Map.put(:presigned_urls, presigned_urls(screenshot))

  def put_presigned_urls(screenshot, team) do
    Map.put(screenshot, :presigned_urls, presigned_urls(screenshot, team))
  end

  def presigned_urls(%Screenshot{page: %{project: %{team: team}}} = screenshot),
    do: presigned_urls(screenshot, S3Provider.cast_config(team))

  def presigned_urls(%Screenshot{id: id} = screenshot, config) do
    bucket = Map.get(config, :bucket, "userdocs-image-repo")
    dir = dir(id)
    image = image_path(id)
    provisional = provisional_path(id)
    diff = diff_path(id)
    export = export_path(screenshot)

    {:ok, dir_put} = ExAws.S3.presigned_url(config, :put, bucket, dir)

    {:ok, image_put} = ExAws.S3.presigned_url(config, :put, bucket, image)
    {:ok, provisional_put} = ExAws.S3.presigned_url(config, :put, bucket, provisional)
    {:ok, diff_put} = ExAws.S3.presigned_url(config, :put, bucket, diff)
    {:ok, export_put} = ExAws.S3.presigned_url(config, :put, bucket, export)

    {:ok, image_get} = ExAws.S3.presigned_url(config, :get, bucket, image)
    {:ok, provisional_get} = ExAws.S3.presigned_url(config, :get, bucket, provisional)
    {:ok, diff_get} = ExAws.S3.presigned_url(config, :get, bucket, diff)
    {:ok, export_get} = ExAws.S3.presigned_url(config, :get, bucket, export)

    {:ok, image_delete} = ExAws.S3.presigned_url(config, :delete, bucket, diff)
    {:ok, diff_delete} = ExAws.S3.presigned_url(config, :delete, bucket, diff)
    {:ok, provisional_delete} = ExAws.S3.presigned_url(config, :delete, bucket, provisional)
    {:ok, export_delete} = ExAws.S3.presigned_url(config, :delete, bucket, export)

    %{
      dir: %{put: dir_put},
      image: %{put: image_put, get: image_get, delete: image_delete},
      diff: %{put: diff_put, get: diff_get, delete: diff_delete},
      provisional: %{put: provisional_put, get: provisional_get, delete: provisional_delete},
      export: %{put: export_put, get: export_get, delete: export_delete}
    }
  end

  defp dir(id), do: "/#{id}/"

  defp image_path(id),
    do: dir(id) |> Path.join("image.png")

  defp provisional_path(id),
    do: dir(id) |> Path.join("provisional.png")

  defp diff_path(id),
    do: dir(id) |> Path.join("diff.png")

  defp export_dir(%Screenshot{page: %{project: %{name: p, team: %{name: t}}}}), do: "/#{t}/#{p}/"
  defp export_dir(_), do: "/"

  defp export_path(%Screenshot{id: id, name: nil, file_name: nil} = screenshot) do
    export_dir(screenshot) |> Path.join(id <> ".png")
  end

  defp export_path(%Screenshot{file_name: nil, name: name} = screenshot) do
    filename = Inflex.parameterize_to_ascii(name, "_") <> ".png"
    screenshot
    |> export_dir()
    |> Path.join(filename)
  end

  defp export_path(%Screenshot{file_name: name} = screenshot),
    do: export_dir(screenshot) |> Path.join(name <> ".png")
end
