defmodule Client.Server do
  @topic "client"

  require Logger
  use GenServer
  import Client.Constants
  import Client.StateSupport

  alias Schemas.Screenshots.Screenshot
  alias Schemas.StepInstances.StepInstance
  alias Schemas.Users.Context

  alias PhoenixClient.{Message, Socket}
  alias Client.Channel
  alias Client.Authentication
  alias Client.Subscription
  alias Client.Initialize
  alias Local.Paths
  alias Client.Context.Projects

  alias Userdocs.Tokens

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
    Schemas.Pages.Page,
    Schemas.StepInstances.StepInstance
  ]

  @state_opts [data_type: :list, strategy: :by_type, location: :data, types: @types]
  @local_opts %{context: %{repo: Userdocs.LocalRepo}}

  def start_link(args), do: GenServer.start_link(__MODULE__, Enum.into(args, %{}), name: __MODULE__)

  @impl true
  def init(%{mode: :test}), do: {:ok, initialize(%{topic: @topic})}
  def init(_) do
    Logger.info("Initializing #{__MODULE__}")
    Phoenix.PubSub.subscribe(Userdocs.PubSub, "data")
    state = %{setup_status: Initialize.setup_status(), topic: @topic, context: %Context{}}
    {:ok, state, {:continue, :initialize_state}}
  end

  @impl true
  def handle_continue(:initialize_state, state), do: Initialize.initialize_state(state)
  def handle_continue(:check_tokens, state), do: Initialize.check_tokens(state)
  def handle_continue(:authenticate, state), do: Initialize.authenticate(state)
  def handle_continue(:load_user, state), do: Initialize.load_user(state)
  def handle_continue(:fetch_context, state), do: Initialize.fetch_context(state)
  def handle_continue(:connect_channel, state), do: Initialize.connect_channel(state)
  def handle_continue(:load_project, state), do: Initialize.load_project(state)
  def handle_continue(:complete, state), do: {:noreply, state}

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
    [at, rt, uid] = Tokens.list_tokens(@local_opts)
    {:reply, {:ok, %{access_token: at.token, renewal_token: rt.token, user_id: uid.token}}, state}
  end
  def handle_call(:connect, _from, %{socket: socket, user_channel: uc, team_channel: tc, current_user: user, access_token: token} = state) do
    team = get_current_team(state)
    {status, channel_info} = Channel.maybe_reconnect(socket, uc, tc, user, team, token)
    {:reply, status, Map.merge(state, channel_info)}
  end
  def handle_call(:connect, _from, %{current_user: user, access_token: access_token} = state) do
    team = get_current_team(state)
    {status, channel_info} = Channel.connect(user, team, access_token)
    {:reply, status, Map.merge(state, channel_info)}
  end
  def handle_call(:connected?, _from, %{socket: socket} = state) do
    {:reply, Socket.connected?(socket), state}
  end
  def handle_call(:connected?, _from, state) do
    Logger.error("Socket not on #{__MODULE__}.state")
    {:reply, false, state}
  end

  def handle_call(:current_user_id, _from, %{current_user: user} = state), do: {:reply, user.id, state}
  def handle_call(:current_user_id, _from,state), do: {:reply, nil, state}
  def handle_call(:current_user, _from, %{current_user: user} = state), do: {:reply, user, state}
  def handle_call(:current_user, _from, state), do: {:reply, nil, state}

  def handle_call(:current_project, _from, state) when state.context.project_id != nil do
    {:reply, Projects.get_current_project(state), state}
  end
  def handle_call(:current_project, _from, state), do: {:reply, nil, state}

  def handle_call(:current_team, _from, state) when state.context.team_id != nil do
    {:reply, get_current_team(state), state}
  end
  def handle_call(:current_team, _from, state), do: {:reply, nil, state}

  def handle_call(:data, _from, %{data: data} = state), do: {:reply, data, state}
  def handle_call(:data, _from, state), do: {:reply, nil, state}

  def handle_call({:put_in_state, new_state}, _from, _state), do: {:reply, :ok, new_state}
  def handle_call({:put_in_state, key, data}, _from, state), do: {:reply, :ok, Map.put(state, key, data)}

  def handle_call(:state, _from, state), do: {:reply, state, state}

  def handle_call(:disconnect, _from, %{socket: socket, user_channel: uc, team_channel: tc} = state) do
    :ok = Channel.disconnect(socket, uc, tc)
    {:reply, :ok, state |> Map.drop([:socket, :user_channel, :team_channel])}
  end
  def handle_call(:disconnect, _from, state), do: {:reply, :ok, state}

  def handle_call(:load, _from, %{socket: _} = state) do
    state = Client.Loaders.apply(state)
    {:reply, object_counts(state), state}
  end
  def handle_call(:load, _from, state), do: {:reply, {:error, "Could not load client, current keys are: #{inspect Map.keys(state)}"}, state}

  def handle_call(:counts, _from, state), do: {:reply, object_counts(state), state}

  # Step Instances

  def handle_call({:load_step_instances, opts}, _from, %{state_opts: state_opts} = state) do
    step_instances = Userdocs.StepInstances.list_step_instances(opts)
    state = StateHandlers.load(state, step_instances, StepInstance, state_opts)
    {:reply, :ok, state}
  end
  def handle_call({:list_step_instances, opts}, _from, state) do
    {:reply, State.StepInstances.list_step_instances(state, kw_opts(opts, state)), state}
  end
  def handle_call({:create_step_instance, attrs}, _from, state) do
    {:reply, Userdocs.StepInstances.create_step_instance(attrs), state}
  end
  def handle_call({:trim_and_create_step_instance, attrs}, _from, state) do
    {:reply, Userdocs.StepInstances.trim_and_create_step_instance(attrs), state}
  end
  def handle_call({:update_step_instance, step_instance, attrs}, _from, state) do
    {:reply, Userdocs.StepInstances.update_step_instance(step_instance, attrs), state}
  end
  def handle_call({:delete_step_instance, id, _opts}, _from, state) do
    step_instance = Userdocs.StepInstances.get_step_instance!(id)
    {:reply, Userdocs.StepInstances.delete_step_instance(step_instance), state}
  end

  ################################### GENERATED CODE #####################################

  alias Client.AnnotationTypes

  def handle_call({:load_annotation_types, opts}, _from, state),
    do: {:reply, :ok, AnnotationTypes.load_annotation_types(state, opts)}

  def handle_call({:list_annotation_types, opts}, _from, state),
    do: {:reply, State.AnnotationTypes.list_annotation_types(state, kw_opts(opts, state)), state}

  def handle_call({:get_annotation_type!, id, opts}, _from, state),
    do: {:reply, State.AnnotationTypes.get_annotation_type!(id, state, kw_opts(opts, state)), state}

  alias Client.StepTypes

  def handle_call({:load_step_types, opts}, _from, state),
    do: {:reply, :ok, StepTypes.load_step_types(state, opts)}

  def handle_call({:list_step_types, opts}, _from, state),
    do: {:reply, State.StepTypes.list_step_types(state, kw_opts(opts, state)), state}

  def handle_call({:get_step_type!, id, opts}, _from, state),
    do: {:reply, State.StepTypes.get_step_type!(id, state, kw_opts(opts, state)), state}

  alias Client.Users

  def handle_call({:load_users, opts}, _from, state),
    do: {:reply, :ok, Users.load_users(state, opts)}

  def handle_call({:list_users, opts}, _from, state),
    do: {:reply, State.Users.list_users(state, kw_opts(opts, state)), state}

  def handle_call({:get_user!, id, opts}, _from, state),
    do: {:reply, State.Users.get_user!(id, state, kw_opts(opts, state)), state}

  def handle_call({:update_user, step, attrs}, _from, state),
    do: {:reply, Users.update_user(step, attrs, state), state}
    def handle_call({:invite_user, attrs}, _from, state) do
      result = Client.Remote.Users.invite_user(attrs, %{access_token: access_token()})
      {:reply, result, state}
    end

  alias Client.TeamUsers

  def handle_call({:load_team_users, opts}, _from, state),
    do: {:reply, :ok, TeamUsers.load_team_users(state, opts)}

  def handle_call({:list_team_users, opts}, _from, state),
    do: {:reply, State.TeamUsers.list_team_users(state, kw_opts(opts, state)), state}

  def handle_call({:get_team_user!, id, opts}, _from, state),
    do: {:reply, State.TeamUsers.get_team_user!(id, state, kw_opts(opts, state)), state}

  def handle_call({:delete_team_user, id}, _from, state),
    do: {:reply, TeamUsers.delete_team_user(id, state), state}

  alias Client.Teams

  def handle_call({:load_teams, opts}, _from, state),
    do: {:reply, :ok, Teams.load_teams(state, opts)}

  def handle_call({:list_teams, opts}, _from, state),
    do: {:reply, State.Teams.list_teams(state, kw_opts(opts, state)), state}

  def handle_call({:get_team!, id, opts}, _from, state),
    do: {:reply, State.Teams.get_team!(id, state, kw_opts(opts, state)), state}

  def handle_call({:create_team, attrs}, _from, state),
    do: {:reply, Teams.create_team(attrs, state), state}

  def handle_call({:update_team, team, attrs}, _from, state),
    do: {:reply, Teams.update_team(team, attrs, state), state}

  def handle_call({:delete_team, id}, _from, state),
    do: {:reply, Teams.delete_team(id, state), state}

  alias Client.Projects

  def handle_call({:load_projects, opts}, _from, state),
    do: {:reply, :ok, Projects.load_projects(state, opts)}

  def handle_call({:list_projects, opts}, _from, state),
    do: {:reply, State.Projects.list_projects(state, kw_opts(opts, state)), state}

  def handle_call({:get_project!, id, opts}, _from, state),
    do: {:reply, State.Projects.get_project!(id, state, kw_opts(opts, state)), state}

  def handle_call({:create_project, attrs}, _from, state),
    do: {:reply, Projects.create_project(attrs, state), state}

  def handle_call({:update_project, project, attrs}, _from, state),
    do: {:reply, Projects.update_project(project, attrs, state), state}

  def handle_call({:delete_project, id}, _from, state),
    do: {:reply, Projects.delete_project(id, state), state}

  alias Client.Strategies

  def handle_call({:load_strategies, opts}, _from, state),
    do: {:reply, :ok, Strategies.load_strategies(state, opts)}

  def handle_call({:list_strategies, opts}, _from, state),
    do: {:reply, State.Strategies.list_strategies(state, kw_opts(opts, state)), state}

  alias Client.Screenshots

  def handle_call({:load_screenshots, opts}, _from, state),
    do: {:reply, :ok, Screenshots.load_screenshots(state, opts)}

  def handle_call({:list_screenshots, opts}, _from, state),
    do: {:reply, State.Screenshots.list_screenshots(state, kw_opts(opts, state)), state}

  def handle_call({:get_screenshot!, id, opts}, _from, state),
    do: {:reply, State.Screenshots.get_screenshot!(id, state, kw_opts(opts, state)), state}

  def handle_call({:create_screenshot, attrs}, _from, state),
    do: {:reply, Screenshots.create_screenshot(attrs, state), state}

  def handle_call({:update_screenshot, step, attrs}, _from, state),
    do: {:reply, Screenshots.update_screenshot(step, attrs, state), state}

  def handle_call({:delete_screenshot, id}, _from, state),
    do: {:reply, Screenshots.delete_screenshot(id, state), state}

  alias Client.Pages

  def handle_call({:load_pages, opts}, _from, state),
    do: {:reply, :ok, Pages.load_pages(state, opts)}

  def handle_call({:list_pages, opts}, _from, state),
    do: {:reply, State.Pages.list_pages(state, kw_opts(opts, state)), state}

  def handle_call({:find_page_by_path, href, opts}, _from, state),
    do: {:reply, State.Pages.find_page_by_path(state, kw_opts(opts, state), href), state}

  def handle_call({:get_page!, id, opts}, _from, state),
    do: {:reply, State.Pages.get_page!(id, state, kw_opts(opts, state)), state}

  def handle_call({:create_page, attrs}, _from, state),
    do: {:reply, Pages.create_page(attrs, state), state}

  def handle_call({:update_page, page, attrs}, _from, state),
    do: {:reply, Pages.update_page(page, attrs, state), state}

  def handle_call({:delete_page, id}, _from, state),
    do: {:reply, Pages.delete_page(id, state), state}

  alias Client.Processes

  def handle_call({:load_processes, opts}, _from, state),
    do: {:reply, :ok, Processes.load_processes(state, opts)}

  def handle_call({:list_processes, opts}, _from, state),
    do: {:reply, State.Processes.list_processes(state, kw_opts(opts, state)), state}

  def handle_call({:get_process!, id, opts}, _from, state),
    do: {:reply, State.Processes.get_process!(id, state, kw_opts(opts, state)), state}

  def handle_call({:create_process, attrs}, _from, state),
    do: {:reply, Processes.create_process(attrs, state), state}

  def handle_call({:update_process, process, attrs}, _from, state),
    do: {:reply, Processes.update_process(process, attrs, state), state}

  def handle_call({:delete_process, id}, _from, state),
    do: {:reply, Processes.delete_process(id, state), state}

  alias Client.Steps

  def handle_call({:load_steps, opts}, _from, state),
    do: {:reply, :ok, Steps.load_steps(state, opts)}

  def handle_call({:list_steps, opts}, _from, state),
    do: {:reply, State.Steps.list_steps(state, kw_opts(opts, state)), state}

  def handle_call({:get_step!, id, opts}, _from, state),
    do: {:reply, State.Steps.get_step!(id, state, kw_opts(opts, state)), state}

  def handle_call({:create_step, attrs}, _from, state),
    do: {:reply, Steps.create_step(attrs, state), state}

  def handle_call({:update_step, step, attrs}, _from, state),
    do: {:reply, Steps.update_step(step, attrs, state), state}

  def handle_call({:delete_step, id}, _from, state),
    do: {:reply, Steps.delete_step(id, state), state}

  alias Client.Elements

  def handle_call({:load_elements, opts}, _from, state),
    do: {:reply, :ok, Elements.load_elements(state, opts)}

  def handle_call({:list_elements, opts}, _from, state),
    do: {:reply, State.Elements.list_elements(state, kw_opts(opts, state)), state}

  def handle_call({:get_element!, id, opts}, _from, state),
    do: {:reply, State.Elements.get_element!(id, state, kw_opts(opts, state)), state}

  def handle_call({:create_element, attrs}, _from, state),
    do: {:reply, Elements.create_element(attrs, state), state}

  def handle_call({:update_element, step, attrs}, _from, state),
    do: {:reply, Elements.update_element(step, attrs, state), state}

  def handle_call({:delete_element, id}, _from, state),
    do: {:reply, Elements.delete_element(id, state), state}

  alias Client.Annotations

  def handle_call({:load_annotations, opts}, _from, state),
    do: {:reply, :ok, Annotations.load_annotations(state, opts)}

  def handle_call({:list_annotations, opts}, _from, state),
    do: {:reply, State.Annotations.list_annotations(state, kw_opts(opts, state)), state}

  def handle_call({:get_annotation!, id, opts}, _from, state),
    do: {:reply, State.Annotations.get_annotation!(id, state, kw_opts(opts, state)), state}

  def handle_call({:create_annotation, attrs}, _from, state),
    do: {:reply, Annotations.create_annotation(attrs, state), state}

  def handle_call({:update_annotation, step, attrs}, _from, state),
    do: {:reply, Annotations.update_annotation(step, attrs, state), state}

  def handle_call({:delete_annotation, id}, _from, state),
    do: {:reply, Annotations.delete_annotation(id, state), state}

  alias Client.ElementAnnotations

  def handle_call({:load_element_annotations, opts}, _from, state),
    do: {:reply, :ok, ElementAnnotations.load_element_annotations(state, opts)}

  def handle_call({:list_element_annotations, opts}, _from, state),
    do: {:reply, State.ElementAnnotations.list_element_annotations(state, kw_opts(opts, state)), state}

  def handle_call(:init_state, _from, %{data: _} = state), do: {:reply, :ok, state}
  def handle_call(:init_state, _from, state),
    do: {:reply, :ok, StateHandlers.initialize(state, state_opts())}

  @impl true
  def handle_cast(:destroy_state, state), do: {:noreply, Map.delete(state, :data)}
  def handle_cast({:update_context, attrs}, %{current_user: user, context: context} = state) do
    team_id = Map.get(attrs, :team_id, context.team_id)
    project_id = Map.get(attrs, :project_id, context.project_id)
    attrs = %{project_id: project_id, team_id: team_id}

    {:ok, context} =
      Userdocs.Contexts.get_context!(user.id, @local_opts)
      |> Userdocs.Contexts.update_context(attrs, @local_opts)

    if Map.get(state, :socket, false) do
      :ok = Channel.disconnect(state.socket, state.user_channel, state.team_channel)
    end

    {:noreply, Map.put(state, :context, context), {:continue, :fetch_context}}
  end


  @impl true
  def handle_info(%Message{event: "update", payload: %{"attrs" => attrs, "type" => "Schemas.Users.User"}}, state) do
    Logger.warning("Incoming User Struct, Attrs: #{inspect attrs}, pid: #{inspect self()}")
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
    Logger.info("Incoming Message, Event: #{event}, Payload: #{inspect payload}")
    {:noreply, state}
  end

  def handle_info(%{event: event, payload: payload}, state) do
    Logger.info("Incoming Local Message, Event: #{event}, Payload: #{inspect payload}")
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

  defp local_opts(opts \\ %{}) do
    Map.merge(@local_opts, opts)
  end

  def include_token(opts) do
    Map.put(opts, :access_token, access_token())
  end

  def access_token() do
    @local_opts
    |> Userdocs.Tokens.access()
    |> Map.get(:token)
  end

  def kw_opts(%{} = opts, state) do
    Enum.into(opts, [])
    |> kw_opts(state)
  end
  def kw_opts(opts, _) do
    Keyword.merge(opts, @state_opts)
  end

  def object_counts(%{data: data}), do:
    Enum.reduce(data, %{}, fn({k, v}, acc) -> Map.put(acc, k, Enum.count(v)) end)

  def is_remote?(state) do
    case get_current_team(state) do
      %{type: type} when type in [:personal] -> false
      %{type: type} when type in [:team, :enterprise] -> true
      nil ->
        Logger.error("Team id is probably nil #{inspect state.context}")
        false
    end
  end

  def get_current_team(state) do
    %{context: %Context{team_id: team_id}} = state
    State.Teams.get_team!(team_id, state, @state_opts)
  end

  def maybe_join_team_channel(%{context: %{team_id: nil}}), do: {:ok, nil}
  def maybe_join_team_channel(%{socket: socket, context: %{team_id: team_id}}) do
    Channel.join_team_channel(socket, team_id)
  end
end
