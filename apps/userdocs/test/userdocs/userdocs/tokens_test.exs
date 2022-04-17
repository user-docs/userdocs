defmodule Userdocs.TokensTest do
  use Userdocs.DataCase
  alias Schemas.Secrets.Secret
  alias Userdocs.Secrets
  alias Userdocs.Tokens

  describe "token" do
    @valid_attrs %{id: "access", token: "some value"}
    @update_attrs %{id: "id", token: "some updated value"}
    @invalid_attrs %{id: nil, token: nil}
    @default_opts %{context: %{repo: Userdocs.LocalRepo}}

    def token_fixture(attrs \\ %{}) do
      {:ok, token} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Secrets.create_token(@default_opts)

      token
    end

    test "list_tokens/0 returns all tokens" do
      access_token = token_fixture(%{id: "access"})
      secret = token_fixture(%{id: "some_secret"})
      assert Tokens.list_tokens(@default_opts) == [access_token]
    end

    test "create_all/4 creates all tokens" do
      assert Tokens.create_all_tokens("1", "2", "3", @default_opts) ==
               {:ok, %{access_token: "1", renewal_token: "2", user_id: "3"}}
    end

    test "update_all/4 updates all tokens" do
      Tokens.create_all_tokens("1", "2", "3", @default_opts)

      assert Tokens.update_all_tokens("4", "5", "6", @default_opts) ==
               {:ok, %{access_token: "4", renewal_token: "5", user_id: "6"}}
    end

    test "upsert_all/2 creates and updates" do
      create_attrs = %{access_token: "1", renewal_token: "2", user_id: "3"}
      assert Tokens.upsert_all_tokens(create_attrs, @default_opts) == {:ok, create_attrs}
      update_attrs = %{access_token: "4", renewal_token: "5", user_id: "6"}
      assert Tokens.upsert_all_tokens(update_attrs, @default_opts) == {:ok, update_attrs}
    end

    test "delete_all_tokens/1 only deletes the tokens" do
      create_attrs = %{access_token: "1", renewal_token: "2", user_id: "3"}
      Tokens.upsert_all_tokens(create_attrs, @default_opts)
      secret = token_fixture(%{id: "some_secret"})
      assert Tokens.delete_all_tokens(@default_opts) == {:ok, create_attrs}
      assert Secrets.list_secrets(@default_opts) == [secret]
    end
  end
end
