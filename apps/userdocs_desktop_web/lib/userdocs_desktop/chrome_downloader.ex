defmodule UserdocsDesktop.ChromiumInstaller do
  @moduledoc "Functions for downloading and installing chrome"
  require Logger
  alias Desktop.OS
  alias UserdocsDesktop.Paths

  def download() do
    Logger.debug("#{__MODULE__} Downloading Chromium")
    os_type = OS.type()
    chromium_host(os_type)
    |> Download.from([path: Paths.chromium_downloaded_file_path()])
    |> case do
      {:ok, path} ->
        Logger.debug("#{__MODULE__} Finished downloading Chromium")
        {:ok, path}
      {:error, :eexist} -> {:ok, Paths.chromium_downloaded_file_path()}
      {:error, reason} -> raise("Download failed because #{reason}")
    end
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

    :ok = File.rename(unzipped_path, Paths.chromium_path())
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

  def chromium_host(MacOS), do: "https://userdocs-vendor.s3.us-east-2.amazonaws.com/chromium-mac.zip"
  def chromium_host(Windows), do: "https://userdocs-vendor.s3.us-east-2.amazonaws.com/chromium-win.zip"
  def chromium_host(Linux), do: "https://userdocs-vendor.s3.us-east-2.amazonaws.com/chromium-linux.zip"
end
