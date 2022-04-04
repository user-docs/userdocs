defmodule ClientTest.InitializeTest do
  use Client.RemoteCase
  use Client.LocalCase
  alias Client.Initialize
  alias Userdocs.Tokens
  alias Userdocs.Contexts

  @types [Schemas.Users.User]
  @state_opts [data_type: :list, strategy: :by_type, location: :data, types: @types]

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

    test "works with valid tokens", %{user: %{id: id} = user} = context do
      %{access_token: at, renewal_token: rt} = create_remote_tokens(context)
      create_local_tokens(%{access_token: at, renewal_token: rt, user: user})
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

      assert {%{context: ^context}, :ok, "Context Fetched"} =
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
      :create_remote_strategy,
      :create_remote_project,
      :create_context
    ]

    test "Connects with correct user and token", test_context do
      %{user: user, team: team, context: context} = test_context
      %{access_token: at, renewal_token: rt} = create_remote_tokens(test_context)
      create_local_tokens(%{access_token: at, renewal_token: rt, user: user})
      state = %{current_user: user, access_token: at, context: context, data: %{teams: [team]}}

      assert {%{socket: _, team_channel: _, user_channel: _}, :ok, "Client connected"} =
               Initialize.do_connect_channel(state, @state_opts)
    end

    test "returns error with insufficient info" do
      assert Initialize.do_connect_channel(%{}, @state_opts) == {:error, "Insufficient Data to Connect"}
    end
  end
end
