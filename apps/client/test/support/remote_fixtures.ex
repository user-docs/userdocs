defmodule Client.RemoteFixtures do
  def ensure_web_started(_) do
    Application.ensure_all_started(:userdocs_web)
    :ok
  end

  def share_connection(pid) do
    Ecto.Adapters.SQL.Sandbox.allow(Userdocs.Repo, pid, self())
  end

  def create_remote_tokens(%{user: user}) do
    pow_config = [
      mod: UserdocsWeb.API.Auth.Plug,
      plug: UserdocsWeb.API.Auth.Plug,
      otp_app: :userdocs_web
    ]

    backend = Pow.Config.get(pow_config, :cache_store_backend, Pow.Store.Backend.EtsCache)
    store_config = [backend: backend, pow_config: pow_config]

    secret_key_base =
      Application.get_env(:userdocs_web, UserdocsWeb.Endpoint)[:secret_key_base]

    conn = %Plug.Conn{secret_key_base: secret_key_base}
    access_token = Pow.UUID.generate()
    renewal_token = Pow.UUID.generate()
    signed_access_token = sign_token(conn, access_token, pow_config)
    signed_renewal_token = sign_token(conn, Pow.UUID.generate(), pow_config)

    Pow.Store.CredentialsCache.put(
      store_config,
      access_token,
      {user, [renewal_token: signed_renewal_token]}
    )

    PowPersistentSession.Store.PersistentSessionCache.put(
      store_config,
      renewal_token,
      {user, [access_token: signed_access_token]}
    )

    %{access_token: signed_access_token, renewal_token: signed_renewal_token}
  end

  def put_access_token_in_state(%{access_token: token}) do
    Client.put_in_state(:access_token, token)
    :ok
  end

  def put_user_in_state(%{user: user}) do
    Client.put_in_state(:current_user, user)
    :ok
  end

  def connect_client(_) do
    Client.connect()
    :ok
  end

  def sign_token(conn, token, config),
    do: Pow.Plug.sign_token(conn, Atom.to_string(UserdocsWeb.API.Auth.Plug), token, config)
end
