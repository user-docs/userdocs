defmodule UserdocsDesktopWeb.Defaults do
  @moduledoc "Default values for desktop application"
  def opts(%{assigns: _} = socket, types \\ []) do
    [
      data_type: :list,
      strategy: :by_type,
      location: :data,
      types: types,
      loader: &Phoenix.LiveView.assign/3,
    ]
    |> Keyword.put(:broadcast, true)
    |> assign_channel(socket)
  end

  def assign_channel(opts, socket) do
    case channel(socket) do
      nil -> opts
      channel -> Keyword.put(opts, :channel, channel)
    end
  end

  def channel(%{assigns: %{current_team: %{id: nil}}}), do: ""
  def channel(%{assigns: %{current_team: %{id: id}}}), do: channel(id)
  def channel(team_id) when is_integer(team_id), do: "team:" <> Integer.to_string(team_id)
  def channel(_), do: nil
end
