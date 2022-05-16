  defmodule Userdocs.Screenshots do
  @moduledoc "The Step Types context."

  require Logger

  import Ecto.Query, warn: false
  alias Userdocs.RepoHandler
  alias Schemas.Screenshots.Screenshot
  alias Schemas.Screenshots.PresignedURLs
  alias Userdocs.Subscription
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
    from(screenshot in query,
    left_join: page in assoc(screenshot, :page),
    where: page.project_id == ^project_id)
  end

  defp base_screenshots_query(), do: from(screenshots in Screenshot)

  @doc "Gets a single screenshot."
  def get_screenshot!(id, opts) do
    RepoHandler.get!(Screenshot, id, opts)
  end

  def preload_screenshot(screenshot, preloads, opts) do
    RepoHandler.preload(screenshot, preloads, opts)
  end

  @doc "Creates a screenshot."
  def create_screenshot(attrs, %{context: %{repo: repo}} = opts) do
    %Screenshot{}
    |> Screenshot.changeset(attrs)
    |> RepoHandler.insert(opts)
    |> Userdocs.Screenshots.PresignedURLS.put_presigned_urls(repo)
    |> Subscription.broadcast_result(opts)
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
  def update_screenshot(%Screenshot{} = screenshot, attrs, %{context: %{repo: repo}} = opts) do
    screenshot
    |> Screenshot.changeset(attrs)
    |> RepoHandler.update(opts)
    |> Userdocs.Screenshots.PresignedURLS.put_presigned_urls(repo)
    |> Subscription.broadcast_result(opts)
  end

  @doc "Deletes a screenshot."
  def delete_screenshot(%Screenshot{} = screenshot, opts) do
    RepoHandler.delete(screenshot, opts)
    |> Subscription.broadcast_result(opts)
  end

  @doc "Returns an `%Ecto.Changeset{}` for tracking screenshot changes."
  def change_screenshot(%Screenshot{} = screenshot, attrs \\ %{}) do
    Screenshot.changeset(screenshot, attrs)
  end

  def original_path(screenshot, repo_path), do: Path.join(repo_path, "#{screenshot.id}.png")
  def provisional_path(screenshot, repo_path), do: Path.join(repo_path, "#{screenshot.id}-provisional.png")
  def diff_path(screenshot, repo_path), do: Path.join(repo_path, "#{screenshot.id}-diff.png")

  def encoded_placeholder_image() do
    @placeholder_path
    |> File.read!()
    |> Base.encode64()
  end
end
