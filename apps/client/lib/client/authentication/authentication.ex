defmodule Client.Authentication do
  @moduledoc "Functions for authenticating with the server"
  alias Userdocs.Tokens
  alias Schemas.Secrets.Secret
  alias Userdocs.Users
  require Logger

  @opts %{context: %{repo: Userdocs.LocalRepo}}
  @session_url Application.compile_env(:userdocs_desktop, :host_url) <> "/api/session"
  @current_user_url Application.compile_env(:userdocs_desktop, :host_url) <> "/api/session/current_user"
  @renewal_url Application.compile_env(:userdocs_desktop, :host_url) <> "/api/session/renew"
  @headers [{"Content-Type", "application/json"}]

  def init(params) do
    case create_session(params) do
      {:ok, %{access_token: at} = tokens} ->
        Tokens.upsert_all_tokens(tokens, @opts)
        {:ok, %{"user" => user_params}} = fetch_current_user(at)
        cast_user(user_params)
      {:error, message} -> {:error, message}
    end
  end

  def init() do
    Logger.debug("#{__MODULE__} initializing session")
    Tokens.list_tokens(@opts)
    |> check_token_store()
    |> try_access_token()
    |> try_renewal_token()
  end

  def check_token_store(tokens) do
    case tokens do
      [%Secret{token: "default"}, %Secret{token: "default"}, %Secret{token: "default"}] ->
        {:error, "No Tokens"}

      [%Secret{id: "access"} = a, %Secret{id: "renewal"} = r, %Secret{id: "user_id"} = uid] ->
        {:ok, %{access_token: a.token, renewal_token: r.token, user_id: uid.token}}

      [] ->
        Logger.debug("#{__MODULE__} tokens don't exist")
        Tokens.create_all_tokens("default", "default", "default", @opts)
        {:error, "No Tokens"}
    end
  end

  def try_access_token({:error, "No Tokens"}), do: {:error, "No Tokens"}
  def try_access_token({:ok, %{access_token: access_token, renewal_token: renewal_token}}) do
    Logger.debug("#{__MODULE__} trying access token")
    case fetch_current_user(access_token) do
      {:ok, %{"status" => "ok", "user" => user_params}} ->
        Logger.debug("Existing token worked. Login successful")
        cast_user(user_params)
      _ ->
        Logger.debug("Existing token failed.")
        {:nok, %{message: "Existing token failed, trying to renew session.", renewal_token: renewal_token}}
    end
  end

  def try_renewal_token({:error, "No Tokens"}), do: {:error, "No Tokens"}
  def try_renewal_token({:ok, _user} = state), do: state
  def try_renewal_token({:nok, %{renewal_token: renewal_token}}) do
    Logger.debug("Trying to renew session with token #{renewal_token}")
    case renew_session(renewal_token) do
      {:ok, %{"data" => %{"access_token" => at, "renewal_token" => rt, "user_id" => ui}}} ->
        Logger.info("Token Renewed successfully. Login Successful.")
        Tokens.update_all_tokens(at, rt, ui, @opts)
        {:ok, %{"status" => "ok", "user" => user_params}} = fetch_current_user(at)
        cast_user(user_params)
      _ ->
        Logger.info("Token renewal failed.")
        {:error, "Token Renewal failed. Log in again."}
    end
  end

  def create_session(params) do
    {:ok, body} = Jason.encode(params)
    HTTPoison.post(@session_url, body, @headers)
    |> handle_server_response()
    |> case do
      {:ok, %{"data" => %{"access_token" => at, "renewal_token" => rt, "user_id" => uid}}} ->
        {:ok, %{access_token: at, renewal_token: rt, user_id: uid}}
      {:error, message} -> {:error, message}
    end
  end

  def renew_session(token) do
    HTTPoison.post(@renewal_url, "", [{"authorization", token}])
    |> handle_server_response()
  end

  def fetch_current_user(token) do
    HTTPoison.get(@current_user_url, [{"authorization", token}])
    |> handle_server_response()
  end

  def cast_user(params) do
    params
    |> underscored_map_keys()
    |> Users.create_prepared_user()
  end

  def handle_server_response({:ok, %{status_code: 200, body: body}}),
    do: Jason.decode(body)

  def handle_server_response({:ok, %{status_code: 401, body: _}}),
    do: {:error, "Authentication failed, please try again."}

  def handle_server_response({:error, %{status_code: 500, body: _}}),
    do: {:error, "Server error."}

  def handle_server_response({:error, %HTTPoison.Error{id: nil, reason: :econnrefused}}),
    do: {:error, "Server not online."}

  def handle_server_response({:error, %HTTPoison.Error{id: nil, reason: :timeout}}),
    do: {:error, "Server Timed out."}


  def underscored_map_keys(%Date{} = val), do: val
  def underscored_map_keys(%DateTime{} = val), do: val
  def underscored_map_keys(%NaiveDateTime{} = val), do: val
  def underscored_map_keys(map) when is_map(map) do
    for {key, val} <- map, into: %{} do
      {Inflex.underscore(key), underscored_map_keys(val)}
    end
  end
  def underscored_map_keys(val), do: val
end
