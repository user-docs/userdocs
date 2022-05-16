defmodule Local.ChromiumInstaller do
  @moduledoc "Functions for downloading and installing chrome"
  require Logger
  alias Desktop.OS
  alias Local.Paths
  alias Local.Downloader

  def download() do
    {:ok, pid} =
      %{
        path: Paths.chromium_downloaded_file_path(),
        url: chromium_host(),
        notify: self(),
        id: :chrome
      }
      |> Downloader.start_link()

    Downloader.start_download(pid)
  end

  def install() do
    Logger.debug("#{__MODULE__} Installing Chromium")
    Paths.chromium_downloaded_file_path()
    |> String.to_charlist()
    |> :zip.unzip(cwd: String.to_charlist(Paths.chromium_download_path()))
    |> case do
      {:ok, _files} = result -> result
      {:error, reason} -> Logger.error("#{inspect(reason)}")
    end

    unzipped_path =
      Paths.chromium_download_path()
      |> Path.join("chromium")

    case File.rename(unzipped_path, Paths.chromium_path()) do
      :ok -> nil
      {:error, :eexist} -> nil
      {:error, :enoent} -> nil
      {:error, :bad_eocd} -> raise("BADEOCED")
    end
    :ok = File.rm(Paths.chromium_downloaded_file_path())
  end

  def remove() do
    Logger.debug("#{__MODULE__} Removing Chromium")
    File.ls!(Paths.chromium_path)
    |> Enum.each(fn(file) ->
      Path.expand(file, Paths.chromium_path)
      |> File.rm_rf()
    end)
    :ok
  end

  def clean() do
    Logger.debug("#{__MODULE__} Cleaning download directory")
    File.rm(Paths.chromium_downloaded_file_path())
  end

  def chromium_host(), do: chromium_host(OS.type())
  def chromium_host(MacOS), do: "https://userdocs-vendor.s3.us-east-2.amazonaws.com/chromium-mac.zip"
  def chromium_host(Windows), do: "https://userdocs-vendor.s3.us-east-2.amazonaws.com/chromium-win.zip"
  def chromium_host(Linux), do: "https://userdocs-vendor.s3.us-east-2.amazonaws.com/chromium-linux.zip"
end
