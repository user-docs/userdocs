defmodule UserdocsWeb.AnnotationControllerTest do
  use UserdocsWeb.ConnCase
  alias Schemas.Annotations.Annotation
  alias Userdocs.ProjectsFixtures
  alias Userdocs.UsersFixtures
  alias Userdocs.TeamsFixtures
  alias Userdocs.WebFixtures
  @opts %{context: %{repo: Userdocs.Repo}}

  defp req_header(%{conn: conn}), do: %{conn: put_req_header(conn, "accept", "application/json")}
  defp create_password(_), do: %{password: UUID.uuid4()}
  defp create_user(%{password: password}), do: %{user: UsersFixtures.confirmed_user(password)}
  defp create_team(_), do: %{team: TeamsFixtures.team(@opts)}
  defp create_team_user(%{user: user, team: team}), do: %{team_user: TeamsFixtures.team_user(user.id, team.id, @opts)}
  defp create_strategy(_), do: %{strategy: WebFixtures.strategy(@opts)}
  defp create_project(%{team: team, strategy: strategy}), do: %{project: ProjectsFixtures.project(team.id, strategy.id, @opts)}
  defp create_page(%{project: project}), do: %{page: WebFixtures.page(project.id)}
  defp create_annotation(%{page: page}), do: %{annotation: WebFixtures.annotation(page.id, @opts)}

  setup [
    :req_header,
    :create_password,
    :create_user,
    :create_team,
    :create_team_user,
    :create_strategy,
    :create_project,
    :create_page
  ]

  describe "index" do
    test "lists all annotations", %{conn: conn} do
      conn = get(conn, Routes.api_annotation_path(conn, :index))
      assert json_response(conn, 200)["data"] == []
    end
  end

  describe "create annotation" do
    test "renders annotation when data is valid", %{conn: conn, page: page} do
      attrs = WebFixtures.annotation_attrs(:valid, page.id)
      conn = post(conn, Routes.api_annotation_path(conn, :create), annotation: attrs)
      assert %{"id" => id} = json_response(conn, 201)["data"]

      conn = get(conn, Routes.api_annotation_path(conn, :show, id))

      result = json_response(conn, 200)["data"]
      assert result["id"] == id
      assert result["color"] == attrs.color
      assert result["font_color"] == attrs.font_color
      assert result["font_size"] == attrs.font_size
      assert result["label"] == attrs.label
      assert result["name"] == attrs.name
      assert result["size"] == attrs.size
      assert result["thickness"] == attrs.thickness
      assert result["x_offset"] == attrs.x_offset
      assert result["x_orientation"] == attrs.x_orientation
      assert result["y_offset"] == attrs.y_offset
      assert result["y_orientation"] == attrs.y_orientation
    end

    test "renders errors when data is invalid", %{conn: conn} do
      attrs = WebFixtures.annotation_attrs(:invalid)
      conn = post(conn, Routes.api_annotation_path(conn, :create), annotation: attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "update annotation" do
    setup [
      :req_header,
      :create_password,
      :create_user,
      :create_team,
      :create_team_user,
      :create_strategy,
      :create_project,
      :create_page,
      :create_annotation
    ]

    test "renders annotation when data is valid", %{conn: conn, annotation: %Annotation{id: id} = annotation, page: page} do
      attrs = WebFixtures.annotation_attrs(:valid, page.id)
      conn = put(conn, Routes.api_annotation_path(conn, :update, annotation), annotation: attrs)
      assert %{"id" => ^id} = json_response(conn, 200)["data"]

      conn = get(conn, Routes.api_annotation_path(conn, :show, id))

      result = json_response(conn, 200)["data"]
      assert result["id"] == id
      assert result["color"] == attrs.color
      assert result["font_color"] == attrs.font_color
      assert result["font_size"] == attrs.font_size
      assert result["label"] == attrs.label
      assert result["name"] == attrs.name
      assert result["size"] == attrs.size
      assert result["thickness"] == attrs.thickness
      assert result["x_offset"] == attrs.x_offset
      assert result["x_orientation"] == attrs.x_orientation
      assert result["y_offset"] == attrs.y_offset
      assert result["y_orientation"] == attrs.y_orientation
    end

    test "renders errors when data is invalid", %{conn: conn, annotation: annotation} do
      attrs = WebFixtures.annotation_attrs(:invalid)
      conn = put(conn, Routes.api_annotation_path(conn, :update, annotation), annotation: attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "delete annotation" do
    setup [
      :req_header,
      :create_password,
      :create_user,
      :create_team,
      :create_team_user,
      :create_strategy,
      :create_project,
      :create_page,
      :create_annotation
    ]

    test "deletes chosen annotation", %{conn: conn, annotation: annotation} do
      conn = delete(conn, Routes.api_annotation_path(conn, :delete, annotation))
      assert response(conn, 204)

      assert_error_sent 404, fn ->
        get(conn, Routes.api_annotation_path(conn, :show, annotation))
      end
    end
  end
end
