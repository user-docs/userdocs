defmodule Client do
  @moduledoc "Used to maintain a stateful connection to the server. query/create/update/delete should be gutted. We just need to implement the user update thing on rest and this can go."
  require Logger

  @timeout 10_000

  def status(), do: GenServer.call(__MODULE__.Server, :status)
  def authenticate(params), do: GenServer.call(__MODULE__.Server, {:authenticate, params}, @timeout)
  def authenticate(), do: GenServer.call(__MODULE__.Server, :authenticate, @timeout)
  def tokens(), do:  GenServer.call(__MODULE__.Server, :tokens)

  def connect() , do: GenServer.call(__MODULE__.Server, :connect, @timeout)
  def connected?(), do: GenServer.call(__MODULE__.Server, :connected?, @timeout)
  def current_user(), do: GenServer.call(__MODULE__.Server, :current_user, @timeout)
  def current_user_id(), do: GenServer.call(__MODULE__.Server, :current_user_id, @timeout)
  def current_project(), do: GenServer.call(__MODULE__.Server, :current_project, @timeout)
  def current_team(), do: GenServer.call(__MODULE__.Server, :current_team, @timeout)
  def data(), do: GenServer.call(__MODULE__.Server, :data, @timeout)
  def put_in_state(data), do: GenServer.call(__MODULE__.Server, {:put_in_state, data}, @timeout)
  def put_in_state(key, data), do: GenServer.call(__MODULE__.Server, {:put_in_state, key, data}, @timeout)
  def state(), do: GenServer.call(__MODULE__.Server, :state, @timeout)
  def disconnect(), do: GenServer.call(__MODULE__.Server, :disconnect, @timeout)

  def load(), do: GenServer.call(__MODULE__.Server, :load, @timeout)
  def load(data), do: GenServer.call(__MODULE__.Server, {:load, data}, @timeout)
  def counts(), do: GenServer.call(__MODULE__.Server, :counts, @timeout)

  def init_state(), do: GenServer.call(__MODULE__.Server, :init_state, @timeout)
  def destroy_state(), do: GenServer.cast(__MODULE__.Server, :destroy_state)
  def update_context(attrs), do: GenServer.cast(__MODULE__.Server, {:update_context, attrs})

  def load_users(opts), do: GenServer.call(__MODULE__.Server, {:load_users, opts}, @timeout)
  def list_users(opts \\ []), do: GenServer.call(__MODULE__.Server, {:list_users, opts}, @timeout)
  def get_user!(id, opts \\[]), do: GenServer.call(__MODULE__.Server, {:get_user!, id, opts}, @timeout)
  def update_user(user, attrs), do: GenServer.call(__MODULE__.Server, {:update_user, user, attrs}, @timeout)
  def invite_user(attrs), do: GenServer.call(__MODULE__.Server, {:invite_user, attrs}, @timeout)

  def load_team_users(opts), do: GenServer.call(__MODULE__.Server, {:load_team_users, opts}, @timeout)
  def list_team_users(opts \\ []), do: GenServer.call(__MODULE__.Server, {:list_team_users, opts}, @timeout)
  def get_team_user!(id, opts \\[]), do: GenServer.call(__MODULE__.Server, {:get_team_user!, id, opts}, @timeout)
  def delete_team_user(team_user), do: GenServer.call(__MODULE__.Server, {:delete_team_user, team_user}, @timeout)

  def load_teams(opts \\ %{}), do: GenServer.call(__MODULE__.Server, {:load_teams, opts}, @timeout)
  def list_teams(opts \\ []), do: GenServer.call(__MODULE__.Server, {:list_teams, opts}, @timeout)
  def get_team!(id, opts \\ []), do: GenServer.call(__MODULE__.Server, {:get_team!, id, opts}, @timeout)
  def create_team(attrs), do: GenServer.call(__MODULE__.Server, {:create_team, attrs}, @timeout)
  def update_team(team, attrs), do: GenServer.call(__MODULE__.Server, {:update_team, team, attrs}, @timeout)
  def delete_team(team), do: GenServer.call(__MODULE__.Server, {:delete_team, team}, @timeout)

  def load_projects(opts \\ %{}), do: GenServer.call(__MODULE__.Server, {:load_projects, opts}, @timeout)
  def list_projects(opts \\ []), do: GenServer.call(__MODULE__.Server, {:list_projects, opts}, @timeout)
  def get_project!(id, opts \\ []), do: GenServer.call(__MODULE__.Server, {:get_project!, id, opts}, @timeout)
  def create_project(attrs), do: GenServer.call(__MODULE__.Server, {:create_project, attrs}, @timeout)
  def update_project(project, attrs), do: GenServer.call(__MODULE__.Server, {:update_project, project, attrs}, @timeout)
  def delete_project(project), do: GenServer.call(__MODULE__.Server, {:delete_project, project}, @timeout)

  def load_screenshots(opts \\ %{}), do: GenServer.call(__MODULE__.Server, {:load_screenshots, opts}, @timeout)
  def list_screenshots(opts \\ []), do: GenServer.call(__MODULE__.Server, {:list_screenshots, opts}, @timeout)
  def get_screenshot!(id, opts \\ []), do: GenServer.call(__MODULE__.Server, {:get_screenshot!, id, opts}, @timeout)
  def create_screenshot(attrs), do: GenServer.call(__MODULE__.Server, {:create_screenshot, attrs}, @timeout)
  def update_screenshot(screenshot, attrs), do: GenServer.call(__MODULE__.Server, {:update_screenshot, screenshot, attrs}, @timeout)
  def delete_screenshot(screenshot), do: GenServer.call(__MODULE__.Server, {:delete_screenshot, screenshot}, @timeout)
  def update_screenshot(screenshot), do: GenServer.call(__MODULE__.Server, {:update_screenshot, screenshot}, @timeout)
  def reject_screenshot(screenshot), do: GenServer.call(__MODULE__.Server, {:reject_screenshot, screenshot}, @timeout)

  def load_processes(opts \\ %{}), do: GenServer.call(__MODULE__.Server, {:load_processes, opts}, @timeout)
  def list_processes(opts \\ []), do: GenServer.call(__MODULE__.Server, {:list_processes, opts}, @timeout)
  def get_process!(id, opts \\ []), do: GenServer.call(__MODULE__.Server, {:get_process!, id, opts}, @timeout)
  def create_process(attrs), do: GenServer.call(__MODULE__.Server, {:create_process, attrs}, @timeout)
  def update_process(process, attrs), do: GenServer.call(__MODULE__.Server, {:update_process, process, attrs}, @timeout)
  def delete_process(process), do: GenServer.call(__MODULE__.Server, {:delete_process, process}, @timeout)

  def load_steps(opts \\ %{}), do: GenServer.call(__MODULE__.Server, {:load_steps, opts}, @timeout)
  def list_steps(opts \\ []), do: GenServer.call(__MODULE__.Server, {:list_steps, opts}, @timeout)
  def get_step!(id), do: GenServer.call(__MODULE__.Server, {:get_step!, id, []}, @timeout)
  def get_step!(id, opts), do: GenServer.call(__MODULE__.Server, {:get_step!, id, opts}, @timeout)
  def create_step(attrs), do: GenServer.call(__MODULE__.Server, {:create_step, attrs}, @timeout)
  def update_step(step, attrs), do: GenServer.call(__MODULE__.Server, {:update_step, step, attrs}, @timeout)
  def delete_step(step), do: GenServer.call(__MODULE__.Server, {:delete_step, step}, @timeout)

  def load_pages(opts \\ %{}), do: GenServer.call(__MODULE__.Server, {:load_pages, opts}, @timeout)
  def list_pages(opts \\ []), do: GenServer.call(__MODULE__.Server, {:list_pages, opts}, @timeout)
  def get_page!(id, opts \\ []), do: GenServer.call(__MODULE__.Server, {:get_page!, id, opts}, @timeout)
  def find_page_by_path(href, opts \\ []), do: GenServer.call(__MODULE__.Server, {:find_page_by_path, href, opts}, @timeout)
  def create_page(attrs), do: GenServer.call(__MODULE__.Server, {:create_page, attrs}, @timeout)
  def update_page(page, attrs), do: GenServer.call(__MODULE__.Server, {:update_page, page, attrs}, @timeout)
  def upsert_page_screenshot(page, base64), do: GenServer.call(__MODULE__.Server, {:upsert_page_screenshot, page, base64}, @timeout)
  def delete_page(page), do: GenServer.call(__MODULE__.Server, {:delete_page, page}, @timeout)

  def load_elements(opts \\ %{}), do: GenServer.call(__MODULE__.Server, {:load_elements, opts}, @timeout)
  def list_elements(opts \\ []), do: GenServer.call(__MODULE__.Server, {:list_elements, opts}, @timeout)
  def get_element!(id, opts \\ []), do: GenServer.call(__MODULE__.Server, {:get_element!, id, opts}, @timeout)
  def create_element(attrs), do: GenServer.call(__MODULE__.Server, {:create_element, attrs}, @timeout)
  def update_element(element, attrs), do: GenServer.call(__MODULE__.Server, {:update_element, element, attrs}, @timeout)
  def delete_element(element), do: GenServer.call(__MODULE__.Server, {:delete_element, element}, @timeout)

  def load_annotations(opts \\ %{}), do: GenServer.call(__MODULE__.Server, {:load_annotations, opts}, @timeout)
  def list_annotations(opts \\ []), do: GenServer.call(__MODULE__.Server, {:list_annotations, opts}, @timeout)
  def get_annotation!(id), do: GenServer.call(__MODULE__.Server, {:get_annotation!, id, []}, @timeout)
  def get_annotation!(id, opts), do: GenServer.call(__MODULE__.Server, {:get_annotation!, id, opts}, @timeout)
  def create_annotation(attrs), do: GenServer.call(__MODULE__.Server, {:create_annotation, attrs}, @timeout)
  def update_annotation(annotation, attrs), do: GenServer.call(__MODULE__.Server, {:update_annotation, annotation, attrs}, @timeout)
  def delete_annotation(annotation), do: GenServer.call(__MODULE__.Server, {:delete_annotation, annotation}, @timeout)

  def load_element_annotations(opts \\ %{}), do: GenServer.call(__MODULE__.Server, {:load_element_annotations, opts}, @timeout)
  def list_element_annotations(opts \\ []), do: GenServer.call(__MODULE__.Server, {:list_element_annotations, opts}, @timeout)

  def load_strategies(opts), do: GenServer.call(__MODULE__.Server, {:load_strategies, opts}, @timeout)
  def list_strategies(opts \\ []), do: GenServer.call(__MODULE__.Server, {:list_strategies, opts}, @timeout)

  def load_annotation_types(opts \\ %{}), do: GenServer.call(__MODULE__.Server, {:load_annotation_types, opts}, @timeout)
  def list_annotation_types(opts \\ []), do: GenServer.call(__MODULE__.Server, {:list_annotation_types, opts}, @timeout)
  def get_annotation_type!(id), do: GenServer.call(__MODULE__.Server, {:get_annotation_type!, id, []}, @timeout)
  def get_annotation_type!(id, opts), do: GenServer.call(__MODULE__.Server, {:get_annotation_type!, id, opts}, @timeout)

  def load_step_types(opts \\ %{}), do: GenServer.call(__MODULE__.Server, {:load_step_types, opts}, @timeout)
  def list_step_types(opts \\ []), do: GenServer.call(__MODULE__.Server, {:list_step_types, opts}, @timeout)
  def get_step_type!(id, opts \\ []), do: GenServer.call(__MODULE__.Server, {:get_step_type!, id, opts}, @timeout)

  def load_step_instances(opts \\ %{}), do: GenServer.call(__MODULE__.Server, {:load_step_instances, opts}, @timeout)
  def list_step_instances(opts \\ []), do: GenServer.call(__MODULE__.Server, {:list_step_instances, opts}, @timeout)
  def create_step_instance(attrs), do: GenServer.call(__MODULE__.Server, {:create_step_instance, attrs}, @timeout)
  def update_step_instance(step_instance, attrs), do: GenServer.call(__MODULE__.Server, {:update_step_instance, step_instance, attrs}, @timeout)

  def trim_and_create_step_instance(attrs), do: GenServer.call(__MODULE__.Server, {:trim_and_create_step_instance, attrs}, @timeout)
  def delete_step_instance(id, opts \\ %{}), do: GenServer.call(__MODULE__.Server, {:delete_step_instance, id, opts}, @timeout)

  def load_screenshot_integrations(opts \\ %{}), do: GenServer.call(__MODULE__.Server, {:load_screenshot_integrations, opts}, @timeout)
  def list_screenshot_integrations(opts \\ []), do: GenServer.call(__MODULE__.Server, {:list_screenshot_integrations, opts}, @timeout)
  def get_screenshot_integration!(id), do: GenServer.call(__MODULE__.Server, {:get_screenshot_integration!, id, []}, @timeout)
  def get_screenshot_integration!(id, opts), do: GenServer.call(__MODULE__.Server, {:get_screenshot_integration!, id, opts}, @timeout)
  def create_screenshot_integration(attrs), do: GenServer.call(__MODULE__.Server, {:create_screenshot_integration, attrs}, @timeout)
  def update_screenshot_integration(annotation, attrs), do: GenServer.call(__MODULE__.Server, {:update_screenshot_integration, annotation, attrs}, @timeout)
  def delete_screenshot_integration(annotation), do: GenServer.call(__MODULE__.Server, {:delete_screenshot_integration, annotation}, @timeout)

  def load_integrations(opts \\ %{}), do: GenServer.call(__MODULE__.Server, {:load_integrations, opts}, @timeout)
  def list_integrations(opts \\ []), do: GenServer.call(__MODULE__.Server, {:list_integrations, opts}, @timeout)
  def get_integration!(id), do: GenServer.call(__MODULE__.Server, {:get_integration!, id, []}, @timeout)
  def get_integration!(id, opts), do: GenServer.call(__MODULE__.Server, {:get_integration!, id, opts}, @timeout)
  def create_integration(attrs), do: GenServer.call(__MODULE__.Server, {:create_integration, attrs}, @timeout)
  def update_integration(annotation, attrs), do: GenServer.call(__MODULE__.Server, {:update_integration, annotation, attrs}, @timeout)
  def delete_integration(annotation), do: GenServer.call(__MODULE__.Server, {:delete_integration, annotation}, @timeout)
end
