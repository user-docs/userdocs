defmodule Userdocs.Tokens do
  @moduledoc "Functions for manipulating tokens stored locally on the client"
  import Ecto.Query
  alias Userdocs.RepoHandler
  alias Schemas.Tokens.Token

  def list_tokens(opts) do
    Token
    |> order_by(asc: :id)
    |> RepoHandler.all(opts)
  end

  def get_token!(id, opts) do
    RepoHandler.get!(Token, id, opts)
  end

  def access(opts) do
    from(token in Token, where: token.id == "access")
    |> RepoHandler.one!(opts)
  end
  def renewal(opts) do
    from(token in Token, where: token.id == "renewal")
    |> RepoHandler.one!(opts)
  end
  def user(opts) do
    from(token in Token, where: token.id == "user_id")
    |> RepoHandler.one!(opts)
  end

  def update_token(%Token{} = token, value, opts) do
    token
    |> Token.changeset(%{token: value})
    |> RepoHandler.update(opts)
  end

  def create_token(attrs, opts) do
    %Token{}
    |> Token.changeset(attrs)
    |> RepoHandler.insert(opts)
  end

  def upsert_all(%{access_token: at, renewal_token: rt, user_id: uid}, opts) do

    case list_tokens(opts) do
      [] -> create_all(at, rt, uid, opts)
      [_, _, _] -> update_all(at, rt, uid, opts)
    end
  end

  def create_all(access_token, renewal_token, user_id, opts) do
    {:ok, at} =
      %{id: "access", token: access_token}
      |> create_token(opts)

    {:ok, rt} =
      %{id: "renewal", token: renewal_token}
      |> create_token(opts)

    {:ok, ui} =
      %{id: "user_id", token: to_string(user_id)}
      |> create_token(opts)

    {:ok, %{access_token: at.token, renewal_token: rt.token, user_id: ui.token}}
  end

  def update_all(access_token, renewal_token, user_id, opts) do
    [access, renewal, user] = list_tokens(opts)
    update_token(access, access_token, opts)
    update_token(renewal, renewal_token, opts)
    update_token(user, to_string(user_id), opts)
  end

  def delete_all(opts) do
    RepoHandler.delete_all(Token, opts)
  end
end
