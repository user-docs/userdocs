defmodule UserdocsDesktop.Windows do
  def browser_controls_opts() do
    [
      app: :userdocs_desktop_web,
      id: BrowserControls,
      title: "Browser Controls",
      size: {200, 500},
      icon: "icon.png",
      hidden: true,
      url: "http://localhost:4001/browser_controls"
    ]
  end
end
