defmodule Userdocs.LocalOptions do
  alias Userdocs.LocalRepo

  alias Schemas.Users.LocalOption
  def create_local_options(attrs) do
    %LocalOption{}
    |> LocalOption.changeset(attrs)
    |> LocalRepo.insert()
  end

  def get_local_options() do
    LocalRepo.get!(LocalOption, 1)
  end

  def change_local_options(%LocalOption{} = local_options, attrs \\ %{}) do
    LocalOption.changeset(local_options, attrs)
  end

  def update_local_options(%LocalOption{} = local_options, attrs \\ %{}) do
    local_options
    |> LocalOption.changeset(attrs)
    |> LocalRepo.update()
  end
end
