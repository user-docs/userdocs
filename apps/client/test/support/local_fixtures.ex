defmodule Client.LocalFixtures do
  def put_remote_context_data(%{remote_team: team, remote_project: project, remote_context: context}) do
    data = Client.state() |> Map.get(:data) |> Map.put(:teams, [team]) |> Map.put(:projects, [project])
    Client.put_in_state(:data, data)
    Client.put_in_state(:context, context)
  end

  def put_remote_context_data(%{remote_team: team, remote_context: context}) do
    data = Client.state() |> Map.get(:data) |> Map.put(:teams, [team])
    Client.put_in_state(:data, data)
    Client.put_in_state(:context, context)
  end

  def put_local_context_data(%{local_team: team, local_project: project, local_context: context}) do
    data = Client.state() |> Map.get(:data) |> Map.put(:teams, [team]) |> Map.put(:projects, [project])
    Client.put_in_state(:data, data)
    Client.put_in_state(:context, context)
  end

  def put_local_context_data(%{local_team: team, local_context: context}) do
    data = Client.state() |> Map.get(:data) |> Map.put(:teams, [team])
    Client.put_in_state(:data, data)
    Client.put_in_state(:context, context)
  end
end
