defmodule Client.Remote.Strategies do
  @moduledoc "The Strategies context."

  alias Client.Requests
  alias Userdocs.Strategies
  @url Application.compile_env(:userdocs_desktop, :host_url) <> "/api/strategies"

  @doc "Returns the list of strategies."
  def list_strategies(%{access_token: access_token} = opts) do
    params = opts |> Map.take([:filters])
    request_fun = Requests.build_get(@url)
    {:ok, %{"data" => strategy_attrs}} = Requests.send(request_fun, access_token, params)
    Strategies.create_strategy_structs(strategy_attrs)
  end
end
