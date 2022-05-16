defmodule BrowserController.Constants do
  @moduledoc "constants for use in the browser controller."
  alias Local.Paths

  def chrome_reconnected_page(host_url) do
    host_url <> "/html/browser_reconnected_page.html"
  end
  def chrome_extension_path() do
    Paths.extension_path()
  end
  def chrome_startup_page(%{initial_page: initial_page}) do
    initial_page
  end
  def chrome_startup_page(%{host_url: host_url}) do
    host_url <> "/html/browser_welcome_page.html"
  end
  def chrome_startup_args(%{host_url: _host_url} = opts) do
    # Middle bits are the default puppeteer args, with a few mods
    headless = case Map.get(opts, :headless, false) do
      false -> ""
      true -> "--headless"
    end
    port = Map.get(opts, :port, 9222)
    ~w(
      --remote-debugging-port=#{port}
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
      #{headless}

      #{chrome_startup_page(opts)}
    )
  end

  def script(host_url) do
    default_css_path = host_url <> "/styles/sui_font.css"
    team_css_path = host_url <> "/styles/team_css_overrides.css"
    annotations_path = host_url <> "/assets/annotations.js"
    """
    console.log('Running script');
    var team_style = document.createElement('link');
    team_style.rel = 'stylesheet'
    team_style.href = '#{team_css_path}'
    var default_style = document.createElement('link');
    default_style.rel = 'stylesheet'
    default_style.href = '#{default_css_path}'
    var script = document.createElement('script');
    script.type = 'text/javascript'
    script.src = '#{annotations_path}'
    window.dpi = (function () {
      let i = 1;
      while ( !hasMatch(i) ) i *= 2;
      function getValue(start, end) {
          if (start > end) return -1;
          let average = (start + end) / 2;
          if ( hasMatch(average) ) {
              if ( start == average || !hasMatch(average - 1) ) {
                  return average;
              } else {
                  return getValue(start, average - 1);
              }
          } else {
              return getValue(average + 1, end);
          }
      }
      function hasMatch(x) {
          return matchMedia(`(max-resolution: ${x}dpi)`).matches;}
      return getValue(i / 2, i) | 0;
    });
    document.addEventListener('DOMContentLoaded', () => {
      var head = document.getElementsByTagName('head')[0]
      head.appendChild(default_style);
      head.appendChild(team_style);
      head.appendChild(script);
    }, false);
    """
  end
end
