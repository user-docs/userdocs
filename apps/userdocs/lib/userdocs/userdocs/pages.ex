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
  alias Userdocs.RepoHandler
  alias Userdocs.Requests
  @url Application.get_env(:userdocs_desktop, :host_url) <> "/api/pages"

  @doc "Returns the list of pages."
  def list_pages(%{access_token: access_token, context: %{repo: Client}} = opts) do
    params =  Map.take(opts, [:filters])
    request_fun = Requests.build_get(@url)
    {:ok, %{"data" => pages_attrs}} = Requests.send(request_fun, access_token, params)
    create_page_structs(pages_attrs)
  end
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
  def create_page(attrs, %{access_token: access_token, context: %{repo: Client}}) do
    params = %{page: attrs}
    request_fun = Requests.build_create(@url)
    {:ok, %{"data" => page_attrs}} = Requests.send(request_fun, access_token, params)
    create_page_struct(page_attrs)
  end
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
  def update_page(%Page{} = page, attrs, %{access_token: access_token, context: %{repo: Client}}) do
    request_fun = Requests.build_update(@url, page.id)
    {:ok, %{"data" => page_attrs}} = Requests.send(request_fun, access_token, %{page: attrs})
    create_page_struct(page_attrs)
  end
  def update_page(%Page{} = page, attrs, opts) do
    page
    |> Page.changeset(attrs)
    |> RepoHandler.update(opts)
    |> maybe_broadcast_page("update", channel(page, opts[:broadcast]), opts[:broadcast])
  end

  @doc "Deletes a page."
  def delete_page(id, %{access_token: access_token, context: %{repo: Client}}) do
    request = Requests.build_delete(@url, id)
    Requests.send(request, access_token, nil)
  end
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
    UserdocsWeb.Endpoint.broadcast(channel, action, payload)
    {:ok, page}
  end
  def maybe_broadcast_page(state, _, _, _), do: state

  def channel(%Page{} = page, true) do
    team = Teams.get_page_team(page.id)
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
end
