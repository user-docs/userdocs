defmodule UserdocsDesktopWeb.SessionLive.Index do
  @moduledoc """
  Index for signups
  """
  use UserdocsDesktopWeb, :live_view
  alias Schemas.Users.User

  @impl true
  def mount(_params, _session, socket) do
    user = %User{}
    {
      :ok,
      socket
      |> assign(:page_title, "Sign In")
      |> assign(:user, user),
      layout: {UserdocsDesktopWeb.LayoutView, "unauthenticated.html"}
    }
  end
end
