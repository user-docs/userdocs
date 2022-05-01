defmodule Userdocs.Pages do
  @moduledoc """
  The Pages context.
  """
  import Ecto.Query, warn: false
  require Logger
  alias Schemas.Pages.Page
  alias Schemas.Projects.Project
  alias Schemas.Users.User
  alias Schemas.Teams.Team
  alias Userdocs.Teams
  alias Userdocs.Subscription
  alias Userdocs.RepoHandler

  @doc "Returns the list of pages."
  def list_pages(opts) do
    filters = Map.get(opts, :filters, [])
    base_pages_query()
    |> maybe_filter_pages_by_team_id(filters[:team_id])
    |> maybe_filter_pages_by_project_id(filters[:project_id])
    |> RepoHandler.all(opts)
  end

  defp maybe_filter_pages_by_team_id(query, nil), do: query
  defp maybe_filter_pages_by_team_id(query, team_id) do
    from(page in query,
      left_join: project in Project, on: page.project_id == project.id,
      left_join: team in Team, on: project.team_id == team.id,
      where: team.id == ^team_id)
  end

  defp maybe_filter_pages_by_project_id(query, nil), do: query
  defp maybe_filter_pages_by_project_id(query, project_id) do
    from(page in query, where: page.project_id == ^project_id)
  end

  defp base_pages_query(), do: from p in Page

  @doc "Gets a single page."
  def get_page!(id, opts) do
    RepoHandler.get!(Page, id, opts)
  end

  @doc "Creates a page."
  def create_page(attrs \\ %{}, opts)
  def create_page(attrs, opts) do
    %Page{}
    |> Page.changeset(attrs)
    |> RepoHandler.insert(opts)
    |> case do
      {:ok, page} = result -> maybe_broadcast_page(result, "create", channel(page, opts[:broadcast]), opts[:broadcast])
      result -> result
    end
  end

  def create_page_structs(attrs_list) do
    Enum.map(attrs_list, fn(attrs) ->
      {:ok, page} = create_page_struct(attrs)
      page
    end)
  end

  def create_page_struct(attrs \\ %{}) do
    %Page{}
    |> Page.api_changeset(attrs)
    |> Ecto.Changeset.apply_action(:insert)
  end

  @doc "Updates a page."
  def update_page(%Page{} = page, attrs, opts) do
    page
    |> Page.changeset(attrs)
    |> RepoHandler.update(opts)
    |> maybe_broadcast_page("update", channel(page, opts[:broadcast]), opts[:broadcast])
  end

  @doc "Deletes a page."
  def delete_page(%Page{} = page, opts) do
    channel = channel(page, opts[:broadcast])
    RepoHandler.delete(page, opts)
    |> maybe_broadcast_page("delete", channel, opts[:broadcast])
  end

  @doc "Returns an `%Ecto.Changeset{}` for tracking page changes."
  def change_page(%Page{} = page, attrs \\ %{}) do
    Page.changeset(page, attrs)
  end

  @doc "Broadcasts a page to the team it belongs to"
  def maybe_broadcast_page({:error, _} = state, _, _, _), do: state
  def maybe_broadcast_page({:ok, %Page{} = page}, action, channel, true) do
    Logger.debug("#{__MODULE__} broadcasting a Page struct")
    payload = %{type: "Schemas.Pages.Page", attrs: page}
    Subscription.broadcast(channel, action, payload)
    {:ok, page}
  end
  def maybe_broadcast_page(state, _, _, _), do: state

  def channel(%Page{} = page, true) do
    team = Teams.get_page_team!(page.id)
    "team:#{team.id}"
  end
  def channel(_, _), do: ""

  def effective_url(
    %Page{url: "/" <> _ = path},
    %Project{id: id, base_url: base_url},
    %User{overrides: overrides}
  ) do
    Enum.reduce(overrides, base_url <> path, fn(o, url) ->
      if o.project_id == id do
        o.url <> path
      else
        url
      end
    end)
  end
  def effective_url(%Page{url: url}, %Project{}, %User{}), do: url

  def page_screenshot(%Page{screenshots: []}), do: nil
  def page_screenshot(%Page{screenshots: screenshots}) do
    screenshots
    |> Enum.filter(fn screenshot -> screenshot.page_id != nil end)
    |> Enum.at(0)
  end

  def create_page_screenshot_attrs(page, base64) do
    %{
      "id" => Ecto.UUID.generate(),
      "page_id" => page.id,
      "project_id" => page.project_id,
      "name" => page.name <> " screenshot",
      "status" => :ok,
      "base64" => base64
    }
  end

  def update_page_screenshot_attrs(page, base64) do
    %{
      "page_id" => page.id,
      "base64" => base64
    }
  end
end
