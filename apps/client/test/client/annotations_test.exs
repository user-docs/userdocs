defmodule ClientTest.Annotations do
  use Client.RemoteCase
  use Client.LocalCase
  use Client.Case
  alias Userdocs.UsersFixtures
  alias Userdocs.TeamsFixtures
  alias Userdocs.WebFixtures

  describe "Annotations Initialize" do
    setup [:reinitialize_state]
    test "in state properly" do
      Client.init_state()
      assert Map.has_key?(Client.data(), :annotations)
    end
  end

  describe "Server Lists" do
    setup do
      %{annotation: %Schemas.Annotations.Annotation{}}
    end
    
    test "Gets Annotation", %{annotation: annotation} do
      Client.put_in_state(:data, %{annotations: [annotation]})
      result = Client.get_annotation!(annotation.id)
      assert result == annotation
    end
    
    test "Lists Annotations", %{annotation: annotation} do
      Client.put_in_state(:data, %{annotations: [annotation]})
      [result] = Client.list_annotations()
      assert result.id == annotation.id
    end
  end

  describe "Annotation Server CUD"  do
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
      :create_remote_annotation,
      :create_remote_tokens,
      :put_access_token_in_state,
      :create_remote_user_context,
      :put_remote_context_data,
      :put_user_in_state
    ]

    test "Loads", %{user: user, remote_annotation: annotation} do
      Client.load_annotations(%{filters: %{user_id: user.id}})
      %{annotations: [result]} = Client.data()
      assert result.id == annotation.id
    end
    
    test "creates", %{remote_page: page} do
      attrs = WebFixtures.annotation_attrs(:valid, page.id)
      assert {:ok, %{id: annotation_id}} = Client.create_annotation(attrs)
      assert %{id: ^annotation_id} = Userdocs.Annotations.get_annotation!(annotation_id, @remote_opts)
    end
    
    test "updates", %{remote_page: page, remote_annotation: annotation} do
      %{name: name} = attrs = WebFixtures.annotation_attrs(:valid, page.id)
      assert {:ok, annotation} = Client.update_annotation(annotation, attrs)
      assert %{name: ^name} = Userdocs.Annotations.get_annotation!(annotation.id, @remote_opts)
    end
    
    test "deletes", %{remote_annotation: annotation} do
      Client.delete_annotation(annotation)
      assert_raise Ecto.NoResultsError, fn -> Userdocs.Annotations.get_annotation!(annotation.id, @remote_opts) end
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
      :create_local_annotation,
      :create_local_user_context,
      :put_local_context_data
    ]
    
    test "creates", %{local_page: page} do
      attrs = WebFixtures.annotation_attrs(:valid, page.id)
      assert {:ok, %{id: annotation_id}} = Client.create_annotation(attrs)
      assert %{id: ^annotation_id} = Userdocs.Annotations.get_annotation!(annotation_id, @local_opts)
    end
    
    test "updates", %{local_page: page, local_annotation: annotation} do
      %{name: name} = attrs = WebFixtures.annotation_attrs(:valid, page.id)
      assert {:ok, annotation} = Client.update_annotation(annotation, attrs)
      assert %{name: ^name} = Userdocs.Annotations.get_annotation!(annotation.id, @local_opts)
    end
    
    test "deletes", %{local_annotation: annotation} do
      Client.delete_annotation(annotation)
      assert_raise Ecto.NoResultsError, fn -> Userdocs.Annotations.get_annotation!(annotation.id, @local_opts) end
    end
    
    test "load_annotations/0 loads annotations", %{local_annotation: annotation} do
      Client.load_annotations()
      %{annotations: [result]} = Client.data()
      assert result.id == annotation.id
    end
  end
end
