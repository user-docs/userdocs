defmodule Client.AuthenticationTest do
  use Client.Case
  use Client.LocalCase
  use Client.RemoteCase
	alias Client.Authentication
  alias Schemas.Users.User
  alias Userdocs.Tokens

  @local_opts %{context: %{repo: Userdocs.LocalRepo}}

  describe "Session" do
    setup [
      :ensure_web_started,
      :create_password,
      :create_user,
      :create_remote_team,
      :create_remote_team_user,
      :create_remote_tokens,
    ]

    test "check token store on an empty store creates tokens" do
      Authentication.check_token_store(Tokens.list_tokens(@local_opts))
      [at, rt, uid] = Tokens.list_tokens(@local_opts)
      assert at.token == "default"
      assert rt.token == "default"
      assert uid.token == "default"
      Tokens.delete_all_tokens(@local_opts)
    end

    test "try_access_token succeeds", %{access_token: at, user: user} do
      {:ok, current_user = %User{}} = Authentication.try_access_token({:ok, %{access_token: at, renewal_token: "asdf"}})
      assert current_user.email == user.email
    end

    test "try_access_token fails" do
      result = Authentication.try_access_token({:ok, %{access_token: "at", renewal_token: "a"}})
      assert result == {:nok, %{message: "Existing token failed, trying to renew session.", renewal_token: "a"}}
    end

    test "try_renewal_token succeeds", %{user: user, password: password} do
      Authentication.init(%{"user" => %{"email" => user.email, "password" => password}})
      [_, %{token: rt}, _] = Tokens.list_tokens(@local_opts)
      Tokens.delete_all_tokens(@local_opts)
      Tokens.create_all_tokens("default", rt, "1", @local_opts)
      {:ok, current_user} = Authentication.try_renewal_token({:nok, %{message: "", renewal_token: rt}})
      assert current_user.email == user.email
      Tokens.delete_all_tokens(@local_opts)
    end

    test "try_renewal_token fails" do
      result = Authentication.try_renewal_token({:nok, %{message: "", renewal_token: "a"}})
      assert result == {:error, "Token Renewal failed. Log in again."}
    end

    test "init succeeds with an access token", %{access_token: at, user: user} do
      Tokens.create_all_tokens(at, "default", "1", @local_opts)
      {:ok, current_user} = Authentication.init()
      assert current_user.email == user.email
      Tokens.delete_all_tokens(@local_opts)
    end

    test "init succeeds with a renewal token", %{user: user, password: password} do
      Authentication.init(%{"user" => %{"email" => user.email, "password" => password}})
      [_, %{token: rt}, _] = Tokens.list_tokens(@local_opts)
      Tokens.delete_all_tokens(@local_opts)
      Tokens.create_all_tokens("default", rt, "1", @local_opts)
      {:ok, current_user} = Authentication.init()
      assert current_user.email == user.email
      Tokens.delete_all_tokens(@local_opts)
    end

    test "init fails with a neither" do
      Tokens.create_all_tokens("default", "default", "1", @local_opts)
      {status, _message} = Authentication.init()
      assert status == :error
      Tokens.delete_all_tokens(@local_opts)
    end

    test "init succeeds with valid credentials", %{password: password, user: user} do
      {:ok, current_user} = Authentication.init(%{"user" => %{"email" => user.email, "password" => password}})
      assert current_user.email == user.email
    end
  end
end
