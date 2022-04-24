defmodule Local.Paths do
  @moduledoc "Paths used by the Desktop application"

  def home_path(), do: Desktop.OS.home()
  def userdocs_path(), do: Path.join(Desktop.OS.home(), "userdocs")
  def bin_path(), do: Path.join(userdocs_path(), "bin")
  def downloads_path(), do: Path.join(userdocs_path(), "downloads")

  def chromium_path(), do: Path.join(bin_path(), "chromium")
  def chromium_download_path(), do: Path.join(downloads_path(), "chromium")
  def chromium_downloaded_file_path(), do: Path.join(chromium_download_path(), "chromium.zip")
  def chromium_executable_path() do
    case Desktop.OS.type() do
      Windows -> chromium_path() |> Path.join("chrome.exe")
      Linux -> chromium_path() |> Path.join("chrome")
      MacOS -> Path.join([chromium_path(), "Chromium.app", "Contents", "MacOS", "chrome.exe"])
    end
  end

  def imagemagick_download_path(), do: Path.join(downloads_path(), "imagemagick")
  def imagemagick_downloaded_file_path(), do: Path.join(imagemagick_download_path(), "magick.zip")
  def imagemagick_path(), do: Path.join(bin_path(), "imagemagick")
  def imagemagick_executable_path(), do: imagemagick_executable_path(Desktop.OS.type())
  def imagemagick_executable_path(Windows), do: Path.join(imagemagick_path(), "magick.exe")
  def imagemagick_executable_path(Linux), do: Path.join(imagemagick_path(), "magick")
  def imagemagick_executable_path(MacOS), do: Path.join([imagemagick_path(), "bin", "magick"])

  def svgo_path(), do: svgo_path(Desktop.OS.type())
  def svgo_path(Windows), do: Path.join(bin_path(), "svgop.exe")

  def default_user_data_dir_path(), do: Path.join(userdocs_path(), "user_data_dir")
  def extension_path(), do: Path.join(userdocs_path(), "extension")

  def image_repo_path(), do: Path.join([userdocs_path(), "data", "images"])

  def default_images_path(), do: Path.join(userdocs_path(), "images")
  def assets_dir(), do: Path.join([:code.priv_dir(:userdocs), "static", "assets"])
  def team_css_override_file(), do: Path.join(assets_dir(), "team_css_overrides.css")

  def image_placeholder_path(), do: Path.join([:code.priv_dir(:local), "static", "images", "userdocs_placeholder.png"])
end
