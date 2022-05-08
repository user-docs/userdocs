defmodule ClientTest.StepTypes do
  use Client.RemoteCase
  use Client.LocalCase
  use Client.Case
  

  describe "StepTypes Initialize" do
    setup [:reinitialize_state]
    test "in state properly" do
      Client.init_state()
      assert Map.has_key?(Client.data(), :step_types)
    end
  end

  describe "Server Lists" do
    setup [:reinitialize_state]
    setup do
      %{step_type: %Schemas.Steps.StepType{}}
    end
    
    test "Gets StepType", %{step_type: step_type} do
      Client.put_in_state(:data, %{step_types: [step_type]})
      result = Client.get_step_type!(step_type.id)
      assert result == step_type
    end
    
    test "Lists StepTypes", %{step_type: step_type} do
      Client.put_in_state(:data, %{step_types: [step_type]})
      [result] = Client.list_step_types()
      assert result.id == step_type.id
    end
  end

  describe "StepType Server CUD"  do
    setup [
      :reinitialize_state,
      :ensure_web_started,
      :create_password,
      :create_user,
      :create_remote_team,
      :create_remote_step_type,
      :create_remote_tokens,
      :put_access_token_in_state,
      :create_remote_user_context,
      :put_remote_context_data,
      :put_user_in_state,
      :connect_channel
    ]

    test "Loads", %{user: user, remote_step_type: step_type} do
      Client.load_step_types(%{filters: %{user_id: user.id}})
      %{step_types: [result]} = Client.data()
      assert result.id == step_type.id
    end
    
  end

  describe "Local" do
    setup [
      :reinitialize_state,
      :create_password,
      :create_user,
      :create_local_team,
      :create_local_step_type,
      :create_local_user_context,
      :put_local_context_data
    ]
    
    test "load_step_types/0 loads step_types", %{local_step_type: step_type} do
      Client.load_step_types()
      %{step_types: [result]} = Client.data()
      assert result.id == step_type.id
    end
  end
end
