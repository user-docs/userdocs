defmodule StateHandlers.StateFixtures do

  alias Userdocs.UsersFixtures
  alias Userdocs.ProjectsFixtures
  alias Userdocs.DocubitFixtures
  alias Userdocs.WebFixtures

  alias Schemas.Users.User
  alias Schemas.Teams.TeamUser
  alias Schemas.Teams.Team
  alias Schemas.Projects.Project
  alias Userdocs.Projects.Version
  alias Userdocs.Web.Strategy

  def state(opts) do
    opts =
      opts
      |> Keyword.put(:types, [Strategy, User, TeamUser, Team, Project, Version, Document, DocumentVersion, DocubitType])

    strategy = WebFixtures.strategy()
    user = UsersFixtures.user()
    team = UsersFixtures.team()
    team_user = UsersFixtures.team_user(user.id, team.id)
    project = ProjectsFixtures.project(team.id, strategy.id)

    %{}
    |> StateHandlers.initialize(opts)
    |> StateHandlers.load([user], User, opts)
    |> StateHandlers.load([team], Team, opts)
    |> StateHandlers.load([team_user], TeamUser, opts)
    |> StateHandlers.load([project], Project, opts)
  end
end

defmodule StateHandlersTest do
  use Userdocs.DataCase

  describe "state_handlers" do
    alias Schemas.Users.User
    alias Schemas.Projects.Project
    alias Userdocs.Projects.Version
    alias Userdocs.UsersFixtures
    alias StateHandlers.StateFixtures

    def broadcaster(_channel, _action, _data) do
      _inspect_stuff_code = """
      case data do
        %{objects: [object | _]} -> IO.inspect(object.__meta__.schema)
        [object | _] -> IO.inspect(object.__meta__.schema)
        object -> IO.inspect(object.__meta__.schema)
      end
      """
      ""
    end
