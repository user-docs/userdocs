defmodule UserdocsDesktopWeb.HomeLive do
  @moduledoc "the home page/entrypoint of the application"
  use UserdocsDesktopWeb, :live_view
  alias Schemas.Projects.Project
  alias Schemas.Teams.Team
  alias Schemas.Users.User
  alias UserdocsDesktopWeb.Root
  alias UserdocsDesktopWeb.RootEventHandlers
  alias UserdocsDesktopWeb.RootSubscriptionHandlers

  @impl true
  def render(%{current_user: %User{selected_project: %Project{}, selected_team: %Team{}}} = assigns) do
    Phoenix.View.render(UserdocsDesktopWeb.HomeView, "introduction.html", assigns)
  end
  def render(assigns) do
    Phoenix.View.render(UserdocsDesktopWeb.HomeView, "no_defaults_picked.html", assigns)
  end

  @impl true
  def mount(_params, session, socket) do
    {
      :ok,
      socket
      |> Root.apply(session, [])
    }
  end

  @impl true
  def handle_params(params, url, socket) do
    {
      :noreply,
      socket
      |> assign(url: URI.parse(url))
      |> apply_action(socket.assigns.live_action, params)
    }
  end

  @impl true
  def handle_event(n, p, s), do: RootEventHandlers.handle_event(n, p, s)
  @impl true
  def handle_info(n, s), do: RootSubscriptionHandlers.handle_info(n, s)

  defp apply_action(socket, _, _), do: socket
end
