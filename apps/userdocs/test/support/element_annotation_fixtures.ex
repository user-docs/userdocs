defmodule Userdocs.ElementAnnotationFixtures do
  @moduledoc false
  alias Userdocs.ElementAnnotations

  def element_annotation(element_id, annotation_id, opts) do
    {:ok, element_annotation } =
      element_annotation_attrs(:valid, element_id, annotation_id)
      |> ElementAnnotations.create_element_annotation(opts)
    element_annotation
  end

  def element_annotation_attrs(:valid, element_id, annotation_id) do
    %{
      id: Ecto.UUID.generate(),
      element_id: element_id,
      annotation_id: annotation_id,
    }
  end
end
