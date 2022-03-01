  defmodule Userdocs.Screenshots do
  @moduledoc "The Step Types context."

  require Logger

  import Ecto.Query, warn: false
  alias Userdocs.RepoHandler
  alias Userdocs.Teams
  alias Schemas.Screenshots.Screenshot
  alias Schemas.Screenshots.PresignedURLs
  @placeholder_path Path.join([:code.priv_dir(:userdocs), "static", "images", "userdocs_placeholder.png"])

  @doc "Returns the list of screenshots."
  def list_screenshots(opts) do
    filters = Map.get(opts, :filters, [])
    base_screenshots_query()
    |> maybe_filter_by_project_id(filters[:project_id])
    |> RepoHandler.all(opts)
  end

  defp maybe_filter_by_project_id(query, nil), do: query
  defp maybe_filter_by_project_id(query, project_id) do
    from(screenshot in query, where: screenshot.project_id == ^project_id)
  end

  defp base_screenshots_query(), do: from(screenshots in Screenshot)

  @doc "Gets a single screenshot."
  def get_screenshot!(id, opts) do
    RepoHandler.get!(Screenshot, id, opts)
  end

  @doc "Creates a screenshot."
  def create_screenshot(attrs, opts) do
    :ok = create_aws_files(attrs["id"], nil)
    %Screenshot{}
    |> Screenshot.changeset(attrs)
    |> RepoHandler.insert(opts)
    |> case do
      {:ok, %Screenshot{} = screenshot} ->
        {:ok, Map.put(screenshot, :presigned_urls, presigned_urls(screenshot))}
        |> maybe_broadcast_screenshot("create", channel(screenshot, opts[:broadcast]), opts[:broadcast])
      result -> result
    end
  end

  def create_aws_files(id, base64, bucket \\ "userdocs-screenshots") do
    source_path = Path.join([:code.priv_dir(:userdocs), "static", "images", "userdocs_placeholder.png"])
    file_contents =
      case base64 do
        nil -> File.read!(source_path)
        base64 -> Base.decode64!(base64)
      end
    attrs = aws_files_attrs(id)
    ExAws.S3.put_object(bucket, attrs.aws_screenshot, file_contents) |> ExAws.request()
    ExAws.S3.put_object(bucket, attrs.aws_provisional_screenshot, file_contents) |> ExAws.request()
    ExAws.S3.put_object(bucket, attrs.aws_diff_screenshot, file_contents) |> ExAws.request()
    :ok
  end

  def aws_files_attrs(id) do
    %{
      aws_screenshot: "screenshots/#{id}.png",
      aws_provisional_screenshot: "screenshots/#{id}-provisional.png",
      aws_diff_screenshot: "screenshots/#{id}-diff.png"
    }
  end

  def presigned_urls(%Screenshot{aws_screenshot: aws_screenshot, aws_provisional_screenshot: aws_provisional,
  aws_diff_screenshot: aws_diff}, bucket \\ "userdocs-screenshots") do
    {:ok, screenshot_put} = ExAws.S3.presigned_url(ExAws.Config.new(:s3), :put, bucket, aws_screenshot)
    {:ok, provisional_put} = ExAws.S3.presigned_url(ExAws.Config.new(:s3), :put, bucket, aws_provisional)
    {:ok, diff_put} = ExAws.S3.presigned_url(ExAws.Config.new(:s3), :put, bucket, aws_diff)
    {:ok, screenshot_get} = ExAws.S3.presigned_url(ExAws.Config.new(:s3), :get, bucket, aws_screenshot)
    {:ok, provisional_get} = ExAws.S3.presigned_url(ExAws.Config.new(:s3), :get, bucket, aws_provisional)
    {:ok, diff_get} = ExAws.S3.presigned_url(ExAws.Config.new(:s3), :get, bucket, aws_diff)
    %{
      aws_screenshot: %{put: screenshot_put, get: screenshot_get},
      aws_provisional_screenshot: %{put: provisional_put, get: provisional_get},
      aws_diff_screenshot: %{put: diff_put, get: diff_get}
    }
  end

  def create_screenshot_structs(attrs_list) do
    Enum.map(attrs_list, fn(attrs) ->
      {:ok, screenshot} = create_screenshot_struct(attrs)
      screenshot
    end)
  end

  def create_screenshot_struct(attrs \\ %{}) do
    %Screenshot{}
    |> Screenshot.api_changeset(attrs)
    |> Ecto.Changeset.apply_action(:insert)
  end

  def create_presigned_urls_struct(attrs \\ %{}) do
    %PresignedURLs{}
    |> PresignedURLs.changeset(attrs)
    |> Ecto.Changeset.apply_action(:insert)
  end

  @doc "Updates a screenshot."
  def update_screenshot(%Screenshot{} = screenshot, attrs, opts) do
    screenshot
    |> Screenshot.changeset(attrs)
    |> RepoHandler.update(opts)
    |> maybe_broadcast_screenshot("update", channel(screenshot, opts[:broadcast]), opts[:broadcast])
  end

  @doc "Deletes a screenshot."
  def delete_screenshot(%Screenshot{} = screenshot, opts) do
    channel = channel(screenshot, opts[:broadcast])
    RepoHandler.delete(screenshot, opts)
    |> maybe_broadcast_screenshot("delete", channel, opts[:broadcast])
  end

  @doc "Returns an `%Ecto.Changeset{}` for tracking screenshot changes."
  def change_screenshot(%Screenshot{} = screenshot, attrs \\ %{}) do
    Screenshot.changeset(screenshot, attrs)
  end

  @doc "Broadcasts a screenshot to the team it belongs to"
  def maybe_broadcast_screenshot({:error, _} = state, _, _, _), do: state
  def maybe_broadcast_screenshot({:ok, %Screenshot{} = screenshot}, action, channel, true) do
    Logger.debug("#{__MODULE__} broadcasting a Screenshot struct")
    payload = %{
      type: "Schemas.Screenshots.Screenshot",
      attrs: screenshot |> Map.put(:presigned_urls, presigned_urls(screenshot))
    }
    UserdocsWeb.Endpoint.broadcast(channel, action, payload)
    {:ok, screenshot}
  end
  def maybe_broadcast_screenshot(state, _, _, _), do: state

  def channel(%Screenshot{} = screenshot, true) do
    team = Teams.get_screenshot_team!(screenshot.id)
    "team:#{team.id}"
  end
  def channel(_, _), do: ""

  def original_path(screenshot, repo_path), do: Path.join(repo_path, "#{screenshot.id}.png")
  def provisional_path(screenshot, repo_path), do: Path.join(repo_path, "#{screenshot.id}-provisional.png")
  def diff_path(screenshot, repo_path), do: Path.join(repo_path, "#{screenshot.id}-diff.png")

  def encoded_placeholder_image() do
    @placeholder_path
    |> File.read!()
    |> Base.encode64()
  end
end
