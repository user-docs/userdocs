defmodule State.Screenshots do
  @moduledoc "Context functiosn for operating on Screenshot structs in memory state"

  require Logger

  alias Schemas.Screenshots.Screenshot
  alias Userdocs.Screenshots

  def load_screenshots(state, opts) do
    StateHandlers.load(state, Screenshots.list_screenshots(opts), Screenshot, opts)
  end

  def list_screenshots(state, opts) do
    StateHandlers.list(state, Screenshot, opts)
  end

  def get_screenshot!(id, state, opts)
  def get_screenshot!(id, state, opts) when is_binary(id) do
    StateHandlers.get(state, id, Screenshot, opts)
    |> maybe_preload(opts[:preloads], state, opts)
  end

  defp maybe_preload(process, nil, _, _), do: process
  defp maybe_preload(process, _preloads, state, opts) do
    opts = Keyword.delete(opts, :filter)
    StateHandlers.preload(state, process, opts)
  end
end
