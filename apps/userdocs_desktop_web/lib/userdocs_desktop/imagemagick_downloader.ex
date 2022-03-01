defmodule UserdocsDesktop.ImageMagickInstaller do
  @moduledoc "Tools for downloading and installing Imagemagick from the prepared files on our AWS bucket"
  require Logger
  alias Desktop.OS
  alias UserdocsDesktop.Paths

  def download() do
    Logger.debug("#{__MODULE__} Downloading Image Magick")
    os_type = OS.type()
    imagemagick_host(os_type)
    |> Download.from([path: Paths.image_magick_downloaded_file_path()])
    |> case do
      {:ok, path} -> {:ok, path}
      {:error, :eexist} -> {:ok, Paths.image_magick_downloaded_file_path()}
      {:error, reason} -> raise("Download failed because #{reason}")
    end
  end

  def install() do
    os_type = OS.type()
    Logger.debug("#{__MODULE__} Installing Image Magick for #{os_type}")
    {:ok, _files} =
      Paths.image_magick_downloaded_file_path()
      |> String.to_charlist()
      |> :zip.unzip(cwd: String.to_charlist(Paths.image_magick_path()))

    :ok = File.rm(Paths.image_magick_downloaded_file_path())
  end

  def remove() do
    Logger.debug("#{__MODULE__} Removing Image Magick for")
    File.ls!(Paths.image_magick_path())
    |> Enum.each(fn(file) ->
      Path.expand(file, Paths.image_magick_path())
      |> File.rm_rf()
    end)
    :ok
  end

  def imagemagick_host(MacOS), do: "https://userdocs-vendor.s3.us-east-2.amazonaws.com/magick-macos.zip"
  def imagemagick_host(Windows), do: "https://userdocs-vendor.s3.us-east-2.amazonaws.com/magick-win.zip"
  def imagemagick_host(Linux), do: "https://userdocs-vendor.s3.us-east-2.amazonaws.com/magick-linux.zip"
end
