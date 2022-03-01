defmodule ClientTest.StepTypes do
  use ExUnit.Case
  use UserdocsClient.Case
  alias Userdocs.UsersFixtures
  alias Userdocs.AutomationFixtures

  defp create_step_type(_), do: %{step_type: AutomationFixtures.step_type()}
  defp create_password(_), do: %{password: UUID.uuid4()}
  defp create_user(%{password: password}), do: %{user: UsersFixtures.confirmed_user(password)}

  defp create_session(%{user: user, password: password}) do
    {:ok, _user} = Client.authenticate(%{"user" => %{"email" => user.email, "password" => password}})
    %{}
  end
  defp init_state(_) do
    Client.init_state()
    %{}
  end

  describe "StepTypes" do
    setup [
      :create_password,
      :create_user,
      :create_step_type,
      :create_session,
      :init_state
    ]

    setup do
      on_exit(fn -> Client.destroy_state() end)
    end

    test "StepTypes Initialize properly" do
      assert Map.has_key?(Client.data(), :step_types)
    end

    test "Loads StepTypes", %{step_type: step_type} do
      Client.load_step_types(%{})
      %{step_types: [result]} = Client.data()
      assert result.id == step_type.id
    end

    test "Lists Step Types", %{step_type: step_type} do
      Client.load_step_types(%{})
      [result] = Client.list_step_types([])
      assert result.id == step_type.id
    end
  end
end
