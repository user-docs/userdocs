defmodule Local.ImageComparison do
  @moduledoc "handles image comparison using imagemagick"
  require Logger
  @identify ["identify", "-ping", "-format", "%w,%h"]
  @compare ["compare", "-metric", "AE"]

  def compare(%{image: original, provisional: provisional} = paths, magick_path) do
    with {:ok, original_dimensions} <- execute_identify(magick_path, original),
         {:ok, provisional_dimensions} <- execute_identify(magick_path, provisional),
         {:ok, dimensions} <- compare_size(original_dimensions, provisional_dimensions),
         {:ok, result} <- compare_images(dimensions, paths, magick_path) do
      {:ok, result}
    else
      {:size_difference, result} -> {:ok, result}
      {:error, _} = result -> result
    end
  end

  def execute_identify(magick_path, image_path) do
    magick_path
    |> System.cmd(@identify ++ [image_path], stderr_to_stdout: true)
    |> normalize_identify_result()
    |> parse_dimensions()
  end

  defp normalize_identify_result({"identify: UnableToOpenBlob" <> _, 1}),
    do: {:error, "File not found"}

  defp normalize_identify_result({dimensions, _}),
    do: {:ok, dimensions}

  def parse_dimensions({:error, _} = result), do: result

  def parse_dimensions({:ok, dimensions}) do
    [w, h] = String.split(dimensions, ",")
    {:ok, %{w: String.to_integer(w), h: String.to_integer(h)}}
  end

  defp compare_size(dimensions, dimensions), do: {:ok, dimensions}

  defp compare_size(dimensions, _different),
    do: {:size_difference, Map.merge(dimensions, %{score: 1, result_code: :size_difference})}

  def compare_images(dimensions, paths, magick_path) do
    magick_path
    |> execute_compare(paths)
    |> normalize_compare_result()
    |> score_result(dimensions)
  end

  def execute_compare(magick_path, %{image: original, provisional: provisional, diff: diff}) do
    System.cmd(magick_path, @compare ++ [original, provisional, diff], stderr_to_stdout: true)
  end

  defp normalize_compare_result({result, 1}), do: {:ok, result}
  defp normalize_compare_result({result, 0}), do: {:ok, result}

  defp score_result({:ok, "0"}, _), do: {:ok, %{score: 0.0, result_code: :no_difference}}
  defp score_result({:ok, result}, %{w: w, h: h}) do
    score = String.to_integer(result) / (w * h)
    {:ok, %{score: score, result_code: :image_difference}}
  end
end
