defmodule ClientTest.ElementAnnotations do
  use Client.RemoteCase
  use Client.LocalCase
  use Client.Case
  

  describe "ElementAnnotations Initialize" do
    setup [:reinitialize_state]
    test "in state properly" do
      Client.init_state()
      assert Map.has_key?(Client.data(), :element_annotations)
    end
  end

  describe "Server Lists" do
    setup [:reinitialize_state]
    setup do
      %{element_annotation: %Schemas.Elements.ElementAnnotation{id: UUID.uuid4()}}
    end
    
    
    test "Lists ElementAnnotations", %{element_annotation: element_annotation} do
      Client.put_in_state(:data, %{element_annotations: [element_annotation]})
      [result] = Client.list_element_annotations()
      assert result.id == element_annotation.id
    end
  end

  describe "ElementAnnotation Server CUD"  do
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
      :create_remote_annotation,
      :create_remote_element_annotation,
      :create_remote_tokens,
      :put_access_token_in_state,
      :create_remote_user_context,
      :put_remote_context_data,
      :put_user_in_state,
      :connect_channel
    ]

    test "Loads", %{user: user, remote_element_annotation: element_annotation} do
      Client.load_element_annotations(%{filters: %{user_id: user.id}})
      %{element_annotations: [result]} = Client.data()
      assert result.id == element_annotation.id
    end
    
  end

  
end
