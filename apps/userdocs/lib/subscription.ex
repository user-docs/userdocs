defmodule Userdocs.Subscription do

  require Logger

  alias UserdocsWeb.Endpoint

  def broadcast_children(object, changeset, opts) do
    Logger.debug("Broadcasting results from a " <> inspect(changeset.data.__struct__))
    Logger.debug("Broadcasting changes on #{inspect(changeset)}")
    actions = check_changes(changeset)
    Logger.debug(inspect actions)
    queue = traverse_changes(object, actions)
    Enum.each(queue,
      fn({action, object}) ->
        opts = Keyword.put(opts, :action, Atom.to_string(action))
        StateHandlers.broadcast(%{}, object, opts)
      end
    )
  end

  def check_changes([%Ecto.Changeset{} | _] = changesets) do
    Logger.debug("Checking a list of changes")
    Enum.map(changesets, fn(changeset) -> check_changes(changeset) end)
  end
  def check_changes(%Ecto.Changeset{} = changeset) do
    Logger.debug("Checking changes on #{inspect(changeset)}")
    schema = changeset.data.__struct__
    associations = changeset.data.__struct__.__schema__(:associations)
    Logger.debug("Checking changes on #{schema} with associations #{inspect(associations)}")

    Enum.reduce(associations, %{},
      fn(association, acc) ->
        association_field = schema.__schema__(:association, association).field

        Logger.debug("  Checking changes on #{association_field}")
        Ecto.Changeset.get_change(changeset, association_field)
        |> check_change(association_field, acc)
      end
    )
  end

  def check_change([%Ecto.Changeset{} | _] = changesets, field, acc) do
    Logger.debug("Checking change on a list of changesets for field #{field}, acc #{inspect acc}")
    attrs = Enum.map(changesets, &cast_change/1)
    Map.put(acc, field, attrs)
  end
  def check_change(nil, field, acc) do
    Logger.debug("    No change detected")
    acc
  end
  def check_change(%Ecto.Changeset{} = changeset, field, acc) do
    Map.put(acc, field, cast_change(changeset))
  end
  def cast_change(%Ecto.Changeset{} = changeset) do
    changes = check_changes(changeset)
    schema = changeset.data.__struct__
    Logger.debug("    Change detected on #{schema}")

    attrs = %{
      action: changeset.action,
      changes: changes,
      id: changeset |> Map.get(:data, %{id: :no_primary_key}) |> Map.get(:id)
    }
  end

  def traverse_changes(object, actions) do
    IO.inspect(object)
    IO.inspect(actions)
    Enum.reduce(actions, [],
      fn({key, change_summary}, acc) ->
        traverse_change({key, change_summary}, acc, object)
      end
    )
  end

  def traverse_change({key, %{action: action, changes: changes} = summary}, acc, object) do
    Logger.debug("Traversing a change summary #{inspect(summary)}, object: #{inspect(object)}")
    queue_change(action, Map.get(object, key), changes, acc)
  end
  def traverse_change({key, change_summaries}, acc, object) when is_list(change_summaries) do
    Logger.debug("Traversing a list of change summaries #{inspect(change_summaries)} with key #{key}, objects: #{inspect(Map.get(object, key))}")
    Enum.reduce(change_summaries, acc,
      fn({key, %{action: _, changes: _} = change_summary}, inner_acc) ->
        traverse_change({key, change_summary}, inner_acc, object)
      end
    )
  end

  def queue_change(_, object, _, acc) when object == %{}, do: acc
  def queue_change(action, object, changes, acc) do
    traverse_changes(object, changes) ++ [{action, object} | acc]
  end

  def broadcast({status, result}, type, operation) do
    Logger.debug("#{operation} broadcast triggered on #{type}")
    case status do
      :ok ->
        try do
          Endpoint.broadcast(type, operation, result)
        rescue
          UndefinedFunctionError ->
            Logger.debug("UndefinedFunctionError, Endpoint Unavailable.")
            {status, result}
          e -> raise(e)
        end
        {status, result}
      _ ->
        {status, result}
    end
  end

  def handle_event(socket, "create" = _event, payload, opts) do
    Logger.debug("Handling Event")
    StateHandlers.create(socket, payload, opts)
  end
  def handle_event(socket, "update" = _event, payload, opts) do
    Logger.debug("Handling Update Event")
    StateHandlers.update(socket, payload, opts)
  end
  def handle_event(socket, "delete" = _event, payload, opts) do
    Logger.debug("Handling Event")
    StateHandlers.delete(socket, payload, opts)
  end
  def handle_event(socket, "upsert" = _event, payload, opts) do
    Logger.debug("Handling upsert Event")
    StateHandlers.upsert(socket, payload, opts)
  end
end
