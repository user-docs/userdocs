defmodule UserdocsDesktopWeb.AnnotationLiveTest do
  use UserdocsDesktopWeb.ConnCase
  import Phoenix.LiveViewTest
  alias Userdocs.WebFixtures

  @receive_timeout 250

  describe "Index" do
    setup do
      {data, context} = Userdocs.ClientFixtures.local_data()
      Client.init_state()
      Client.put_in_state(:current_user, context.user)
      Client.put_in_state(:context, context.context)
      Client.put_in_state(:data, data)
      Client.connect()
      UserdocsDesktopWeb.Endpoint.subscribe("data")
      context
    end

    setup do
      on_exit(fn -> Client.disconnect() end)
    end

    test "lists all annotation", %{conn: conn, page: page} do
      {:ok, _index_live, html} = live(conn, Routes.annotation_index_path(conn, :index, page.id))

      assert html =~ "Listing Annotation"
    end

    test "saves new annotation", context do
      %{conn: conn, page: page, annotation_types: annotation_types} = context
      annotation_type = annotation_types |> Enum.find(& &1.id == "badge")
      {:ok, index_live, _html} = live(conn, Routes.annotation_index_path(conn, :index, page.id))

      assert index_live |> element("a", "New Annotation") |> render_click() =~
               "New Annotation"

      assert_patch(index_live, Routes.annotation_index_path(conn, :new, page.id))

      attrs = %{annotation_type_id: annotation_type.id, page_id: page.id}

      assert index_live
             |> form("#annotation-form", annotation: attrs)
             |> render_change() =~ "Badge"

      assert index_live
             |> form("#annotation-form", annotation: WebFixtures.annotation_attrs(:invalid_badge, page.id))
             |> render_change() =~ "is invalid"

      valid_attrs = WebFixtures.annotation_attrs(:valid_badge, page.id)

      index_live
      |> form("#annotation-form", annotation: valid_attrs)
      |> render_submit()

      assert_receive(%{event: "create", topic: "data"}, @receive_timeout)
      assert_patched(index_live, Routes.annotation_index_path(conn, :index, page.id))
      assert render(index_live) =~ "Annotation created successfully"
      assert render(index_live) =~ valid_attrs.name
    end

    test "updates annotation in listing", context do
      %{conn: conn, annotation: annotation, page: page, annotation_types: annotation_types} = context
      annotation_type = annotation_types |> Enum.find(& &1.id == "badge")
      {:ok, index_live, _html} = live(conn, Routes.annotation_index_path(conn, :index, page.id))

      open_browser(index_live, &(System.cmd("C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe", [&1])))

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

    test "deletes annotation in listing", %{conn: conn, annotation: annotation, page: page} do
      {:ok, index_live, _html} = live(conn, Routes.annotation_index_path(conn, :index, page.id))

      assert index_live |> element("#delete-annotation-" <> to_string(annotation.id)) |> render_click()
      assert_receive(%{event: "delete", topic: "data"})
      refute has_element?(index_live, "#delete-annotation-" <> to_string(annotation.id))
    end
  end
end
