defmodule ClientTest.AnnotationTypes do
  use Client.RemoteCase
  use Client.LocalCase
  use Client.Case
  alias Userdocs.UsersFixtures
  alias Userdocs.TeamsFixtures
  alias Userdocs.WebFixtures

  describe "AnnotationTypes Initialize" do
    test "in state properly" do
      Client.init_state()
      assert Map.has_key?(Client.data(), :annotation_types)
    end
  end

  describe "Server Lists" do
    setup do
      %{annotation_type: %Schemas.Annotations.AnnotationType{}}
    end

    test "Gets AnnotationType", %{annotation_type: annotation_type} do
      Client.put_in_state(:data, %{annotation_types: [annotation_type]})
      result = Client.get_annotation_type!(annotation_type.id)
      assert result == annotation_type
    end

    test "Lists AnnotationTypes", %{annotation_type: annotation_type} do
      Client.put_in_state(:data, %{annotation_types: [annotation_type]})
      [result] = Client.list_annotation_types()
      assert result.id == annotation_type.id
    end
  end

  describe "AnnotationType Server CUD"  do
    setup [
      :ensure_web_started,
      :create_password,
      :create_user,
      :create_remote_annotation_type,
      :create_remote_tokens,
      :put_access_token_in_state,
      :create_remote_user_context,
      :put_remote_context_data,
      :put_user_in_state
    ]

    test "Loads", %{user: user, remote_annotation_type: annotation_type} do
      Client.load_annotation_types(%{filters: %{user_id: user.id}})
      %{annotation_types: [result]} = Client.data()
      assert result.id == annotation_type.id
    end
    
  end

  describe "Local" do
    setup [
      :create_password,
      :create_user,
      :create_local_annotation_type,
      :create_local_user_context,
      :put_local_context_data
    ]
    
    test "load_annotation_types/0 loads annotation_types", %{local_annotation_type: annotation_type} do
      Client.load_annotation_types()
      %{annotation_types: [result]} = Client.data()
      assert result.id == annotation_type.id
    end
  end
end
