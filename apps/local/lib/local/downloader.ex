defmodule Local.Downloader do
  use GenServer
  alias HTTPoison.{AsyncHeaders, AsyncStatus, AsyncChunk, AsyncEnd}

  def start_link(default) when is_map(default) do
    GenServer.start_link(__MODULE__, default)
  end

  @impl true
  def init(state) do
    {:ok, state}
  end

  def start_download(pid), do: GenServer.cast(pid, :start_download)
  def status(pid), do: GenServer.call(pid, :status)

  @impl true
  def handle_cast(:start_download, %{url: url, path: path} = state) do
    with {:ok, file} <- do_start_download(url, path) do
      {:noreply, Map.merge(state, %{file: file, downloaded: 0})}
    end
  end

  @impl true
  def handle_call(:status, _from, %{downloaded: size, content_length: total} = state) do
    {:reply, size / total, state}
  end

  @impl true
  def handle_info(%AsyncHeaders{headers: headers}, state) do
    {_, content_length} = Enum.find(headers, fn({ header_name, _value }) ->
      header_name == "content-length" || header_name == "Content-Length"
    end)

    {:noreply, Map.put(state, :content_length, content_length)}
  end
  def handle_info(%AsyncStatus{code: 200}, state) do
    {:noreply, state}
  end
  def handle_info(%AsyncStatus{code: _}, state) do
    finish_download({:error, :unexpected_status_code}, state)
    {:noreply, state}
  end
  def handle_info(%AsyncChunk{chunk: data}, %{downloaded: size, file: file, content_length: total} = state) do
    IO.binwrite(file, data)
    {:noreply, Map.put(state, :downloaded, size + byte_size(data))}
  end
  def handle_info(%AsyncEnd{}, state) do
    finish_download({:ok, state})
    {:stop, :normal, state}
  end

  defp do_start_download(url, path) do
    with {:ok, file} <- create_file(path),
         {:ok, _result} <- HTTPoison.get(url, %{}, stream_to: self()) do
      {:ok, file}
    else
      {:error, _reason} -> File.rm!(path)
    end
  end

  defp finish_download({:error, _}, %{path: path}), do: File.rm!(path)
  defp finish_download({:ok, %{notify: pid, id: id}}),
    do: send(pid, {:download_complete, %{from: :downloader, id: id}})

  defp create_file(path) do
    if File.exists?(path), do: File.rm(path)

    with {:ok, file} <- File.open(path, [:write, :exclusive]) do
      {:ok, file}
    end
  end
end
