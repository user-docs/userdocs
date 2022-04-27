defmodule Client.Remote.PresignedUrls do

  def put_object(url, binary, opts \\ []) do
    case HTTPoison.put(url, binary, opts) do
      {:ok, %{status_code: 200, body: body}} -> {:ok, body}
      {:ok, %{status_code: _, body: body}} -> {:error, body}
    end
  end

  def get_object(url, opts \\ []) do
    case HTTPoison.get(url, opts) do
      {:ok, %{status_code: 200, body: body}} -> {:ok, body}
      {:ok, %{status_code: 404, body: _body}} -> {:error, "File not found"}
      {:ok, %{status_code: _, body: body}} -> {:error, body}
    end
  end

  def delete_object(url, opts \\ []) do
    case HTTPoison.delete(url, opts) do
      {:ok, %{status_code: 204}} -> {:ok, ""}
    end
  end
end