"""
    test "StateHandlers.Initialize" do
      state_opts = [
        {
          [data_type: :list, strategy: :by_type, types: [User, Project, Version]],
          %{projects: [], users: [], versions: []}
        },
        {
          [data_type: :list, strategy: :by_type, location: :data, types: [User, Project, Version]],
          %{data: %{projects: [], users: [], versions: []}}
        }
      ]
      Enum.each(state_opts,
        fn({opts, result}) ->
          #IO.puts("Running StateHandlers.Initialize with {inspect(opts)}")
          state = StateHandlers.initialize(%{}, opts)
          assert state == result
        end
      )
    end

    test "StateHandlers.Load" do
      state_opts = [
        {[data_type: :list, strategy: :by_type], %{users: %{}}},
        {[data_type: :list, strategy: :by_type, location: :data], %{data: %{users: %{}}}}
     ]
      Enum.each(state_opts,
        fn({opts, initial_state}) ->
          #IO.puts("Running StateHandlers.Load with {inspect(opts)}")
          data = Enum.map(1..2, fn(_) -> UsersFixtures.user() end)
          state = StateHandlers.load(initial_state, data, User, opts)
          assert StateHandlers.list(state, User, opts) == data
        end
      )
    end

    test "StateHandlers.List" do
      user = UsersFixtures.user()
      state_opts = [
        {[data_type: :list, strategy: :by_type], %{users: [user]}},
        {[data_type: :list, strategy: :by_type, location: :data], %{data: %{users: [user]}}}
     ]
      Enum.each(state_opts,
        fn({opts, initial_state}) ->
          #IO.puts("Running StateHandlers.List with {inspect(opts)}")
          result = StateHandlers.list(initial_state, User, opts)
          assert result == [user]
        end
      )
    end

    test "StateHandlers.Get" do
      list_data = Enum.map(1..2, fn(_) -> UsersFixtures.user() end)
      state_opts = [
        {[data_type: :list, strategy: :by_type], %{users: list_data}},
        {[data_type: :list, strategy: :by_type, location: :data], %{data: %{users: list_data}}}
     ]
      Enum.each(state_opts,
        fn({opts, initial_state}) ->
          #IO.puts("Running StateHandlers.Get with {inspect(opts)}")
          id = list_data |> Enum.at(0) |> Map.get(:id)
          result = StateHandlers.get(initial_state, id, User, opts)
          assert result == list_data |> Enum.at(0)
        end
      )
    end

    test "StateHandlers.Create" do
      list_data = Enum.map(1..2, fn(_) -> UsersFixtures.user() end)
      state_opts = [
        {[data_type: :list, strategy: :by_type], %{users: list_data}},
        {[data_type: :list, strategy: :by_type, location: :data], %{data: %{users: list_data}}}
     ]
      Enum.each(state_opts,
        fn({opts, initial_state}) ->
          #IO.puts("Running StateHandlers.Create with {inspect(opts)}")
          user = UsersFixtures.user()
          result = StateHandlers.create(initial_state, user, opts)
          case {opts[:data_type], opts[:location]} do
            {:list, nil} -> assert result.users == [user | initial_state.users]
            {:list, location} -> assert result[location][:users] == [user | initial_state[location][:users]]
          end
        end
      )
    end

    test "StateHandlers.delete" do
      list_data = Enum.map(1..3, fn(_) -> UsersFixtures.user() end)
      state_opts = [
        {[data_type: :list, strategy: :by_type], %{users: list_data}},
        {[data_type: :list, strategy: :by_type, location: :data], %{data: %{users: list_data}}}
     ]
      Enum.each(state_opts,
        fn({opts, initial_state}) ->
          #IO.puts("Running StateHandlers.Create with {inspect(opts)}")
          users = StateHandlers.list(initial_state, User, opts)
          [user | expected_result] = users
          state = StateHandlers.delete(initial_state, user, opts)
          assert StateHandlers.list(state, User, opts) == expected_result
        end
      )
    end

    test "StateHandlers.Preload loads has_many relationships" do
      opts = [data_type: :list, strategy: :by_type, location: :data, preloads: [:document_versions]]
      state = StateFixtures.state(opts)
      data = StateHandlers.list(state, Document, opts)
      test = StateHandlers.preload(state, data, opts[:preloads], opts)
      assert state.data.document_versions == Enum.at(test, 0) |> Map.get(:document_versions)
    end

    test "StateHandlers.Preload loads BelongsTo has_one relationships" do
      opts = [data_type: :list, strategy: :by_type, location: :data, preloads: [:version]]
      state = StateFixtures.state(opts)
      data = StateHandlers.list(state, DocumentVersion, opts)
      result = StateHandlers.preload(state, data, opts[:preloads], opts)
      expected_result = StateHandlers.list(state, Version, opts) |> Enum.at(0)
      assert expected_result == result |> Enum.at(0) |> Map.get(:version)
    end

    test "StateHandlers.Preload loads and filters has_many relationships" do
      opts = [data_type: :list, strategy: :by_type, location: :data, preloads: [:document_versions]]
      state = StateFixtures.state(opts)
      project_id = StateHandlers.list(state, Project, opts) |> Enum.at(0) |> Map.get(:id)
      data = StateHandlers.list(state, Document, Keyword.put(opts, :filter, {:project_id, project_id}))
      expected_result = StateHandlers.list(state, DocumentVersion, opts)
      result = StateHandlers.preload(state, data, opts[:preloads], opts)
      assert result |> Enum.at(0) |> Map.get(:document_versions) == expected_result
    end

    test "StateHandlers.Preload loads and orders nested relationships" do
      opts = [data_type: :list, strategy: :by_type, location: :data,
        preloads: [
          :documents,
          [documents: :document_versions],
         ],
        order: [
          %{field: :id, order: :asc},
          documents: %{field: :id, order: :desc},
          documents: [document_versions: %{field: :id, order: :asc}]
       ]
     ]
      state = StateFixtures.state(opts)
      data = StateHandlers.list(state, Project, opts)
      StateHandlers.preload(state, data, opts[:preloads], opts)
    end

    test "StateHandlers.Preload limits nested relationships" do
      opts = [data_type: :list, strategy: :by_type, location: :data,
        preloads: [
          :documents,
          [documents: :document_versions],
         ],
        limit: [
          1,
          documents: 1,
          documents: [document_versions: 1]
       ]
     ]
      state = StateFixtures.state(opts)
      data = StateHandlers.list(state, Project, opts)
      result = StateHandlers.preload(state, data, opts[:preloads], opts)
      documents = result |> Enum.at(0) |> Map.get(:documents)
      document_versions = documents |> Enum.at(0) |> Map.get(:document_versions)
      assert Enum.count(result) == 1
      assert Enum.count(documents) == 1
      assert Enum.count(document_versions) == 1
    end

    test "StateHandlers.Preload ignores nested ordering for invalid preloads" do
      opts = [data_type: :list, strategy: :by_type, location: :data,
        preloads: [:document_versions],
        order: [%{field: :id, order: :asc}, documents: %{field: :id, order: :desc}]
     ]
      state = StateFixtures.state(opts)
      project_id = StateHandlers.list(state, Project, opts) |> Enum.at(0) |> Map.get(:id)
      data = StateHandlers.list(state, Document, Keyword.put(opts, :filter, {:project_id, project_id}))
      expected_result = StateHandlers.list(state, DocumentVersion, opts)
      result = StateHandlers.preload(state, data, opts[:preloads], opts)
      assert result |> Enum.at(0) |> Map.get(:document_versions) == expected_result
    end

    test "StateHandlers.Update" do
      list_data = Enum.map(1..2, fn(_) -> UsersFixtures.user() end)
      state_opts = [
        {[data_type: :list, strategy: :by_type], %{users: list_data}},
        {[data_type: :list, strategy: :by_type, location: :data], %{data: %{users: list_data}}}
     ]
      Enum.each(state_opts,
        fn({opts, initial_state}) ->
          #IO.puts("Running StateHandlers.Update with {inspect(opts)}")
          user = StateHandlers.list(initial_state, User, opts) |> Enum.at(0) |> Map.put(:email, "test@test.com")
          result = StateHandlers.update(initial_state, user, opts)
          case {opts[:data_type], opts[:location]} do
            {:list, nil} ->
              assert user in result.users
              assert Enum.count(result.users) == Enum.count(initial_state.users)
            {:list, location} ->
              assert user in result[location][:users]
              assert Enum.count(result[location][:users]) == Enum.count(initial_state[location][:users])
          end
        end
      )
    end

    test "StateHandlers.Update with list" do
      list_data = Enum.map(1..2, fn(_) -> UsersFixtures.user() end)
      state_opts = [
        {[data_type: :list, strategy: :by_type], %{users: list_data}},
        {[data_type: :list, strategy: :by_type, location: :data], %{data: %{users: list_data}}}
     ]
      Enum.each(state_opts,
        fn({opts, initial_state}) ->
          #IO.puts("Running StateHandlers.Update with {inspect(opts)}")
          user1 = StateHandlers.list(initial_state, User, opts) |> Enum.at(0) |> Map.put(:email, "test@test.com")
          user2 = StateHandlers.list(initial_state, User, opts) |> Enum.at(1) |> Map.put(:email, "test2@test.com")
          result = StateHandlers.update(initial_state, %{objects: [user1, user2]}, opts)
          case {opts[:data_type], opts[:location]} do
            {:list, nil} ->
              assert user1 in result.users
              assert user2 in result.users
              assert Enum.count(result.users) == Enum.count(initial_state.users)
            {:list, location} ->
              assert user1 in result[location][:users]
              assert user2 in result[location][:users]
              assert Enum.count(result[location][:users]) == Enum.count(initial_state[location][:users])
          end
        end
      )
    end

    test "StateHandlers.List orders a result" do
      users = [user_one = UsersFixtures.user(), user_two = UsersFixtures.user()]
      opts = [types: [User], data_type: :list, strategy: :by_type, order: [%{field: :id, order: :desc}]]
      state = %{} |> StateHandlers.initialize(opts) |> StateHandlers.load(users, User, opts)
      result = StateHandlers.list(state, User, opts)
      assert result == [user_two, user_one]
    end

    test "StateHandlers.Upsert updates a record" do
      list_data = Enum.map(1..2, fn(_) -> UsersFixtures.user() end)
      opts = [data_type: :list, strategy: :by_type]
      initial_state = %{users: list_data}
      user = StateHandlers.list(initial_state, User, opts) |> Enum.at(0) |> Map.put(:email, "test@test.com")
      result = StateHandlers.upsert(initial_state, user, opts) |> Map.get(:users) |> Enum.at(0)
      assert result.email == "test@test.com"
    end

    test "StateHandlers.Upsert creates a record" do
      list_data = Enum.map(1..2, fn(_) -> UsersFixtures.user() end)
      opts = [data_type: :list, strategy: :by_type]
      initial_state = %{users: list_data}
      user = StateHandlers.list(initial_state, User, opts) |> Enum.at(0) |> Map.put(:email, "test@test.com")
      result = StateHandlers.upsert(initial_state, user, opts) |> Map.get(:users) |> Enum.at(0)
      assert result.email == "test@test.com"
    end

    test "StateHandlers broadcast" do
      list_data = Enum.map(1..2, fn(_) -> UsersFixtures.user() end)
      opts = [
        data_type: :list,
        strategy: :by_type,
        broadcast: true,
        action: "update",
        broadcast_function: &broadcaster/3,
        channel: :test_broadcast
     ]
      initial_state = %{users: list_data}
      user = StateHandlers.list(initial_state, User, opts) |> Enum.at(0) |> Map.put(:email, "test@test.com")
      StateHandlers.broadcast(initial_state, user, opts)
    end

    test "StateHandlers broadcast related data" do
      opts = [
        data_type: :list,
        strategy: :by_type,
        broadcast: true,
        broadcast_function: &broadcaster/3,
        channel: :test_broadcast,
        action: "update",
        preloads: [:document_versions]
     ]
      state = StateFixtures.state(opts)
      data = StateHandlers.list(state, Document, opts)
      test = StateHandlers.preload(state, data, opts[:preloads], opts) |> Enum.at(0)
      StateHandlers.broadcast(state, test, opts)
    end
    """
  end
end
