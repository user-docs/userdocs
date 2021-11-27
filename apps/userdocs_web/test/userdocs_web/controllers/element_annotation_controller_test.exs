defmodule UserdocsWeb.ElementAnnotationControllerTest do
  use UserdocsWeb.ConnCase

  alias Userdocs.ElementAnnotations
  alias Userdocs.ElementAnnotations.ElementAnnotation

  @create_attrs %{
    id: 42
  }
  @update_attrs %{
    id: 43
  }
  @invalid_attrs %{id: nil}

  def fixture(:element_annotation) do
    {:ok, element_annotation} = ElementAnnotations.create_element_annotation(@create_attrs)
    element_annotation
  end

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  describe "index" do
    test "lists all element_annotations", %{conn: conn} do
      conn = get(conn, Routes.api_element_annotation_path(conn, :index))
      assert json_response(conn, 200)["data"] == []
    end
  end
  """
  describe "create element_annotation" do
    test "renders element_annotation when data is valid", %{conn: conn} do
      conn = post(conn, Routes.api_element_annotation_path(conn, :create), element_annotation: @create_attrs)
      assert %{"id" => id} = json_response(conn, 201)["data"]

      conn = get(conn, Routes.api_element_annotation_path(conn, :show, id))

      assert %{
               "id" => id
             } = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn} do
      conn = post(conn, Routes.api_element_annotation_path(conn, :create), element_annotation: @invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "update element_annotation" do
    setup [:create_element_annotation]

    test "renders element_annotation when data is valid", %{conn: conn, element_annotation: %ElementAnnotation{id: id} = element_annotation} do
      conn = put(conn, Routes.api_element_annotation_path(conn, :update, element_annotation), element_annotation: @update_attrs)
      assert %{"id" => ^id} = json_response(conn, 200)["data"]

      conn = get(conn, Routes.api_element_annotation_path(conn, :show, id))

      assert %{
               "id" => id
             } = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn, element_annotation: element_annotation} do
      conn = put(conn, Routes.api_element_annotation_path(conn, :update, element_annotation), element_annotation: @invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "delete element_annotation" do
    setup [:create_element_annotation]

    test "deletes chosen element_annotation", %{conn: conn, element_annotation: element_annotation} do
      conn = delete(conn, Routes.api_element_annotation_path(conn, :delete, element_annotation))
      assert response(conn, 204)

      assert_error_sent 404, fn ->
        get(conn, Routes.api_element_annotation_path(conn, :show, element_annotation))
      end
    end
  end

  defp create_element_annotation(_) do
    element_annotation = fixture(:element_annotation)
    %{element_annotation: element_annotation}
  end
  """
end
