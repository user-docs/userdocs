defmodule ClientTest.Strategies do
  use Client.RemoteCase
  use Client.LocalCase
  use Client.Case
  

  describe "Strategies Initialize" do
    setup [:reinitialize_state]
    test "in state properly" do
      Client.init_state()
      assert Map.has_key?(Client.data(), :strategies)
    end
  end

  describe "Server Lists" do
    setup [:reinitialize_state]
    setup do
      %{strategy: %Schemas.Strategies.Strategy{}}
    end
    
    
    test "Lists Strategies", %{strategy: strategy} do
      Client.put_in_state(:data, %{strategies: [strategy]})
      [result] = Client.list_strategies()
      assert result.id == strategy.id
    end
  end

  describe "Strategy Server CUD"  do
    setup [
      :reinitialize_state,
      :ensure_web_started,
      :create_password,
      :create_user,
      :create_remote_team,
      :create_remote_team_user,
      :create_remote_strategy,
      :create_remote_tokens,
      :put_access_token_in_state,
      :create_remote_user_context,
      :put_remote_context_data,
      :put_user_in_state
    ]

    test "Loads", %{user: user, remote_strategy: strategy} do
      Client.load_strategies(%{filters: %{user_id: user.id}})
      %{strategies: [result]} = Client.data()
      assert result.id == strategy.id
    end
    
  end

  
end
