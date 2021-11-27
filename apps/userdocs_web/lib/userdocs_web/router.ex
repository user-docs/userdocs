defmodule UserdocsWeb.Router do
  use UserdocsWeb, :router
  use Pow.Phoenix.Router
  use Pow.Extension.Phoenix.Router,
    extensions: [PowResetPassword, PowEmailConfirmation, PowInvitation]

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :protected do
    plug Pow.Plug.RequireAuthenticated, error_handler: Pow.Phoenix.PlugErrorHandler
    plug UserdocsWeb.API.Auth.Plug, otp_app: :userdocs_web
  end

  pipeline :not_authenticated do
    plug Pow.Plug.RequireNotAuthenticated, error_handler: Pow.Phoenix.PlugErrorHandler
  end

  pipeline :api do
    plug :accepts, ["json"]
    plug UserdocsWeb.API.Auth.Plug, otp_app: :userdocs_web
  end

  pipeline :api_protected do
    plug Pow.Plug.RequireAuthenticated, error_handler: UserdocsWeb.API.Auth.ErrorHandler
  end

  scope "/api", UserdocsWeb.API, as: :api do
    pipe_through :api

    resources "/strategies", StrategyController, except: [:new, :edit]
    resources "/annotation_types", AnnotationTypeController, except: [:new, :edit]
    resources "/users", UserController, except: [:new, :edit]
    resources "/teams", TeamController, except: [:new, :edit]
    resources "/team_users", TeamUserController, only: [:index, :delete]
    resources "/projects", ProjectController, except: [:new, :edit]
    resources "/pages", PageController, except: [:new, :edit]
    resources "/elements", ElementController, except: [:new, :edit]
    resources "/element_annotations", ElementAnnotationController, except: [:new, :edit]
    resources "/annotations", AnnotationController, except: [:new, :edit]

    resources "/registration", RegistrationController, singleton: true, only: [:create]
    resources "/session", SessionController, singleton: true, only: [:create, :delete]
    post "/session/renew", SessionController, :renew
    post "/invite", InvitationController, :create
  end

  scope "/api", as: :api do
    pipe_through [:api, :api_protected]

    get "/session/current_user", UserdocsWeb.CurrentUserController, :get
  end

  scope "/" do
    pipe_through :browser
    pow_session_routes()
    pow_extension_routes()
  end

  def put_user_agent_data(conn, _opts) do
    ua = get_req_header(conn, "user-agent")
    ua =
      case ua do
        [ua | _] -> ua
        [] -> "Mozilla/5.0 (Linux; Android 7.0; SM-G930VC Build/NRD90M; wv)"
      end

    conn
    |> put_session(:os, UAInspector.parse(ua).os.name)
  end

  if Mix.env() in [:dev, :test] do
    import Phoenix.LiveDashboard.Router

    scope "/" do
      pipe_through :browser
      live_dashboard "/dashboard", metrics: UserdocsWeb.Telemetry
    end
  end
end
