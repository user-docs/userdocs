defmodule UserdocsWeb.StepTypesControllerTest do
  use UserdocsWeb.ConnCase
  alias Userdocs.StepTypes

  @create_attrs %{
    args: [],
    name: "some name"
  }

  def fixture(:step_types) do
    {:ok, step_types} = StepTypes.create_step_type(@create_attrs)
    step_types
  end

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  describe "index" do
    test "lists all step_types", %{conn: conn} do
      conn = get(conn, Routes.api_step_types_path(conn, :index))
      assert json_response(conn, 200)["data"] == []
    end
  end
end
