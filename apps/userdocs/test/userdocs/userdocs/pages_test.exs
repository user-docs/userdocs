defmodule Userdocs.PagesTest do
  use Userdocs.DataCase

  alias Userdocs.Pages
  alias Schemas.Projects.Project
  alias Schemas.Users.User
  alias Schemas.Users.Override

  @opts %{context: %{repo: Userdocs.Repo}}

  describe "pages" do
    alias Schemas.Pages.Page

    @valid_attrs %{url: "some url"}
    @update_attrs %{url: "some updated url"}
    @invalid_attrs %{url: nil}

    def page_fixture(attrs \\ %{}) do
      {:ok, page} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Pages.create_page(@opts)

      page
    end

    test "list_pages/0 returns all pages" do
      page = page_fixture()
      assert Pages.list_pages(@opts) == [page]
    end

    test "get_page!/1 returns the page with given id" do
      page = page_fixture()
      assert Pages.get_page!(page.id, @opts) == page
    end

    test "create_page/1 with valid data creates a page" do
      assert {:ok, %Page{} = page} = Pages.create_page(@valid_attrs, @opts)
      assert page.url == "some url"
    end

    test "create_page/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Pages.create_page(@invalid_attrs, @opts)
    end

    test "update_page/2 with valid data updates the page" do
      page = page_fixture()
      assert {:ok, %Page{} = page} = Pages.update_page(page, @update_attrs, @opts)
      assert page.url == "some updated url"
    end

    test "update_page/2 with invalid data returns error changeset" do
      page = page_fixture()
      assert {:error, %Ecto.Changeset{}} = Pages.update_page(page, @invalid_attrs, @opts)
      assert page == Pages.get_page!(page.id, @opts)
    end

    test "delete_page/1 deletes the page" do
      page = page_fixture()
      assert {:ok, %Page{}} = Pages.delete_page(page, @opts)
      assert_raise Ecto.NoResultsError, fn -> Pages.get_page!(page.id, @opts) end
    end

    test "change_page/1 returns a page changeset" do
      page = page_fixture()
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
