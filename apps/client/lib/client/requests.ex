defmodule Client.Requests do
  @moduledoc "A wrapper for HTTPoison that assists with consistently executing http requests back to the server"
  def build_get(base_url) do
    fn(inner_access_token, inner_params) ->
      params_clause = build_params(inner_params)
      HTTPoison.get(base_url <> "?#{params_clause}", [{"authorization", inner_access_token}])
    end
  end

  def build_get_one(base_url, id) do
    fn(inner_access_token, inner_params) ->
      params_clause =  build_params(inner_params)
      HTTPoison.get(base_url <> "/#{id}" <> "?#{params_clause}", [{"authorization", inner_access_token}])
    end
  end

  def build_delete(base_url, id) do
    fn(inner_access_token, _inner_params) ->
      HTTPoison.delete(base_url <> "/#{id}", [{"authorization", inner_access_token}])
    end
  end

  def build_create(base_url) do
    fn(inner_access_token, inner_params) ->
      params_clause = build_params(inner_params)
      HTTPoison.post(base_url <> "?#{params_clause}", "", [{"authorization", inner_access_token}])
    end
  end

  def build_update(base_url, id) do
    fn(inner_access_token, inner_params) ->
      params_clause = build_params(inner_params)
      url = base_url <> "/#{id}" <> "?#{params_clause}"
      HTTPoison.patch(url, "", [{"authorization", inner_access_token}])
    end
  end

  def build_params(params) do
    case params do
      nil -> ""
      params -> Plug.Conn.Query.encode(params)
    end
  end

  def send(request_fun, access_token, params) do
    request_fun.(access_token, params)
    |> handle_server_response()
  end

  def handle_server_response({:ok, %{status_code: status_code, body: body}})
  when status_code in [200, 201, 204], do: Jason.decode(body)
  def handle_server_response({:ok, %{status_code: 422, body: body}}),
    do: {:error, Jason.decode!(body)}
  def handle_server_response({:ok, %{status_code: 401, body: _body}}),
    do: {:error, "Authentication failed, please try again."}
  def handle_server_response({:error, %{status_code: 500, body: _body}}),
    do: {:error, "Server error"}
  def handle_server_response({:error, %HTTPoison.Error{id: nil, reason: :timeout}}),
    do: {:error, "Timeout"}
end
