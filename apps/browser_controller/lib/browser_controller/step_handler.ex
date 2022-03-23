defmodule BrowserController.StepHandler do
  alias Schemas.ProcessInstances.ProcessInstance
  alias Schemas.Steps.Step
  alias BrowserController.AnnotationHandler

  alias Userdocs.Pages

  defstruct step: %{}, command: %{}, context: %{}, step_instance: %{}, result: {}

  @screenshot_commands [:full_screen_screenshot, :element_screenshot]

  @step_preloads [
    :step_type,
    :screenshot,
    :page,
    [page: :project],
    :element,
    :annotation,
    [annotation: :annotation_type],
    [annotation: :element_annotations],
    [annotation: [element_annotations: :element]],
    #:process,
    #:step_instances,
    #[element: :strategy],
  ]

  def prepare({:execute_step, %{step_id: step_id}}) do
    %__MODULE__{}
    |> Map.put(:context, %{user: Client.current_user()})
    |> Map.put(:step, Client.get_step!(step_id, [preloads: @step_preloads]))
    |> load_command()
    |> create_step_instance()
  end

  def finish(%__MODULE__{} = step_handler) do
    step_handler
    |> update_step_instance()
    |> update_data()
  end

  defp load_command(%__MODULE__{step: step, context: context} = step_handler) do
    Map.put(step_handler, :command, cast_step(step, context))
  end

  defp create_step_instance(%{step: step} = step_handler) do
    {:ok, step_instance} =
      %{id: UUID.uuid4(), status: :started, error: "", warning: "", step_id: step.id}
      |> Client.trim_and_create_step_instance()

    Map.put(step_handler, :step_instance, step_instance)
  end

  def execute_step({:execute_step, %{step: step, context: %{process_instance: %ProcessInstance{} = process_instance} = context}}) do
    {:ok, step_instance} =
      %{
        id: UUID.uuid4(), status: :started, error: "", warning: "",
        step_id: step.id, process_instance_id: process_instance.id
      }
      |> Client.create_step_instance()

    broadcast("data", "create", step_instance)
    step = Map.put(step, :step_instance, step_instance)

    step
    #|> broadcast_step_update()
    #|> cast_step(context)
    #|> execute_command(page_pid)
    #|> handle_step_result(step)
    |> handle_process_instance_update(process_instance)
    |> handle_return_value()
  end

  def execute_step({:execute_step, %{step: step, context: context}}) do
    {:ok, step_instance} =
      %{id: UUID.uuid4(), status: :started, error: "", warning: "", step_id: step.id}
      |> StepInstances.create_step_instance()

    step = Map.put(step, :step_instance, step_instance)

    step
    #|> broadcast_step_update()
    #|> cast_step(context)
    #|> execute_command(page_pid)
    #|> handle_step_result(step)
    |> handle_return_value()
  end

  defp cast_step(%Step{step_type_id: "navigate", page: %{project: project} = page}, %{user: user}),
    do: {:navigate, %{url: Pages.effective_url(page, project, user)}}

  defp cast_step(%Step{step_type_id: "set_size_explicit", width: width, height: height}, _context),
    do: {:set_size, %{height: height, width: width}}

  defp cast_step(%Step{step_type_id: "full_screen_screenshot"}, _context),
    do: {:full_screen_screenshot, %{}}

  defp cast_step(%Step{step_type_id: "element_screenshot", element: %{strategy_id: strategy_id, selector: selector}}, _context),
    do: {:element_screenshot, %{strategy: strategy_id, selector: selector}}

  defp cast_step(%Step{step_type_id: "fill_field", element: %{selector: selector, strategy_id: strategy}, text: text}, _context),
    do: {:fill_field, %{selector: selector, strategy: strategy, text: text}}

  defp cast_step(%Step{step_type_id: "click", element: %{selector: selector, strategy_id: strategy}}, _context),
    do: {:click, %{selector: selector, strategy: strategy}}

  defp cast_step(%Step{step_type_id: "clear_annotations"}, _context),
    do: {:clear_annotations, %{}}

  defp cast_step(%Step{step_type_id: "full_screen_svg"}, _context) do
    {:full_screen_svg, %{}}
  end

  defp cast_step(%Step{step_type_id: "apply_annotation", annotation: annotation}, _context) do
    expression = AnnotationHandler.cast(annotation)
    {:evaluate_expression, %{expression: expression}}
  end
  defp cast_step(%Step{step_type_id: nil}, _context), do: {:do_nothing, %{}}

  def broadcast_step_update(step) do
    broadcast("data", "update", step)
    broadcast("data", "update", step.step_instance)
    step
  end

  def update_step_instance(%{result: {:ok, _result}, step_instance: step_instance} = step_handler) do
    {:ok, step_instance} = Client.update_step_instance(step_instance, %{status: :succeeded})
    Map.put(step_handler, :step_instance, step_instance)
  end
  def update_step_instance(%{result: {:error, message}, step_instance: step_instance} = step_handler) do
    {:ok, step_instance} = Client.update_step_instance(step_instance, %{status: :failed, error: %{message: message}})
    Map.put(step_handler, :step_instance, step_instance)
  end
  def update_step_instance(%{result: {:warn, message}, step_instance: step_instance} = step_handler) do
    {:ok, step_instance} = Client.update_step_instance(step_instance, %{status: :warning, warning: %{message: message}})
    Map.put(step_handler, :step_instance, step_instance)
  end

  def update_data(%{result: {:ok, base64}, command: {command_name, _}, step: step}) when command_name in @screenshot_commands do

  end
  def update_data(state_handler), do: state_handler

  def handle_process_instance_update({:ok, result, step}, process_instance) do
    broadcast("data", "update", process_instance)
    {:ok, result, step}
  end
  def handle_process_instance_update({:error, message, step}, process_instance) do
    updated_process_instance = Map.put(process_instance, :status, :failed)
    broadcast("data", "update", updated_process_instance)
    {:error, message, step}
  end
  def handle_process_instance_update({:warn, message, step}, process_instance) do
    updated_process_instance = Map.put(process_instance, :status, :warning)
    broadcast("data", "update", updated_process_instance)
    {:warn, message, step}
  end

  def handle_return_value({:ok, result, _step}), do: {:ok, result}
  def handle_return_value({:error, message, _step}), do: {:error, message}
  def handle_return_value({:warn, message, _step}), do: {:warn, message}

  def broadcast(channel, action, payload) do
    Phoenix.PubSub.broadcast(Userdocs.PubSub, channel, %{
      topic: channel,
      event: action,
      payload: payload
    })
  end
end
