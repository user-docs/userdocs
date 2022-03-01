defmodule UserdocsDesktopWeb.DisplayCommand do
  @moduledoc "Casts browser commands for display"

  def apply({:navigate, %{url: url}}), do: "Navigate to #{url}"
  def apply({:full_screen_screenshot, _params}), do: "Full Screen Screenshot"
  def apply({:set_size, %{width: w, height: h}}), do: "Set Viewport Size to #{w} X #{h}"
end
