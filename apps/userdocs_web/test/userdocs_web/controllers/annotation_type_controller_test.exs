defmodule UserdocsWeb.AnnotationTypeControllerTest do
  use UserdocsWeb.ConnCase

  alias Userdocs.Annotations

  @create_attrs %{
    args: [],
    name: "some name"
  }

  def fixture(:annotation_type) do
    {:ok, annotation_type} = Annotations.create_annotation_type(@create_attrs)
    annotation_type
  end

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  describe "index" do
    test "lists all annotation_types", %{conn: conn} do
      conn = get(conn, Routes.api_annotation_type_path(conn, :index))
      assert json_response(conn, 200)["data"] == []
    end
  end
end
