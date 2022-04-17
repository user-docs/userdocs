defmodule Userdocs.SecretsTest do
  use Userdocs.DataCase
  alias Schemas.Secrets.Secret
  alias Userdocs.Secrets

  describe "token" do

    @valid_attrs %{id: "id", value: "some value"}
    @update_attrs %{id: "id", value: "some updated value"}
    @invalid_attrs %{id: nil, value: nil}
    @default_opts %{context: %{repo: Userdocs.LocalRepo}}

    def secret_fixture(attrs \\ %{}) do
      {:ok, secret} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Secrets.create_secret(@default_opts)

      secret
    end

    test "list_secrets/0 returns all secrets" do
      secret = secret_fixture()
      assert Secrets.list_secrets(@default_opts) == [secret]
    end

    test "get_secret!/1 returns the secret with given id" do
      secret = secret_fixture()
      assert Secrets.get_secret!(secret.id, @default_opts) == secret
    end

    test "create_secret/1 with valid data creates a secret" do
      assert {:ok, %Secret{} = secret} = Secrets.create_secret(@valid_attrs, @default_opts)
      assert secret.value == "some value"
    end

    test "create_secret/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Secrets.create_secret(@invalid_attrs, @default_opts)
    end

    test "update_secret/2 with valid data updates the secret" do
      secret = secret_fixture()
      assert {:ok, %Secret{} = secret} = Secrets.update_secret(secret, @update_attrs, @default_opts)
      assert secret.value == "some updated value"
    end

    test "update_secret/2 with invalid data returns error changeset" do
      secret = secret_fixture()
      assert {:error, %Ecto.Changeset{}} = Secrets.update_secret(secret, @invalid_attrs, @default_opts)
      assert secret == Secrets.get_secret!(secret.id, @default_opts)
    end
    test "delete_secret/1 deletes the secret" do
      secret = secret_fixture()
      assert {:ok, %Secret{}} = Secrets.delete_secret(secret, @default_opts)
      assert_raise Ecto.NoResultsError, fn -> Secrets.get_secret!(secret.id, @default_opts) end
    end

    _implement_these_tests_later = """
    test "change_secret/1 returns a secret changeset" do
      secret = secret_fixture()
      assert %Ecto.Changeset{} = Secrets.change_secret(secret)
    end
    """
  end
end
