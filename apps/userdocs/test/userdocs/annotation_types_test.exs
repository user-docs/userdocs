defmodule Userdocs.AnnotationTypesTest do
  use Userdocs.DataCase

  alias Userdocs.AnnotationTypes

  describe "annotation_types" do
    alias Schemas.Annotations.AnnotationType

    @valid_attrs %{name: "some name"}
    @update_attrs %{name: "some updated name"}
    @invalid_attrs %{name: nil}

    def annotation_type_fixture(attrs \\ %{}) do
      {:ok, annotation_type} =
        attrs
        |> Enum.into(@valid_attrs)
        |> AnnotationTypes.create_annotation_type()

      annotation_type
    end

    test "list_annotation_types/0 returns all annotation_types" do
      annotation_type = annotation_type_fixture()
      assert AnnotationTypes.list_annotation_types() == [annotation_type]
    end

    test "get_annotation_type!/1 returns the annotation_type with given id" do
      annotation_type = annotation_type_fixture()
      assert AnnotationTypes.get_annotation_type!(annotation_type.id) == annotation_type
    end

    test "create_annotation_type/1 with valid data creates a annotation_type" do
      assert {:ok, %AnnotationType{} = annotation_type} = AnnotationTypes.create_annotation_type(@valid_attrs)
      assert annotation_type.name == "some name"
    end

    test "create_annotation_type/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = AnnotationTypes.create_annotation_type(@invalid_attrs)
    end

    test "update_annotation_type/2 with valid data updates the annotation_type" do
      annotation_type = annotation_type_fixture()
      assert {:ok, %AnnotationType{} = annotation_type} = AnnotationTypes.update_annotation_type(annotation_type, @update_attrs)
      assert annotation_type.name == "some updated name"
    end

    test "update_annotation_type/2 with invalid data returns error changeset" do
      annotation_type = annotation_type_fixture()
      assert {:error, %Ecto.Changeset{}} = AnnotationTypes.update_annotation_type(annotation_type, @invalid_attrs)
      assert annotation_type == AnnotationTypes.get_annotation_type!(annotation_type.id)
    end

    test "delete_annotation_type/1 deletes the annotation_type" do
      annotation_type = annotation_type_fixture()
      assert {:ok, %AnnotationType{}} = AnnotationTypes.delete_annotation_type(annotation_type)
      assert_raise Ecto.NoResultsError, fn -> AnnotationTypes.get_annotation_type!(annotation_type.id) end
    end

    test "change_annotation_type/1 returns a annotation_type changeset" do
      annotation_type = annotation_type_fixture()
      assert %Ecto.Changeset{} = AnnotationTypes.change_annotation_type(annotation_type)
    end
  end
end
