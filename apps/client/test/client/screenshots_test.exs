defmodule ClientTest.Screenshots do
  use Client.RemoteCase
  use Client.LocalCase
  use Client.Case
  alias Userdocs.ScreenshotFixtures

  describe "Screenshots Initialize" do
    setup [:reinitialize_state]
    test "in state properly" do
      Client.init_state()
      assert Map.has_key?(Client.data(), :screenshots)
    end
  end

  describe "Server Lists" do
    setup [:reinitialize_state]
    setup do
      %{screenshot: %Schemas.Screenshots.Screenshot{id: UUID.uuid4()}}
    end

    test "Gets Screenshot", %{screenshot: screenshot} do
      Client.put_in_state(:data, %{screenshots: [screenshot]})
      result = Client.get_screenshot!(screenshot.id)
      assert result == screenshot
    end

    test "Lists Screenshots", %{screenshot: screenshot} do
      Client.put_in_state(:data, %{screenshots: [screenshot]})
      [result] = Client.list_screenshots()
      assert result.id == screenshot.id
    end
  end

  describe "Screenshot Server CUD"  do
    setup [
      :reinitialize_state,
      :ensure_web_started,
      :create_password,
      :create_user,
      :create_remote_team,
      :create_remote_team_user,
      :create_remote_strategy,
      :create_remote_project,
      :create_remote_page,
      :create_remote_screenshot,
      :create_remote_tokens,
      :put_access_token_in_state,
      :create_remote_user_context,
      :put_remote_context_data,
      :put_user_in_state
    ]

    test "Loads", %{user: user, remote_screenshot: screenshot} do
      Client.load_screenshots(%{filters: %{user_id: user.id}})
      %{screenshots: [result]} = Client.data()
      assert result.id == screenshot.id
    end

    test "creates", %{remote_page: page, remote_project: project} do
      attrs = ScreenshotFixtures.screenshot_attrs(:valid, %{page_id: page.id, project_id: project.id})
      assert {:ok, %{id: screenshot_id}} = Client.create_screenshot(attrs)
      assert %{id: ^screenshot_id} = Userdocs.Screenshots.get_screenshot!(screenshot_id, @remote_opts)
    end

    test "updates", %{remote_page: page, remote_project: project, remote_screenshot: screenshot} do
      %{name: name} = attrs = ScreenshotFixtures.screenshot_attrs(:valid, %{page_id: page.id, project_id: project.id})
      assert {:ok, screenshot} = Client.update_screenshot(screenshot, attrs)
      assert %{name: ^name} = Userdocs.Screenshots.get_screenshot!(screenshot.id, @remote_opts)
    end

    test "deletes", %{remote_screenshot: screenshot} do
      Client.delete_screenshot(screenshot)
      assert_raise Ecto.NoResultsError, fn -> Userdocs.Screenshots.get_screenshot!(screenshot.id, @remote_opts) end
    end
  end

  describe "Local" do
    setup [
      :reinitialize_state,
      :create_password,
      :create_user,
      :create_local_team,
      :create_local_strategy,
      :create_local_project,
      :create_local_page,
      :create_local_screenshot,
      :create_local_user_context,
      :put_local_context_data
    ]

    test "creates", %{local_page: page, local_project: project} do
      attrs = ScreenshotFixtures.screenshot_attrs(:valid, %{page_id: page.id, project_id: project.id})
      assert {:ok, %{id: screenshot_id}} = Client.create_screenshot(attrs)
      assert %{id: ^screenshot_id} = Userdocs.Screenshots.get_screenshot!(screenshot_id, @local_opts)
    end

    test "updates", %{local_page: page, local_project: project, local_screenshot: screenshot} do
      %{name: name} = attrs = ScreenshotFixtures.screenshot_attrs(:valid, %{page_id: page.id, project_id: project.id})
      assert {:ok, screenshot} = Client.update_screenshot(screenshot, attrs)
      assert %{name: ^name} = Userdocs.Screenshots.get_screenshot!(screenshot.id, @local_opts)
    end

    test "deletes", %{local_screenshot: screenshot} do
      Client.delete_screenshot(screenshot)
      assert_raise Ecto.NoResultsError, fn -> Userdocs.Screenshots.get_screenshot!(screenshot.id, @local_opts) end
    end

    test "load_screenshots/0 loads screenshots", %{local_screenshot: screenshot} do
      Client.load_screenshots()
      %{screenshots: [result]} = Client.data()
      assert result.id == screenshot.id
    end
  end
end
