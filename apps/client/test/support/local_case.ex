defmodule Client.LocalCase do
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
      alias Userdocs.PageFixtures
      alias Userdocs.AutomationFixtures

      @local_opts %{context: %{repo: Userdocs.LocalRepo}}

      defp create_local_strategy(_), do: %{local_strategy: WebFixtures.strategy(@local_opts)}
      defp create_local_team(_), do: %{local_team: TeamsFixtures.team(%{type: :personal}, @local_opts)}

      defp create_local_project(%{local_team: team, local_strategy: strategy}),
        do: %{local_project: ProjectsFixtures.project(team.id, strategy.id, @local_opts)}

      defp create_remote_user_context(%{user: user, remote_team: team, remote_project: project}),
        do: %{remote_context: ContextsFixtures.context(%{user_id: user.id, team_id: team.id, project_id: project.id}, @local_opts)}

      defp create_local_user_context(%{user: user, local_team: team, local_project: project}),
        do: %{local_context: ContextsFixtures.context(%{user_id: user.id, team_id: team.id, project_id: project.id}, @local_opts)}

      defp create_local_tokens(%{access_token: at, renewal_token: rt, user: user}) do
        Tokens.create_all(at, rt, user.id, @local_opts)
        :ok
      end

      defp create_local_page(%{local_project: project}),
        do: %{local_page: PageFixtures.page(%{project_id: project.id}, @local_opts)}


      defp create_local_process(%{local_project: project}),
        do: %{local_process: AutomationFixtures.process(project.id, @local_opts)}

      defp put_remote_context_data(%{user: user, remote_team: team, remote_project: project, remote_context: context}) do
        data = Client.state() |> Map.get(:data) |> Map.put(:teams, [team]) |> Map.put(:projects, [project])
        Client.put_in_state(:data, data)
        Client.put_in_state(:context, context)
      end

      defp put_local_context_data(%{user: user, local_team: team, local_project: project, local_context: context}) do
        data = Client.state() |> Map.get(:data) |> Map.put(:teams, [team]) |> Map.put(:projects, [project])
        Client.put_in_state(:data, data)
        Client.put_in_state(:context, context)
      end
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
