defmodule UserdocsDesktopWeb.ProjectPicker do
  @moduledoc false
  use UserdocsDesktopWeb, :live_component
  use Phoenix.HTML

  def dropdown_trigger(assigns, name, _highlight, do: block) do
    ~L"""
      <div class="nested navbar-item dropdown">
        <div class="dropdown-trigger">
          <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
            <span><%= name %></span>
            <span class="icon is-small">
              <i class="fa fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
        </div>
        <%= block %>
      </div>
    """
  end

  def button_class(true), do: "button is-link"

  @impl true
  def render(assigns) do
    ~L"""
    <style>
      /* since nested groupes are not supported we have to use
         regular css for the nested dropdowns
      */
      li>ul                 { transform: translatex(100%) scale(0) }
      li:hover>ul           { transform: translatex(101%) scale(1) }
      li > button svg       { transform: rotate(-90deg) }
      li:hover > button svg { transform: rotate(-270deg) }
      .selected::before     { content: url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22h-5%20w-5%22%20viewBox%3D%220%200%2020%2020%22%20width%3D%2213%22%20height%3D%2213%22%20fill%3D%22currentColor%22%3E%0A%20%20%3Cpath%20d%3D%22M9.049%202.927c.3-.921%201.603-.921%201.902%200l1.07%203.292a1%201%200%2000.95.69h3.462c.969%200%201.371%201.24.588%201.81l-2.8%202.034a1%201%200%2000-.364%201.118l1.07%203.292c.3.921-.755%201.688-1.54%201.118l-2.8-2.034a1%201%200%2000-1.175%200l-2.8%202.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1%201%200%2000-.364-1.118L2.98%208.72c-.783-.57-.38-1.81.588-1.81h3.461a1%201%200%2000.951-.69l1.07-3.292z%22%20%2F%3E%0A%3C%2Fsvg%3E); }

      /* Below styles fake what can be achieved with the tailwind config
         you need to add the group-hover variant to scale and define your custom
         min width style.
         See https://codesandbox.io/s/tailwindcss-multilevel-dropdown-y91j7?file=/index.html
         for implementation with config file
      */
      .group:hover .group-hover\:scale-100 { transform: scale(1) }
      .group:hover .group-hover\:-rotate-180 { transform: rotate(180deg) }
      .scale-0 { transform: scale(0) }
      .min-w-32 { min-width: 8rem }
    </style>
    <div class="group inline-block">
      <button class="flex-1 btn btn-ghost bnt-sm">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
        </svg>
        <%= @selected_project_name %>
      </button>
      <ul class="shadow p-2 bg-base-100 rounded-box transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top min-w-32">
        <%= for team_user <- @current_user.team_users do %>
          <li class="rounded-sm relative px-3 py-1 hover:bg-gray-400 flex items-center outline-none focus:outline-none min-w-32">
            <span class="pr-1 flex-1 text-black"><%= team_user.team.name %></span>
            <span class="mr-auto">
              <svg class="fill-current h-4 w-4 transition duration-150 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
              </svg>
            </span>
            <ul class="shadow p-2 bg-base-100 rounded-box transform scale-0 absolute top-0 right-0 transition duration-150 ease-in-out origin-top-left min-w-32">
              <%= for project <- team_user.team.projects do %>
                <li class="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                  <button
                    class="w-full text-left flex items-center outline-none focus:outline-none"
                    id="project-picker-<%= project.id %>"
                    phx-click="select-project"
                    phx-value-project-id="<%= project.id %>"
                    phx-value-team-id="<%= team_user.team.id %>"
                    phx-target="<%= @myself.cid %>"
                  >
                    <span class="pr-1 flex-1 text-black whitespace-nowrap <%= is_active(@current_user.selected_project_id, project.id) %>">
                      <%= project.name %>
                    </span>
                  </button>
                </li>
              <% end %>
            </ul>
          </li>
        <% end %>
      </ul>
    </div>
    """
  end

  @impl true
  def mount(socket) do
    {
      :ok,
      socket
    }
  end

  @impl true
  def update(assigns, socket) do
    user = Client.current_user()
    project = Client.current_project()
    selected_project_name = project |> Map.get(:name, "None Selected")
    {
      :ok,
      socket
      |> assign(assigns)
      |> assign(:selected_project_name, selected_project_name)
      |> assign(:current_user, user)
    }
  end

  @impl true
  def handle_event("select-project", %{"project-id" => project_id, "team-id" => team_id}, %{assigns: %{url: url}} = socket) do
    changes = %{
      selected_team_id: team_id,
      selected_project_id: project_id
    }
    IO.inspect("Pre load it's #{Client.current_user().selected_project_id}")
    Client.update_user_selections(Client.current_user(), changes)
    IO.inspect("Post update it's #{Client.current_user().selected_project_id}")
    Client.load()
    IO.inspect("Post load it's #{Client.current_user().selected_project_id}")
    {
      :noreply,
      socket
      |> push_redirect(to: url.path)
    }
  end

  def is_active(id1, id2) do
    case id1 == id2 do
      true -> "selected"
      false -> ""
    end
  end
end
