defmodule Userdocs.ProcessInstances do
  @moduledoc """
  The Process Instance context.
  """
  require Logger
  import Ecto.Query, warn: false
  alias Schemas.ProcessInstances.ProcessInstance

  def create_process_instance(attrs \\ %{}) do
    %ProcessInstance{}
    |> ProcessInstance.changeset(attrs)
    |> Ecto.Changeset.apply_action(:insert)
  end

  def update_process_instance(%ProcessInstance{} = step_instance, attrs) do
    step_instance
    |> ProcessInstance.changeset(attrs)
    |> Ecto.Changeset.apply_action(:update)
  end
end
