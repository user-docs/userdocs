defmodule Userdocs.TeamsTest do
  use Userdocs.DataCase
  alias Userdocs.Teams
  @opts %{context: %{repo: Userdocs.Repo}}

  describe "teams" do
    alias Schemas.Teams.Team

    @valid_attrs %{name: "some name", users: []}
    @update_attrs %{name: "some updated name", users: []}
    @invalid_attrs %{name: nil, users: []}

    def team_fixture(attrs \\ %{}) do
      {:ok, team} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Teams.create_team(@opts)

      team
    end

    test "list_teams/0 returns all teams" do
      team = team_fixture()
      assert Teams.list_teams(@opts) == [team]
    end

    test "get_team!/1 returns the team with given id" do
      team = team_fixture()
      assert Teams.get_team!(team.id, @opts) == team
    end

    test "create_team/1 with valid data creates a team" do
      assert {:ok, %Team{} = team} = Teams.create_team(@valid_attrs, @opts)
      assert team.name == "some name"
    end

    test "create_team/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Teams.create_team(@invalid_attrs, @opts)
    end

    test "update_team/2 with valid data updates the team" do
      team = team_fixture()
      assert {:ok, %Team{} = team} = Teams.update_team(team, @update_attrs, @opts)
      assert team.name == "some updated name"
    end

    test "update_team/2 with invalid data returns error changeset" do
      team = team_fixture()
      assert {:error, %Ecto.Changeset{}} = Teams.update_team(team, @invalid_attrs, @opts)
      assert team == Teams.get_team!(team.id, @opts)
    end

    test "delete_team/1 deletes the team" do
      team = team_fixture()
      assert {:ok, %Team{}} = Teams.delete_team(team, @opts)
      assert_raise Ecto.NoResultsError, fn -> Teams.get_team!(team.id, @opts) end
    end

    test "change_team/1 returns a team changeset" do
      team = team_fixture()
      assert %Ecto.Changeset{} = Teams.change_team(team)
    end
  end
end
