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
      aws_diff_screenshot: UUID.uuid4(),
      aws_screenshot: UUID.uuid4(),
      aws_provisional_screenshot: UUID.uuid4(),
      score: 0.0,
      status: :ok
    }
    |> Map.merge(params)
  end

  def screenshot_attrs(:valid_string_keys, params) do
    %{
      "name" => UUID.uuid4(),
      "aws_diff_screenshot" => UUID.uuid4(),
      "aws_screenshot" => UUID.uuid4(),
      "aws_provisional_screenshot" => UUID.uuid4(),
      "score" => 0.0,
      "status" => :ok
    }
    |> Map.merge(params)
  end

  def screenshot_attrs(:invalid, params) do
    %{
      id: nil,
      name: UUID.uuid4(),
      aws_diff_screenshot: UUID.uuid4(),
      aws_screenshot: UUID.uuid4(),
      aws_provisional_screenshot: UUID.uuid4()
    }
    |> Map.merge(params)
  end

  def screenshot_attrs(:invalid_string_keys, params) do
    %{
      "id" => "",
      "name" => UUID.uuid4(),
      "aws_diff_screenshot" => UUID.uuid4(),
      "aws_screenshot" => UUID.uuid4(),
      "aws_provisional_screenshot" => UUID.uuid4()
    }
    |> Map.merge(params)
  end
end
