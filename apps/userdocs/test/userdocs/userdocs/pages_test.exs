defmodule Userdocs.PagesTest do
  use Userdocs.DataCase

  alias Userdocs.Pages
  alias Userdocs.UsersFixtures
  alias Userdocs.TeamsFixtures
  alias Userdocs.ProjectsFixtures
  alias Userdocs.WebFixtures
  alias Schemas.Projects.Project
  alias Schemas.Users.User
  alias Schemas.Users.Override
  alias Schemas.Pages.Page

  @opts %{context: %{repo: Userdocs.Repo}}

  defp create_password(_), do: %{password: UUID.uuid4()}
  defp create_user(%{password: password}), do: %{user: UsersFixtures.confirmed_user(password)}
  defp create_team(_), do: %{team: TeamsFixtures.team(@opts)}
  defp create_team_user(%{user: user, team: team}), do: %{team_user: TeamsFixtures.team_user(user.id, team.id, @opts)}
  defp create_strategy(_), do: %{strategy: WebFixtures.strategy(@opts)}
  defp create_project(%{team: team, strategy: strategy}), do: %{project: ProjectsFixtures.project(team.id, strategy.id, @opts)}
  defp create_page(%{project: project}), do: %{page: WebFixtures.page(project.id, @opts)}

  describe "pages" do
    setup [
      :create_password,
      :create_user,
      :create_strategy,
      :create_team,
      :create_team_user,
      :create_project,
      :create_page
    ]

    test "list_pages/0 returns all pages", %{page: page} do
      assert Pages.list_pages(@opts) == [page]
    end

    test "get_page!/1 returns the page with given id", %{page: page} do
      assert Pages.get_page!(page.id, @opts) == page
    end

    test "create_page/1 with valid data creates a page", %{project: project} do
      valid_attrs = WebFixtures.page_attrs(:valid, project.id)
      assert {:ok, %Page{} = page} = Pages.create_page(valid_attrs, @opts)
      assert page.url == valid_attrs.url
    end

    test "create_page/1 with invalid data returns error changeset", %{project: project} do
      invalid_attrs = WebFixtures.page_attrs(:invalid, project.id)
      assert {:error, %Ecto.Changeset{}} = Pages.create_page(invalid_attrs, @opts)
    end

    test "update_page/2 with valid data updates the page", %{page: page, project: project} do
      update_attrs = WebFixtures.page_attrs(:valid, project.id)
      assert {:ok, %Page{} = page} = Pages.update_page(page, update_attrs, @opts)
      assert page.url == update_attrs.url
    end

    test "update_page/2 with invalid data returns error changeset", %{page: page, project: project} do
      invalid_attrs = WebFixtures.page_attrs(:invalid, project.id)
      assert {:error, %Ecto.Changeset{}} = Pages.update_page(page, invalid_attrs, @opts)
      assert page == Pages.get_page!(page.id, @opts)
    end

    test "delete_page/1 deletes the page", %{page: page} do
      assert {:ok, %Page{}} = Pages.delete_page(page, @opts)
      assert_raise Ecto.NoResultsError, fn -> Pages.get_page!(page.id, @opts) end
    end

    test "change_page/1 returns a page changeset", %{page: page} do
      assert %Ecto.Changeset{} = Pages.change_page(page)
    end

    test "effective_url/3 returns an overriden URL when an override matches the project" do
      url = Userdocs.Pages.effective_url(
        %Page{url: "/test"},
        %Project{id: 1, base_url: "https://example.com"},
        %User{id: 1, overrides: [%Override{project_id: 1, url: "https://test.com"}]})

      assert url == "https://test.com/test"
    end

    test "effective_url/3 returns an non-overriden URL when no overrides match" do
      url = Userdocs.Pages.effective_url(
        %Page{url: "/test"},
        %Project{id: 2, base_url: "https://example.com"},
        %Schemas.Users.User{id: 1, overrides: [%Override{project_id: 1, url: "https://test.com"}]})

      assert url == "https://example.com/test"
    end

    test "effective_url/3 returns the page URL when it's not relative" do
      url = Userdocs.Pages.effective_url(
        %Page{url: "https://face.com/test"},
        %Project{id: 1, base_url: ""},
        %User{id: 1, overrides: [%Override{project_id: 1, url: ""}]})

      assert url == "https://face.com/test"
    end
  end
end
