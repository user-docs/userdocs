defmodule Userdocs.ScreenshotFixtures do
  @moduledoc false
  alias Userdocs.Screenshots

  def screenshot(params, opts) do
    {:ok, screenshot} = screenshot_attrs(:valid, params) |> Screenshots.create_screenshot(opts)
    screenshot
  end

  def screenshot_struct(attrs) do
    {:ok, screenshot} = screenshot_attrs(:valid, attrs) |> Screenshots.create_screenshot_struct()
    screenshot
  end

  def screenshot_attrs(:valid, params) do
    %{
      id: UUID.uuid4(),
      name: UUID.uuid4(),
      score: 0.0,
      status: :ok,
      base64: single_black_pixel()
    }
    |> Map.merge(params)
  end

  def screenshot_attrs(:valid_string_keys, params) do
    %{
      "id" => UUID.uuid4(),
      "name" => UUID.uuid4(),
      "score" => 0.0,
      "status" => :ok,
      "base64" => single_black_pixel()
    }
    |> Map.merge(params)
  end

  def screenshot_attrs(:invalid, params) do
    %{
      id: nil,
      name: UUID.uuid4(),
      base64: single_black_pixel()
    }
    |> Map.merge(params)
  end

  def screenshot_attrs(:invalid_string_keys, params) do
    %{
      "id" => "",
      "name" => UUID.uuid4(),
      "base64" => single_black_pixel()
    }
    |> Map.merge(params)
  end

  def single_white_pixel(), do: "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAMSURBVBhXY/j//z8ABf4C/qc1gYQAAAAASUVORK5CYII="
  def single_black_pixel(), do: "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAANSURBVBhXY8jPz/8PAATrAk3xWKD8AAAAAElFTkSuQmCC"
  def single_red_pixel_start(), do: "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABlBMVEXXFi7///8FrwllAAAAAWJLR0QB"
end
