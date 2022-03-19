defmodule Userdocs.StepFixtures do
  @moduledoc false
  alias Userdocs.Steps

  def step(attrs, opts) do
    {:ok, step} = step_attrs(attrs) |> Steps.create_step(opts)
    step
  end

  def step_struct(attrs) do
    {:ok, step} = step_attrs(attrs) |> Steps.create_step_struct()
    step
  end

  def step_attrs(attrs) do
    %{
      name: UUID.uuid4(),
      order: Enum.random(1..100),
      page_id: UUID.uuid4(),
      process_id: UUID.uuid4(),
      element_id: UUID.uuid4(),
      annotation_id: UUID.uuid4(),
      step_type_id: UUID.uuid4(),
      text: "Test text",
      height: 0,
      width: 0,
      margin_all: 0,
      margin_bottom: 0,
      margin_left: 0,
      margin_right: 0,
      margin_top: 0
    }
    |> Map.merge(attrs)
  end
end
