defmodule UserdocsDesktop.Paths do
  @moduledoc "Paths used by the Desktop application"

  def home_path(), do: Desktop.OS.home()
  def chromium_path(), do: Path.join([Desktop.OS.home(), "userdocs", "chromium"])
  def chromium_download_path(), do: Path.join([Desktop.OS.home(), "userdocs", "downloads", "chromium"])
  def chromium_downloaded_file_path(), do: Path.join([Desktop.OS.home(), "userdocs", "downloads", "chromium", "chromium.zip"])
  def default_user_data_dir_path(), do: Path.join([Desktop.OS.home(), "userdocs", "user_data_dir"])

  def chromium_executable_path() do
    case Desktop.OS.type() do
      Windows -> chromium_path() |> Path.join("chrome.exe")
      Linux -> chromium_path() |> Path.join("chrome")
      MacOS -> Path.join([chromium_path(), "Chromium.app", "Contents", "MacOS", "chrome.exe"])
    end
  end

  def image_repo_path(), do: Path.join([Desktop.OS.home(), "userdocs", "internal_data", "images"])
  def image_magick_download_path(), do: Path.join([Desktop.OS.home(), "userdocs", "downloads", "image_magick"])
  def image_magick_downloaded_file_path(), do: Path.join([Desktop.OS.home(), "userdocs", "downloads", "image_magick", "magick.zip"])
  def image_magick_path(), do: Path.join([Desktop.OS.home(), "userdocs", "image_magick"])
  def image_magick_executable_path(), do: image_magick_executable_path(Desktop.OS.type())
  def image_magick_executable_path(Windows), do: Path.join([image_magick_path(), "magick.exe"])
  def image_magick_executable_path(Linux), do: Path.join([image_magick_path(), "magick"])
  def image_magick_executable_path(MacOS), do: Path.join([image_magick_path(), "bin", "magick"])

  def vendor_path(), do: Path.join([Desktop.OS.home(), "userdocs", "vendor"])

  def svgo_path(), do: svgo_path(Desktop.OS.type())
  def svgo_path(Windows), do: Path.join([vendor_path(), "svgop.exe"])

  def default_images_path(), do: Path.join([Desktop.OS.home(), "userdocs", "images"])
  def assets_dir(), do: Path.join([:code.priv_dir(:userdocs_desktop_web), "static", "assets"])
  def team_css_override_file(), do: Path.join(assets_dir(), "team_css_overrides.css")
end
