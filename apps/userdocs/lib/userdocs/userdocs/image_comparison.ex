defmodule Userdocs.ImageComparison do
  @moduledoc "handles image comparison using imagemagick"
  require Logger
  alias Schemas.Screenshots.Screenshot

  def original(%Screenshot{} = screenshot), do: "#{screenshot.id}.png"
  def provisional(%Screenshot{} = screenshot), do: "#{screenshot.id}-provisional.png"
  def diff(%Screenshot{} = screenshot), do: "#{screenshot.id}-diff.png"

  def compare(%Screenshot{} = screenshot, path, magick_path) do
    original = Path.join(path, original(screenshot))
    provisional = Path.join(path, provisional(screenshot))
    diff = Path.join(path, diff(screenshot))
    ping(original, provisional, magick_path)
    |> score(original, provisional, diff, magick_path)
  end

  def ping(original, provisional, magick_path) do
    r = System.cmd(magick_path, ["identify", "-ping", "-format", "%w,%h", original], [stderr_to_stdout: true]) |> parse_dimensions()
    r2 = System.cmd(magick_path, ["identify", "-ping", "-format", "%w,%h", provisional], [stderr_to_stdout: true]) |> parse_dimensions()
    case r == r2 do
      false -> {:ok, Map.merge(r, %{score: 1, result_code: :size_difference})}
      true -> {:continue, r}
    end
  end

  def ping(image_path, magick_path) do
    System.cmd(magick_path, ["identify", "-ping", "-format", "%w,%h", image_path], [stderr_to_stdout: true])
    |> parse_dimensions()
  end

  def parse_dimensions({dimensions, _}) do
    [w, h] = String.split(dimensions, ",")
    %{w: String.to_integer(w), h: String.to_integer(h)}
  end

  def score({:ok, _} = result, _, _, _, _), do: result
  def score({:continue, %{w: w, h: h} = state}, original, provisional, diff, magick_path) do
    attrs = ["compare", "-metric", "AE", original, provisional, diff]
    case System.cmd(magick_path, attrs, [stderr_to_stdout: true]) do
      {result, 1} -> result
      {result, 0} -> result
    end
    |> case do
      "0" -> {:ok, Map.merge(state, %{score: 0.0, result_code: :no_difference})}
      result -> {:ok, Map.merge(state, %{score:  String.to_integer(result) / (w * h), result_code: :image_difference})}
    end
  end
end
