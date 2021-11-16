defmodule Userdocs.ElementsTest do
  alias Schemas.Elements.Element
  use Userdocs.DataCase
  alias Userdocs.Elements
  alias Userdocs.ProjectsFixtures
  alias Userdocs.UsersFixtures
  alias Userdocs.TeamsFixtures
  alias Userdocs.WebFixtures
  @opts %{context: %{repo: Userdocs.Repo}}

  defp create_password(_), do: %{password: UUID.uuid4()}
  defp create_user(%{password: password}), do: %{user: UsersFixtures.confirmed_user(password)}
  defp create_team(_), do: %{team: TeamsFixtures.team()}
  defp create_team_user(%{user: user, team: team}), do: %{team_user: TeamsFixtures.team_user(user.id, team.id)}
  defp create_strategy(_), do: %{strategy: WebFixtures.strategy(@opts)}
  defp create_project(%{team: team, strategy: strategy}), do: %{project: ProjectsFixtures.project(team.id, strategy.id)}
  defp create_page(%{project: project}), do: %{page: WebFixtures.page(project.id)}

  describe "elements" do
    setup [
      :create_password,
      :create_user,
      :create_team,
      :create_team_user,
      :create_strategy,
      :create_project,
      :create_page
    ]

    test "list_elements/0 returns all elements", %{page: page, strategy: strategy} do
      element = WebFixtures.element(page.id, strategy.id, @opts)
      assert Elements.list_elements(@opts) == [element]
    end

    test "get_element!/1 returns the element with given id", %{page: page, strategy: strategy} do
      element = WebFixtures.element(page.id, strategy.id, @opts)
      assert Elements.get_element!(element.id, @opts) == element
    end

    test "create_element/1 with valid data creates a element", %{page: page, strategy: strategy} do
      attrs = WebFixtures.element_attrs(:valid, page.id, strategy.id)
      assert {:ok, %Element{} = element} = Elements.create_element(attrs, @opts)
      assert element.name == attrs.name
      assert element.selector == attrs.selector
    end

    test "create_element/1 with invalid data returns error changeset", %{page: page, strategy: strategy} do
      attrs = WebFixtures.element_attrs(:invalid, page.id, strategy.id)
      assert {:error, %Ecto.Changeset{}} = Elements.create_element(attrs, @opts)
    end

    test "update_element/2 with valid data updates the element", %{page: page, strategy: strategy} do
      element = WebFixtures.element(page.id, strategy.id, @opts)
      attrs = WebFixtures.element_attrs(:valid, page.id, strategy.id)
      assert {:ok, %Element{} = element} = Elements.update_element(element, attrs, @opts)
      assert element.name == attrs.name
      assert element.selector == attrs.selector
    end

    test "update_element/2 with invalid data returns error changeset", %{page: page, strategy: strategy} do
      element = WebFixtures.element(page.id, strategy.id, @opts)
      attrs = WebFixtures.element_attrs(:invalid, page.id, strategy.id)
      assert {:error, %Ecto.Changeset{}} = Elements.update_element(element, attrs, @opts)
      assert element == Elements.get_element!(element.id, @opts)
    end

    test "delete_element/1 deletes the element", %{page: page, strategy: strategy} do
      element = WebFixtures.element(page.id, strategy.id, @opts)
      assert {:ok, %Element{}} = Elements.delete_element(element, @opts)
      assert_raise Ecto.NoResultsError, fn -> Elements.get_element!(element.id, @opts) end
    end

    test "change_element/1 returns a element changeset", %{page: page, strategy: strategy} do
      element = WebFixtures.element(page.id, strategy.id, @opts)
      assert %Ecto.Changeset{} = Elements.change_element(element)
    end
  end
end
