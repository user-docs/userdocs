defmodule Client.Initialize do
  import Client.Constants

  alias Client.Authentication
  alias Client.Channel
  alias Client.StateSupport
  alias Client.Loaders
  alias Client.Subscription
  alias Userdocs.Setups
  alias Userdocs.Tokens
  alias Userdocs.Contexts
  alias Schemas.Users.Context
  alias Schemas.Teams.Team

  @remote_teams [:enterprise, :team]
  @local_teams [:personal]

  def setup_status() do
    if Mix.env() == :test do
      %{}
    else
      %{
        initialize_state: %{
          order: 1,
          status: nil,
          next_task: :check_tokens,
          title: "Initial State"
        },
        check_tokens: %{order: 2, status: nil, next_task: :authenticate, title: "Tokens"},
        authenticate: %{order: 3, status: nil, next_task: :load_user, title: "Authenticate"},
        load_user: %{order: 4, status: nil, next_task: :fetch_context, title: "Load User Data"},
        fetch_context: %{
          order: 5,
          status: nil,
          next_task: :connect_channel,
          title: "Fetch Context"
        },
        connect_channel: %{order: 6, status: nil, next_task: :load_project, title: "Connecting"},
        load_project: %{order: 7, status: nil, next_task: :complete, title: "Load Project"}
      }
    end
  end

  def initialize_state(state) do
    do_initialize_state(state, state_opts())
    |> handle_result(:initialize_state)
  end

  def do_initialize_state(state, opts) do
    state =
      state
      |> Map.put(:state_opts, opts)
      |> StateSupport.initialize()

    {state, :ok, "State Initialized"}
  end

  def check_tokens(state) do
    do_check_tokens(state, local_opts())
    |> handle_result(:check_tokens)
  end

  def do_check_tokens(state, opts) do
    opts
    |> Tokens.list_tokens()
    |> Authentication.check_token_store()
    |> case do
      {:ok, _tokens} -> {state, :ok, "Tokens Exist"}
      {:error, e} -> {state, :error, e}
    end
  end

  def authenticate(state) do
    do_authenticate(state, local_opts())
    |> handle_result(:authenticate)
  end

  def do_authenticate(state, local_opts) do
    case Authentication.init() do
      {:error, message} ->
        {state, :halt, message}

      {:ok, user} ->
        %{value: access_token} = Tokens.access(local_opts)
        %{value: renewal_token} = Tokens.renewal(local_opts)

        state =
          Map.put(state, :current_user, user)
          |> Map.put(:access_token, access_token)
          |> Map.put(:renewal_token, renewal_token)

        {state, :ok, "Authenticated"}
    end
  end

  def load_user(state) do
    do_load_user(state)
    |> handle_result(:load_user)
  end

  def do_load_user(state), do: {Loaders.load_base_data(state), :ok, "User Loaded"}


  def fetch_context(state) do
    do_fetch_context(state, local_opts())
    |> handle_result(:fetch_context)
  end

  def do_fetch_context(%{current_user: user} = state, local_opts) do
    context = ensure_context(user.id, local_opts)
    state = Map.put(state, :context, context)
    {state, :ok, "Context Fetched"}
  end

  def ensure_context(user_id, local_opts) do
    case Contexts.get_context(user_id, local_opts) do
      %Context{} = context ->
        context

      nil ->
        attrs = %{user_id: user_id, project_id: nil, team_id: nil}
        {:ok, context} = Contexts.create_context(attrs, local_opts)
        context
    end
  end

  def connect_channel(state) do
    do_connect_channel(state, state_opts())
    |> handle_result(:connect_channel)
  end

  def do_connect_channel(%{context: %{team_id: nil}} = state, _), do: {state, :halt, "Team Not Selectecd"}
  def do_connect_channel(%{context: %{team_id: team_id}} = state, state_opts) do
    with %Team{} = team <- State.Teams.get_team!(team_id, state, state_opts) do
      info =
        case team do
          %Team{type: type} when type in @remote_teams -> connect_remote_channel(state, team)
          %Team{type: type} when type in @local_teams -> connect_local_channel(state, team)
        end

      state = Map.merge(state, info)
      {state, :ok, "Client connected"}
    else
      nil ->
        {state, :halt, "Failed to fetch team"}
      _e ->
        {state, :halt, "Client.Init Channel Failed to Connect"}
    end
  end
  def do_connect_channel(_, _), do: {:error, "Insufficient Data to Connect"}

  def connect_remote_channel(%{access_token: token, current_user: user}, team) do
    with {:ok, channel_info} <- Channel.connect(user, team, token) do
      channel_info
    end
  end

  def connect_local_channel(_state, team) do
    with :ok <- Phoenix.PubSub.subscribe(Userdocs.PubSub, "team:#{team.id}") do
      %{}
    end
  end

  def load_project(state) do
    do_load_project(state)
    |> handle_result(:load_project)
  end

  def do_load_project(state) do
    Subscription.broadcast(state.context, "load_started")
    state = Loaders.load_project_data(state)
    Subscription.broadcast(state.context, "load_finished")
    {state, :ok, "Project Loaded"}
  end

  defp handle_result({state, status, message}, task_key),
    do: Setups.handle_setup_result({status, message}, state, task_key)
end
