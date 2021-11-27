defmodule UserdocsDesktop.ChromiumInstaller do
  require Logger
  alias Desktop.OS
  alias UserdocsDesktop.Paths

  def download() do
    Logger.debug("Downloading Chromium")
    download_url()
    |> Download.from([path: Paths.chromium_downloaded_file_path()])
    |> case do
      {:ok, path} -> {:ok, path}
      {:error, :eexist} -> {:ok, Paths.chromium_downloaded_file_path()}
      {:error, reason} -> raise("Download failed because #{reason}")
    end
  end

  def install() do
    Logger.debug("Installing Chromium")
    {:ok, _files} =
      Paths.chromium_downloaded_file_path()
      |> String.to_charlist()
      |> :zip.unzip(cwd: String.to_charlist(Paths.chromium_download_path()))

    unzipped_path =
      Paths.chromium_download_path()
      |> Path.join(chromium_url_file_name(Desktop.OS.type()))

    :ok = File.rename(unzipped_path, Paths.chromium_path())
    :ok = File.rm(Paths.chromium_downloaded_file_path())
  end

  def remove() do
    Logger.debug("Removing Chromium")
    File.ls!(Paths.chromium_path)
    |> Enum.each(fn(file) ->
      Path.expand(file, Paths.chromium_path)
      |> File.rm_rf()
    end)
    :ok
  end

  def download_url() do
    os_type = OS.type()

    chromium_host()
    |> Path.join("chromium-browser-snapshots")
    |> Path.join(chromium_url_path(os_type))
    |> Path.join(chromium_version())
    |> Path.join(chromium_url_file_name(os_type) <> ".zip")
  end

  def chromium_version(), do: "901912"

  def chromium_host(), do: "https://storage.googleapis.com"

  def chromium_url_path(Linux), do: "Linux_x64"
  def chromium_url_path(MacOS), do: "Mac"
  def chromium_url_path(Windows), do: "Win_x64"

  def chromium_url_file_name(Linux), do: "chrome-linux"
  def chromium_url_file_name(MacOS), do: "chrome-mac"
  def chromium_url_file_name(Windows), do: "chrome-win"
end
