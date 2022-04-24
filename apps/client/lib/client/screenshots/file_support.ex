defmodule Client.Screenshots.FileSupport do
  alias Local.Paths

  def ensure_dir_exists(path) do
    case File.mkdir(path) do
      :ok -> :ok
      {:error, :eexist} -> :ok
      other -> other
    end
  end

  def ensure_deleted(path) do
    case File.rm(path) do
      :ok -> :ok
      {:error, :enoent} -> :ok
      other -> other
    end
  end

  def encoded_placeholder_image() do
    Paths.image_placeholder_path()
    |> File.read!()
    |> Base.encode64()
  end
end
