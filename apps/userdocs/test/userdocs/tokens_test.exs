defmodule Userdocs.TokensTest do
  use Userdocs.DataCase
  alias Schemas.Tokens.Token
  alias Userdocs.Tokens

  describe "token" do

    @valid_attrs %{id: "id", token: "some value"}
    @update_attrs %{id: "id", token: "some updated value"}
    @invalid_attrs %{id: nil, token: nil}
    @default_opts %{context: %{repo: Userdocs.Repo}}

    def token_fixture(attrs \\ %{}) do
      {:ok, token} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Tokens.create_token(@default_opts)

      token
    end

    test "list_tokens/0 returns all tokens" do
      token = token_fixture()
      assert Tokens.list_tokens(@default_opts) == [token]
    end

    test "get_token!/1 returns the token with given id" do
      token = token_fixture()
      assert Tokens.get_token!(token.id, @default_opts) == token
    end

    test "create_token/1 with valid data creates a token" do
      assert {:ok, %Token{} = token} = Tokens.create_token(@valid_attrs, @default_opts)
      assert token.token == "some value"
    end

    test "create_token/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Tokens.create_token(@invalid_attrs, @default_opts)
    end

    test "update_token/2 with valid data updates the token" do
      token = token_fixture()
      assert {:ok, %Token{} = token} = Tokens.update_token(token, @update_attrs.token, @default_opts)
      assert token.token == "some updated value"
    end

    test "update_token/2 with invalid data returns error changeset" do
      token = token_fixture()
      assert {:error, %Ecto.Changeset{}} = Tokens.update_token(token, @invalid_attrs, @default_opts)
      assert token == Tokens.get_token!(token.id, @default_opts)
    end
    _implement_these_tests_later = """
    test "delete_token/1 deletes the token" do
      token = token_fixture()
      assert {:ok, %Token{}} = Tokens.delete_token(token)
      assert_raise Ecto.NoResultsError, fn -> Tokens.get_token!(token.id) end
    end

    test "change_token/1 returns a token changeset" do
      token = token_fixture()
      assert %Ecto.Changeset{} = Tokens.change_token(token)
    end
    """
  end
end
