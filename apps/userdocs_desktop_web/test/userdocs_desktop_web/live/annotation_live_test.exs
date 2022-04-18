defmodule UserdocsDesktopWeb.AnnotationLiveTest do
  use UserdocsDesktopWeb.ConnCase
  import Phoenix.LiveViewTest
  alias Userdocs.WebFixtures

  @receive_timeout 250

  describe "Index" do
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
      :create_remote_annotation,
      :create_remote_annotation_type,
      :create_remote_tokens,
      :put_access_token_in_state,
      :create_remote_user_context,
      :put_remote_context_data,
      :put_user_in_state,
      :connect_client,
      :load_client
    ]

    setup do
      on_exit(fn -> Client.disconnect() end)
    end

    test "lists all annotation", %{conn: conn, remote_page: page} do
      {:ok, _index_live, html} = live(conn, Routes.annotation_index_path(conn, :index, page.id))

      assert html =~ "Listing Annotation"
    end

    test "saves new annotation", context do
      %{conn: conn, remote_page: page, remote_annotation_type: annotation_type} = context
      {:ok, index_live, _html} = live(conn, Routes.annotation_index_path(conn, :index, page.id))

      assert index_live |> element("a", "New Annotation") |> render_click() =~
               "New Annotation"

      assert_patch(index_live, Routes.annotation_index_path(conn, :new, page.id))

      assert index_live
             |> form("#annotation-form", annotation: %{annotation_type_id: annotation_type.id})
             |> render_change() =~ "Badge"

      assert index_live
             |> form("#annotation-form", annotation: WebFixtures.annotation_attrs(:invalid_badge, page.id))
             |> render_change() =~ "is invalid"

      valid_attrs = WebFixtures.annotation_attrs(:valid_badge, page.id)

      index_live
      |> form("#annotation-form", annotation: valid_attrs)
      |> render_submit()

      assert_patch(index_live, Routes.annotation_index_path(conn, :index, page.id))
      assert_receive(%{event: "create", topic: "data"})
      assert render(index_live) =~ "Annotation created successfully"
      assert render(index_live) =~ valid_attrs.name
    end

    test "updates annotation in listing", context do
      %{conn: conn, remote_annotation: annotation, remote_page: page, remote_annotation_type: annotation_type} = context
      {:ok, index_live, _html} = live(conn, Routes.annotation_index_path(conn, :index, page.id))

      assert index_live |> element("#edit-annotation-" <> to_string(annotation.id)) |> render_click() =~
               "Edit Annotation"

      assert_patch(index_live, Routes.annotation_index_path(conn, :edit, page.id, annotation))

      index_live
      |> form("#annotation-form", annotation: %{annotation_type_id: annotation_type.id})
      |> render_change()

      assert index_live
             |> form("#annotation-form", annotation: %{font_size: "invalid"})
             |> render_change() =~ "is invalid"

      valid_attrs = WebFixtures.annotation_attrs(:valid_badge, page.id)

      index_live
      |> form("#annotation-form", annotation: valid_attrs)
      |> render_submit()

      assert_patch(index_live, Routes.annotation_index_path(conn, :index, page.id))
      assert_receive(%{event: "update", topic: "data"})
      assert render(index_live) =~ "Annotation updated successfully"
      assert render(index_live) =~ valid_attrs.name
    end

    test "deletes annotation in listing", %{conn: conn, remote_annotation: annotation, remote_page: page} do
      {:ok, index_live, _html} = live(conn, Routes.annotation_index_path(conn, :index, page.id))

      assert index_live |> element("#delete-annotation-" <> to_string(annotation.id)) |> render_click()
      :timer.sleep(@receive_timeout)
      assert_receive(%{event: "delete", topic: "data"})
      refute has_element?(index_live, "#delete-annotation-" <> to_string(annotation.id))
    end
  end
end
