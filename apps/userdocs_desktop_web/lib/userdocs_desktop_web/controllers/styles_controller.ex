defmodule UserdocsDesktopWeb.StylesController do
  use UserdocsDesktopWeb, :controller
  alias UserdocsDesktopWeb.Endpoint

  def index(conn, %{"filename" => "team_css_overrides.css"}) do
    user = Client.current_user()
    conn
    |> Plug.Conn.put_resp_header("content-type", "text/css")
    |> text(user.selected_team.css)
  end

  def index(conn, %{"filename" => "sui_font.css"}) do
    fonts = """
      @font-face {
        font-family: "sui";
        src: url("#{Endpoint.url() <> Routes.static_path(conn, "/fonts/sui.woff")}") format('woff');
        font-weight: normal;
        font-style: italic;
      }
      @font-face {
        font-family: "sui";
        src: url("#{Endpoint.url() <> Routes.static_path(conn, "/fonts/sui.woff")}") format('woff');
        font-weight: bold;
        font-style: normal;
      }
      @font-face {
        font-family: "sui";
        src: url("#{Endpoint.url() <> Routes.static_path(conn, "/fonts/sui.woff")}") format('woff');
        font-style: italic;
      }
      @font-face {
        font-family: "sui";
        src: url("#{Endpoint.url() <> Routes.static_path(conn, "/fonts/sui.woff")}") format('woff');
        font-weight: bold;
      }
      @font-face {
        font-family: "sui";
        src: url("#{Endpoint.url() <> Routes.static_path(conn, "/fonts/sui.woff")}") format('woff');
      }
    """
    conn
    |> Plug.Conn.put_resp_header("content-type", "text/css")
    |> text(fonts)
  end
end
