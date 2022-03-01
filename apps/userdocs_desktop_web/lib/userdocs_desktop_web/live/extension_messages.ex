defmodule UserdocsDesktopWeb.ExtensionMessages do
  @moduledoc "Functions for handling messages received from the browser, assists with creating flash messages for display in the application."
  use Phoenix.HTML
  import Phoenix.LiveView.Helpers
  require Logger

  alias UserdocsDesktopWeb.Router.Helpers, as: Routes
  alias Schemas.Elements.Element
  alias Schemas.Pages.Page

  def element_params(payload) do
    Map.take(payload, [:name, :direct_selector, :generated_selector, :outer_html])
    |> Map.put(:name, payload.element_name)
    |> Map.put(:strategy_id, "css")
    |> Map.put(:selector, payload.generated_selector)
  end

  def maybe_update_step_element_flash(_flash, socket, %Element{id: element_id}, %Page{} = page, step_id, process_id, params, redirect_type) do
    page_id = Map.get(page, :id, nil)
    Routes.step_index_path(socket, :edit_element, process_id, step_id, element_id, params: Map.put(params, :page_id, page_id))
    |> update_or_select_element_flash(redirect_type, element_id)
  end
  def maybe_update_step_element_flash(flash, _, _, _, _, _, _, _), do: flash

  def maybe_update_element_flash(_flash, socket, %Element{id: element_id}, page, params, redirect_type) do
    Routes.element_index_path(socket, :edit, page.id, element_id, params: params)
    |> update_element_flash(redirect_type)
  end
  def maybe_update_element_flash(flash, _, _, _, _, _), do: flash

  def update_element_flash(path, redirect_type) do
    [
      information_circle(),
      content_tag(:label, "Would you like to update the element you are interacting with?", class: "mx-3 flex-1"),
      redirect_function(redirect_type).("Update", to: path, class: "btn btn-primary flex-none")
    ]
  end

  def update_or_select_element_flash(path, redirect_type, element_id) do
    [
      information_circle(),
      content_tag(:label, "Would you like to update or select the element you are interacting with?", class: "mx-3 flex-1"),
      link("Select", to: "#", phx_click: "select_element", phx_value_id: element_id, class: "btn btn-accent flex-none mr-4"),
      redirect_function(redirect_type).("Update", to: path, class: "btn btn-primary flex-none")
    ]
  end

  def maybe_create_step_element_flash(_flash, socket, nil, %Page{} = page, step_id, process_id, params, redirect_type) do
    page_id = Map.get(page, :id, nil)
    Routes.step_index_path(socket, :new_element, process_id, step_id, params: Map.put(params, :page_id, page_id))
    |> create_element_flash(redirect_type)
  end
  def maybe_create_step_element_flash(flash, _, _, _, _, _, _, _), do: flash

  def maybe_create_element_flash(_flash, socket, nil, page, params, redirect_type) do
    Routes.element_index_path(socket, :new, page.id, params: params)
    |> create_element_flash(redirect_type)
  end
  def maybe_create_element_flash(flash, _, _, _, _, _), do: flash

  def create_element_flash(path, redirect_type) do
    [
      information_circle(),
      content_tag(:label, "Would you like to create the element you are interacting with?", class: "mx-3 flex-1"),
      redirect_function(redirect_type).("Create", to: path, class: "btn btn-primary flex-none")
    ]
  end

  def page_params(message, user, project) do
    message = relative_or_full_url(message, user, project)
    %{url: Map.get(message, :href), name: Map.get(message, :page_title)}
  end

  def relative_or_full_url(message, user, project) do
    candidate_hosts =
      user.overrides
      |> Enum.filter(fn(override) -> override.project_id == project.id end)
      |> Kernel.++([URI.parse(project.base_url).host])

    current_uri = URI.parse(message.href)

    if current_uri.host in candidate_hosts do
      Logger.debug("Found the current uri's host in the candidate hosts, will be a relative URI")
      Map.put(message, :href, current_uri.path)
    else
      Logger.debug("Didn't find the current uri's host in the candidate hosts, will be a full URI")
      message
    end
  end

  def maybe_update_page_flash(_flash, socket, %Page{id: page_id}, params, redirect_type) do
    Routes.page_index_path(socket, :edit, page_id, params: params)
    |> update_page_flash(redirect_type)
  end
  def maybe_update_page_flash(flash, _, _, _, _), do: flash

  def update_page_flash(path, redirect_type) do
    [
      information_circle(),
      content_tag(:label, "Would you like to update the page you are interacting with?", class: "mx-3 flex-1"),
      redirect_function(redirect_type).("Update", to: path, class: "btn btn-primary")
    ]
  end

  def maybe_create_step_page_flash(_flash, socket, nil, step_id, process_id, params, redirect_type) do
    Routes.step_index_path(socket, :new_page, process_id, step_id, params: params)
    |> create_page_flash(redirect_type)
  end
  def maybe_create_step_page_flash(flash, _, _, _, _, _, _), do: flash

  def maybe_create_page_flash(_flash, socket, nil, params, redirect_type) do
    Routes.page_index_path(socket, :new, params: params)
    |> create_page_flash(redirect_type)
  end
  def maybe_create_page_flash(flash, _, _, _, _), do: flash

  def create_page_flash(path, redirect_type) do
    [
      information_circle(),
      content_tag(:label, "The page you are on does not exist. Would you like to create it?", class: "mx-3 flex-1"),
      redirect_function(redirect_type).("Create", to: path, class: "btn btn-primary")
    ]
  end

  def redirect_function(:patch), do: &live_patch/2
  def redirect_function(:redirect), do: &live_redirect/2

  def information_circle() do
    content_tag(:svg, xmlns: "http://www.w3.org/2000/svg", class: "h-6 w-6 mx-2 flex-none", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor") do
      content_tag(:path, "", stroke_linecap: "round", stroke_linejoin: "round", stroke_width: "2", d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z")
    end
  end
end
