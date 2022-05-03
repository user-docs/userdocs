defmodule Userdocs.Integrations do
  import Ecto.Query, warn: false
  alias Userdocs.RepoHandler
  alias Userdocs.Subscription

  alias Schemas.Integrations.Integration

  def list_integrations(opts) do
    Integration
    |> RepoHandler.all(opts)
  end

  def get_integration!(id, opts), do: RepoHandler.get!(Integration, id, opts)

  def create_integration(attrs, opts) do
    %Integration{}
    |> Integration.changeset(attrs)
    |> RepoHandler.insert(opts)
    |> Subscription.broadcast_result(opts)
  end

  def create_page_structs(attrs_list) do
    Enum.map(attrs_list, fn(attrs) ->
      {:ok, page} = create_integration_struct(attrs)
      page
    end)
  end

  def create_integration_struct(attrs \\ %{}) do
    %Integration{}
    |> Integration.api_changeset(attrs)
    |> Ecto.Changeset.apply_action(:insert)
  end

  def update_integration(%Integration{} = integration, attrs, opts) do
    integration
    |> Integration.changeset(attrs)
    |> RepoHandler.update(opts)
    |> Subscription.broadcast_result(opts)
  end

  def delete_integration(%Integration{} = integration, opts) do
    RepoHandler.delete(integration, opts)
    |> Subscription.broadcast_result(opts)
  end

  def change_integration(%Integration{} = integration, attrs \\ %{}) do
    Integration.changeset(integration, attrs)
  end
end
