defmodule Userdocs.Contexts do
  @moduledoc """
  The Context context.
  """
  require Logger
  import Ecto.Query, warn: false
  alias Schemas.Users.Context
  alias Userdocs.Subscription
  alias Userdocs.RepoHandler

  def list_contexts(opts) do
    from(c in Context)
    |> RepoHandler.all(opts)
  end

  def get_context!(id, opts) do
    RepoHandler.get!(Context, id, opts)
  end

  def get_context(id, opts) do
    RepoHandler.get(Context, id, opts)
  end

  def create_context(attrs \\ %{}, opts) do
    %Context{}
    |> Context.changeset(attrs)
    |> RepoHandler.insert(opts)
    |> handle_broadcast()
  end

  def create_context_struct(attrs \\ %{}) do
    %Context{}
    |> Context.api_changeset(attrs)
    |> Ecto.Changeset.apply_action(:insert)
  end

  def update_context(context, attrs, opts) do
    context
    |> Context.changeset(attrs)
    |> RepoHandler.update(opts)
    |> handle_broadcast()
  end

  def delete_context(%Context{} = context, opts) do
    RepoHandler.delete(context, opts)
    |> handle_broadcast
  end

  def handle_broadcast({:error, _changeset} = response), do: response
  def handle_broadcast({:ok, %{__meta__: %{state: :deleted}} = struct}) do
    Subscription.broadcast(channel(struct), "delete", struct)
    {:ok, struct}
  end
  def handle_broadcast({:ok, %{inserted_at: same_time, updated_at: same_time} = struct}) do
    Subscription.broadcast(channel(struct), "create", struct)
    {:ok, struct}
  end
  def handle_broadcast({:ok, struct}) do
    Subscription.broadcast(channel(struct), "update", struct)
    {:ok, struct}
  end

  def channel(struct), do: "user:" <> struct.user_id
end
