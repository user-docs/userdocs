Application.ensure_all_started(:userdocs)
Application.ensure_all_started(:userdocs_web)
ExUnit.start()
Ecto.Adapters.SQL.Sandbox.mode(Userdocs.Repo, :manual)
Ecto.Adapters.SQL.Sandbox.mode(Userdocs.LocalRepo, :manual)
