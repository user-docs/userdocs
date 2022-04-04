defmodule Client.RemoteCase do
  @moduledoc """
  This module defines the test case to be used by
  tests that require setting up a connection.

  Such tests rely on `Phoenix.ConnTest` and also
  import other functionality to make it easier
  to build common data structures and query the data layer.

  Finally, if the test case interacts with the database,
  we enable the SQL sandbox, so changes done to the database
  are reverted at the end of every test. If you are using
  PostgreSQL, you can even run database tests asynchronously
  by setting `use UserdocsDesktopWeb.ConnCase, async: true`, although
  this option is not recommended for other databases.
  """

  use ExUnit.CaseTemplate

  using do
    quote do
      import Client.RemoteCase

      alias Userdocs.Tokens
      alias Userdocs.UsersFixtures
      alias Userdocs.ContextsFixtures
      alias Userdocs.ProjectsFixtures
      alias Userdocs.WebFixtures
      alias Userdocs.TeamsFixtures

      @remote_opts %{context: %{repo: Userdocs.Repo}}

      defp ensure_web_started(_) do
        Application.ensure_all_started(:userdocs_web)
        :ok
      end

      defp create_password(_), do: %{password: UUID.uuid4()}
      defp create_user(%{password: password}), do: %{user: UsersFixtures.confirmed_user(password)}
      defp create_remote_team(_), do: %{remote_team: TeamsFixtures.team(@remote_opts)}

      defp create_team_user(%{user: user, remote_team: team}),
        do: %{team_user: TeamsFixtures.team_user(user.id, team.id, @remote_opts)}

      defp create_remote_strategy(_), do: %{remote_strategy: WebFixtures.strategy(@remote_opts)}

      defp create_remote_project(%{remote_team: team, remote_strategy: strategy}),
        do: %{remote_project: ProjectsFixtures.project(team.id, strategy.id, @remote_opts)}

      defp create_remote_tokens(%{user: user}) do
        pow_config = [
          mod: UserdocsWeb.API.Auth.Plug,
          plug: UserdocsWeb.API.Auth.Plug,
          otp_app: :userdocs_web
        ]

        backend = Pow.Config.get(pow_config, :cache_store_backend, Pow.Store.Backend.EtsCache)
        store_config = [backend: backend, pow_config: pow_config]
        secret_key_base = Application.get_env(:userdocs_web, UserdocsWeb.Endpoint)[:secret_key_base]
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

      defp put_access_token_in_state(%{access_token: token}) do
        Client.put_in_state(:access_token, token)
        :ok
      end

      defp put_user_in_state(%{user: user}) do
        Client.put_in_state(:current_user, user)
        :ok
      end

      defp connect_client(_) do
        Client.connect()
        :ok
      end

      defp sign_token(conn, token, config),
        do: Pow.Plug.sign_token(conn, Atom.to_string(UserdocsWeb.API.Auth.Plug), token, config)
    end
  end

  setup tags do
    pid = Ecto.Adapters.SQL.Sandbox.start_owner!(Userdocs.Repo, shared: not tags[:async])
    on_exit(fn ->
      Ecto.Adapters.SQL.Sandbox.stop_owner(pid)
    end)
    {:ok, %{pid: pid}}
  end
end
