defmodule UserdocsDesktopWeb.StepLiveTest do
  @moduledoc false
  use UserdocsDesktopWeb.ConnCase
  import Phoenix.LiveViewTest
  alias Userdocs.TeamsFixtures
  alias Userdocs.UsersFixtures
  alias Userdocs.WebFixtures
  alias Userdocs.ProjectsFixtures
  alias Userdocs.AutomationFixtures
  alias Userdocs.JobsFixtures
  @opts %{context: %{repo: Userdocs.Repo}}
  @receive_timeout 250

  defp create_password(_), do: %{password: UUID.uuid4()}
  defp create_user(%{password: password}), do: %{user: UsersFixtures.confirmed_user(password)}
  defp create_team(_), do: %{team: TeamsFixtures.team(@opts)}
  defp create_team_user(%{user: user, team: team}), do: %{team_user: TeamsFixtures.team_user(user.id, team.id, @opts)}
  defp create_strategy(_), do: %{strategy: WebFixtures.strategy(@opts)}
  defp create_project(%{team: team, strategy: strategy}), do: %{project: ProjectsFixtures.project(team.id, strategy.id, @opts)}
  defp create_page(%{project: project}), do: %{page: WebFixtures.page(project.id, @opts)}
  defp create_process(%{project: project}), do: %{process: AutomationFixtures.process(project.id, @opts)}
  defp create_step(%{process: process, page: page}), do: %{step: AutomationFixtures.step(page.id, process.id, @opts)}
  defp create_step_types(_), do: %{step_types: AutomationFixtures.all_valid_step_types()}
  defp create_annotation(%{page: page}), do: %{annotation: WebFixtures.annotation(page.id, @opts)}
  defp create_session(%{user: user, password: password}) do
    {:ok, _} = Client.authenticate(%{"user" => %{"email" => user.email, "password" => password}})
    %{}
  end
  defp make_selections(%{user: user, team: team, project: project}) do
    {:ok, user} = Userdocs.Users.update_user_selections(user, %{selected_team_id: team.id, selected_project_id: project.id}, %{context: %{repo: Userdocs.Repo}})
    %{user: user}
  end
  defp load_client(_) do
    Client.connect()
    Client.load()
  end
  defp wait_for_change(assertion) do
    :timer.sleep(10)
    if !assertion, do: wait_for_change(assertion), else: true
  end

  describe "Index" do
    setup [
      :create_password,
      :create_user,
      :create_team,
      :create_strategy,
      :create_team_user,
      :create_project,
      :create_page,
      :create_process,
      :create_step,
      :create_step_types,
      :create_annotation,
      :make_selections,
      :create_session,
      :load_client
    ]

    setup do
      on_exit(fn -> Client.disconnect() end)
    end

    def valid_attrs(page_id, process_id, annotation_id, step_type_id) do
      %{
        page_id: page_id,
        process_id: process_id,
        annotation_id: annotation_id,
        step_type_id: step_type_id
      }
    end

    test "lists all steps", %{conn: conn, process: process} do
      {:ok, index_live, html} = live(conn, Routes.step_index_path(conn, :index, process.id))
      assert html =~ "Listing Steps"
      assert html =~ "New Step"
    end

    test "saves new step", %{conn: conn, page: page, process: process, annotation: annotation} do
      {:ok, index_live, html} = live(conn, Routes.step_index_path(conn, :index, process.id))

      assert index_live
      |> element("a", "New Step")
      |> render_click() =~ "New Step"

      assert_patch(index_live, Routes.step_index_path(conn, :new, process.id, %{params: %{page_id: page.id}}))

      assert index_live
      |> form("#step-form", step: %{step_type_id: :apply_annotation, page_id: nil})
      |> render_change() =~ "can&#39;t be blank"

      valid_attrs = valid_attrs(page.id, process.id, annotation.id, :apply_annotation)

      html =
        index_live
        |> form("#step-form", step: valid_attrs)
        |> render_submit()

      :timer.sleep(@receive_timeout)
      assert_receive(%{event: "update", topic: "data"})
      assert_patched(index_live, Routes.step_index_path(conn, :index, process.id))
      assert render(index_live) =~ "Step updated successfully"
      assert render(index_live) =~ "Apply Annotation"
    end

    test "updates process in listing", %{conn: conn, page: page, process: process, project: project, step: step, annotation: annotation} do
      {:ok, index_live, _html} = live(conn, Routes.step_index_path(conn, :index, process.id))

      assert index_live
      |> element("#edit-step-" <> step.id)
      |> render_click() =~ "Edit Step"

      assert_patch(index_live, Routes.step_index_path(conn, :edit, process.id, step.id))

      assert index_live
      |> form("#step-form", step: %{step_type_id: :apply_annotation, page_id: nil})
      |> render_change() =~ "can&#39;t be blank"

      valid_attrs = valid_attrs(page.id, process.id, annotation.id, :apply_annotation)

      html =
        index_live
        |> form("#step-form", step: valid_attrs)
        |> render_submit()

      :timer.sleep(@receive_timeout)
      assert_receive(%{event: "update", topic: "data"})
      assert_patched(index_live, Routes.step_index_path(conn, :index, process.id))
      assert render(index_live) =~ "Step updated successfully"
      assert render(index_live) =~ "Apply Annotation"
    end

    test "deletes process in listing", %{conn: conn, process: process, step: step} do
      {:ok, index_live, _html} = live(conn, Routes.step_index_path(conn, :index, process.id))

      assert index_live |> element("#delete-step-" <> step.id) |> render_click()
      refute has_element?(index_live, "#step-" <> step.id)
    end
    """
    test "index handles standard events", %{authed_conn: conn, project: project} do
      {:ok, live, _html} = live(conn, Routes.user_index_path(conn, :index))
      send(live.pid, {:broadcast, "update", %Schemas.Users.User{}})
      assert live
             |> element("#project-picker-" <> to_string(project.id))
             |> render_click() =~ project.name
    end
    """
  end
end
