defmodule BrowserController.Browser.Commands do
  require Logger

  alias Userdocs.StepInstances
  alias Userdocs.Pages
  alias Schemas.Steps.Step
  alias Schemas.Teams.Team
  alias Schemas.ProcessInstances.ProcessInstance

  alias BrowserController.Utilities

  alias ChromeRemoteInterface.RPC.Page
  alias ChromeRemoteInterface.RPC.DOM
  alias ChromeRemoteInterface.PageSession
  alias ChromeRemoteInterface.Session
  alias ChromeRemoteInterface.RPC.Runtime
  alias ChromeRemoteInterface.RPC.Emulation
  alias ChromeRemoteInterface.RPC.Input

  def apply(page_pid, command) do
    command
    |> cast_command()
    |> execute_command(page_pid)
  end

  """
  def execute_command({:execute_step, %{step: step, context: %{process_instance: %ProcessInstance{} = process_instance} = context}}, page_pid) do
    {:ok, step_instance} =
      %{
        id: UUID.uuid4(), status: :started, error: "", warning: "",
        step_id: step.id, process_instance_id: process_instance.id
      }
      |> StepInstances.create_step_instance()

    broadcast("data", "create", step_instance)
    step = Map.put(step, :step_instance, step_instance)

    step
    |> broadcast_step_update()
    |> cast_step(context)
    |> execute_command(page_pid)
    |> handle_step_result(step)
    |> handle_process_instance_update(process_instance)
    |> handle_return_value()
  end

  def execute_command({:execute_step, %{step: step, context: context}}, page_pid) do
    {:ok, step_instance} =
      %{id: UUID.uuid4(), status: :started, error: "", warning: "", step_id: step.id}
      |> StepInstances.create_step_instance()

    step = Map.put(step, :step_instance, step_instance)

    step
    |> broadcast_step_update()
    |> cast_step(context)
    |> execute_command(page_pid)
    |> handle_step_result(step)
    |> handle_return_value()
  end
  """

  def cast_command({:navigate, opts}), do: {:navigate, opts}
  def cast_command({:highlight, opts}), do: {:highlight, opts}
  def cast_command({:hide_highlight, opts}), do: {:hide_highlight, opts}
  def cast_command({:create_annotation, opts}), do: {:create_annotation, opts}
  def cast_command({:remove_annotation, opts}), do: {:remove_annotation, opts}
  def cast_command({:update_annotation, opts}), do: {:update_annotation, opts}
  def cast_command({:full_screen_screenshot, opts}), do: {:full_screen_screenshot, opts}
  def cast_command({:element_screenshot, opts}), do: {:element_screenshot, opts}
  def cast_command({:full_document_screenshot, opts}), do: {:full_document_screenshot, opts}
  def cast_command({:set_size, opts}), do: {:set_size, opts}
  def cast_command({:execute_step, opts}), do: {:execute_step, opts}
  def cast_command({:execute_process, opts}), do: {:execute_process, opts}
  def cast_command({:fill_field, opts}), do: {:fill_field, opts}
  def cast_command({:click, opts}), do: {:click, opts}
  def cast_command({:clear_annotations, opts}), do: {:clear_annotations, opts}
  def cast_command({:full_screen_svg, opts}), do: {:full_screen_svg, opts}

  def execute_command({:navigate, %{url: url}}, page_pid), do: navigate(page_pid, url)
  def execute_command({:highlight, %{strategy: strategy, selector: selector}}, page_pid), do: highlight(page_pid, strategy, selector)
  def execute_command({:hide_highlight, %{selector: selector}}, page_pid), do: hide_highlight(page_pid, selector)
  def execute_command({:full_document_screenshot, %{width: width}}, page_pid), do: full_document_screenshot(page_pid, width)
  def execute_command({:set_size, %{width: width, height: height}}, page_pid), do: set_size(page_pid, width, height)
  def execute_command({:full_screen_screenshot, _opts}, page_pid), do: full_screen_screenshot(page_pid)
  def execute_command({:clear_annotations, %{}}, page_pid), do: clear_annotations(page_pid)
  def execute_command({:click, %{strategy: strategy, selector: selector}}, page_pid), do: click(page_pid, strategy, selector)
  def execute_command({:fill_field, %{strategy: strategy, selector: selector, text: text}}, page_pid),
    do: fill_field(page_pid, strategy, selector, text)

  def execute_command({:element_screenshot, %{selector: selector, strategy: strategy}}, page_pid),
    do: element_screenshot(page_pid, strategy, selector)

  def execute_command({:do_nothing, _}, _page_pid), do: {:warn, "This command did nothing."}

  def execute_command({:create_annotation, %{annotation: annotation}}, page_pid) do
    Logger.info("#{__MODULE__} executing create_annotation command")
    Annotations.create(page_pid, annotation)
  end

  def execute_command({:remove_annotation, %{annotation: annotation}}, page_pid) do
    Logger.info("#{__MODULE__} executing remove_annotation command")
    Annotations.remove(page_pid, annotation)
  end

  def execute_command({:update_annotation, %{annotation: annotation}}, page_pid) do
    Logger.info("#{__MODULE__} executing update_annotation command")
    Annotations.remove(page_pid, annotation)
    Annotations.create(page_pid, annotation)
  end

  # def execute_command({:full_document_screenshot, %{on_complete: on_complete, width: width}}, page_pid) do
  #   Logger.info("#{__MODULE__} executing full document screenshot command with on_complete callback")
  #   {:ok, %{"result" => %{"cssContentSize" => %{"height" => height}}}}
  #     = Page.getLayoutMetrics(page_pid)
  #   execute_command({:set_size, %{width: width, height: height}}, page_pid)
  #   params = %{captureBeyondViewport: true, clip: %{height: height, width: width, x: 0, y: 0, scale: 1}}
  #   case Page.captureScreenshot(page_pid, params) do
  #     {:ok, %{"result" => %{"data" => base64}}} -> on_complete.(base64)
  #   end
  # end

  # def execute_command({:full_document_screenshot, %{width: _width, page_id: page_id}}, page_pid) do
  #   Logger.info("#{__MODULE__} executing full document screenshot command with page_id")
  #   case Page.captureScreenshot(page_pid) do
  #     {:ok, %{"result" => %{"data" => base64}}} ->
  #       opts = [preloads: [:project, :screenshots]]
  #       page = Client.get_page!(page_id, opts)
  #       Client.upsert_page_screenshot(page, base64)
  #   end
  # end

  # def execute_command({:full_screen_screenshot, %{on_complete: on_complete}}, page_pid) do
  #   Logger.info("#{__MODULE__} executing full screen screenshot command with on_complete callback")
  #   with {:ok, response} <- Page.captureScreenshot(page_pid),
  #        %{"result" => %{"data" => base64}} <- response
  #   do
  #     on_complete.(base64)
  #   else
  #     _ -> {:error, "Screenshot Collection failed"}
  #   end
  # end

  # def execute_command({:full_screen_screenshot, %{page_id: page_id, screenshot_id: nil}}, page_pid) do
  #   Logger.info("#{__MODULE__} executing full screen screenshot command with page id and nil screenshot id")
  #   with {:ok, response} <- Page.captureScreenshot(page_pid),
  #        %{"result" => %{"data" => base64}} <- response,
  #        page <- Client.get_page!(page_id),
  #        attrs <- Pages.create_page_screenshot_attrs(page, base64),
  #        {:ok, screenshot} <- Client.create_screenshot(attrs)
  #   do
  #     {:ok, screenshot}
  #   else
  #     _ -> {:error, "Screenshot Collection failed"}
  #   end
  # end

  # def execute_command({:full_screen_screenshot, %{page_id: page_id, screenshot_id: screenshot_id}}, page_pid) do
  #   Logger.info("#{__MODULE__} executing full screen screenshot command with page id and screenshot id")
  #   with {:ok, response} <- Page.captureScreenshot(page_pid),
  #        %{"result" => %{"data" => base64}} <- response,
  #        page <- Client.get_page!(page_id),
  #        screenshot <- Client.get_screenshot!(screenshot_id),
  #        attrs <- Pages.update_page_screenshot_attrs(page, base64),
  #        {:ok, screenshot} <- Client.update_screenshot(screenshot, attrs)
  #   do
  #     {:ok, screenshot}
  #   else
  #     _ -> {:error, "Screenshot Collection failed"}
  #   end
  # end


  # def execute_command({:element_screenshot, %{element: %{selector: selector, strategy_id: strategy_id}, on_complete: on_complete}}, page_pid) do
  #   Logger.info("#{__MODULE__} executing element screenshot command with on_complete callback")
  #   with {:ok, remote_object} <- Utilities.get_remote_object(strategy_id, selector, page_pid),
  #        {:ok, box} <- Utilities.get_box(page_pid, %{object_id: remote_object.object_id}),
  #        viewport <-
  #          %{
  #            x: box.content.upper_left.x,
  #            y: box.content.upper_left.y,
  #            width: box.width,
  #            height: box.height,
  #            scale: 1
  #          },
  #        {:ok, response} <- Page.captureScreenshot(page_pid, %{clip: viewport}),
  #        %{"result" => %{"data" => base64}} <- response
  #   do
  #     on_complete.(base64)
  #   else
  #     {:warn, message} -> {:warn, message}
  #     result -> Logger.error("Element screenshot failed because #{inspect result}")
  #   end
  # end


  def execute_command({:full_screen_svg, _opts}, page_pid) do
    Logger.info("Here's another one")
    Logger.info("#{__MODULE__} executing full screen svg command")
    Emulation.setEmulatedMedia(page_pid, %{media: "screen"})
    {:ok, %{"result" => %{"cssContentSize" => %{"height" => height}}}}
      = Page.getLayoutMetrics(page_pid)
    {:ok, %{"result" => %{"result" => %{"type" => "number", "value" => dpi}}}}
      = Runtime.evaluate(page_pid, %{expression: "window.dpi()"})
    Logger.info("Height: #{height} dpi: #{dpi}")
    zoom_factor = 1.25
    height_inches = height/dpi*zoom_factor
    opts = %{marginTop: 0, marginBottom: 0, marginLeft: 0, marginRight: 0, printBackground: true, preferCSSPageSize: true, displayHeaderFooter: true, paperHeight: height_inches}
    case Page.printToPDF(page_pid, opts) do
      {:ok, %{"result" => %{"data" => base64}}} ->
        input_location = "C:\\test\\test.pdf"
        output_location = "C:\\test\\test.svg"
        optimized_output_location = "C:\\test\\test.min.svg"
        binary = Base.decode64!(base64)
        File.write(input_location, binary)
        Logger.info("Starting Inkscape")
        System.cmd("D:\\Program Files\\Inkscape\\inkscape.exe", ["--without-gui", input_location, "--export-plain-svg=#{output_location}"], [stderr_to_stdout: true])
        Logger.info("Starting svgo #{Paths.svgo_path()}")
        Logger.info(inspect(["< #{output_location} > #{optimized_output_location}"]))
        System.shell("#{Paths.svgo_path()} < #{output_location} > #{optimized_output_location}")
        {:ok, %{}}
    end
  end

  defp navigate(page_pid, url) do
    Logger.info("#{__MODULE__} executing navigate command")
    PageSession.subscribe(page_pid, "Page.frameStartedLoading")
    Page.navigate(page_pid, %{url: url})
    receive do
      {:chrome_remote_interface, "Page.frameStartedLoading", _payload} ->
        #Logger.debug("Page Navigation started")
        PageSession.unsubscribe(page_pid, "Page.frameStartedLoading")
        PageSession.subscribe(page_pid, "Page.frameStoppedLoading")
        receive do
          {:chrome_remote_interface, "Page.frameStoppedLoading", _payload} ->
            #Logger.debug("Page Navigation Finished")
            PageSession.unsubscribe(page_pid, "Page.frameStoppedLoading")
            {:ok, %{}}
        end
    after
      4000 -> {:ok, %{}}
    end
  end

  defp highlight(page_pid, strategy, selector) do
    Logger.info("#{__MODULE__} executing highlight command")
    opts = %{showInfo: true, contentColor: %{r: 155, g: 11, b: 239, a: 0.7}}
    with {:ok, node_id} <- Utilities.get_node_id(strategy, selector, page_pid),
         {:ok, _} <- DOM.highlightNode(page_pid, %{nodeId: node_id, highlightConfig: opts}) do
      {:ok, "Node Highlighted"}
    else
      {:ok, 0} -> {:warn, "Node not found in browser"}
    end
  end

  defp hide_highlight(page_pid, selector) do
    Logger.info("#{__MODULE__} executing hide_highlight command")
    {:ok, root_node_id} = Utilities.get_root_node_id(page_pid)
    {:ok, %{"result" => %{"nodeId" => node_id}}} = DOM.querySelector(page_pid, %{nodeId: root_node_id, selector: selector})
    DOM.hideHighlight(page_pid, %{nodeId: node_id})
  end

  defp set_size(page_pid, width, height) do
    params = %{width: width, height: height, deviceScaleFactor: 0, mobile: false}
    with {:ok, _} <- Emulation.setDeviceMetricsOverride(page_pid, params),
         {:ok, result} <- Page.getLayoutMetrics(page_pid),
         %{"result" => %{"cssLayoutViewport" => %{"clientHeight" => height, "clientWidth" => width}}} <- result do
      {:ok, %{width: width, height: height}}
    end
  end

  defp full_document_screenshot(page_pid, width) do
    Logger.debug("Executing full document screenshot with width #{width}")
    with {:ok, result} <- Page.getLayoutMetrics(page_pid),
         {:ok, remote_object} <- Utilities.get_remote_object("css", "html", page_pid),
         {:ok, %{height: height}} <- Utilities.get_box(page_pid, %{object_id: remote_object.object_id}),
         {:ok, _dimensions} <- set_size(page_pid, width, height),
         params <- %{captureBeyondViewport: true, clip: %{height: height, width: width, x: 0, y: 0, scale: 1}},
         {:ok, result} <- Page.captureScreenshot(page_pid, params),
         %{"result" => %{"data" => base64}} <- result do
      {:ok, base64}
    end
  end

  defp full_screen_screenshot(page_pid) do
    Logger.info("#{__MODULE__} executing full screen screenshot command")
    with {:ok, result} <- Page.captureScreenshot(page_pid),
         %{"result" => %{"data" => base64}} <- result do
      {:ok, base64}
    end
  end

  defp element_screenshot(page_pid, strategy, selector) do
    Logger.info("#{__MODULE__} executing element screenshot command with on_complete callback")
    with {:ok, remote_object} <- Utilities.get_remote_object(strategy, selector, page_pid),
         {:ok, box} <- Utilities.get_box(page_pid, %{object_id: remote_object.object_id}),
         viewport <- cast_viewport(box),
         {:ok, response} <- Page.captureScreenshot(page_pid, %{clip: viewport}),
         %{"result" => %{"data" => base64}} <- response do
      {:ok, base64}
    else
      {:warn, message} -> {:warn, message}
      result -> Logger.error("Element screenshot failed because #{inspect result}")
    end
  end

  defp fill_field(page_pid, strategy, selector, text) do
    with {:ok, %{object_id: object_id}} <- Utilities.get_remote_object(strategy, selector, page_pid),
         {:ok, %{"result" => _focus_result}} <- DOM.focus(page_pid, %{objectId: object_id}),
         :ok <- type_text(page_pid, text),
         {:ok, %{"result" => result}} <- Utilities.blur(page_pid, object_id) do
      {:ok, result}
    else
      {:error, error_object} -> cast_error(error_object)
      {:warn, message} -> {:warn, message}
    end
  end

  defp click(page_pid, strategy, selector) do
    with {:ok, %{object_id: object_id}} <- Utilities.get_remote_object(strategy, selector, page_pid),
         {:ok, box} <- Utilities.get_box(page_pid, %{object_id: object_id}),
         x <- box.content.upper_left.x,
         y <- box.content.upper_left.y,
         {:ok, %{"result" => _}} <- Input.dispatchMouseEvent(page_pid, %{type: "mouseMoved", x: x, y: y}),
         {:ok, %{"result" => _}} <- Input.dispatchMouseEvent(page_pid, %{type: "mousePressed", button: "left", clickCount: 1,  x: x, y: y}),
         {:ok, %{"result" => _}} <- Input.dispatchMouseEvent(page_pid, %{type: "mouseReleased", button: "left", x: x, y: y}) do
      {:ok, %{}}
    else
      {:error, error_object} -> cast_error(error_object)
      {:warn, message} -> {:warn, message}
    end
  end

  defp clear_annotations(page_pid) do
    opts = %{
      expression: """
        elements = document.querySelectorAll(".userdocs-annotation");
        elements.forEach(element => element.remove());
        "ok"
      """
    }
    case Runtime.evaluate(page_pid, opts) do
      {:ok, %{"result" => %{"result" => %{"value" => "ok"}}}} -> {:ok, %{}}
      result -> Logger.error(inspect result)
    end
  end

  def broadcast(channel, action, payload) do
    Phoenix.PubSub.broadcast(Userdocs.PubSub, channel, %{
      topic: channel,
      event: action,
      payload: payload
    })
  end

  def cast_error(%{"error" => %{"code" => _code, "message" => message}}),
    do: {:error, message}

  def type_text(page_pid, text) do
    text
    |> String.graphemes()
    |> Enum.each(fn(char) ->
      Input.dispatchKeyEvent(page_pid, %{type: "keyDown", text: char})
      Input.dispatchKeyEvent(page_pid, %{type: "keyUp"})
    end)
    :ok
  end

  defp cast_viewport(box) do
    %{
      x: box.content.upper_left.x,
      y: box.content.upper_left.y,
      width: box.width,
      height: box.height,
      scale: 1
    }
  end
end
