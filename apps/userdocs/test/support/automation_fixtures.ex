defmodule Userdocs.AutomationFixtures do
  @moduledoc """
  This module defines test helpers for creating
  entities via the `Userdocs.Auth` context.
  """

  alias Userdocs.Processes
  alias Userdocs.StepTypes
  alias Userdocs.Steps

  def process(project_id \\ nil, opts) do
    {:ok, process} =
      process_attrs(:valid, project_id)
      |> Processes.create_process(opts)
    process
  end

  def all_valid_step_types() do
    Userdocs.AutomationFixtures.StepTypes.data()
    |> Enum.map(
      fn(st) ->
        {:ok, step_type} = StepTypes.create_step_type(st)
        step_type
      end
    )
  end

  def step_type() do
    {:ok, step_type} =
      step_type_attrs(:valid)
      |> StepTypes.create_step_type()
    step_type
  end

  def step(page_id \\ nil, process_id \\ nil,
    element_id \\ nil, annotation_id \\ nil, step_type_id \\ nil, opts) do
    {:ok, step} =
      step_attrs(:valid, page_id, process_id, element_id,
        annotation_id, step_type_id)
      |> Steps.create_step(opts)
      step
  end

  def step_attrs(attr_types, page_id \\ nil, process_id \\ nil, element_id \\ nil, annotation_id \\ nil, step_type_id \\ nil)
  def step_attrs(:valid, page_id, process_id, element_id, annotation_id, step_type_id) do
    %{
      name: UUID.uuid4(),
      order: Enum.random(1..100),
      page_id: page_id,
      process_id: process_id,
      element_id: element_id,
      annotation_id: annotation_id,
      step_type_id: step_type_id,
      text: "Test text",
      height: 0,
      width: 0,
      margin_all: 0,
      margin_bottom: 0,
      margin_left: 0,
      margin_right: 0,
      margin_top: 0
    }
  end
  def step_attrs(:invalid, page_id, process_id, element_id, annotation_id, step_type_id) do
    %{
      order: nil,
      page_id: page_id,
      process_id: process_id,
      element_id: element_id,
      annotation_id: annotation_id,
      step_type_id: step_type_id
    }
  end

  def step_type_attrs(:valid) do
    %{
      id: "step_type_id",
      args: [],
      name: UUID.uuid4()
    }
  end
  def step_type_attrs(:invalid) do
    %{args: nil, name: nil}
  end

  def process_attrs(status, project_id \\ nil)
  def process_attrs(:valid, project_id) do
    %{
      name: UUID.uuid4(),
      order: 1,
      project_id: project_id
    }
  end
  def process_attrs(:invalid, project_id) do
    %{
      name: nil,
      order: 1,
      project_id: project_id
    }
  end

end
