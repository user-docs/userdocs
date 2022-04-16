defmodule ClientTest.Users do
  use Client.RemoteCase
  use Client.LocalCase
  use Client.Case
  alias Userdocs.UsersFixtures
  alias Userdocs.TeamsFixtures
  alias Userdocs.WebFixtures

  describe "Users Initialize" do
    setup [:reinitialize_state]
    test "in state properly" do
      Client.init_state()
      assert Map.has_key?(Client.data(), :users)
    end
  end

  describe "Server Lists" do
    setup do
      %{user: %Schemas.Users.User{}}
    end

    test "Gets User", %{user: user} do
      Client.put_in_state(:data, %{users: [user]})
      result = Client.get_user!(user.id)
      assert result == user
    end

    test "Lists Users", %{user: user} do
      Client.put_in_state(:data, %{users: [user]})
      [result] = Client.list_users()
      assert result.id == user.id
    end
  end

  describe "User Server CUD"  do
    setup [
      :reinitialize_state,
      :ensure_web_started,
      :create_password,
      :create_user,
      :create_remote_team,
      :create_remote_team_user,
      :create_remote_tokens,
      :put_access_token_in_state,
      :create_remote_user_context,
      :put_remote_context_data,
      :put_user_in_state
    ]

    test "Loads", %{user: user} do
      Client.load_users(%{filters: %{user_id: user.id}})
      %{users: [result]} = Client.data()
      assert result.id == user.id
    end

    test "updates", %{password: password, user: user} do
      %{email: email} = attrs = UsersFixtures.user_attrs(:valid, password) |> Map.put(:current_password, password) |> IO.inspect()
      assert {:ok, user} = Client.update_user(user, attrs)
      assert %{email: ^email} = Userdocs.Users.get_user!(user.id, @remote_opts)
    end

  end


end
