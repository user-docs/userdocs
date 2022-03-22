defmodule BrowserController.DataCase do
  use ExUnit.CaseTemplate

  using do
    quote do
      import BrowserController.DataCase
    end
  end

  setup tags do
    :ok = Ecto.Adapters.SQL.Sandbox.checkout(Userdocs.Repo)
    :ok = Ecto.Adapters.SQL.Sandbox.checkout(Userdocs.LocalRepo)

    unless tags[:async] do
      Ecto.Adapters.SQL.Sandbox.mode(Userdocs.Repo, {:shared, self()})
    end

    :ok
  end

end
