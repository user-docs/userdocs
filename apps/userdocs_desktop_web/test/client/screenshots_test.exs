defmodule ClientTest.Screenshots do
  use UserdocsDesktopWeb.ConnCase
  use UserdocsDesktopWeb.ChannelCase
  alias Userdocs.ProjectsFixtures
  alias Userdocs.UsersFixtures
  alias Userdocs.TeamsFixtures
  alias Userdocs.WebFixtures
  alias Userdocs.AutomationFixtures
  alias Userdocs.ScreenshotFixtures
  alias Schemas.Screenshots.Screenshot

  @remote_opts %{context: %{repo: Userdocs.Repo}}

  defp create_password(_), do: %{password: UUID.uuid4()}
  defp create_user(%{password: password}), do: %{user: UsersFixtures.confirmed_user(password)}
  defp create_team(_), do: %{team: TeamsFixtures.team(@remote_opts)}
  defp create_team_user(%{user: user, team: team}), do: %{team_user: TeamsFixtures.team_user(user.id, team.id, @remote_opts)}
  defp create_strategy(_), do: %{strategy: WebFixtures.strategy(@remote_opts)}
  defp create_project(%{team: team, strategy: strategy}), do: %{project: ProjectsFixtures.project(team.id, strategy.id, @remote_opts)}
  defp create_screenshot(%{project: project}), do: %{screenshot: ScreenshotFixtures.screenshot(%{project_id: project.id}, @remote_opts)}
  defp make_selections(%{user: user, team: team, project: project}) do
    {:ok, user} = Userdocs.Users.update_user_selections(user, %{selected_team_id: team.id, selected_project_id: project.id}, %{context: %{repo: Userdocs.Repo}})
    %{user: user}
  end
  defp create_session(%{user: user, password: password}) do
    {:ok, _user} = Client.authenticate(%{"user" => %{"email" => user.email, "password" => password}})
    %{}
  end
  defp local_configs(_) do
    Userdocs.LocalOptions.create_local_options(%{
      magick_path: "C:\\Users\\johns10\\userdocs\\image_magick\\magick.exe",
      image_path: "C:\\Users\\johns10\\userdocs\\images"
    })
    %{}
  end
  defp init_state(_) do
    Client.init_state()
    %{}
  end

  describe "Screenshots" do
    setup [
      :create_password,
      :create_user,
      :create_team,
      :create_team_user,
      :create_strategy,
      :create_project,
      :create_screenshot,
      :make_selections,
      :create_session,
      :local_configs,
      :init_state
    ]

    setup do
      on_exit(fn -> Client.destroy_state() end)
    end

    test "Steps Initialize properly" do
      assert Map.has_key?(Client.data(), :screenshots)
    end

    test "Loads Screenshots", %{project: project, screenshot: screenshot} do
      Client.load_screenshots(%{filters: %{project_id: project.id}})
      %{screenshots: [result]} = Client.data()
      assert %Screenshot{} = result
      assert result.id == screenshot.id
    end

    test "Lists Screenshots", %{project: project, screenshot: screenshot} do
      Client.load_screenshots(%{filters: %{project_id: project.id}})
      [result] = Client.list_screenshots([])
      assert %Screenshot{} = result
      assert result.id == screenshot.id
    end

    test "Screenshot CUD", %{user: user, project: project, screenshot: screenshot} do
      Client.connect()
      UserdocsDesktopWeb.Endpoint.subscribe("data")
      Client.load_screenshots(%{filters: %{project_id: project.id}})

      new_id = Ecto.UUID.generate()
      ScreenshotFixtures.screenshot_attrs(:valid_string_keys, %{"project_id" => project.id, "id" => new_id})
      |> Client.create_screenshot()
      assert_broadcast("create", %{})

      test = ScreenshotFixtures.screenshot_attrs(:valid_string_keys, %{"project_id" => project.id, "base64" => "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAMSURBVBhXY/j//z8ABf4C/qc1gYQAAAAASUVORK5CYII="})
      Client.update_screenshot(screenshot, test)
      assert_broadcast("update", %{})

      Client.delete_screenshot(screenshot.id, %{})
      assert_broadcast("delete", %{})

      [result] = Userdocs.Screenshots.list_screenshots(@remote_opts)
      assert result.id == new_id
      Client.disconnect()
    end
  end
end
