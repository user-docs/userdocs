defmodule Userdocs.UsersTest do
  use Userdocs.DataCase
  alias Userdocs.Users
  @opts %{context: %{repo: Userdocs.Repo}}

  #@opts [data_type: :list, strategy: :by_type, loader: &Phoenix.LiveView.assign/3]
  describe "users" do
    alias Schemas.Users.User
    alias Userdocs.TeamsFixtures
    alias Userdocs.UsersFixtures
    alias Userdocs.ProjectsFixtures
    alias Userdocs.WebFixtures

    test "list_users/0 returns all users" do
      user = UsersFixtures.user()
      result =
        Users.list_users(@opts)
        |> Enum.at(0)
        |> Map.delete(:password)

      assert result == Map.delete(user, :password)
    end

    test "get_user!/1 returns the user with given id" do
      user = UsersFixtures.user()
      result =
        Users.get_user!(user.id, @opts)
        |> Map.delete(:password)
      assert result == Map.delete(user, :password)
    end

    test "create_user/1 with valid data creates a user" do
      attrs = UsersFixtures.user_attrs(:valid)
      assert {:ok, %User{} = user} = Users.create_user(attrs, @opts)
      assert user.email == attrs.email
    end

    test "create_user/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Users.create_user(UsersFixtures.user_attrs(:invalid), @opts)
    end

    test "update_user/2 with valid data updates the user" do
      password = UUID.uuid4()
      user = UsersFixtures.user(password)
      attrs = UsersFixtures.user_attrs(:valid)
      attrs =
        attrs
        |> Map.put(:current_password, password)

      {:ok, %User{} = user} = Users.update_user(user, attrs)

      assert user.email == attrs.email
    end

    test "update_user/2 with invalid data returns error changeset" do
      user = UsersFixtures.user()
      attrs = UsersFixtures.user_attrs(:invalid)
      assert {:error, %Ecto.Changeset{}} = Users.update_user(user, attrs)
      result =
        Users.get_user!(user.id, @opts)
        |> Map.delete(:password)

      assert result == Map.delete(user, :password)
    end

    test "delete_user/1 deletes the user" do
      user = UsersFixtures.user()
      assert {:ok, %User{}} = Users.delete_user(user, %{})
      assert_raise Ecto.NoResultsError, fn -> Users.get_user!(user.id, @opts) end
    end

    test "prepare_user/1 retreives everything preloaded" do
      user = UsersFixtures.user()
      team = TeamsFixtures.team(@opts)
      _team_user = TeamsFixtures.team_user(user.id, team.id, @opts)
      strategy = WebFixtures.strategy(@opts)
      project = ProjectsFixtures.project(team.id, strategy.id, @opts)
      opts = %{context: %{repo: Userdocs.Repo}}
      {:ok, user} = Users.update_user_selections(user, %{selected_team_id: team.id, selected_project_id: project.id}, opts)
      user = Users.prepare_user(user.id)
      assert user.selected_project.id == project.id
      assert user.selected_team.id == team.id
    end

    _some_state_handlers_tests = """
    test "get_user/2 with preload teams and state returns preloaded user" do
      user = UsersFixtures.user()
      team = UsersFixtures.team()
      team_user = UsersFixtures.team_user(user.id, team.id)
      preloads = [teams: :teams]
      state = %{teams: [team], users: [user], team_users: [team_user]}
      result = State.Users.get_user!(user.id, preloads, [], state, @opts)
      assert result.teams == [team]
    end

    test "get_user/2 with preload list: teams and state returns preloaded user" do
      user = UsersFixtures.user()
      team_one = UsersFixtures.team()
      team_two = UsersFixtures.team()
      preloads = [teams: [:teams]]
      team_user_one = UsersFixtures.team_user(user.id, team_one.id)
      team_user_two = UsersFixtures.team_user(user.id, team_two.id)
      state = %{teams: [team_one, team_two], users: [user], team_users: [team_user_one, team_user_two]}
      result = State.Users.get_user!(user.id, preloads, [], state, @opts)
      assert result.teams == [team_one, team_two]
    end

    test "get_user/2 with preload teams + projects and state returns preloaded user" do
      user = UsersFixtures.user()
      team = UsersFixtures.team()
      team_user = UsersFixtures.team_user(user.id, team.id)
      strategy = WebFixtures.strategy(@opts)
      project = ProjectsFixtures.project(team.id, strategy.id, @opts)
      preloads = [teams: [:teams, [teams: :projects]]]
      state = %{teams: [team], users: [user], team_users: [team_user], projects: [project]}
      result = State.Users.get_user!(user.id, preloads, [], state, @opts)
      assert project == result.teams |> Enum.at(0) |> Map.get(:projects) |> Enum.at(0)
    end

    test "get_user/2 with preload teams, projects and state returns preloaded user" do
      user = UsersFixtures.user()
      team = UsersFixtures.team()
      team_user = UsersFixtures.team_user(user.id, team.id)
      strategy = WebFixtures.strategy(@opts)
      project = ProjectsFixtures.project(team.id, strategy.id, @opts)
      preloads = [teams: [:teams, [teams: :projects], [teams: :projects]]]
      state = %{teams: [team], users: [user], team_users: [team_user], projects: [project]}
      result = State.Users.get_user!(user.id, preloads, [], state, @opts)
      assert project == result.teams |> Enum.at(0) |> Map.get(:projects) |> Enum.at(0)
    end

    test "update_user/2 with valid project overrides updates the user" do
      password = UUID.uuid4()
      user = UsersFixtures.user(password)
      team = UsersFixtures.team()
      _team_user = UsersFixtures.team_user(user.id, team.id)
      strategy = WebFixtures.strategy(@opts)
      project = ProjectsFixtures.project(team.id, strategy.id, @opts)
      overrides = [%{project_id: project.id, url: "https://www.google.com/"}]
      attrs = UsersFixtures.user_attrs(:valid)
      attrs = attrs |> Map.put(:overrides, overrides)

      {:ok, %User{} = user} = Users.update_user_options(user, attrs)
      assert user.overrides |> Enum.at(0) |> Map.get(:project_id) == project.id

      Userdocs.Projects.delete_project(project)
      {:error, changeset} = Users.update_user_options(user, attrs)
      {error, _} = changeset.changes.overrides |> Enum.at(1) |> Map.get(:errors) |> Keyword.get(:project_id)
      assert error == "This project ID does exist. Pick a new project."
    end
    """
  end
end
