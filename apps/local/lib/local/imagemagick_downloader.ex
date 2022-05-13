defmodule Local.ImageMagickInstaller do
  @moduledoc "Tools for downloading and installing Imagemagick from the prepared files on our AWS bucket"
  require Logger
  alias Desktop.OS
  alias Local.Paths

  def download() do
    {:ok, pid} =
      %{
        path: Paths.imagemagick_downloaded_file_path(),
        url: imagemagick_host(),
        notify: self(),
        id: :chrome
      }
      |> Downloader.start_link()

    Downloader.start_download(pid)
  end

  def install() do
    os_type = OS.type()
    Logger.debug("#{__MODULE__} Installing Image Magick for #{os_type}")
    {:ok, _files} =
      Paths.imagemagick_downloaded_file_path()
      |> String.to_charlist()
      |> :zip.unzip(cwd: String.to_charlist(Paths.imagemagick_path()))

    :ok = File.rm(Paths.imagemagick_downloaded_file_path())
  end

  def remove() do
    Logger.debug("#{__MODULE__} Removing Image Magick for")
    File.ls!(Paths.imagemagick_path())
    |> Enum.each(fn(file) ->
      Path.expand(file, Paths.imagemagick_path())
      |> File.rm_rf()
    end)
    :ok
  end

  def imagemagick_host(), do: imagemagick_host(OS.type())
  def imagemagick_host(MacOS), do: "https://userdocs-vendor.s3.us-east-2.amazonaws.com/magick-macos.zip"
  def imagemagick_host(Windows), do: "https://userdocs-vendor.s3.us-east-2.amazonaws.com/magick-win.zip"
  def imagemagick_host(Linux), do: "https://userdocs-vendor.s3.us-east-2.amazonaws.com/magick-linux.zip"
end
