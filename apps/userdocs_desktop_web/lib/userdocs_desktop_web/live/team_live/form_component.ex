defmodule UserdocsDesktopWeb.TeamLive.FormComponent do
  use UserdocsDesktopWeb, :live_component
  alias Userdocs.Teams

  def opts(token), do: %{access_token: token, context: %{repo: Client}}

  @aws_region_select_options [
    "US East (Ohio)": "us-east-2",
    "US East (N. Virginia)": "us-east-1",
    "US West (N. California)": "us-west-1",
    "US West (Oregon)": "us-west-2",
    "Africa (Cape Town)": "af-south-1",
    "Asia Pacific (Hong Kong)": "ap-east-1",
    "Asia Pacific (Mumbai)": "ap-south-1",
    "Asia Pacific (Osaka)": "ap-northeast-3",
    "Asia Pacific (Seoul)": "ap-northeast-2",
    "Asia Pacific (Singapore)": "ap-southeast-1",
    "Asia Pacific (Sydney)": "ap-southeast-2",
    "Asia Pacific (Tokyo)": "ap-northeast-1",
    "Canada (Central)": "ca-central-1",
    "China (Beijing)": "cn-north-1",
    "China (Ningxia)": "cn-northwest-1",
    "Europe (Frankfurt)": "eu-central-1",
    "Europe (Ireland)": "eu-west-1",
    "Europe (London)": "eu-west-2",
    "Europe (Milan)": "eu-south-1",
    "Europe (Paris)": "eu-west-3",
    "Europe (Stockholm)": "eu-north-1",
    "Middle East (Bahrain)": "me-south-1",
    "South America (São Paulo)": "sa-east-1",
    "AWS GovCloud (US-East)": "us-gov-east-1",
    "AWS GovCloud (US-West)": "us-gov-west-1"
  ]


  @impl true
  def update(%{team: team} = assigns, socket) do
    changeset = Teams.change_team(team)

    {
      :ok,
      socket
      |> assign(assigns)
      |> assign(:aws_region_select_options, @aws_region_select_options)
      |> assign(:changeset, changeset)
    }
  end

  @impl true
  def handle_event("validate", %{"team" => team_params}, socket) do
    changeset =
      socket.assigns.team
      |> Teams.change_team(team_params)
      |> Map.put(:action, :validate)

    {:noreply, assign(socket, :changeset, changeset)}
  end

  def handle_event("save", %{"team" => team_params}, socket) do
    save_team(socket, socket.assigns.action, team_params)
  end

  defp save_team(socket, :edit, team_params) do
    case Teams.update_team(socket.assigns.team, team_params, opts(socket.assigns.access_token)) do
      {:ok, _team} ->
        {
          :noreply,
          socket
          |> put_flash(:info, "Team updated successfully")
          |> push_redirect(to: socket.assigns.return_to)
        }

      {:error, %Ecto.Changeset{} = changeset} ->
        {:noreply, assign(socket, :changeset, changeset)}
    end
  end

  defp save_team(socket, :new, team_params) do
    params = Map.put(team_params, "team_users", [%{"user_id" => Integer.to_string(socket.assigns.current_user.id)}])
    case Teams.create_team(params, opts(socket.assigns.access_token)) do
      {:ok, _team} ->
        {
          :noreply,
          socket
          |> put_flash(:info, "Team created successfully")
          |> push_redirect(to: socket.assigns.return_to)
        }

      {:error, %Ecto.Changeset{} = changeset} ->
        {:noreply, assign(socket, changeset: changeset)}
    end
  end
end
