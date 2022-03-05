defmodule BrowserController.Constants do
  @moduledoc "constants for use in the browser controller."

  def chrome_reconnected_page(url) do
    url <> "/html/browser_reconnected_page.html"
  end
  def chrome_extension_path() do
    Path.join([:code.priv_dir(:userdocs_desktop_web), "static", "assets", "extension", "public"])

  end
  def chrome_startup_page(url) do
    url <> "/html/browser_welcome_page.html"
  end
  def chrome_startup_args(url) do
    # Middle bits are the default puppeteer args, with a few mods
    ~w(
      --remote-debugging-port=9222
      --load-extension=#{chrome_extension_path()}
      --force-device-scale-factor=1
      --high-dpi-support=1

      --disable-background-networking
      --enable-features=NetworkService,NetworkServiceInProcess
      --disable-background-timer-throttling
      --disable-backgrounding-occluded-windows
      --disable-breakpad
      --disable-client-side-phishing-detection
      --disable-default-apps
      --disable-dev-shm-usage
      --disable-features=Translate
      --disable-hang-monitor
      --disable-ipc-flooding-protection
      --disable-popup-blocking
      --disable-prompt-on-repost
      --disable-renderer-backgrounding
      --disable-sync
      --force-color-profile=srgb
      --metrics-recording-only
      --no-first-run
      --enable-automation
      --password-store=basic
      --use-mock-keychain
      --enable-blink-features=IdleDetection
      --export-tagged-pdf

      #{chrome_startup_page(url)}
    )
  end
end
