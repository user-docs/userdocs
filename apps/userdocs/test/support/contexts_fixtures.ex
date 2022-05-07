defmodule Userdocs.ContextsFixtures do
  alias Userdocs.Contexts

  def context(attrs, opts) do
    {:ok, context} =
      context_attrs(attrs)
      |> Contexts.create_context(opts)
    context
  end

  def context_struct(attrs) do
    {:ok, context} =
      context_attrs(attrs)
      |> Contexts.create_context_struct()
    context
  end

  def context_attrs(attrs) do
    %{
      team_id: UUID.uuid4(),
      user_id: UUID.uuid4(),
      project_id: UUID.uuid4()
    }
    |> Map.merge(attrs)
  end
end
