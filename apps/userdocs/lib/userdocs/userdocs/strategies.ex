defmodule Userdocs.Strategies do
  @moduledoc """
  The Strategies context.
  """

  import Ecto.Query, warn: false
  alias Schemas.Strategies.Strategy
  alias Userdocs.Repo


  @doc "Returns the list of strategies."
  def list_strategies do
    Repo.all(Strategy)
  end

  def css_strategy do
    list_strategies()
    |> Enum.filter(fn(s) -> s.name == "css" end)
    |> Enum.at(0)
  end

  def create_strategy(attrs \\ %{}) do
    %Strategy{}
    |> Strategy.changeset(attrs)
    |> Repo.insert()
  end

  def create_strategy_struct(attrs \\ %{}) do
    %Strategy{}
    |> Strategy.api_changeset(attrs)
    |> Ecto.Changeset.apply_action(:insert)
  end
end
