defmodule Client.LoadersTest do
  use Client.LocalCase
  use Client.RemoteCase
  use Client.Case
  alias Client.Loaders
  alias Client.StateSupport

  defp put_remote_data(%{data: data} = state, context) do
    data =
      data
      |> Map.put(:users, [context.user])
      |> Map.put(:team_users, [context.remote_team_user])
      |> Map.put(:teams, [context.remote_team])
      |> Map.put(:projects, [context.remote_project])
      |> Map.put(:strategies, [context.remote_strategy])

    Map.put(state, :data, data)
  end

  defp build_state(context) do
    %{
      context: context.remote_context,
      current_user: context.user,
      access_token: context.access_token
    }
  end

  defp full_load_final_counts() do
    %{
      annotation_types: 0,
      annotations: 0,
      element_annotations: 0,
      elements: 0,
      pages: 1,
      processes: 1,
      projects: 1,
      screenshots: 0,
      step_instances: 0,
      step_types: 0,
      steps: 0,
      strategies: 1,
      team_users: 1,
      teams: 1,
      users: 1
    }
  end

  defp partial_load_final_counts() do
    %{
      annotation_types: 0,
      annotations: 0,
      element_annotations: 0,
      elements: 0,
      pages: 0,
      processes: 0,
      projects: 1,
      screenshots: 0,
      step_instances: 0,
      step_types: 0,
      steps: 0,
      strategies: 1,
      team_users: 1,
      teams: 1,
      users: 1
    }
  end

  def object_counts(%{data: data}),
    do: Enum.reduce(data, %{}, fn {k, v}, acc -> Map.put(acc, k, Enum.count(v)) end)

  describe "Remote Loading" do
    setup [
      :ensure_web_started,
      :create_password,
      :create_user,
      :create_remote_team,
      :create_remote_team_user,
      :create_remote_strategy,
      :create_remote_project,
      :create_remote_page,
      :create_remote_process,
      :create_remote_user_context,
      :create_remote_tokens,
      :put_access_token_in_state,
      :initialize_state
    ]

    test "loads data with empty data, and context", context do
      assert context
             |> build_state()
             |> StateSupport.initialize()
             |> Loaders.apply()
             |> object_counts() == full_load_final_counts()
    end

    test "loads data with some data, and context", context do
      assert context
             |> build_state()
             |> StateSupport.initialize()
             |> put_remote_data(context)
             |> Loaders.apply()
             |> object_counts() == full_load_final_counts()
    end

    test "loads data with no context", context do
      assert %{current_user: context.user, access_token: context.access_token}
             |> StateSupport.initialize()
             |> Loaders.apply()
             |> object_counts() == partial_load_final_counts()
    end

    #TODO: Add load user and load projects test cases
  end

  #TODO: Add a local describe
end
