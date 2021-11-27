defmodule UserdocsDesktop.Paths do
  def home_path(), do: Desktop.OS.home()
  def chromium_path(), do: Path.join([Desktop.OS.home(), "userdocs", "chromium"])
  def chromium_download_path(), do: Path.join([Desktop.OS.home(), "userdocs", "chromium_download"])
  def chromium_downloaded_file_path(), do: Path.join([Desktop.OS.home(), "userdocs", "chromium_download", "chromium.zip"])
  def image_magick_path(), do: Path.join([Desktop.OS.home(), "userdocs", "image_magick"])
  def default_images_path(), do: Path.join([Desktop.OS.home(), "userdocs", "images"])
  def default_user_data_dir_path(), do: Path.join([Desktop.OS.home(), "userdocs", "user_data_dir"])

  def chromium_executable_path() do
    case Desktop.OS.type() do
      Windows -> chromium_path() |> Path.join("chrome.exe")
      Linux -> chromium_path() |> Path.join("chrome")
      MacOS ->
        chromium_path()
        |> Path.join("Chromium.app")
        |> Path.join("Contents")
        |> Path.join("MacOS")
        |> Path.join("chrome.exe")
    end
  end
end
