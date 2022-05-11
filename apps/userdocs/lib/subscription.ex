defmodule Userdocs.Subscription do
  alias Userdocs.Teams

  @moduledoc false
  def broadcast(channel, action, payload) do
    Phoenix.PubSub.broadcast(Userdocs.PubSub, channel, %{
      topic: channel,
      event: action,
      payload: payload
    })
  end

  @doc "Broadcasts a screenshot to the team it belongs to"
  def broadcast_result({:error, _changeset} = response, _opts), do: response
  def broadcast_result({:ok, %{__meta__: %{state: :deleted}} = struct}, opts) do
    broadcast(channel(struct, opts), "delete", struct)
    {:ok, struct}
  end
  def broadcast_result({:ok, %{inserted_at: same_time, updated_at: same_time} = struct}, opts) do
    broadcast(channel(struct, opts), "create", struct)
    {:ok, struct}
  end
  def broadcast_result({:ok, struct}, opts) do
    broadcast(channel(struct, opts), "update", struct)
    {:ok, struct}
  end

  def channel(%Schemas.Integrations.Integration{project_id: project_id}, opts) do
    team = Teams.get_project_team!(project_id, opts)
    "team:#{team.id}"
  end
  def channel(%Schemas.Integrations.ScreenshotIntegration{integration_id: integration_id}, opts) do
    team = Teams.get_integration_team!(integration_id, opts)
    "team:#{team.id}"
  end
  def channel(%Schemas.Screenshots.Screenshot{page_id: page_id}, opts) do
    team = Teams.get_page_team!(page_id, opts)
    "team:#{team.id}"
  end
end
