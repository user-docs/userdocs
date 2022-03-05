defmodule UserdocsDesktopWeb.Router do
  use UserdocsDesktopWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_live_flash
    plug :put_root_layout, {UserdocsDesktopWeb.LayoutView, :root}
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", UserdocsDesktopWeb do
    pipe_through :browser

    live "/", HomeLive, :index
    live "/session/new", SessionLive.Index, :new
    live "/initialize", InitializeLive, :index
    live "/browser_controls", BrowserControlsLive, :index

    get "/styles/:filename", StylesController, :index

    # Teams
    live "/teams/new", TeamLive.Index, :new
    live "/teams", TeamLive.Index, :index
    live "/teams/:id", TeamLive.Show, :show
    live "/teams/:id/edit", TeamLive.Index, :edit
    live "/teams/:id/invite", TeamLive.Index, :invite

    # Pages
    live "/pages", PageLive.Index, :index
    live "/pages/new", PageLive.Index, :new
    live "/pages/:id/edit", PageLive.Index, :edit
    live "/pages/:id", PageLive.Show, :show
    live "/pages/:id/review_screenshot", PageLive.Index, :review_screenshot
    live "/pages/:page_id/element/new", PageLive.Show, :new_element
    live "/pages/:id/show/edit", PageLive.Show, :edit

    # Annotations
    live "/pages/:page_id/annotations", AnnotationLive.Index, :index
    live "/pages/:page_id/annotations/new", AnnotationLive.Index, :new
    live "/pages/:page_id/annotations/:id/edit", AnnotationLive.Index, :edit

    # Elements
    live "/pages/:page_id/elements", ElementLive.Index, :index
    live "/pages/:page_id/elements/new", ElementLive.Index, :new
    live "/pages/:page_id/elements/:element_id/edit", ElementLive.Index, :edit
    live "/elements/new", ElementLive.Index, :new
    live "/elements/:id/edit", ElementLive.Index, :edit

    # Projects
    live "/teams/:team_id/projects", ProjectLive.Index, :index
    live "/projects", ProjectLive.Index, :index
    live "/projects/:id/edit", ProjectLive.Index, :edit
    live "/projects/new", ProjectLive.Index, :new
    live "/projects/:id", ProjectLive.Show, :show

    # Screenshots
    live "/screenshots", ScreenshotLive.Index, :index
    live "/screenshots/new", ScreenshotLive.Index, :new
    live "/screenshots/:id/edit", ScreenshotLive.Index, :edit
    live "/screenshots/:id", ScreenshotLive.Show, :show
    live "/screenshots/:id/show/edit", ScreenshotLive.Show, :edit

    # Processes
    live "/projects/:project_id/processes", ProcessLive.Index, :index
    live "/processes", ProcessLive.Index, :index
    live "/processes/new", ProcessLive.Index, :new
    live "/processes/:id/edit", ProcessLive.Index, :edit

    # Steps
    live "/processes/:process_id/steps", StepLive.Index, :index
    live "/processes/:process_id/steps/new", StepLive.Index, :new
    live "/processes/:process_id/steps/:id/edit", StepLive.Index, :edit
    live "/processes/:process_id/steps/:id/edit/new_page", StepLive.Index, :new_page
    live "/processes/:process_id/steps/:id/edit_page/:page_id", StepLive.Index, :edit_page
    live "/processes/:process_id/steps/:id/edit/new_element", StepLive.Index, :new_element
    live "/processes/:process_id/steps/:id/edit_element/:element_id", StepLive.Index, :edit_element
    live "/processes/:process_id/steps/:id/edit/new_annotation", StepLive.Index, :new_annotation
    live "/processes/:process_id/steps/:id/edit_annotation/:annotation_id", StepLive.Index, :edit_annotation
    live "/processes/:process_id/steps/:id/screenshot", StepLive.Index, :screenshot_workflow
    live "/processes/:process_id/steps/:id/step_instance", StepLive.Index, :show_step_instance
    live "/processes/:process_id/steps/process_instance", StepLive.Index, :show_process_instance
  end

  pipeline :images do
    plug Plug.Static,
      at: "/images", gzip: false,
      from: Local.Paths.image_repo_path()
  end

  scope "/images" do
    pipe_through :images
    get "/*path", ErrorController, :notfound
  end

  # Other scopes may use custom stacks.
  # scope "/api", UserdocsDesktopWeb do
  #   pipe_through :api
  # end

  # Enables LiveDashboard only for development
  #
  # If you want to use the LiveDashboard in production, you should put
  # it behind authentication and allow only admins to access it.
  # If your application does not have an admins-only section yet,
  # you can use Plug.BasicAuth to set up some basic authentication
  # as long as you are also using SSL (which you should anyway).
  if Mix.env() in [:dev, :test] do
    import Phoenix.LiveDashboard.Router

    scope "/" do
      pipe_through :browser
      live_dashboard "/dashboard", metrics: UserdocsDesktopWeb.Telemetry
    end
  end
end
