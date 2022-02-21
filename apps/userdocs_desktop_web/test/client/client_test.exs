defmodule ClientTest do
  use UserdocsDesktopWeb.ConnCase
  alias Client.Authentication
  alias Userdocs.UsersFixtures
  alias Userdocs.TeamsFixtures
  alias Userdocs.Tokens
  alias Schemas.Users.User
  @local_opts %{context: %{repo: Userdocs.LocalRepo}}
  @remote_opts %{context: %{repo: Userdocs.Repo}}

  defp create_password(_), do: %{password: UUID.uuid4()}
  defp create_user(%{password: password}), do: %{user: UsersFixtures.confirmed_user(password)}
  defp create_team(_), do: %{team: TeamsFixtures.team(@remote_opts)}
  defp create_team_user(%{user: user, team: team}), do: %{team_user: TeamsFixtures.team_user(user.id, team.id, @remote_opts)}
  defp create_session(%{user: user, password: password}) do
    {:ok, _user} = Client.authenticate(%{"user" => %{"email" => user.email, "password" => password}})
    %{}
  end
  defp put_tokens(_) do
    {:ok, tokens} = Client.tokens()
    tokens
  end

  describe "Session" do
    setup [
      :create_password,
      :create_user,
      :create_team,
      :create_team_user,
      :create_session,
      :put_tokens
    ]

    test "check token store on an empty store creates tokens" do
      Tokens.delete_all(@local_opts)
      Authentication.check_token_store(Tokens.list_tokens(@local_opts))
      [at, rt, uid] = Tokens.list_tokens(@local_opts)
      assert at.token == "default"
      assert rt.token == "default"
      assert uid.token == "default"
      Tokens.delete_all(@local_opts)
    end

    test "try_access_token succeeds", %{access_token: at, user: user} do
      {:ok, current_user = %User{}} = Authentication.try_access_token({:ok, %{access_token: at, renewal_token: "asdf"}})
      assert current_user.email == user.email
    end

    test "try_access_token fails" do
      result = Authentication.try_access_token({:ok, %{access_token: "at", renewal_token: "a"}})
      assert result == {:nok, %{message: "Existing token failed, trying to renew session.", renewal_token: "a"}}
    end

    test "try_renewal_token succeeds", %{renewal_token: rt, user: user} do
      Tokens.delete_all(@local_opts)
      Tokens.create_all("default", rt, "1", @local_opts)
      {:ok, current_user} = Authentication.try_renewal_token({:nok, %{message: "", renewal_token: rt}})
      assert current_user.email == user.email
      Tokens.delete_all(@local_opts)
    end

    test "try_renewal_token fails" do
      result = Authentication.try_renewal_token({:nok, %{message: "", renewal_token: "a"}})
      assert result == {:error, "Token Renewal failed. Log in again."}
    end

    test "init succeeds with an access token", %{access_token: at, user: user} do
      Tokens.delete_all(@local_opts)
      Tokens.create_all(at, "default", "1", @local_opts)
      {:ok, current_user} = Authentication.init()
      assert current_user.email == user.email
      Tokens.delete_all(@local_opts)
    end

    test "init succeeds with a renewal token", %{renewal_token: rt, user: user} do
      Tokens.delete_all(@local_opts)
      Tokens.create_all("default", rt, "1", @local_opts)
      {:ok, current_user} = Authentication.init()
      assert current_user.email == user.email
      Tokens.delete_all(@local_opts)
    end

    test "init fails with a neither" do
      Tokens.delete_all(@local_opts)
      Tokens.create_all("default", "default", "1", @local_opts)
      {status, _message} = Authentication.init()
      assert status == :error
      Tokens.delete_all(@local_opts)
    end

    test "init succeeds with valid credentials", %{password: password, user: user} do
      {:ok, current_user} = Authentication.init(%{"user" => %{"email" => user.email, "password" => password}})
      assert current_user.email == user.email
    end
  end
end
