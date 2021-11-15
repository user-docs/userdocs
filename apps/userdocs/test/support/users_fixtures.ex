defmodule Userdocs.UsersFixtures do
  @moduledoc """
  This module defines test helpers for creating
  entities via the `Userdocs.Auth` Userdocs.
  """
  alias Userdocs.Users

  def user_attrs(type, password \\ nil)
  def user_attrs(:options, _password) do
    %{
    }
  end
  def user_attrs(:confirmed, password) do
    guarded_password = password || UUID.uuid4()
    %{
      email: UUID.uuid4() <> "@user-docs.com",
      password: guarded_password,
      password_confirmation: guarded_password,
      email_confirmed_at: DateTime.utc_now()
    }
  end
  def user_attrs(:valid, password) do
    guarded_password = password || UUID.uuid4()
    %{
      email: UUID.uuid4() <> "@user-docs.com",
      password: guarded_password,
      password_confirmation: guarded_password
    }
  end
  def user_attrs(:invalid, _password) do
    %{
      email: UUID.uuid4(),
      password: "",
      password_confirmation: ""
    }
  end

  def user(password \\ UUID.uuid4()) do
    {:ok, user} =
      user_attrs(:valid, password)
      |> Users.create_test_user()
    user
  end

  def confirmed_user(password \\ UUID.uuid4()) do
    {:ok, user} =
      user_attrs(:confirmed, password)
      |> Users.create_test_user()
    user
  end
end
