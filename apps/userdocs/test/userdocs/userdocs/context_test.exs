defmodule Userdocs.ContextsTest do
  use Userdocs.DataCase
  alias Schemas.Users.Context
	alias Userdocs.Contexts
  alias Userdocs.UsersFixtures
  alias Userdocs.ProjectsFixtures
  alias Userdocs.TeamsFixtures
  alias Userdocs.WebFixtures

  @opts %{context: %{repo: Userdocs.Repo}}

  defp create_password(_), do: %{password: UUID.uuid4()}
  defp create_user(%{password: password}), do: %{user: UsersFixtures.confirmed_user(password)}
  defp create_team(_), do: %{team: TeamsFixtures.team(@opts)}
  defp create_team_user(%{user: user, team: team}), do: %{team_user: TeamsFixtures.team_user(user.id, team.id, @opts)}
  defp create_strategy(_), do: %{strategy: WebFixtures.strategy(@opts)}
  defp create_project(%{team: team, strategy: strategy}), do: %{project: ProjectsFixtures.project(team.id, strategy.id, @opts)}
  defp subscribe(%{user: user}), do: Phoenix.PubSub.subscribe(Userdocs.PubSub, "user:" <> user.id)

  defp context(attrs) do
    {:ok, context} = Contexts.create_context(attrs, @opts)
    context
  end

  defp valid_attrs(%{user: user, team: team, project: project}),
    do: %{user_id: user.id, team_id: team.id, project_id: project.id}
  defp invalid_attrs(), do: %{user_id: "", team_id: "", project_id: ""}

  describe "Contexts" do
    setup [
      :create_password,
      :create_user,
      :create_strategy,
      :create_team,
      :create_team_user,
      :create_project,
      :subscribe
    ]

    test "list_contexts/0 returns all contexts", context do
      context = context(valid_attrs(context))
      assert Contexts.list_contexts(@opts) == [context]
    end

    test "get_context!/1 returns the context with given id", context do
      context = context(valid_attrs(context))
      assert Contexts.get_context!(context.user_id, @opts) == context
    end

    test "create_context/1 with valid data creates a context", context do
      attrs = valid_attrs(context)
      assert {:ok, %Context{} = context} = Contexts.create_context(attrs, @opts)
      assert_receive %{event: "create"}
      assert context.team_id == attrs.team_id
    end

    test "create_context/1 with invalid data returns error changeset" do
      attrs = invalid_attrs()
      assert {:error, %Ecto.Changeset{}} = Contexts.create_context(attrs, @opts)
    end

    test "update_context/2 with valid data updates the context", context do
      attrs = valid_attrs(context)
      context = context(valid_attrs(context))
      assert {:ok, %Context{} = context} = Contexts.update_context(context, attrs, @opts)
      assert context.user_id == attrs.user_id
    end

    test "update_context/2 with invalid data returns error changeset", context do
      context = context(valid_attrs(context))
      attrs = invalid_attrs()
      assert {:error, %Ecto.Changeset{}} = Contexts.update_context(context, attrs, @opts)
      assert context == Contexts.get_context!(context.user_id, @opts)
    end

    test "delete_context/1 deletes the context", context do
      context = context(valid_attrs(context))
      assert {:ok, %Context{}} = Contexts.delete_context(context, @opts)
      assert_raise Ecto.NoResultsError, fn -> Contexts.get_context!(context.user_id, @opts) end
    end
  end
end
