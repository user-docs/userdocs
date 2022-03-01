defmodule ClientTest.StrategiesTest do
  use ExUnit.Case
  use UserdocsClient.Case
  alias Userdocs.UsersFixtures
  alias Userdocs.TeamsFixtures
  alias Userdocs.WebFixtures

  @remote_opts %{context: %{repo: Userdocs.Repo}}

  defp create_password(_), do: %{password: UUID.uuid4()}
  defp create_user(%{password: password}), do: %{user: UsersFixtures.confirmed_user(password)}
  defp create_team(_), do: %{team: TeamsFixtures.team(@remote_opts)}
  defp create_team_user(%{user: user, team: team}), do: %{team_user: TeamsFixtures.team_user(user.id, team.id, @remote_opts)}
  defp create_strategy(_), do: %{strategy: WebFixtures.strategy(@remote_opts)}
  defp create_session(%{user: user, password: password}) do
    {:ok, _user} = Client.authenticate(%{"user" => %{"email" => user.email, "password" => password}})
    %{}
  end
  defp init_state(_) do
    Client.init_state()
    %{}
  end

  describe "Strategies" do
    setup [
      :create_password,
      :create_user,
      :create_team,
      :create_team_user,
      :create_strategy,
      :create_session,
      :init_state
    ]

    setup do
      on_exit(fn -> Client.destroy_state() end)
    end

    test "Strategies Initialize properly" do
      assert Map.has_key?(Client.data(), :strategies)
    end

    test "Loads Strategies", %{strategy: strategy} do
      Client.load_strategies(%{})
      %{strategies: [result]} = Client.data()
      assert result.id == strategy.id
    end

    test "Lists Strategies", %{strategy: strategy} do
      Client.load_strategies(%{})
      [result] = Client.list_strategies([])
      assert result.id == strategy.id
    end
  end
end
