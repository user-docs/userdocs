defmodule Client.Screenshots.Integrations.LocalFile do
  alias Local.Paths
  alias Schemas.Screenshots.Screenshot
  alias Client.Screenshots.Repo.LocalFile
  alias Client.Screenshots.FileSupport, as: Support

  require Logger

  def create_screenshot(%Screenshot{id: id} = screenshot, opts \\ %{}) do
    images_path = Map.get(opts, :images_path, Paths.default_images_path())
    image_path = image_path(screenshot, images_path)

    with base64 <- Map.get(screenshot, :base64, Support.encoded_placeholder_image()),
         binary <- Base.decode64!(base64),
         :ok <- File.write(image_path, binary) do
      {:ok, %{id: id, image: image_path}}
    end
  end

  def update_screenshot(_screenshot, _attrs, _opts \\ %{}), do: {:ok, nil}

  def delete_screenshot(%Screenshot{id: id} = screenshot, opts \\ %{}) do
    images_path = Map.get(opts, :images_path, Paths.default_images_path())
    current_path = image_path(screenshot, images_path)
    id_path = image_path(id, images_path)

    with :ok <- Support.ensure_deleted(current_path),
         :ok <- Support.ensure_deleted(id_path) do
      {:ok, %{id: id_path, image: current_path}}
    end
  end

  def approve_screenshot(%Screenshot{id: id}, opts \\ %{}) do
    repo_path = Map.get(opts, :image_repo_path, Paths.image_repo_path())
    provisional_path = LocalFile.provisional_path(id, repo_path)
    images_path = Map.get(opts, :images_path, Paths.default_images_path())
    image_path = image_path(id, images_path)

    with :ok <- File.cp(provisional_path, image_path) do
      {:ok, %{image: image_path}}
    end
  end

  def reject_screenshot(%Screenshot{id: id}, opts \\ %{}) do
    images_path = Map.get(opts, :images_path, Paths.default_images_path())
    {:ok, %{image: image_path(id, images_path)}}
  end

  defp image_path(%Screenshot{id: id} = screenshot, path) do
    filename = Map.get(screenshot, :name) || id
    Path.join(path, filename <> ".png")
  end

  defp image_path(id, path),
    do: Path.join(path, id <> ".png")
end
