defmodule UserdocsWeb.API.AnnotationController do
  use UserdocsWeb, :controller
  alias Schemas.Annotations.Annotation
  alias Userdocs.Annotations
  alias UserdocsWeb.API.Helpers
  action_fallback UserdocsWeb.FallbackController
  @opts %{broadcast: true, context: %{repo: Userdocs.Repo}}

  def index(conn, params) do
    opts = Helpers.parse_params(params, @opts)
    annotations = Annotations.list_annotations(opts)
    render(conn, "index.json", annotations: annotations)
  end

  def create(conn, %{"annotation" => annotation_params}) do
    with {:ok, %Annotation{} = annotation} <- Annotations.create_annotation(annotation_params, @opts) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", Routes.api_annotation_path(conn, :show, annotation))
      |> render("show.json", annotation: annotation)
    end
  end

  def show(conn, %{"id" => id}) do
    annotation = Annotations.get_annotation!(id, @opts)
    render(conn, "show.json", annotation: annotation)
  end

  def update(conn, %{"id" => id, "annotation" => annotation_params}) do
    opts = Map.put(@opts, :preloads, [element_annotations: true])
    annotation = Annotations.get_annotation!(id, opts)

    with {:ok, %Annotation{} = annotation} <- Annotations.update_annotation(annotation, annotation_params, @opts) do
      render(conn, "show.json", annotation: annotation)
    end
  end

  def delete(conn, %{"id" => id}) do
    annotation = Annotations.get_annotation!(id, @opts)

    with {:ok, %Annotation{}} <- Annotations.delete_annotation(annotation, @opts) do
      send_resp(conn, :no_content, "")
    end
  end
end
