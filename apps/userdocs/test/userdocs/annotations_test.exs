defmodule Userdocs.AnnotationsTest do
  use Userdocs.DataCase

  alias Schemas.Annotations.Annotation
  alias Userdocs.Annotations
  alias Userdocs.UsersFixtures
  alias Userdocs.TeamsFixtures
  alias Userdocs.ProjectsFixtures
  alias Userdocs.WebFixtures
  @opts %{context: %{repo: Userdocs.Repo}}

  defp create_password(_), do: %{password: UUID.uuid4()}
  defp create_user(%{password: password}), do: %{user: UsersFixtures.confirmed_user(password)}
  defp create_team(_), do: %{team: TeamsFixtures.team(@opts)}
  defp create_team_user(%{user: user, team: team}), do: %{team_user: TeamsFixtures.team_user(user.id, team.id, @opts)}
  defp create_strategy(_), do: %{strategy: WebFixtures.strategy(@opts)}
  defp create_project(%{team: team, strategy: strategy}), do: %{project: ProjectsFixtures.project(team.id, strategy.id, @opts)}
  defp create_page(%{project: project}), do: %{page: WebFixtures.page(project.id)}
  defp create_element(%{page: page, strategy: strategy}), do: %{element: WebFixtures.element(page.id, strategy.id, @opts)}

  describe "annotations" do
    setup [
      :create_password,
      :create_user,
      :create_strategy,
      :create_team,
      :create_team_user,
      :create_project,
      :create_page,
      :create_element
    ]

    test "list_annotations/0 returns all annotations", %{page: page} do
      annotation = WebFixtures.annotation(page.id, @opts)
      assert Annotations.list_annotations(@opts) == [annotation]
    end

    test "get_annotation!/1 returns the annotation with given id", %{page: page} do
      annotation = WebFixtures.annotation(page.id, @opts)
      assert Annotations.get_annotation!(annotation.id, @opts) == annotation
    end

    test "create_annotation/1 with valid data creates a annotation", %{page: page} do
      attrs = WebFixtures.annotation_attrs(:valid, page.id)
      assert {:ok, %Annotation{} = annotation} = Annotations.create_annotation(attrs, @opts)
      assert annotation.label == attrs.label
      assert annotation.name == attrs.name
    end

    test "create_annotation/1 with invalid data returns error changeset" do
      attrs = WebFixtures.annotation_attrs(:invalid)
     {:error, %Ecto.Changeset{}} = Annotations.create_annotation(attrs, @opts)
    end

    test "update_annotation/2 with valid data updates the annotation", %{page: page} do
      annotation = WebFixtures.annotation(page.id, @opts)
      attrs = WebFixtures.annotation_attrs(:valid, page.id)
      assert {:ok, %Annotation{} = annotation} = Annotations.update_annotation(annotation, attrs, @opts)

      assert annotation.label == attrs.label
      assert annotation.name == attrs.name
    end

    test "update_annotation/2 with invalid data returns error changeset", %{page: page} do
      annotation = WebFixtures.annotation(page.id, @opts)
      attrs = WebFixtures.annotation_attrs(:invalid)
      assert {:error, %Ecto.Changeset{}} = Annotations.update_annotation(annotation, attrs, @opts)
      assert annotation == Annotations.get_annotation!(annotation.id, @opts)
    end

    test "delete_annotation/1 deletes the annotation", %{page: page} do
      annotation = WebFixtures.annotation(page.id, @opts)
      assert {:ok, %Annotation{}} = Annotations.delete_annotation(annotation, @opts)
      assert_raise Ecto.NoResultsError, fn -> Annotations.get_annotation!(annotation.id, @opts) end
    end

    test "change_annotation/1 returns a annotation changeset", %{page: page} do
      annotation = WebFixtures.annotation(page.id, @opts)
      assert %Ecto.Changeset{} = Annotations.change_annotation(annotation)
    end
    """
    test "broadcast_children", %{page: page, element: element} do
      attrs = %{ "color" => "", "element_annotations" => %{ "0" => %{ "annotation_id" => "", "element_id" => to_string(element.id), "temp_id" => "9ccfe571-99a3-41ea-869e-0b69cba101c0" } }, "font_size" => "", "label" => "1", "page_id" => to_string(page.id), "size" => "", "x_offset" => "", "x_orientation" => "", "y_offset" => "", "y_orientation" => "" }
      opts = %{broadcast: true, context: %{repo: Userdocs.Repo}}
      changeset = Annotations.change_annotation(%Schemas.Annotations.Annotation{}, attrs)
      {:ok, annotation} = Userdocs.RepoHandler.insert(changeset, opts)
      Annotations.maybe_broadcast_children(annotation, changeset, "team:1", true)
    end
    """
  end
end
