defmodule Userdocs.WebFixtures do
  @moduledoc """
  This module defines test helpers for creating
  entities via the `Userdocs.Auth` context.
  """

  alias Schemas.Annotations.AnnotationType
  alias Schemas.Annotations.Annotation
  alias Schemas.Elements.Element
  alias Schemas.Pages.Page
  alias Schemas.Strategies.Strategy

  alias Userdocs.Projects
  alias Userdocs.Annotations
  alias Userdocs.Elements
  alias Userdocs.Pages
  alias Userdocs.Strategies

  @opts %{context: %{repo: Userdocs.Repo}}

  def page(project_id \\ nil) do
    {:ok, object } =
      page_attrs(:valid, project_id)
      |> Pages.create_page(@opts)
    object
  end

  def element(page_id, strategy_id, opts) when is_integer(page_id) and is_integer(strategy_id) do
    {:ok, object } =
      element_attrs(:valid, page_id, strategy_id)
      |> Elements.create_element(opts)
    object
  end

  def element(page, strategy) do
    element(page.id, strategy.id)
  end

  def strategy(opts) do
    {:ok, strategy } =
      strategy_attrs(:valid)
      |> Strategies.create_strategy(opts)
      strategy
  end

  def annotation(page_id, opts) when is_integer(page_id) do
    {:ok, annotation } =
      annotation_attrs(:valid)
      |> Map.put(:page_id, page_id)
      |> Annotations.create_annotation(opts)
    annotation
  end

  def annotation(%Page{} = page) do
    annotation(page.id)
  end

  def annotation_type(name \\ :badge) do
    {:ok, annotation } =
      annotation_type_attrs(:valid, name)
      |> Annotations.create_annotation_type()
    annotation
  end

  def all_valid_annotation_types() do
    Userdocs.WebFixtures.AnnotationTypes.data()
    |> Enum.map(
      fn(st) ->
        { :ok, annotation_type } = Annotations.create_annotation_type(st)
        annotation_type
      end
    )
  end

  def page_attrs(:valid, project_id \\ nil) do
    %{
      url: "http://www.user-docs.com",
      name: UUID.uuid4(),
      project_id: project_id
    }
  end

  def page_attrs(:invalid, project_id) do
    %{
      url: nil,
      name: UUID.uuid4(),
      project_id: nil
    }
  end

  def element_attrs(:valid, page_id, strategy_id) do
    %{
      name: UUID.uuid4(),
      selector: UUID.uuid4(),
      page_id: page_id,
      strategy_id: strategy_id
    }
  end

  def element_attrs(:invalid, page_id, strategy_id) do
    %{
      selector: nil,
      page_id: page_id,
      strategy_id: strategy_id
    }
  end

  def strategy_attrs(:valid) do
    %{
      name: UUID.uuid4()
    }
  end

  def strategy_attrs(:css) do
    %{
      name: "css"
    }
  end

  def annotation_attrs(:invalid) do
    %{
      page_id: nil
    }
  end

  def annotation_attrs(:valid) do
    %{
      label: UUID.uuid4(),
      name: UUID.uuid4()
    }
  end

  def annotation_attrs(:valid, page_id) do
    %{
      page_id: page_id,
      label: UUID.uuid4(),
      name: UUID.uuid4()
    }
  end
  def annotation_type_attrs(:valid, :outline) do
    %{
      args: ["color", "thickness"],
      name: "Outline"
    }
  end
  def annotation_type_attrs(:valid, :badge) do
    %{
      args: ["x_orientation", "y_orientation", "size", "label", "color", "x_offset", "y_offset", "font_size"],
      name: "Badge"
    }
  end

end
