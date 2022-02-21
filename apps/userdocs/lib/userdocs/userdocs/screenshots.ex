  defmodule Userdocs.Screenshots do
  @moduledoc "The Step Types context."

  require Logger

  import Ecto.Query, warn: false
  alias Userdocs.RepoHandler
  alias Userdocs.Requests
  alias Userdocs.Teams
  alias Schemas.Screenshots.Screenshot
  alias Schemas.Screenshots.PresignedURLs
  alias Userdocs.ImageComparison
  @placeholder_path Path.join([:code.priv_dir(:userdocs), "static", "images", "userdocs_placeholder.png"])
  @url Application.compile_env(:userdocs_desktop, :host_url) <> "/api/screenshots"

  @doc "Returns the list of screenshots."
  def list_screenshots(%{access_token: access_token, context: %{repo: Client}} = opts) do
    params =  Map.take(opts, [:filters])
    request_fun = Requests.build_get(@url)
    {:ok, %{"data" => screenshots_attrs}} = Requests.send(request_fun, access_token, params)
    create_screenshot_structs(screenshots_attrs)
  end
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
  def get_screenshot!(id, %{access_token: access_token, context: %{repo: Client}} = opts) do
    params =  Map.take(opts, [:filters])
    request_fun = Requests.build_get_one(@url, id)
    {:ok, %{"data" => screenshots_attrs}} = Requests.send(request_fun, access_token, params)
    {:ok, screenshot} = create_screenshot_struct(screenshots_attrs)
    screenshot
  end
  def get_screenshot!(id, opts) do
    RepoHandler.get!(Screenshot, id, opts)
  end

  @doc "Creates a screenshot."
  def create_screenshot(attrs \\ %{}, opts)
  def create_screenshot(%{"id" => id} = attrs, %{repo_path: repo_path, access_token: access_token, context: %{repo: Client}}) do
    {base64, attrs} = Map.pop(attrs, "base64", encodced_placeholder_image())
    :ok = create_local_files(id, repo_path, base64)
    params = %{screenshot: Map.merge(attrs, aws_files_attrs(id))}
    request_fun = Requests.build_create(@url)
    {:ok, %{"data" => screenshot_attrs}} = Requests.send(request_fun, access_token, params)
    {:ok, screenshot} = create_screenshot_struct(screenshot_attrs)
    binary = Base.decode64!(base64)
    HTTPoison.put(screenshot.presigned_urls.aws_screenshot.put, binary, [])
    HTTPoison.put(screenshot.presigned_urls.aws_provisional_screenshot.put, binary, [])
    {:ok, screenshot}
  end
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

  def create_local_files(id, repo_path, base64) do
    source_path = Path.join([:code.priv_dir(:userdocs), "static", "images", "userdocs_placeholder.png"])
    binary =
      case base64 do
        nil -> File.read!(source_path)
        base64 -> Base.decode64!(base64)
      end
    screenshot_path = Path.join(repo_path, "#{id}.png")
    provisional_path = Path.join(repo_path, "#{id}-provisional.png")
    diff_path = Path.join(repo_path, "#{id}-diff.png")
    File.write(screenshot_path, binary)
    File.write(provisional_path, binary)
    File.write(diff_path, binary)
    :ok
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
  def update_screenshot(%Screenshot{} = screenshot, %{"base64" => _base64} = attrs,
  %{repo_path: path, magick_path: magick_path, access_token: _, context: %{repo: Client}} = opts) do
    {base64, attrs} = Map.pop(attrs, "base64", nil)
    prepare_local_images(screenshot, path, base64)
    update_attrs =
      case ImageComparison.compare(screenshot, path, magick_path) do
        {:ok, %{result_code: :no_difference}} ->
          Logger.debug("Images are not different")
          attrs
          |> Map.put("status", "ok")
          |> Map.put("score", 0)
        {:ok, %{result_code: :image_difference, score: score}} ->
          Logger.debug("Images are different #{score}")
          url = screenshot.presigned_urls.aws_provisional_screenshot.put
          binary = Base.decode64!(base64)
          HTTPoison.put(url, binary, [])
          attrs
          |> Map.put("status", "difference")
          |> Map.put("score", score)
        {:ok, %{result_code: :size_difference}} ->
          Logger.debug("Image sizes are different")
          url = screenshot.presigned_urls.aws_provisional_screenshot.put
          binary = Base.decode64!(base64)
          HTTPoison.put(url, binary, [])
          attrs
          |> Map.put("status", "size_difference")
          |> Map.put("score", 0)
      end

    case Map.delete(update_attrs, :base64) do
      inner_attrs when inner_attrs == %{} -> {:ok, screenshot}
      inner_attrs -> update_screenshot(screenshot, inner_attrs, opts)
    end
  end
  def update_screenshot(%Screenshot{} = screenshot, attrs, %{access_token: access_token, context: %{repo: Client}}) do
    request_fun = Requests.build_update(@url, screenshot.id)
    {:ok, %{"data" => screenshot_attrs}} = Requests.send(request_fun, access_token, %{screenshot: attrs})
    create_screenshot_struct(screenshot_attrs)
  end
  def update_screenshot(%Screenshot{} = screenshot, attrs, opts) do
    screenshot
    |> Screenshot.changeset(attrs)
    |> RepoHandler.update(opts)
    |> maybe_broadcast_screenshot("update", channel(screenshot, opts[:broadcast]), opts[:broadcast])
  end

  def prepare_local_images(screenshot, path, base64, bucket \\ "userdocs-screenshots") do
    IO.puts("Path #{path}")
    local_image_path = Path.join(path, "#{screenshot.id}.png")
    ExAws.S3.download_file(bucket, "screenshots/#{screenshot.id}.png", local_image_path)
    |> ExAws.request!()

    local_image = Base.decode64!(base64)
    Path.join(path, "#{screenshot.id}-provisional.png")
    |> File.write(local_image)
  end

  def approve(screenshot, repo_path, opts) do
    provisional_path = provisional_path(screenshot, repo_path)
    :ok = File.cp(provisional_path, original_path(screenshot, repo_path))
    screenshot.presigned_urls.aws_screenshot.put
    |> HTTPoison.put(File.read!(provisional_path), [])
    update_screenshot(screenshot, %{status: :ok, score: 0.0}, opts)
  end

  def reject(screenshot, _repo_path, opts) do
    update_screenshot(screenshot, %{status: :ok, score: 0.0}, opts)
  end

  @doc "Deletes a screenshot."
  def delete_screenshot(id, %{access_token: access_token, context: %{repo: Client}}) do
    request = Requests.build_delete(@url, id)
    Requests.send(request, access_token, nil)
  end
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

  def encodced_placeholder_image() do
    @placeholder_path
    |> File.read!()
    |> Base.encode64()
  end
end
