defmodule State.Integrations do
  @moduledoc "Context functiosn for operating on Project structs in memory state"

  require Logger

  alias Schemas.Integrations.Integration

  def list_integrations(state, opts) when is_list(opts) do
    StateHandlers.list(state, Integration, opts)
    |> maybe_preload(opts[:preloads], state, opts)
  end

  def get_integration!(id, state, opts) when is_list(opts) do
    StateHandlers.get(state, id, Integration, opts)
    |> maybe_preload(opts[:preloads], state, opts)
  end

  defp maybe_preload(integration, nil, _, _), do: integration
  defp maybe_preload(integration, _preloads, state, opts) do
    opts = Keyword.delete(opts, :filter)
    StateHandlers.preload(state, integration, opts)
  end
end
