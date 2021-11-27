defmodule Userdocs.TeamsFixtures do
  alias Userdocs.Teams
  alias Userdocs.TeamUsers

  def team_attrs(:valid) do
    %{
      name: UUID.uuid4(),
      aws_bucket: "userdocs-test",
      aws_access_key_id: "AKIAT5VKLWBUOAYXO656",
      aws_secret_access_key: "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",
      aws_region: "us-east-2",
      css: "{test: value}"
    }
  end
  def team_attrs(:invalid) do
    %{
      name: nil,
      aws_bucket: "userdocs-test",
      aws_access_key_id: "AKIAT5VKLWBUOAYXO656",
      aws_secret_access_key: "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",
      aws_region: "us-east-2"
    }
  end

  def team(opts) do
    {:ok, team} =
      team_attrs(:valid)
      |> Teams.create_team(opts)
    team
  end

  def team_user(user_id, team_id, opts) do
    {:ok, team_user} =
      team_user_attrs(:valid, user_id, team_id)
      |> TeamUsers.create_team_user(opts)
      team_user
  end

  def team_user_attrs(:valid, user_id, team_id) do
    %{
      team_id: team_id,
      user_id: user_id
    }
  end

end
