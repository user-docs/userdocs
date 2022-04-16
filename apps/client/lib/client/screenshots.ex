defmodule Client.Screenshots do
  @moduledoc "The Step Types context."
  require Logger
  alias Client.Requests
  alias Schemas.Screenshots.Screenshot
  alias Schemas.Screenshots.PresignedURLs
  alias Userdocs.ImageComparison
  @placeholder_path Path.join([:code.priv_dir(:userdocs), "static", "images", "userdocs_placeholder.png"])
  @url Application.compile_env(:userdocs_desktop, :host_url) <> "/api/screenshots"

  @doc "Returns the list of screenshots."
  def list_screenshots(%{access_token: access_token} = opts) do
    params =  Map.take(opts, [:filters])
    request_fun = Requests.build_get(@url)
    {:ok, %{"data" => screenshots_attrs}} = Requests.send(request_fun, access_token, params)
    create_screenshot_structs(screenshots_attrs)
  end

  @doc "Gets a single screenshot."
  def get_screenshot!(id, %{access_token: access_token} = opts) do
    params =  Map.take(opts, [:filters])
    request_fun = Requests.build_get_one(@url, id)
    {:ok, %{"data" => screenshots_attrs}} = Requests.send(request_fun, access_token, params)
    {:ok, screenshot} = create_screenshot_struct(screenshots_attrs)
    screenshot
  end

  @doc "Creates a screenshot."
  def create_screenshot(%{"id" => id} = attrs, %{repo_path: repo_path, access_token: access_token}) do
    {base64, attrs} = Map.pop(attrs, "base64", encoded_placeholder_image())

    params = %{screenshot: Map.merge(attrs, Userdocs.Screenshots.aws_files_attrs(id))}
    request_fun = Requests.build_create(@url)

    {:ok, %{"data" => screenshot_attrs}} = Requests.send(request_fun, access_token, params)
    {:ok, screenshot} = create_screenshot_struct(screenshot_attrs)

    binary = Base.decode64!(base64)
    HTTPoison.put(screenshot.presigned_urls.aws_screenshot.put, binary, [])
    HTTPoison.put(screenshot.presigned_urls.aws_provisional_screenshot.put, binary, [])

    {:ok, screenshot}
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
  %{repo_path: path, magick_path: magick_path, access_token: _} = opts) do
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
      inner_attrs ->
        update_screenshot(screenshot, inner_attrs, opts)
    end
  end
  def update_screenshot(%Screenshot{} = screenshot, attrs, %{access_token: access_token}) do
      request_fun = Requests.build_update(@url, screenshot.id)
      {:ok, %{"data" => screenshot_attrs}} = Requests.send(request_fun, access_token, %{screenshot: attrs})
      create_screenshot_struct(screenshot_attrs)
  end

  def prepare_local_images(screenshot, path, provisional_base64) do
    {:ok, %{body: screenshot_base64}} = HTTPoison.get(screenshot.presigned_urls.aws_screenshot.get)
    screenshot_path(screenshot.id, path)
    |> File.write(screenshot_base64)

    provisional_path(screenshot.id, path)
    |> File.write(Base.decode64!(provisional_base64))
    :ok
  end

  @doc "Deletes a screenshot."
  def delete_screenshot(id, %{access_token: access_token, repo_path: repo_path}) do
    File.rm(screenshot_path(id, repo_path))
    File.rm(provisional_path(id, repo_path))
    File.rm(diff_path(id, repo_path))
    request = Requests.build_delete(@url, id)
    Requests.send(request, access_token, nil)
  end

  def approve_screenshot(screenshot, %{repo_path: repo_path} = opts) do
    provisional_path = provisional_path(screenshot, repo_path)
    :ok = File.cp(provisional_path, screenshot_path(screenshot, repo_path))
    screenshot.presigned_urls.aws_screenshot.put
    |> HTTPoison.put(File.read!(provisional_path), [])
    update_screenshot(screenshot, %{status: :ok, score: 0.0}, opts)
  end

  def reject_screenshot(screenshot, opts) do
    update_screenshot(screenshot, %{status: :ok, score: 0.0}, opts)
  end

  def screenshot_path(screenshot_id, repo_path), do: Path.join(repo_path, "#{screenshot_id}.png")
  def provisional_path(screenshot_id, repo_path), do: Path.join(repo_path, "#{screenshot_id}-provisional.png")
  def diff_path(screenshot_id, repo_path), do: Path.join(repo_path, "#{screenshot_id}-diff.png")

  def encoded_placeholder_image() do
    @placeholder_path
    |> File.read!()
    |> Base.encode64()
  end
end
