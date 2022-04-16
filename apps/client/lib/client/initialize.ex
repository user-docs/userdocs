defmodule Client.Initialize do
  import Client.Constants

  alias Client.Authentication
  alias Client.Channel
  alias Client.StateSupport
  alias Client.Loaders
  alias Userdocs.Setups
  alias Userdocs.Secrets
  alias Userdocs.Contexts
  alias Schemas.Users.Context
  alias Schemas.Teams.Team

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
    |> Secrets.list_tokens()
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
        %{token: access_token} = Secrets.access(local_opts)
        %{token: renewal_token} = Secrets.renewal(local_opts)

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

  def do_connect_channel(
        %{current_user: user, access_token: token, context: %{team_id: team_id}} = state,
        state_opts
      ) do
    with %Team{} = team <- State.Teams.get_team!(team_id, state, state_opts),
         {:ok, channel_info} <- Channel.connect(user, team, token) do
      state = Map.merge(state, channel_info)
      {state, :ok, "Client connected"}
    else
      nil ->
        {state, :error, "Failed to fetch team"}
      _e ->
        {state, :error, "Client.Init Channel Failed to Connect"}
    end
  end
  def do_connect_channel(_, _), do: {:error, "Insufficient Data to Connect"}

  def load_project(state) do
    do_load_project(state)
    |> handle_result(:load_project)
  end

  def do_load_project(state), do: {Loaders.load_project_data(state), :ok, "Project Loaded"}

  defp handle_result({state, status, message}, task_key),
    do: Setups.handle_setup_result({status, message}, state, task_key)
end
