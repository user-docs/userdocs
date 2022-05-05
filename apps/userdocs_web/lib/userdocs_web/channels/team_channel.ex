defmodule UserdocsWeb.TeamChannel do
  @moduledoc false
  use UserdocsWeb, :channel
  alias UserdocsWeb.Presence

  @impl true
  def join("team:" <> _team_id, %{"app" => app} = payload, socket) do
    if authorized?(payload) do
      send(self(), {:after_join, app})
      {:ok, socket}
    else
      {:error, %{reason: "unauthorized"}}
    end
  end

  @impl true
  def handle_in("ping", payload, socket) do
    {:reply, {:ok, payload}, socket}
  end
  # def handle_in("create", payload, socket) do
  #   IO.puts("#{__MODULE__}.create subscription message")
  #   broadcast!(socket, "create", payload)
  #   {:reply, {:ok, payload}, socket}
  # end
  # def handle_in("update", payload, socket) do
  #   IO.puts("#{__MODULE__}.update subscription message")
  #   broadcast!(socket, "update", payload)
  #   {:reply, {:ok, payload}, socket}
  # end
  def handle_in("Userdocs" <> _ = mf, payload, socket),
    do: {:reply, UserdocsWeb.TeamChannel.Context.handle_call(mf, payload), socket}

  @impl true
  def handle_info({:after_join, app}, socket) do
    {:ok, _} = Presence.track(socket, app, %{
      online_at: inspect(System.system_time(:second))
    })
    {:noreply, socket}
  end
  def handle_info(%{event: event, payload: payload}, socket) when event in ["create", "update", "delete"] do
    broadcast!(socket, event, payload)
    {:noreply, socket}
  end

  # Add authorization logic here as required.
  defp authorized?(_payload) do
    true
  end
end

defmodule UserdocsWeb.TeamChannel.Context do
  alias UserdocsWeb.TeamChannel.Context.Integrations
  def handle_call("Userdocs.Integrations" <> _ = mf, payload),
    do: Integrations.handle_call(mf, parse_params(payload))

  defp parse_params(payload), do: UserdocsWeb.API.Helpers.parse_params(payload)
end

defmodule UserdocsWeb.TeamChannel.Context.Integrations do
  alias Userdocs.Integrations
  @opts %{context: %{repo: Userdocs.Repo}}

  def handle_call("Userdocs.Integrations.list_integrations", opts),
    do: {:ok, Integrations.list_integrations(Map.merge(opts, @opts))}

  def handle_call("Userdocs.Integrations.create_integration", %{attrs: attrs}) do
    Integrations.create_integration(attrs, @opts)
  end

  def handle_call("Userdocs.Integrations.delete_integration", %{struct: struct}) do
    {:ok, integration} = Integrations.create_integration_struct(struct)
    Integrations.delete_integration(integration, @opts)
  end

  def handle_call("Userdocs.Integrations.update_integration", %{id: id, attrs: attrs}) do
    Integrations.get_integration!(id, @opts)
    |> Integrations.update_integration(attrs, @opts)
  end
end

defimpl Jason.Encoder, for: Ecto.Changeset do
  def encode(%{
    valid?: valid?,
    data: data,
    params: params,
    changes: changes,
    required: required,
    action: action,
    errors: errors,
    empty_values: empty_values,
    repo: repo,
    repo_opts: repo_opts
  }, opts) do
    %{
      valid?: valid?,
      data: data,
      params: params,
      changes: changes,
      errors: cast_errors(errors),
      required: required,
      action: action,
      empty_values: empty_values,
      repo: repo,
      repo_opts: repo_opts
    }
    |> Jason.Encode.map(opts)
  end

  def cast_errors(errors) do
    Enum.reduce(errors, %{}, fn {field, {msg, opts}}, acc ->
      Map.put(acc, field, %{message: msg, options: Enum.into(opts, %{})})
    end)
  end
end
