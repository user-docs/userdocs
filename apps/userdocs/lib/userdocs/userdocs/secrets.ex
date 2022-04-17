defmodule Userdocs.Secrets do
  @moduledoc "Functions for manipulating secrets stored locally on the client"
  import Ecto.Query
  alias Userdocs.RepoHandler
  alias Schemas.Secrets.Secret

  def list_secrets(opts) do
    filters = Map.get(opts, :filters, [])

    Secret
    |> maybe_filter_by_ids(filters[:ids])
    |> order_by(asc: :id)
    |> RepoHandler.all(opts)
  end

  def get_secret!(id, opts) do
    RepoHandler.get!(Secret, id, opts)
  end

  def update_secret(%Secret{} = secret, attrs, opts) do
    secret
    |> Secret.changeset(attrs)
    |> RepoHandler.update(opts)
  end

  def create_secret(attrs, opts) do
    %Secret{}
    |> Secret.changeset(attrs)
    |> RepoHandler.insert(opts)
  end

  @doc "Deletes a step_type."
  def delete_secret(%Secret{} = secret, opts) do
    RepoHandler.delete(secret, opts)
  end

  defp maybe_filter_by_ids(query, nil), do: query
  defp maybe_filter_by_ids(query, ids), do: from(item in query, where: item.id in ^ids)
end
