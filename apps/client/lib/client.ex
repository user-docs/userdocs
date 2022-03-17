defmodule Client do
  @moduledoc "Used to maintain a stateful connection to the server. query/create/update/delete should be gutted. We just need to implement the user update thing on rest and this can go."
  use GenServer
  require Logger

  alias Schemas.Users.User
  alias Schemas.Teams.TeamUser
  alias Schemas.Teams.Team
  alias Schemas.Projects.Project
  alias Schemas.Strategies.Strategy
  alias Schemas.Annotations.AnnotationType
  alias Schemas.Steps.StepType
  alias Schemas.Pages.Page
  alias Schemas.Processes.Process
  alias Schemas.Screenshots.Screenshot
  alias Schemas.Steps.Step
  alias Schemas.Elements.Element
  alias Schemas.Annotations.Annotation
  alias Schemas.Elements.ElementAnnotation

  alias PhoenixClient.{Message, Socket}
  alias Client.Channel
  alias Client.Authentication
  alias Client.Subscription
  alias Local.Paths
  alias Userdocs.Setups

  @timeout 10_000
  @types [
    Schemas.Users.User,
    Schemas.Teams.TeamUser,
    Schemas.Teams.Team,
    Schemas.Strategies.Strategy,
    Schemas.Annotations.AnnotationType,
    Schemas.Steps.StepType,
    Schemas.Projects.Project,
    Schemas.Processes.Process,
    Schemas.Steps.Step,
    Schemas.Elements.Element,
    Schemas.Elements.ElementAnnotation,
    Schemas.Annotations.Annotation,
    Schemas.Screenshots.Screenshot,
    Schemas.Pages.Page
  ]
  if Mix.env() == :test do
    @setup_status %{
      initialize_state: %{order: 1, status: nil, next_task: :authenticate, title: "Initial State"},
      authenticate: %{order: 2, status: nil, next_task: :connect_channel, title: "Authenticate"},
      connect_channel: %{order: 3, status: nil, next_task: :complete, title: "Connecting"}
    }
  else
    @setup_status %{
      initialize_state: %{order: 1, status: nil, next_task: :check_tokens, title: "Initial State"},
      check_tokens: %{order: 2, status: nil, next_task: :authenticate, title: "Tokens"},
      authenticate: %{order: 3, status: nil, next_task: :connect_channel, title: "Authenticate"},
      connect_channel: %{order: 4, status: nil, next_task: :load_data, title: "Connecting"},
      load_data: %{order: 5, status: nil, next_task: :complete, title: "Load Data"}
    }
  end

  def start_link(_), do: GenServer.start_link(__MODULE__, %{current_user: nil}, name: __MODULE__)

  def status(), do: GenServer.call(__MODULE__, :status)
  def authenticate(params), do: GenServer.call(__MODULE__, {:authenticate, params}, @timeout)
  def authenticate(), do: GenServer.call(__MODULE__, :authenticate, @timeout)
  def tokens(), do:  GenServer.call(__MODULE__, :tokens)

  def connect() , do: GenServer.call(__MODULE__, :connect, @timeout)
  def connected?(), do: GenServer.call(__MODULE__, :connected?, @timeout)
  def current_user(), do: GenServer.call(__MODULE__, :current_user, @timeout)
  def current_user_id(), do: GenServer.call(__MODULE__, :current_user_id, @timeout)
  def current_project(), do: GenServer.call(__MODULE__, :current_project, @timeout)
  def current_team(), do: GenServer.call(__MODULE__, :current_team, @timeout)
  def data(), do: GenServer.call(__MODULE__, :data, @timeout)
  def state(), do: GenServer.call(__MODULE__, :state, @timeout)
  def disconnect(), do: GenServer.call(__MODULE__, :disconnect, @timeout)

  def load(), do: GenServer.call(__MODULE__, :load, @timeout)
  def load(data), do: GenServer.call(__MODULE__, {:load, data}, @timeout)

  def load_users(opts), do: GenServer.call(__MODULE__, {:load_users, opts}, @timeout)
  def list_users(opts), do: GenServer.call(__MODULE__, {:list_users, opts}, @timeout)
  def update_user_selections(user, attrs), do: GenServer.call(__MODULE__, {:update_user_selections, user, attrs}, @timeout)
  def invite_user(attrs), do: GenServer.call(__MODULE__, {:invite_user, attrs}, @timeout)

  def load_team_users(opts), do: GenServer.call(__MODULE__, {:load_team_users, opts}, @timeout)
  def list_team_users(opts), do: GenServer.call(__MODULE__, {:list_team_users, opts}, @timeout)
  def delete_team_user(id, opts \\ %{}), do: GenServer.call(__MODULE__, {:delete_team_user, id, opts}, @timeout)

  def load_teams(opts), do: GenServer.call(__MODULE__, {:load_teams, opts}, @timeout)
  def list_teams(opts), do: GenServer.call(__MODULE__, {:list_teams, opts}, @timeout)
  def get_team!(id, opts \\[]), do: GenServer.call(__MODULE__, {:get_team!, id, opts}, @timeout)
  def create_team(attrs), do: GenServer.call(__MODULE__, {:create_team, attrs}, @timeout)
  def update_team(team, attrs), do: GenServer.call(__MODULE__, {:update_team, team, attrs}, @timeout)
  def delete_team(id, opts), do: GenServer.call(__MODULE__, {:delete_team, id, opts}, @timeout)

  def load_projects(opts), do: GenServer.call(__MODULE__, {:load_projects, opts}, @timeout)
  def list_projects(), do: GenServer.call(__MODULE__, {:list_projects, []}, @timeout)
  def list_projects(opts), do: GenServer.call(__MODULE__, {:list_projects, opts}, @timeout)
  def get_project!(id), do: GenServer.call(__MODULE__, {:get_project!, id, []}, @timeout)
  def get_project!(id, opts), do: GenServer.call(__MODULE__, {:get_project!, id, opts}, @timeout)
  def create_project(attrs), do: GenServer.call(__MODULE__, {:create_project, attrs}, @timeout)
  def update_project(project, attrs), do: GenServer.call(__MODULE__, {:update_project, project, attrs}, @timeout)
  def delete_project(id, opts \\ %{}), do: GenServer.call(__MODULE__, {:delete_project, id, opts}, @timeout)

  def load_screenshots(opts), do: GenServer.call(__MODULE__, {:load_screenshots, opts}, @timeout)
  def list_screenshots(), do: GenServer.call(__MODULE__, {:list_screenshots, []}, @timeout)
  def list_screenshots(opts), do: GenServer.call(__MODULE__, {:list_screenshots, opts}, @timeout)
  def get_screenshot!(id), do: GenServer.call(__MODULE__, {:get_screenshot!, id, []}, @timeout)
  def get_screenshot!(id, opts), do: GenServer.call(__MODULE__, {:get_screenshot!, id, opts}, @timeout)
  def create_screenshot(attrs), do: GenServer.call(__MODULE__, {:create_screenshot, attrs}, @timeout)
  def update_screenshot(screenshot, attrs), do: GenServer.call(__MODULE__, {:update_screenshot, screenshot, attrs}, @timeout)
  def approve_screenshot(screenshot, opts \\ %{}), do: GenServer.call(__MODULE__, {:approve_screenshot, screenshot, opts}, @timeout)
  def reject_screenshot(screenshot, opts \\ %{}), do: GenServer.call(__MODULE__, {:approve_screenshot, screenshot, opts}, @timeout)
  def delete_screenshot(id), do: GenServer.call(__MODULE__, {:delete_screenshot, id, %{}}, @timeout)
  def delete_screenshot(id, opts), do: GenServer.call(__MODULE__, {:delete_screenshot, id, opts}, @timeout)

  def load_processes(opts), do: GenServer.call(__MODULE__, {:load_processes, opts}, @timeout)
  def list_processes(opts \\ []), do: GenServer.call(__MODULE__, {:list_processes, opts}, @timeout)
  def get_process!(id), do: GenServer.call(__MODULE__, {:get_process!, id, []}, @timeout)
  def get_process!(id, opts), do: GenServer.call(__MODULE__, {:get_process!, id, opts}, @timeout)
  def create_process(attrs), do: GenServer.call(__MODULE__, {:create_process, attrs}, @timeout)
  def update_process(process, attrs), do: GenServer.call(__MODULE__, {:update_process, process, attrs}, @timeout)
  def delete_process(id, opts \\ %{}), do: GenServer.call(__MODULE__, {:delete_process, id, opts}, @timeout)

  def load_steps(opts), do: GenServer.call(__MODULE__, {:load_steps, opts}, @timeout)
  def list_steps(opts), do: GenServer.call(__MODULE__, {:list_steps, opts}, @timeout)
  def get_step!(id), do: GenServer.call(__MODULE__, {:get_step!, id, []}, @timeout)
  def get_step!(id, opts), do: GenServer.call(__MODULE__, {:get_step!, id, opts}, @timeout)
  def create_step(attrs), do: GenServer.call(__MODULE__, {:create_step, attrs}, @timeout)
  def update_step(step, attrs), do: GenServer.call(__MODULE__, {:update_step, step, attrs}, @timeout)
  def delete_step(id), do: GenServer.call(__MODULE__, {:delete_step, id, %{}}, @timeout)
  def delete_step(id, opts), do: GenServer.call(__MODULE__, {:delete_step, id, opts}, @timeout)

  def load_pages(opts), do: GenServer.call(__MODULE__, {:load_pages, opts}, @timeout)
  def list_pages(opts \\ []), do: GenServer.call(__MODULE__, {:list_pages, opts}, @timeout)
  def get_page!(id, opts \\ []), do: GenServer.call(__MODULE__, {:get_page!, id, opts}, @timeout)
  def find_page_by_path(href, opts \\ []), do: GenServer.call(__MODULE__, {:find_page_by_path, href, opts}, @timeout)
  def create_page(attrs), do: GenServer.call(__MODULE__, {:create_page, attrs}, @timeout)
  def update_page(page, attrs), do: GenServer.call(__MODULE__, {:update_page, page, attrs}, @timeout)
  def upsert_page_screenshot(page, base64), do: GenServer.call(__MODULE__, {:upsert_page_screenshot, page, base64}, @timeout)
  def delete_page(id, opts), do: GenServer.call(__MODULE__, {:delete_page, id, opts}, @timeout)

  def load_elements(opts), do: GenServer.call(__MODULE__, {:load_elements, opts}, @timeout)
  def list_elements(opts \\ []), do: GenServer.call(__MODULE__, {:list_elements, opts}, @timeout)
  def get_element!(id, opts \\ []), do: GenServer.call(__MODULE__, {:get_element!, id, opts}, @timeout)
  def find_element(field, value), do: GenServer.call(__MODULE__, {:find_element, field, value, %{}}, @timeout)
  def find_element(field, value, opts), do: GenServer.call(__MODULE__, {:find_element, field, value, opts}, @timeout)
  def create_element(attrs), do: GenServer.call(__MODULE__, {:create_element, attrs}, @timeout)
  def update_element(element, attrs), do: GenServer.call(__MODULE__, {:update_element, element, attrs}, @timeout)
  def delete_element(id, opts \\ %{}), do: GenServer.call(__MODULE__, {:delete_element, id, opts}, @timeout)

  def load_annotations(opts), do: GenServer.call(__MODULE__, {:load_annotations, opts}, @timeout)
  def list_annotations(), do: GenServer.call(__MODULE__, {:list_annotations, []}, @timeout)
  def list_annotations(opts), do: GenServer.call(__MODULE__, {:list_annotations, opts}, @timeout)
  def get_annotation!(id), do: GenServer.call(__MODULE__, {:get_annotation!, id, []}, @timeout)
  def get_annotation!(id, opts), do: GenServer.call(__MODULE__, {:get_annotation!, id, opts}, @timeout)
  def create_annotation(attrs), do: GenServer.call(__MODULE__, {:create_annotation, attrs}, @timeout)
  def update_annotation(annotation, attrs), do: GenServer.call(__MODULE__, {:update_annotation, annotation, attrs}, @timeout)
  def delete_annotation(id, opts \\ %{}), do: GenServer.call(__MODULE__, {:delete_annotation, id, opts}, @timeout)

  def load_element_annotations(opts), do: GenServer.call(__MODULE__, {:load_element_annotations, opts}, @timeout)

  def load_strategies(opts), do: GenServer.call(__MODULE__, {:load_strategies, opts}, @timeout)
  def list_strategies(opts \\ []), do: GenServer.call(__MODULE__, {:list_strategies, opts}, @timeout)

  def load_annotation_types(opts), do: GenServer.call(__MODULE__, {:load_annotation_types, opts}, @timeout)
  def list_annotation_types(opts), do: GenServer.call(__MODULE__, {:list_annotation_types, opts}, @timeout)
  def get_annotation_type!(id), do: GenServer.call(__MODULE__, {:get_annotation_type!, id, []}, @timeout)
  def get_annotation_type!(id, opts), do: GenServer.call(__MODULE__, {:get_annotation_type!, id, opts}, @timeout)

  def load_step_types(opts), do: GenServer.call(__MODULE__, {:load_step_types, opts}, @timeout)
  def list_step_types(opts \\ []), do: GenServer.call(__MODULE__, {:list_step_types, opts}, @timeout)
  def get_step_type!(id, opts \\ []), do: GenServer.call(__MODULE__, {:get_step_type!, id, opts}, @timeout)

  def init_state(), do: GenServer.call(__MODULE__, :init_state, @timeout)
  def destroy_state(), do: GenServer.cast(__MODULE__, :destroy_state)

  # Server (callbacks)

  @impl true
  def init(_) do
    {:ok, %{setup_status: @setup_status, topic: "client"}, {:continue, :initialize_state}}
  end

  @impl true
  def handle_continue(:initialize_state, state) do
    state_opts = [data_type: :list, strategy: :by_type, location: :data, types: @types]
    state =
      state
      |> Map.put(:state_opts, state_opts)
      |> StateHandlers.initialize(state_opts)

    {:ok, "State Initialized"}
    |> Setups.handle_setup_result(state, :initialize_state)
  end
  def handle_continue(:check_tokens, state) do
    %{context: %{repo: Userdocs.LocalRepo}}
    |> Userdocs.Tokens.list_tokens()
    |> Authentication.check_token_store()
    |> case do
      {:ok, _tokens} -> {:ok, "Tokens Exist"}
      {:error, e} -> {:error, e}
    end
    |> Setups.handle_setup_result(state, :check_tokens)
  end
  def handle_continue(:authenticate, state) do
    case Authentication.init() do
      {:error, message} ->
        IO.puts("Authentication error")
        {:halt, message}
        |> Setups.handle_setup_result(state, :authenticate)

      {:ok, user} ->
        state = Map.put(state, :current_user, user)
        {:ok, "Authenticated"}
        |> Setups.handle_setup_result(state, :authenticate)
    end
  end
  def handle_continue(:connect_channel, %{current_user: user} = state) do
    case Channel.connect(user, access_token()) do
      {:ok, channel_info} ->
        Logger.info("Client.Init Channel Connected")
        state = Map.merge(state, channel_info)
        {:ok, "Client connected"}
        |> Setups.handle_setup_result(state, :connect_channel)

      _ ->
        {:error, "Client.Init Channel Failed to Connect"}
        |> Setups.handle_setup_result(state, :connect_channel)
    end
  end
  def handle_continue(:load_data, %{state_opts: state_opts, current_user: user} = state) do
    opts = %{user: user, state_opts: state_opts, access_token: access_token()}
    state = Client.Loaders.apply(state, opts)
    {:ok, "Data Loaded"}
    |> Setups.handle_setup_result(state, :load_data)
  end
  def handle_continue(:complete, state), do: {:noreply, state}

  def initialize_state() do
    state_opts = [data_type: :list, strategy: :by_type, location: :data, types: @types]
    %{state_opts: state_opts}
    |> StateHandlers.initialize(state_opts)
  end

  @impl true
  def handle_call(:status, _from, %{setup_status: setup_status} = state), do: {:reply, setup_status, state}
  def handle_call({:authenticate, %{"user" => %{"email" => _, "password" => _}} = params}, _from, state) do
    case Authentication.init(params) do
      {:ok, user} -> {:reply, {:ok, user}, Map.put(state, :current_user, user), {:continue, :authenticate}}
      {:error, message} -> {:reply, {:error, message}, state}
    end
  end
  def handle_call(:authenticate, _from, state) do
    case Authentication.init() do
      {:ok, user} -> {:reply, {:ok, user}, Map.put(state, :user, user)}
      {:error, message} -> {:reply, {:error, message}, state}
    end
  end
  def handle_call(:tokens, _from, state) do
    [at, rt, uid] = Userdocs.Tokens.list_tokens(%{context: %{repo: Userdocs.LocalRepo}})
    {:reply, {:ok, %{access_token: at.token, renewal_token: rt.token, user_id: uid.token}}, state}
  end
  def handle_call(:connect, _from,
  %{socket: socket, user_channel: uc, team_channel: tc, current_user: user} = state) do
    {status, channel_info} = Channel.maybe_reconnect(socket, uc, tc, user, access_token())
    {:reply, status, Map.merge(state, channel_info)}
  end
  def handle_call(:connect, _from, %{current_user: user} = state) do
    {status, channel_info} = Channel.connect(user, access_token())
    {:reply, status, Map.merge(state, channel_info)}
  end
  def handle_call(:connected?, _from, %{socket: socket} = state) do
    {:reply, Socket.connected?(socket), state}
  end
  def handle_call(:connected?, _from, state) do
    Logger.error("Socket not on #{__MODULE__}.state")
    {:reply, false, state}
  end
  def handle_call(:current_user, _from, %{current_user: user} = state), do: {:reply, user, state}
  def handle_call(:current_user_id, _from, %{current_user: user} = state), do: {:reply, user.id, state}
  def handle_call(:current_user, _from, state), do: {:reply, %{selected_team: %{css: "{}"}}, state} # This clause handles cases where the app is looking for the current user before it's been set, may need some augmentation
  def handle_call(:current_project, _from, %{state_opts: state_opts, current_user: %User{selected_project_id: project_id}} = state) when project_id != nil do
    result = State.Projects.get_project!(project_id, state, state_opts)
    {:reply, result, state}
  end
  def handle_call(:current_project, _from, _state), do: nil
  def handle_call(:current_team, _from, %{state_opts: state_opts, current_user: %User{selected_team_id: team_id}} = state) when team_id != nil do
    result = State.Teams.get_team!(team_id, state, state_opts)
    {:reply, result, state}
  end
  def handle_call(:current_team, _from, _state), do: nil
  def handle_call(:data, _from, %{data: data} = state), do: {:reply, data, state}
  def handle_call(:data, _from, state), do: {:reply, nil, state}
  def handle_call(:state, _from, state), do: {:reply, state, state}
  def handle_call(:disconnect, _from, %{socket: socket, user_channel: uc, team_channel: tc} = state) do
    :ok = Channel.disconnect(socket, uc, tc)
    {:reply, :ok, state |> Map.drop([:socket, :user_channel, :team_channel])}
  end

  def handle_call(:load, _from, %{current_user: user, state_opts: state_opts} = state) do
    opts = %{access_token: access_token(), state_opts: state_opts, user: user}
    state = Client.Loaders.apply(state, opts)
    {:reply, object_counts(state), state}
  end
  def handle_call(:load, _from, state), do: {:reply, {:error, "Could not load client, no user"}, state}

  # Annotation Types
  def handle_call({:load_annotation_types, opts}, _from, %{state_opts: state_opts} = state) do
    annotation_types = Client.AnnotationTypes.list_annotation_types(include_token(opts))
    state = StateHandlers.load(state, annotation_types, AnnotationType, state_opts)
    {:reply, :ok, state}
  end
  def handle_call({:list_annotation_types, opts}, _from, state) do
    {:reply, State.AnnotationTypes.list_annotation_types(state, kw_opts(opts, state)), state}
  end
  def handle_call({:get_annotation_type!, id, opts}, _from, state),
    do: {:reply, State.AnnotationTypes.get_annotation_type!(id, state, kw_opts(opts, state)), state}

  # Step Types
  def handle_call({:load_step_types, opts}, _from, %{state_opts: state_opts} = state) do
    step_types = Client.StepTypes.list_step_types(include_token(opts))
    state = StateHandlers.load(state, step_types, StepType, state_opts)
    {:reply, :ok, state}
  end
  def handle_call({:list_step_types, opts}, _from, state),
    do: {:reply, State.StepTypes.list_step_types(state, kw_opts(opts, state)), state}
  def handle_call({:get_step_type!, id, opts}, _from, state),
    do: {:reply, State.StepTypes.get_step_type!(id, state, kw_opts(opts, state)), state}

  # Users
  def handle_call({:load_users, opts}, _from, %{state_opts: state_opts} = state) do
    users = Client.Users.list_users(include_token(opts))
    state = StateHandlers.load(state, users, User, state_opts)
    {:reply, :ok, state}
  end
  def handle_call({:list_users, opts}, _from, state) do
    {:reply, State.Users.list_users(state, kw_opts(opts, state)), state}
  end
  def handle_call({:update_user_selections, user, attrs}, _from, state) do
    result = Client.Users.update_user_selections(user, attrs, %{access_token: access_token()})
    {:reply, result, state}
  end
  def handle_call({:invite_user, attrs}, _from, state) do
    result = Client.Users.invite_user(attrs, %{access_token: access_token()})
    {:reply, result, state}
  end

  # Team Users
  def handle_call({:load_team_users, opts}, _from, %{state_opts: state_opts} = state) do
    team_users = Client.TeamUsers.list_team_users(include_token(opts))
    state = StateHandlers.load(state, team_users, TeamUser, state_opts)
    {:reply, :ok, state}
  end
  def handle_call({:list_team_users, opts}, _from, state),
    do: {:reply, State.TeamUsers.list_team_users(state, kw_opts(opts, state)), state}
  def handle_call({:delete_team_user, id, opts}, _from, state),
    do: {:reply, Client.TeamUsers.delete_team_user(id, include_token(opts)), state}

  # Teams
  def handle_call({:load_teams, opts}, _from, %{state_opts: state_opts} = state) do
    teams = Client.Teams.list_teams(include_token(opts))
    state = StateHandlers.load(state, teams, Team, state_opts)
    {:reply, :ok, state}
  end
  def handle_call({:list_teams, opts}, _from, state) do
    {:reply, State.Teams.list_teams(state, kw_opts(opts, state)), state}
  end
  def handle_call({:get_team!, id, opts}, _from, state) do
    {:reply, State.Teams.get_team!(id, state, kw_opts(opts, state)), state}
  end
  def handle_call({:create_team, attrs}, _from, state) do
    {:reply, Client.Teams.create_team(attrs, %{access_token: access_token()}), state}
  end
  def handle_call({:update_team, team, attrs}, _from, state) do
    result = Client.Teams.update_team(team, attrs, %{access_token: access_token()})
    {:reply, result, state}
  end
  def handle_call({:delete_team, id, opts}, _from, state) do
    response = Client.Teams.delete_team(id, include_token(opts))
    {:reply, response, state}
  end

  # Strategies
  def handle_call({:load_strategies, opts}, _from, %{state_opts: state_opts} = state) do
    strategies = Client.Strategies.list_strategies(include_token(opts))
    state = StateHandlers.load(state, strategies, Strategy, state_opts)
    {:reply, :ok, state}
  end
  def handle_call({:list_strategies, opts}, _from, state) do
    {:reply, State.Strategies.list_strategies(state, kw_opts(opts, state)), state}
  end

  # Projects
  def handle_call({:load_projects, opts}, _from, %{state_opts: state_opts} = state) do
    remote_projects = Client.Projects.list_projects(include_token(opts))
    state = StateHandlers.load(state, remote_projects, Project, state_opts)
    {:reply, :ok, state}
  end
  def handle_call({:list_projects, opts}, _from, state),
    do: {:reply, State.Projects.list_projects(state, kw_opts(opts, state)), state}
  def handle_call({:get_project!, id, opts}, _from, state),
    do: {:reply, State.Projects.get_project!(id, state, kw_opts(opts, state)), state}
  def handle_call({:create_project, attrs}, _from, state),
    do: {:reply, Client.Projects.create_project(attrs, %{access_token: access_token()}), state}
  def handle_call({:update_project, project, attrs}, _from, state),
    do: {:reply, Client.Projects.update_project(project, attrs, %{access_token: access_token()}), state}
  def handle_call({:delete_project, id, opts}, _from, state),
    do: {:reply, Client.Projects.delete_project(id, include_token(opts)), state}

  # Screenshots
  def handle_call({:load_screenshots, opts}, _from, %{state_opts: state_opts} = state) do
    remote_screenshots = Client.Screenshots.list_screenshots(include_token(opts))
    state = StateHandlers.load(state, remote_screenshots, Screenshot, state_opts)
    {:reply, :ok, state}
  end
  def handle_call({:list_screenshots, opts}, _from, state),
    do: {:reply, State.Screenshots.list_screenshots(state, kw_opts(opts, state)), state}
  def handle_call({:get_screenshot!, id, opts}, _from, state),
    do: {:reply, State.Screenshots.get_screenshot!(id, state, kw_opts(opts, state)), state}
  def handle_call({:create_screenshot, attrs}, _from, state) do
    result = Client.Screenshots.create_screenshot(attrs, screenshot_opts())
    {:reply, result, state}
  end
  def handle_call({:update_screenshot, screenshot, attrs}, _from, state) do
    result = Client.Screenshots.update_screenshot(screenshot, attrs, screenshot_opts())
    {:reply, result, state}
  end
  def handle_call({:approve_screenshot, screenshot, opts}, _from, state),
    do: {:reply, Client.Screenshots.approve_screenshot(screenshot, screenshot_opts(opts)), state}
  def handle_call({:reject_screenshot, screenshot, opts}, _from, state),
    do: {:reply, Client.Screenshots.reject_screenshot(screenshot, screenshot_opts(opts)), state}
  def handle_call({:delete_screenshot, id, opts}, _from, state),
    do: {:reply, Client.Screenshots.delete_screenshot(id, screenshot_opts(opts)), state}


  # Pages
  def handle_call({:load_pages, opts}, _from, %{state_opts: state_opts} = state) do
    pages = Client.Pages.list_pages(include_token(opts))
    state = StateHandlers.load(state, pages, Page, state_opts)
    {:reply, :ok, state}
  end
  def handle_call({:list_pages, opts}, _from, state),
    do: {:reply, State.Pages.list_pages(state, kw_opts(opts, state)), state}
  def handle_call({:get_page!, id, opts}, _from, state),
    do: {:reply, State.Pages.get_page!(id, state, kw_opts(opts, state)), state}
  def handle_call({:find_page_by_path, href, opts}, _from, state),
    do: {:reply, State.Pages.find_page_by_path(state, kw_opts(opts, state), href), state}
  def handle_call({:create_page, attrs}, _from, state) do
    {:reply, Client.Pages.create_page(attrs, %{access_token: access_token()}), state}
  end
  def handle_call({:update_page, page, attrs}, _from, state) do
    {:reply, Client.Pages.update_page(page, attrs, %{access_token: access_token()}), state}
  end
  def handle_call({:upsert_page_screenshot, page, base64}, _from, state) do
    result = Client.Pages.upsert_page_screenshot(page, base64, screenshot_opts())
    {:reply, result, state}
  end
  def handle_call({:delete_page, id, opts}, _from, state),
    do: {:reply, Client.Pages.delete_page(id, include_token(opts)), state}

  # Processes
  def handle_call({:load_processes, opts}, _from, %{state_opts: state_opts} = state) do
    processes = Client.Processes.list_processes(include_token(opts))
    state = StateHandlers.load(state, processes, Process, state_opts)
    {:reply, :ok, state}
  end
  def handle_call({:list_processes, opts}, _from, state) do
    {:reply, State.Processes.list_processes(state, kw_opts(opts, state)), state}
  end
  def handle_call({:get_process!, id, opts}, _from, state),
    do: {:reply, State.Processes.get_process!(id, state, kw_opts(opts, state)), state}
  def handle_call({:create_process, attrs}, _from, state) do
    {:reply, Client.Processes.create_process(attrs, %{access_token: access_token()}), state}
  end
  def handle_call({:update_process, process, attrs}, _from, state),
    do: {:reply, Client.Processes.update_process(process, attrs, %{access_token: access_token()}), state}
  def handle_call({:delete_process, id, opts}, _from, state),
    do: {:reply, Client.Processes.delete_process(id, include_token(opts)), state}

  # Steps
  def handle_call({:load_steps, opts}, _from, %{state_opts: state_opts} = state) do
    steps = Client.Steps.list_steps(include_token(opts))
    state = StateHandlers.load(state, steps, Step, state_opts)
    {:reply, :ok, state}
  end
  def handle_call({:list_steps, opts}, _from, state) do
    {:reply, State.Steps.list_steps(state, kw_opts(opts, state)), state}
  end
  def handle_call({:get_step!, id, opts}, _from, state),
    do: {:reply, State.Steps.get_step!(id, state, kw_opts(opts, state)), state}
  def handle_call({:create_step, attrs}, _from, state) do
    {:reply, Client.Steps.create_step(attrs, %{access_token: access_token()}), state}
  end
  def handle_call({:update_step, step, attrs}, _from, state),
    do: {:reply, Client.Steps.update_step(step, attrs, %{access_token: access_token()}), state}
  def handle_call({:delete_step, id, opts}, _from, state),
    do: {:reply, Client.Steps.delete_step(id, include_token(opts)), state}

  # Elements
  def handle_call({:load_elements, opts}, _from, %{state_opts: state_opts} = state) do
    elements = Client.Elements.list_elements(include_token(opts))
    state = StateHandlers.load(state, elements, Element, state_opts)
    {:reply, :ok, state}
  end
  def handle_call({:list_elements, opts}, _from, state) ,
    do: {:reply, State.Elements.list_elements(state, kw_opts(opts, state)), state}
  def handle_call({:get_element!, id, opts}, _from, state),
    do: {:reply, State.Elements.get_element!(id, state, kw_opts(opts, state)), state}
  def handle_call({:find_element, field, value, opts}, _from, state),
    do: {:reply, State.Elements.find_element(state, kw_opts(opts, state), field, value), state}
  def handle_call({:create_element, attrs}, _from, state) do
    {:reply, Client.Elements.create_element(attrs, %{access_token: access_token()}), state}
  end
  def handle_call({:update_element, element, attrs}, _from, state),
    do: {:reply, Client.Elements.update_element(element, attrs, %{access_token: access_token()}), state}
  def handle_call({:delete_element, id, opts}, _from, state),
    do: {:reply, Client.Elements.delete_element(id, include_token(opts)), state}

  # Annotations
  def handle_call({:load_annotations, opts}, _from, %{state_opts: state_opts} = state) do
    annotations = Client.Annotations.list_annotations(include_token(opts))
    state = StateHandlers.load(state, annotations, Annotation, state_opts)
    {:reply, :ok, state}
  end
  def handle_call({:list_annotations, opts}, _from, state) do
    {:reply, State.Annotations.list_annotations(state, kw_opts(opts, state)), state}
  end
  def handle_call({:get_annotation!, id, opts}, _from, state),
    do: {:reply, State.Annotations.get_annotation!(id, state, kw_opts(opts, state)), state}
  def handle_call({:create_annotation, attrs}, _from, state) do
    {:reply, Client.Annotations.create_annotation(attrs, %{access_token: access_token()}), state}
  end
  def handle_call({:update_annotation, annotation, attrs}, _from, state),
    do: {:reply, Client.Annotations.update_annotation(annotation, attrs, %{access_token: access_token()}), state}
  def handle_call({:delete_annotation, id, opts}, _from, state),
    do: {:reply, Client.Annotations.delete_annotation(id, include_token(opts)), state}

  # Element Annotations
  def handle_call({:load_element_annotations, opts}, _from, %{state_opts: state_opts} = state) do
    element_annotations = Client.ElementAnnotations.list_element_annotations(include_token(opts))
    state = StateHandlers.load(state, element_annotations, ElementAnnotation, state_opts)
    {:reply, :ok, state}
  end

  def handle_call(:init_state, _from, %{data: _} = state), do: {:reply, :ok, state}
  def handle_call(:init_state, _from, %{state_opts: state_opts} = state),
    do: {:reply, :ok, StateHandlers.initialize(state, state_opts)}

  @impl true
  def handle_cast(:destroy_state, state), do: {:noreply, Map.delete(state, :data)}


  @impl true
  def handle_info(%Message{event: "update", payload: %{"attrs" => attrs, "type" => "Schemas.Users.User"}}, state) do
    Logger.debug("Incoming User Struct, Attrs: #{inspect attrs}, pid: #{inspect self()}")
    Phoenix.PubSub.broadcast(Userdocs.PubSub, "data", {"update_user", attrs})
    #UserdocsDesktopWeb.Endpoint.broadcast("data", "update_user", attrs)
    {:ok, user} = Userdocs.Users.create_prepared_user(attrs)
    File.write(Paths.team_css_override_file(), user.selected_team.css)
    {:noreply, state |> Map.put(:current_user, user)}
  end
  def handle_info(%Message{event: event, payload: %{"attrs" => attrs, "type" => type}},
    %{state_opts: state_opts} = state
  ) when event in ["update", "create", "delete"] do
    Logger.debug("Incoming Client Data Message, Event: #{event}, Attrs: #{inspect attrs}, pid: #{inspect self()}")
    object = Subscription.cast(attrs, type)
    Subscription.broadcast(object, event)
    {:noreply, Subscription.handle_event(state, event, object, state_opts)}
  end
  def handle_info(%Message{event: event, payload: payload}, state) do
    Logger.debug("Incoming Message, Event: #{event}, Payload: #{inspect payload}")
    {:noreply, state}
  end

  def screenshot_opts(), do: screenshot_opts(%{})
  def screenshot_opts(opts) do
    %{magick_path: magick_path, image_repo_path: repo_path} = Userdocs.LocalOptions.get_local_options()
    %{magick_path: magick_path, repo_path: repo_path, access_token: access_token()}
    |> Map.merge(opts)
  end

  def opts(opts, %{state_opts: state_opts}) do
    opts
    |> Map.put(:state_opts, state_opts)
    |> include_token()
  end

  def include_token(opts) do
    Map.put(opts, :access_token, access_token())
  end

  def access_token() do
    %{context: %{repo: Userdocs.LocalRepo}}
    |> Userdocs.Tokens.access()
    |> Map.get(:token)
  end

  def kw_opts(%{} = opts, state) do
    Enum.into(opts, [])
    |> kw_opts(state)
  end
  def kw_opts(opts, %{state_opts: state_opts}) do
    Keyword.merge(opts, state_opts)
  end

  def object_counts(%{data: data}), do:
    Enum.reduce(data, %{}, fn({k, v}, acc) -> Map.put(acc, k, Enum.count(v)) end)
end
