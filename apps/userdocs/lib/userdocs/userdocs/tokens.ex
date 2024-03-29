defmodule Userdocs.Tokens do
  @moduledoc "Functions for manipulating tokens stored locally on the client"
  alias Userdocs.Secrets
  alias Schemas.Secrets.Secret

  def list_tokens(opts) do
    opts = Map.put(opts, :filters, [ids: ["access", "renewal", "user_id"]])
    Secrets.list_secrets(opts)
  end

  def create_all_tokens(access_token, renewal_token, user_id, opts) do
    {:ok, at} =
      %{id: "access", value: access_token}
      |> Secrets.create_secret(opts)

    {:ok, rt} =
      %{id: "renewal", value: renewal_token}
      |> Secrets.create_secret(opts)

    {:ok, ui} =
      %{id: "user_id", value: to_string(user_id)}
      |> Secrets.create_secret(opts)

    {:ok, %{access_token: at.value, renewal_token: rt.value, user_id: ui.value}}
  end

  def update_all_tokens(access_token, renewal_token, user_id, opts) do
    [access, renewal, user] = list_tokens(opts)
    {:ok, at} = update_token(access, access_token, opts)
    {:ok, rt} = update_token(renewal, renewal_token, opts)
    {:ok, ui} = update_token(user, to_string(user_id), opts)

    {:ok, %{access_token: at.value, renewal_token: rt.value, user_id: ui.value}}
  end

  def upsert_all_tokens(%{access_token: at, renewal_token: rt, user_id: uid}, opts) do

    case list_tokens(opts) do
      [] -> create_all_tokens(at, rt, uid, opts)
      [_, _, _] -> update_all_tokens(at, rt, uid, opts)
    end
  end

  def delete_all_tokens(opts) do
    {:ok, at} = access(opts) |> Secrets.delete_secret(opts)
    {:ok, rt} = renewal(opts) |> Secrets.delete_secret(opts)
    {:ok, ui} = user(opts) |> Secrets.delete_secret(opts)

    {:ok, %{access_token: at.value, renewal_token: rt.value, user_id: ui.value}}
  end

  def update_token(%Secret{} = secret, value, opts) do
    Secrets.update_secret(secret, %{value: value}, opts)
  end

  def access(opts) do
    Secrets.get_secret!("access", opts)
  end
  def renewal(opts) do
    Secrets.get_secret!("renewal", opts)
  end
  def user(opts) do
    Secrets.get_secret!("user_id", opts)
  end
end
