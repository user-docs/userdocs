defmodule UserdocsDesktop.BrowserController.Constants do

  def chrome_reconnected_page() do
    url = UserdocsDesktopWeb.Endpoint.url()
    path = UserdocsDesktopWeb.Router.Helpers.static_path(UserdocsDesktopWeb.Endpoint, "/html/browser_reconnected_page.html")
    url <> path
  end
  def chrome_extension_path() do
    Path.join([:code.priv_dir(:userdocs_desktop_web), "static", "assets", "extension", "public"])

  end
  def chrome_startup_page() do
    url = UserdocsDesktopWeb.Endpoint.url()
    path = UserdocsDesktopWeb.Router.Helpers.static_path(UserdocsDesktopWeb.Endpoint, "/html/browser_welcome_page.html")
    url <> path
  end
  def chrome_startup_args() do
    ~w(
      --remote-debugging-port=9222
      --enable-automation"
      --load-extension=#{chrome_extension_path()}
      #{chrome_startup_page()}
    )
  end
end
