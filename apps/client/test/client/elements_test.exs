defmodule ClientTest.Elements do
  use Client.RemoteCase
  use Client.LocalCase
  use Client.Case
  alias Userdocs.WebFixtures

  describe "Elements Initialize" do
    setup [:reinitialize_state]
    test "in state properly" do
      Client.init_state()
      assert Map.has_key?(Client.data(), :elements)
    end
  end

  describe "Server Lists" do
    setup [:reinitialize_state]
    setup do
      %{element: %Schemas.Elements.Element{}}
    end
    
    test "Gets Element", %{element: element} do
      Client.put_in_state(:data, %{elements: [element]})
      result = Client.get_element!(element.id)
      assert result == element
    end
    
    test "Lists Elements", %{element: element} do
      Client.put_in_state(:data, %{elements: [element]})
      [result] = Client.list_elements()
      assert result.id == element.id
    end
  end

  describe "Element Server CUD"  do
    setup [
      :reinitialize_state,
      :ensure_web_started,
      :create_password,
      :create_user,
      :create_remote_team,
      :create_remote_team_user,
      :create_remote_strategy,
      :create_remote_project,
      :create_remote_page,
      :create_remote_element,
      :create_remote_tokens,
      :put_access_token_in_state,
      :create_remote_user_context,
      :put_remote_context_data,
      :put_user_in_state,
      :connect_channel
    ]

    test "Loads", %{user: user, remote_element: element} do
      Client.load_elements(%{filters: %{user_id: user.id}})
      %{elements: [result]} = Client.data()
      assert result.id == element.id
    end
    
    test "creates", %{remote_page: page, remote_strategy: strategy} do
      attrs = WebFixtures.element_attrs(:valid, page.id, strategy.id)
      assert {:ok, %{id: element_id}} = Client.create_element(attrs)
      assert %{id: ^element_id} = Userdocs.Elements.get_element!(element_id, @remote_opts)
    end
    
    test "updates", %{remote_page: page, remote_strategy: strategy, remote_element: element} do
      %{name: name} = attrs = WebFixtures.element_attrs(:valid, page.id, strategy.id)
      assert {:ok, element} = Client.update_element(element, attrs)
      assert %{name: ^name} = Userdocs.Elements.get_element!(element.id, @remote_opts)
    end
    
    test "deletes", %{remote_element: element} do
      Client.delete_element(element)
      assert_raise Ecto.NoResultsError, fn -> Userdocs.Elements.get_element!(element.id, @remote_opts) end
    end
  end

  describe "Local" do
    setup [
      :reinitialize_state,
      :create_password,
      :create_user,
      :create_local_team,
      :create_local_strategy,
      :create_local_project,
      :create_local_page,
      :create_local_element,
      :create_local_user_context,
      :put_local_context_data
    ]
    
    test "creates", %{local_page: page, local_strategy: strategy} do
      attrs = WebFixtures.element_attrs(:valid, page.id, strategy.id)
      assert {:ok, %{id: element_id}} = Client.create_element(attrs)
      assert %{id: ^element_id} = Userdocs.Elements.get_element!(element_id, @local_opts)
    end
    
    test "updates", %{local_page: page, local_strategy: strategy, local_element: element} do
      %{name: name} = attrs = WebFixtures.element_attrs(:valid, page.id, strategy.id)
      assert {:ok, element} = Client.update_element(element, attrs)
      assert %{name: ^name} = Userdocs.Elements.get_element!(element.id, @local_opts)
    end
    
    test "deletes", %{local_element: element} do
      Client.delete_element(element)
      assert_raise Ecto.NoResultsError, fn -> Userdocs.Elements.get_element!(element.id, @local_opts) end
    end
    
    test "load_elements/0 loads elements", %{local_element: element} do
      Client.load_elements()
      %{elements: [result]} = Client.data()
      assert result.id == element.id
    end
  end
end
