defmodule Client.RemoteCase do
  use ExUnit.CaseTemplate

  using do
    quote do
      import Userdocs.RemoteFixtures
      import Client.RemoteFixtures

      @remote_opts %{context: %{repo: Userdocs.Repo}}
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
