defmodule Userdocs.ProjectsTest do
  use Userdocs.DataCase

  alias Userdocs.Projects
  @opts %{context: %{repo: Userdocs.Repo}}

  describe "projects" do
    alias Schemas.Projects.Project

    @valid_attrs %{base_url: "some base_url", name: "some name"}
    @update_attrs %{base_url: "some updated base_url", name: "some updated name"}
    @invalid_attrs %{base_url: nil, name: nil}

    def project_fixture(attrs \\ %{}) do
      strategy = Userdocs.WebFixtures.strategy(@opts)
      team = Userdocs.TeamsFixtures.team(@opts)
      {:ok, project} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Map.put(:strategy_id, strategy.id)
        |> Map.put(:team_id, team.id)
        |> Projects.create_project(@opts)

      project
    end

    test "list_projects/0 returns all projects" do
      project = project_fixture()
      assert Projects.list_projects(@opts) == [project]
    end

    test "get_project!/1 returns the project with given id" do
      project = project_fixture()
      assert Projects.get_project!(project.id, @opts) == project
    end

    test "create_project/1 with valid data creates a project" do
      strategy = Userdocs.WebFixtures.strategy(@opts)
      team = Userdocs.TeamsFixtures.team(@opts)
      attrs = @valid_attrs |> Map.put(:strategy_id, strategy.id) |> Map.put(:team_id, team.id)
      assert {:ok, %Project{} = project} = Projects.create_project(attrs, @opts)
      assert project.base_url == "some base_url"
      assert project.name == "some name"
    end

    test "create_project/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Projects.create_project(@invalid_attrs, @opts)
    end

    test "update_project/2 with valid data updates the project" do
      project = project_fixture()
      assert {:ok, %Project{} = project} = Projects.update_project(project, @update_attrs, @opts)
      assert project.base_url == "some updated base_url"
      assert project.name == "some updated name"
    end

    test "update_project/2 with invalid data returns error changeset" do
      project = project_fixture()
      assert {:error, %Ecto.Changeset{}} = Projects.update_project(project, @invalid_attrs, @opts)
      assert project == Projects.get_project!(project.id, @opts)
    end

    test "delete_project/1 deletes the project" do
      project = project_fixture()
      assert {:ok, %Project{}} = Projects.delete_project(project, @opts)
      assert_raise Ecto.NoResultsError, fn -> Projects.get_project!(project.id, @opts) end
    end

    test "change_project/1 returns a project changeset" do
      project = project_fixture()
      assert %Ecto.Changeset{} = Projects.change_project(project, @opts)
    end
  end
end
