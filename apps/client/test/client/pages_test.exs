defmodule ClientTest.Pages do
  use Client.RemoteCase
  use Client.LocalCase
  use Client.Case
  alias Userdocs.UsersFixtures
  alias Userdocs.TeamsFixtures
  alias Userdocs.WebFixtures

  describe "Pages Initialize" do
    test "in state properly" do
      Client.init_state()
      assert Map.has_key?(Client.data(), :pages)
    end
  end

  describe "Server Lists" do
    setup do
      %{page: %Schemas.Pages.Page{}}
    end

    test "Gets Page", %{page: page} do
      Client.put_in_state(:data, %{pages: [page]})
      result = Client.get_page!(page.id)
      assert result == page
    end

    test "Lists Pages", %{page: page} do
      Client.put_in_state(:data, %{pages: [page]})
      [result] = Client.list_pages()
      assert result.id == page.id
    end
  end

  describe "Page Server CUD"  do
    setup [
      :ensure_web_started,
      :create_password,
      :create_user,
      :create_remote_team,
      :create_remote_team_user,
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
    
    test "updates", %{remote_project: project, remote_page: page} do
      %{name: name} = attrs = PageFixtures.page_attrs(%{project_id: project.id})
      assert {:ok, page} = Client.update_page(page, attrs)
      assert %{name: ^name} = Userdocs.Pages.get_page!(page.id, @remote_opts)
    end
    
    test "deletes", %{remote_page: page} do
      Client.delete_page(page)
      assert_raise Ecto.NoResultsError, fn -> Userdocs.Pages.get_page!(page.id, @remote_opts) end
    end
  end

  describe "Local" do
    setup [
      :create_password,
      :create_user,
      :create_local_team,
      :create_local_strategy,
      :create_local_project,
      :create_local_page,
      :create_local_user_context,
      :put_local_context_data
    ]
    
    test "creates", %{local_project: project} do
      attrs = PageFixtures.page_attrs(%{project_id: project.id})
      assert {:ok, %{id: page_id}} = Client.create_page(attrs)
      assert %{id: ^page_id} = Userdocs.Pages.get_page!(page_id, @local_opts)
    end
    
    test "updates", %{local_project: project, local_page: page} do
      %{name: name} = attrs = PageFixtures.page_attrs(%{project_id: project.id})
      assert {:ok, page} = Client.update_page(page, attrs)
      assert %{name: ^name} = Userdocs.Pages.get_page!(page.id, @local_opts)
    end
    
    test "deletes", %{local_page: page} do
      Client.delete_page(page)
      assert_raise Ecto.NoResultsError, fn -> Userdocs.Pages.get_page!(page.id, @local_opts) end
    end
    
    test "load_pages/0 loads pages", %{local_page: page} do
      Client.load_pages()
      %{pages: [result]} = Client.data()
      assert result.id == page.id
    end
  end
end
