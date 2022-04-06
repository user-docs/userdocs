defmodule ClientTest.Pages do
  use Client.RemoteCase
  use Client.LocalCase
  use Client.Case
  alias Userdocs.PageFixtures
  alias Userdocs.UsersFixtures
  alias Userdocs.TeamsFixtures
  alias Userdocs.WebFixtures

  describe "Pages Initialize" do
    test "in state properly" do
      Client.init_state()
      assert Map.has_key?(Client.data(), :pages)
    end
  end

  describe "Server Gets" do
    setup do
      %{page: %Schemas.Pages.Page{url: "https://www.google.com"}}
    end

    test "Lists Pages", %{page: page} do
      Client.put_in_state(:data, %{pages: [page]})
      [result] = Client.list_pages()
      assert result.id == page.id
    end

    test "Gets Page", %{page: page} do
      Client.put_in_state(:data, %{pages: [page]})
      result = Client.get_page!(page.id)
      assert result == page
    end

    test "Gets Page by url", %{page: page} do
      Client.put_in_state(:data, %{pages: [page]})
      result = Client.find_page_by_path(page.url)
      assert result == page
    end

    test "Gets Page by url returns nil when url is nil", %{page: page} do
      Client.put_in_state(:data, %{pages: [page]})
      result = Client.find_page_by_path(nil)
      assert result == nil
    end
  end

  describe "Page Server CUD"  do
    setup [
      :ensure_web_started,

      :create_password,
      :create_user,
      :create_remote_team,
      :create_team_user,
      :create_remote_strategy,
      :create_remote_project,
      :create_remote_page,
      :create_remote_tokens,

      :put_access_token_in_state,
      :create_remote_user_context,
      :put_remote_context_data,
      :put_user_in_state
    ]

    test "Loads", %{user: user, remote_page: page} do
      Client.load_pages(%{filters: %{user_id: user.id}})
      %{pages: [result]} = Client.data()
      assert result.id == page.id
    end

    test "creates", %{remote_project: project} do
      attrs = PageFixtures.page_attrs(%{project_id: project.id})
      assert {:ok, %{id: page_id}} = Client.create_page(attrs)
      assert %{id: ^page_id} = Userdocs.Pages.get_page!(page_id, @remote_opts)
    end

    test "updates", %{remote_page: page, remote_project: project} do
      %{name: name} = attrs = PageFixtures.page_attrs(%{project_id: project.id})
      assert {:ok, page} = Client.update_page(page, attrs)
      assert %{name: ^name} = Userdocs.Pages.get_page!(page.id, @remote_opts)
    end

    test "deletes", %{remote_page: page} do
      Client.delete_page(page.id)
      assert_raise Ecto.NoResultsError, fn -> Userdocs.Pages.get_page!(page.id, @remote_opts) end
    end
  end

  defp local_setup_context(context) do
    %{
      data: %{
        teams: [context.local_team],
        projects: [context.local_project],
        pages: [context.local_page],
        strategies: [context.local_strategy],
      },
      context: %Schemas.Users.Context{
        user_id: context.user.id,
        team_id: context.local_team.id,
        project_id: context.local_project.id
      }
    }
    |> Map.merge(context)
  end

  describe "Local" do
    setup [
      :create_password,
      :create_user,
      :create_local_team,
      :create_local_strategy,
      :create_local_project,
      :create_local_page,
      :local_setup_context
    ]

    test "create_page/2 creates a page", context do
      %{local_project: project} = context
      Client.put_in_state(context)
      %{name: name} = attrs = PageFixtures.page_attrs(%{project_id: project.id})
      assert {:ok, %{id: page_id}} = Client.create_page(attrs)
      assert %{name: ^name} = Userdocs.Pages.get_page!(page_id, @local_opts)
    end

    test "load_pages/0 loads pages", %{local_page: page} = context do
      Client.put_in_state(context)
      Client.load_pages()
      %{pages: [result]} = Client.data()
      assert result.id == page.id
    end
  end
end
