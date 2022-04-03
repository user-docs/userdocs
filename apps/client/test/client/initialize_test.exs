defmodule ClientTest.InitializeTest do
  use ExUnit.Case
  alias Client.Initialize
  alias Userdocs.Tokens
  alias Userdocs.Contexts
  alias Userdocs.UsersFixtures
  alias Userdocs.ContextsFixtures
  alias Userdocs.ProjectsFixtures
  alias Userdocs.WebFixtures
  alias Userdocs.TeamsFixtures

  @remote_opts %{context: %{repo: Userdocs.Repo}}
  @local_opts %{context: %{repo: Userdocs.LocalRepo}}
  @types [Schemas.Users.User]
  @state_opts [data_type: :list, strategy: :by_type, location: :data, types: @types]

  setup do
    :ok = Ecto.Adapters.SQL.Sandbox.checkout(Userdocs.LocalRepo)
  end

  defp ensure_web_started(_) do
    Application.ensure_all_started(:userdocs_web)
    :ok
  end

  defp create_password(_), do: %{password: UUID.uuid4()}
  defp create_user(%{password: password}), do: %{user: UsersFixtures.confirmed_user(password)}
  defp create_team(_), do: %{team: TeamsFixtures.team(@remote_opts)}

  defp create_team_user(%{user: user, team: team}),
    do: %{team_user: TeamsFixtures.team_user(user.id, team.id, @remote_opts)}

  defp create_strategy(_), do: %{strategy: WebFixtures.strategy(@remote_opts)}

  defp create_project(%{team: team, strategy: strategy}),
    do: %{project: ProjectsFixtures.project(team.id, strategy.id, @remote_opts)}

  defp create_context(%{user: user, team: team}),
    do: %{context: ContextsFixtures.context(%{user_id: user.id, team_id: team.id}, @local_opts)}

  defp create_tokens(%{user: user}) do
    pow_config = [
      mod: UserdocsWeb.API.Auth.Plug,
      plug: UserdocsWeb.API.Auth.Plug,
      otp_app: :userdocs_web
    ]

    backend = Pow.Config.get(pow_config, :cache_store_backend, Pow.Store.Backend.EtsCache)
    store_config = [backend: backend, pow_config: pow_config]
    secret_key_base = Application.get_env(:userdocs_web, UserdocsWeb.Endpoint)[:secret_key_base]
    conn = %Plug.Conn{secret_key_base: secret_key_base}
    access_token = Pow.UUID.generate()
    renewal_token = Pow.UUID.generate()
    signed_access_token = sign_token(conn, access_token, pow_config)
    signed_renewal_token = sign_token(conn, Pow.UUID.generate(), pow_config)

    Pow.Store.CredentialsCache.put(
      store_config,
      access_token,
      {user, [renewal_token: signed_renewal_token]}
    )

    PowPersistentSession.Store.PersistentSessionCache.put(
      store_config,
      renewal_token,
      {user, [access_token: signed_access_token]}
    )

    Tokens.create_all(signed_access_token, signed_renewal_token, user.id, @local_opts)
    %{access_token: signed_access_token, renewal_token: signed_renewal_token}
  end

  defp sign_token(conn, token, config),
    do: Pow.Plug.sign_token(conn, Atom.to_string(UserdocsWeb.API.Auth.Plug), token, config)

  describe "Initialize State" do
    test "sets up the data map" do
      assert {%{data: %{users: []}}, :ok, "State Initialized"} =
               Initialize.do_initialize_state(%{}, @state_opts)
    end
  end

  describe "Token Store" do
    test "creates token object when they don't exist" do
      assert Initialize.do_check_tokens(%{}, @local_opts) == {%{}, :error, "No Tokens"}
    end

    test "returns error when defaults exist" do
      Tokens.create_all("default", "default", "default", @local_opts)
      assert Initialize.do_check_tokens(%{}, @local_opts) == {%{}, :error, "No Tokens"}
    end

    test "returns ok when non-defaults exist" do
      Tokens.create_all(UUID.uuid4(), UUID.uuid4(), UUID.uuid4(), @local_opts)
      assert Initialize.do_check_tokens(%{}, @local_opts) == {%{}, :ok, "Tokens Exist"}
    end
  end

  describe "Authentication" do
    setup [
      :ensure_web_started,
      :create_password,
      :create_user
    ]

    test "works with valid tokens", %{user: %{id: id}} = context do
      %{access_token: at, renewal_token: rt} = create_tokens(context)
      assert {state, :ok, "Authenticated"} = Initialize.do_authenticate(%{}, @local_opts)
      assert %{access_token: ^at, renewal_token: ^rt, current_user: %{id: ^id}} = state
    end

    test "returns halt message when tokens are default" do
      Tokens.create_all("default", "default", "default", @local_opts)
      assert Initialize.do_authenticate(%{}, @local_opts) == {%{}, :halt, "No Tokens"}
    end

    test "returns halt message when no valid tokens exist" do
      assert Initialize.do_authenticate(%{}, @local_opts) == {%{}, :halt, "No Tokens"}
    end
  end

  describe "Fetch Context" do
    setup [
      :create_password,
      :create_user
    ]

    test "fetches context when exists", %{user: user} do
      {:ok, context} =
        %{user_id: user.id, project_id: nil, team_id: nil}
        |> Contexts.create_context(@local_opts)

      assert {%{context: context}, :ok, "Context Fetched"} =
               Initialize.do_fetch_context(%{current_user: user}, @local_opts)
    end

    test "creates context when it doesn't exists", %{user: %{id: user_id} = user} do
      assert {state, :ok, "Context Fetched"} =
               Initialize.do_fetch_context(%{current_user: user}, @local_opts)

      assert %{context: %{user_id: ^user_id, project_id: nil, team_id: nil}} = state
    end
  end

  describe "Connect" do
    setup [
      :ensure_web_started,
      :create_password,
      :create_user,
      :create_team,
      :create_team_user,
      :create_strategy,
      :create_project,
      :create_context
    ]

    test "Connects with correct user and token", test_context do
      %{user: user, team: team, project: project, context: context} = test_context
      %{access_token: at} = create_tokens(test_context)
      state = %{current_user: user, access_token: at, context: context, data: %{teams: [team]}}

      assert {%{socket: _, team_channel: _, user_channel: _}, :ok, "Client connected"} =
               Initialize.do_connect_channel(state, @state_opts)
    end
  end
end
