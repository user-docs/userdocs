defmodule Userdocs.Steps do
  @moduledoc """
  The Steps context.
  """
  require Logger
  import Ecto.Query, warn: false
  alias Userdocs.RepoHandler
  alias Userdocs.Teams
  alias Schemas.Steps.Step
  alias Userdocs.Subscription

  @doc "Returns the list of steps."
  def list_steps(opts) do
    filters = Map.get(opts, :filters, [])
    base_steps_query()
    |> maybe_filter_by_process(filters[:process_id])
    |> maybe_filter_by_team(filters[:team_id])
    |> maybe_filter_by_project(filters[:project_id])
    |> RepoHandler.all(opts)
  end

  defp maybe_filter_by_process(query, nil), do: query
  defp maybe_filter_by_process(query, process_id) do
    from(step in query,
      where: step.process_id == ^process_id,
      order_by: step.order
    )
  end

  defp maybe_filter_by_team(query, nil), do: query
  defp maybe_filter_by_team(query, team_id) do
    from(step in query,
      left_join: process in assoc(step, :process),
      left_join: project in assoc(process, :project),
      where: project.team_id == ^team_id,
      order_by: step.order
    )
  end

  defp maybe_filter_by_project(query, nil), do: query
  defp maybe_filter_by_project(query, project_id) do
    from(step in query,
      left_join: process in assoc(step, :process),
      where: process.project_id == ^project_id,
      order_by: step.order
    )
  end

  @doc "Gets a single step."
  def get_step!(id, opts) do
    RepoHandler.get!(Step, id, opts)
  end

  @doc "Creates a step."
  def create_step(attrs, opts) do
    %Step{}
    |> Step.changeset(attrs)
    |> RepoHandler.insert(opts)
    |> handle_broadcast(opts)
  end

  def create_step_structs(attrs_list) do
    Enum.map(attrs_list, fn(attrs) ->
      {:ok, step} = create_step_struct(attrs)
      step
    end)
  end

  def create_step_struct(attrs \\ %{}) do
    %Step{}
    |> Step.fields_changeset(attrs)
    |> Ecto.Changeset.apply_action(:insert)
  end

  @doc "Updates a step."
  def update_step(%Step{} = step, attrs, opts) do
    Step.changeset(step, attrs)
    |> RepoHandler.update(opts)
    |> handle_broadcast(opts)
  end

  @doc "Deletes a step."
  def delete_step(%Step{} = step, opts) do
    RepoHandler.delete(step, opts)
    |> handle_broadcast(opts)
  end

  @doc "Returns an `%Ecto.Changeset{}` for tracking step changes."
  def change_step(%Step{} = step, attrs \\ %{}) do
    Step.changeset(step, attrs)
  end
  def change_fields(%Step{} = step, attrs \\ %{}) do
    Step.fields_changeset(step, attrs)
  end
  def change_assocs(%Step{} = step, attrs \\ %{}) do
    step
    |> Ecto.Changeset.cast(attrs, [])
    |> Step.assoc_changeset()
  end

  @doc "Broadcasts a screenshot to the team it belongs to"
  def handle_broadcast({:error, _changeset} = response, _opts), do: response
  def handle_broadcast({:ok, %{__meta__: %{state: :deleted}} = struct}, opts) do
    Subscription.broadcast(channel(struct, opts), "delete", struct)
    {:ok, struct}
  end
  def handle_broadcast({:ok, %{inserted_at: same_time, updated_at: same_time} = struct}, opts) do
    Subscription.broadcast(channel(struct, opts), "create", struct)
    {:ok, struct}
  end
  def handle_broadcast({:ok, struct}, opts) do
    Subscription.broadcast(channel(struct, opts), "update", struct)
    {:ok, struct}
  end

  def channel(%Step{} = step, opts) do
    team = Teams.get_process_team!(step.process_id, opts)
    "team:#{team.id}"
  end
  def channel(_, _), do: ""

  def next_order(steps) do
    Enum.reduce(steps, 0, fn(step, acc) ->
      case step.order > acc do
        true -> step.order
        false -> acc
      end
    end)
    |> Kernel.+(1)
  end

  def automatic_label(steps) do
    Enum.reduce(steps, 1, fn(step, acc) ->
      case step do
        %Step{step_type: %{name: "Apply Annotation"}, annotation: %{annotation_type: %{name: "Badge"}, label: label}} ->
          label |> String.to_integer() |> Kernel.+(1) |> to_string
        %Step{step_type: %{name: "Apply Annotation"}, annotation: %{annotation_type: %{name: "Badge Outline"}, label: label}} ->
          label |> String.to_integer() |> Kernel.+(1) |> to_string
        %Step{step_type: %{name: "Clear Annotations"}} -> 1
        %Step{step_type: %{name: "Navigate"}} -> 1
        _ -> acc
      end
    end)
  end

  defp base_steps_query(), do: from(steps in Step)

  def action(:insert), do: "create"
  def action(:update), do: "update"

  def last_page_id([]), do: nil
  def last_page_id(steps) do
    steps
    |> Enum.sort(fn(o1, o2) -> o1.order < o2.order end)
    |> Enum.at(-1)
    |> Map.get(:page_id)
  end
end
