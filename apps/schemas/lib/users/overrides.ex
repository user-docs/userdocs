defmodule Schemas.Users.Override do
  @moduledoc """
    This object is used to override the URL of a project, and may be expanded to override other objects later
  """
  use Schemas.Schema
  import Ecto.Changeset
  alias Schemas.Projects.Project
  alias Schemas.Users.User

  @derive {Jason.Encoder, only: [:url, :project_id]}
  embedded_schema do
    field :temp_id, :string, virtual: true
    field :url, :string
    field :delete, :boolean, virtual: true

    belongs_to :user, User
    belongs_to :project, Project
  end

  def changeset(override, attrs) do
    override
    |> cast(attrs, [:id, :temp_id, :project_id, :url, :delete])
    |> maybe_mark_for_deletion()
  end

  defp maybe_mark_for_deletion(changeset) do
    if get_change(changeset, :delete) do
      %{changeset | action: :delete}
    else
      changeset
    end
  end
end
