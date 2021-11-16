defmodule Userdocs.Strategies do
  @moduledoc """
  The Strategies context.
  mix phx.gen.json Strategies Strategy strategies name:string
  """

  import Ecto.Query, warn: false
  alias Schemas.Strategies.Strategy
  alias Userdocs.RepoHandler

  @url Application.get_env(:userdocs_desktop, :host_url) <> "/api/strategies"

  @doc "Returns the list of strategies."
  def list_strategies(%{access_token: access_token, context: %{repo: Client}}) do
    {:ok, %{body: body}} = HTTPoison.get(@url, [{"authorization", access_token}])
    {:ok, %{"data" => strategy_attrs}} = Jason.decode(body)
    Enum.map(strategy_attrs, fn(attrs) ->
      {:ok, strategy} = create_strategy_struct(attrs)
      strategy
    end)
  end
  def list_strategies(opts) do
    from(s in Strategy)
    |> RepoHandler.all(opts)
  end

  def css_strategy(opts) do
    from(s in Strategy)
    |> where([s], s.name == "css")
    |> RepoHandler.one!(opts)
  end

  def create_strategy(attrs \\ %{}, opts) do
    %Strategy{}
    |> Strategy.changeset(attrs)
    |> RepoHandler.insert(opts)
  end

  def create_strategy_struct(attrs \\ %{}) do
    %Strategy{}
    |> Strategy.api_changeset(attrs)
    |> Ecto.Changeset.apply_action(:insert)
  end
end
