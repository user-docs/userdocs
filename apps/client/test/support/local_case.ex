defmodule Client.LocalCase do
  use ExUnit.CaseTemplate

  using do
    quote do
      import Client.LocalFixtures
      import Userdocs.LocalFixtures

      @local_opts %{context: %{repo: Userdocs.LocalRepo}}
    end
  end

  setup tags do
    local_pid = Ecto.Adapters.SQL.Sandbox.start_owner!(Userdocs.LocalRepo, shared: not tags[:async])
    on_exit(fn ->
      Ecto.Adapters.SQL.Sandbox.stop_owner(local_pid)
    end)
    {:ok, %{local_pid: local_pid}}
  end
end
